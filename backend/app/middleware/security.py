from fastapi import Request, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.responses import Response
from app.core.config import settings
import logging
from typing import List
import time

logger = logging.getLogger(__name__)

security = HTTPBearer()


def verify_admin_token(credentials: HTTPAuthorizationCredentials) -> bool:
    """Verify admin API token."""
    token = credentials.credentials
    return token == settings.admin_api_token


async def admin_auth_middleware(request: Request, call_next):
    """Middleware to protect admin routes."""
    if request.url.path.startswith("/api/admin"):
        auth_header = request.headers.get("Authorization")
        
        if not auth_header:
            logger.warning(f"Unauthorized admin access attempt from {request.client.host}")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Missing Authorization header"
            )
        
        try:
            scheme, token = auth_header.split(" ")
            if scheme.lower() != "bearer" or token != settings.admin_api_token:
                logger.warning(f"Invalid admin token attempt from {request.client.host}")
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid API token"
                )
        except ValueError:
            logger.warning(f"Malformed admin auth header from {request.client.host}")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid Authorization header format"
            )
    
    response = await call_next(request)
    return response


def add_security_headers(response: Response) -> Response:
    """
    Add comprehensive security headers to response.
    Helmet-like security headers implementation.
    """
    # X-Content-Type-Options: Prevent MIME type sniffing
    response.headers["X-Content-Type-Options"] = "nosniff"
    
    # X-Frame-Options: Prevent clickjacking
    response.headers["X-Frame-Options"] = "DENY"
    
    # X-XSS-Protection: Enable XSS filter
    response.headers["X-XSS-Protection"] = "1; mode=block"
    
    # Strict-Transport-Security: Force HTTPS
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains; preload"
    
    # Referrer-Policy: Control referrer information
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    
    # Content-Security-Policy: Prevent XSS and injection attacks
    csp_policy = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; "
        "style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data: https:; "
        "font-src 'self' data:; "
        "connect-src 'self' https://ipinfo.io; "
        "frame-ancestors 'none'; "
        "base-uri 'self'; "
        "form-action 'self'"
    )
    response.headers["Content-Security-Policy"] = csp_policy
    
    # Permissions-Policy: Restrict browser features
    response.headers["Permissions-Policy"] = (
        "geolocation=(), "
        "microphone=(), "
        "camera=(), "
        "payment=(), "
        "usb=()"
    )
    
    # X-Permitted-Cross-Domain-Policies: Restrict Flash/PDF
    response.headers["X-Permitted-Cross-Domain-Policies"] = "none"
    
    return response


def get_allowed_origins() -> List[str]:
    """Get list of allowed CORS origins."""
    if settings.allowed_origins:
        return settings.allowed_origins
    
    # Default to common production domains if not set
    default_origins = [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://localhost:3000",
    ]
    
    return default_origins
