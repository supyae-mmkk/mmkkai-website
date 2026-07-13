from fastapi import APIRouter, Request, HTTPException, status
from app.models.schemas import TrackRequest
from app.services.tracking_service import track_page_view
from app.middleware.rate_limit import limiter, get_rate_limit
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/track", tags=["tracking"])


@router.post("")
@limiter.limit(get_rate_limit())
async def track(request: Request, track_data: TrackRequest):
    """
    Track page view and visitor activity.
    
    Accepts:
    - page_url: URL of the page viewed
    - event_type: Type of event (e.g., "page_view", "click", "scroll")
    - time_spent: Time spent on page in seconds
    - scroll_depth: Scroll depth percentage (0-100)
    - click_target: Target element of click event
    - utm_source, utm_medium, utm_campaign: UTM parameters
    """
    try:
        request_headers = dict(request.headers)
        screen_resolution = request_headers.get("x-screen-resolution")
        
        result = await track_page_view(
            track_data=track_data,
            request_headers=request_headers,
            screen_resolution=screen_resolution
        )
        
        if result.get("status") == "error":
            logger.warning(f"Tracking error: {result.get('message')}")
            return {"status": "error", "message": result.get("message")}
        
        return {"status": "success", "data": result}
    
    except RateLimitExceeded:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in track endpoint: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        )

