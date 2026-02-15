from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import logging
from app.routers import track, admin
from app.middleware.security import add_security_headers, get_allowed_origins
from app.middleware.abuse_detection import abuse_detection_middleware
from app.core.config import settings

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - [%(filename)s:%(lineno)d] - %(message)s"
)

logger = logging.getLogger(__name__)

app = FastAPI(
    title="MMKK AI Visitor Intelligence API",
    description="Enterprise-grade visitor tracking and intelligence system",
    version="1.0.0"
)

# Rate limiting
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS with restricted origins
allowed_origins = get_allowed_origins()
logger.info(f"CORS allowed origins: {allowed_origins}")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "X-Screen-Resolution"],
    expose_headers=["X-Request-ID"],
)


@app.middleware("http")
async def security_headers_middleware(request: Request, call_next):
    """Add security headers to all responses."""
    response = await call_next(request)
    return add_security_headers(response)


@app.middleware("http")
async def abuse_detection_middleware_wrapper(request: Request, call_next):
    """Wrapper for abuse detection middleware."""
    return await abuse_detection_middleware(request, call_next)


@app.middleware("http")
async def request_logging_middleware(request: Request, call_next):
    """Log all requests for security monitoring."""
    import uuid
    import time
    request_id = str(uuid.uuid4())[:8]
    
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    
    logger.info(
        f"Request - ID: {request_id}, "
        f"Method: {request.method}, "
        f"Path: {request.url.path}, "
        f"Status: {response.status_code}, "
        f"Time: {process_time:.3f}s, "
        f"IP: {request.client.host if request.client else 'unknown'}"
    )
    
    response.headers["X-Request-ID"] = request_id
    return response


app.include_router(track.router)
app.include_router(admin.router)


@app.get("/")
async def root():
    return {"message": "MMKK AI Visitor Intelligence API", "status": "operational"}


@app.get("/health")
async def health():
    return {"status": "healthy"}
