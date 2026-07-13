"""
Abuse Detection Middleware - Detects and blocks abusive traffic patterns.
"""
from fastapi import Request, HTTPException, status
from collections import defaultdict
import time
import logging
from app.core.config import settings
from app.services.user_agent_parser import is_bot, is_suspicious_user_agent

logger = logging.getLogger(__name__)

# In-memory store for tracking requests per IP
# In production, consider using Redis for distributed systems
_ip_request_times: defaultdict[str, list] = defaultdict(list)
_abuse_blocklist: set[str] = set()


def get_client_ip(request: Request) -> str:
    """Extract client IP from request."""
    forwarded_for = request.headers.get("x-forwarded-for")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()
    
    real_ip = request.headers.get("x-real-ip")
    if real_ip:
        return real_ip
    
    return request.client.host if request.client else "unknown"


def is_abusive_ip(ip_address: str) -> bool:
    """
    Check if IP address is making too many requests.
    Threshold: settings.abuse_threshold_per_minute requests per minute.
    """
    if ip_address in _abuse_blocklist:
        return True
    
    current_time = time.time()
    one_minute_ago = current_time - 60
    
    # Clean old entries
    _ip_request_times[ip_address] = [
        req_time for req_time in _ip_request_times[ip_address]
        if req_time > one_minute_ago
    ]
    
    # Add current request
    _ip_request_times[ip_address].append(current_time)
    
    # Check threshold
    request_count = len(_ip_request_times[ip_address])
    
    if request_count > settings.abuse_threshold_per_minute:
        _abuse_blocklist.add(ip_address)
        logger.warning(
            f"Abuse detected: IP {ip_address} made {request_count} requests in 1 minute. "
            f"Threshold: {settings.abuse_threshold_per_minute}. Blocking."
        )
        return True
    
    return False


def is_suspicious_request(request: Request) -> bool:
    """
    Detect suspicious request patterns.
    Returns True if request appears suspicious.
    """
    user_agent = request.headers.get("user-agent", "")
    
    # Check for bot
    if is_bot(user_agent):
        return True
    
    # Check for suspicious user agent patterns
    if is_suspicious_user_agent(user_agent):
        return True
    
    # Check for missing or suspicious user agent
    if not user_agent or len(user_agent) < 10:
        return True
    
    # Check for suspicious paths
    suspicious_paths = [
        "/admin",
        "/wp-admin",
        "/phpmyadmin",
        "/.env",
        "/config",
        "/api/v1",
    ]
    
    path_lower = request.url.path.lower()
    if any(susp_path in path_lower for susp_path in suspicious_paths):
        if not path_lower.startswith("/api/admin"):  # Allow legitimate admin API
            return True
    
    return False


async def abuse_detection_middleware(request: Request, call_next):
    """
    Middleware to detect and block abusive traffic.
    """
    ip_address = get_client_ip(request)
    
    # Skip abuse detection for health checks and admin routes (they have their own auth)
    if request.url.path in ["/health", "/"] or request.url.path.startswith("/api/admin"):
        response = await call_next(request)
        return response
    
    # Check for abusive IP
    if is_abusive_ip(ip_address):
        logger.error(f"Blocked abusive request from IP: {ip_address}, Path: {request.url.path}")
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Too many requests. Please try again later."
        )
    
    # Check for suspicious patterns
    if is_suspicious_request(request):
        logger.warning(
            f"Suspicious request detected - IP: {ip_address}, "
            f"Path: {request.url.path}, "
            f"User-Agent: {request.headers.get('user-agent', 'None')}"
        )
        # Log but don't block - allow through but monitor
    
    try:
        response = await call_next(request)
        
        # Log failed requests
        if response.status_code >= 400:
            logger.warning(
                f"Failed request - IP: {ip_address}, "
                f"Path: {request.url.path}, "
                f"Status: {response.status_code}, "
                f"Method: {request.method}"
            )
        
        return response
    
    except HTTPException as e:
        # Log HTTP exceptions
        logger.warning(
            f"HTTP exception - IP: {ip_address}, "
            f"Path: {request.url.path}, "
            f"Status: {e.status_code}, "
            f"Detail: {e.detail}"
        )
        raise
    except Exception as e:
        # Log unexpected errors
        logger.error(
            f"Unexpected error - IP: {ip_address}, "
            f"Path: {request.url.path}, "
            f"Error: {str(e)}",
            exc_info=True
        )
        raise

