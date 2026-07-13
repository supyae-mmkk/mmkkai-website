from datetime import datetime, timedelta
from typing import Optional, Dict, Any, Tuple
import logging
from app.core.database import get_db
from app.services.intent_calculator import calculate_intent, calculate_engagement, calculate_heat_level
from app.services.geo_service import get_geo_data
from app.services.user_agent_parser import parse_user_agent, is_bot
from app.services.ip_security import get_stored_ip, hash_ip
from app.models.schemas import GeoData, DeviceInfo, TrackRequest

logger = logging.getLogger(__name__)


def get_client_ip(request_headers: Dict[str, str]) -> str:
    """Extract client IP from request headers."""
    forwarded_for = request_headers.get("x-forwarded-for")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()
    
    real_ip = request_headers.get("x-real-ip")
    if real_ip:
        return real_ip
    
    return request_headers.get("remote-addr", "unknown")


def get_referrer(request_headers: Dict[str, str]) -> Optional[str]:
    """Extract referrer from request headers."""
    return request_headers.get("referer") or request_headers.get("referrer")


async def find_or_create_visitor(
    ip_address: str,
    geo_data: GeoData,
    device_info: DeviceInfo,
    referrer: Optional[str],
    utm_source: Optional[str],
    utm_medium: Optional[str],
    utm_campaign: Optional[str],
    screen_resolution: Optional[str]
) -> Tuple[Dict[str, Any], bool]:
    """Find existing visitor by IP or create new one. Returns (visitor, is_new)."""
    db = get_db()
    
    # Hash IP address for storage (privacy protection)
    stored_ip = get_stored_ip(ip_address)
    
    try:
        result = db.table("visitors").select("*").eq("ip_address", stored_ip).limit(1).execute()
        
        now = datetime.utcnow().isoformat()
        
        if result.data and len(result.data) > 0:
            visitor = result.data[0]
            is_new = False
            
            update_data = {
                "last_visit_date": now,
                "visit_count": visitor.get("visit_count", 1) + 1,
                "country": geo_data.country or visitor.get("country"),
                "region": geo_data.region or visitor.get("region"),
                "city": geo_data.city or visitor.get("city"),
                "timezone": geo_data.timezone or visitor.get("timezone"),
                "device_type": device_info.device_type or visitor.get("device_type"),
                "browser": device_info.browser or visitor.get("browser"),
                "os": device_info.os or visitor.get("os"),
                "screen_resolution": screen_resolution or visitor.get("screen_resolution"),
                "referrer": referrer or visitor.get("referrer"),
                "utm_source": utm_source or visitor.get("utm_source"),
                "utm_medium": utm_medium or visitor.get("utm_medium"),
                "utm_campaign": utm_campaign or visitor.get("utm_campaign"),
                "updated_at": now
            }
            
            if not visitor.get("primary_referral_source") and referrer:
                update_data["primary_referral_source"] = referrer
            
            updated = db.table("visitors").update(update_data).eq("id", visitor["id"]).execute()
            return updated.data[0], is_new
        else:
            is_new = True
            new_visitor = {
                "ip_address": stored_ip,
                "country": geo_data.country,
                "region": geo_data.region,
                "city": geo_data.city,
                "timezone": geo_data.timezone,
                "device_type": device_info.device_type,
                "browser": device_info.browser,
                "os": device_info.os,
                "screen_resolution": screen_resolution,
                "referrer": referrer,
                "utm_source": utm_source,
                "utm_medium": utm_medium,
                "utm_campaign": utm_campaign,
                "first_visit_date": now,
                "last_visit_date": now,
                "visit_count": 1,
                "total_time_spent": 0,
                "avg_session_duration": 0,
                "pages_per_session": 0,
                "engagement_score": 0,
                "intent_score": 0,
                "heat_level": "Cold",
                "primary_referral_source": referrer,
                "created_at": now,
                "updated_at": now
            }
            
            result = db.table("visitors").insert(new_visitor).execute()
            return result.data[0], is_new
    except Exception as e:
        logger.error(f"Error in find_or_create_visitor: {e}")
        raise


def get_or_create_session(visitor_id: str) -> Tuple[Dict[str, Any], bool]:
    """Get active session or create new one. Returns (session, is_new_session)."""
    db = get_db()
    
    try:
        now = datetime.utcnow()
        cutoff_time = (now - timedelta(minutes=30)).isoformat()
        
        result = db.table("sessions").select("*").eq("visitor_id", visitor_id).is_("session_end", None).gte("session_start", cutoff_time).limit(1).execute()
        
        if result.data and len(result.data) > 0:
            return result.data[0], False
        
        new_session = {
            "visitor_id": visitor_id,
            "session_start": now.isoformat(),
            "pages_visited_count": 0,
            "session_duration": 0
        }
        
        result = db.table("sessions").insert(new_session).execute()
        return result.data[0], True
    except Exception as e:
        logger.error(f"Error in get_or_create_session: {e}")
        raise


def create_page_event(
    session_id: str,
    page_url: str,
    event_type: str,
    time_spent: int,
    scroll_depth: int = 0,
    click_target: Optional[str] = None
) -> Dict[str, Any]:
    """Create a page event record."""
    db = get_db()
    
    try:
        event = {
            "session_id": session_id,
            "page_url": page_url,
            "event_type": event_type,
            "scroll_depth": scroll_depth,
            "click_target": click_target,
            "time_spent": time_spent,
            "timestamp": datetime.utcnow().isoformat(),
            "created_at": datetime.utcnow().isoformat()
        }
        
        result = db.table("page_events").insert(event).execute()
        return result.data[0]
    except Exception as e:
        logger.error(f"Error in create_page_event: {e}")
        raise


def update_session_stats(session_id: str, time_spent: int):
    """Update session statistics."""
    db = get_db()
    
    try:
        session_result = db.table("sessions").select("*").eq("id", session_id).execute()
        if not session_result.data:
            return
        
        session = session_result.data[0]
        current_duration = session.get("session_duration", 0)
        new_duration = current_duration + time_spent
        
        events_result = db.table("page_events").select("id", count="exact").eq("session_id", session_id).execute()
        pages_count = events_result.count if hasattr(events_result, 'count') else 0
        
        db.table("sessions").update({
            "session_duration": new_duration,
            "pages_visited_count": pages_count
        }).eq("id", session_id).execute()
    except Exception as e:
        logger.error(f"Error in update_session_stats: {e}")


def update_visitor_metrics(
    visitor_id: str,
    intent_delta: int,
    engagement_delta: int,
    time_spent: int,
    is_returning: bool,
    sessions_in_7_days: int
):
    """Update visitor metrics including scores and statistics."""
    db = get_db()
    
    try:
        visitor_result = db.table("visitors").select("*").eq("id", visitor_id).execute()
        
        if not visitor_result.data:
            return
        
        visitor = visitor_result.data[0]
        
        current_intent = visitor.get("intent_score", 0)
        new_intent = current_intent + intent_delta
        
        current_engagement = visitor.get("engagement_score", 0)
        new_engagement = current_engagement + engagement_delta
        
        current_total_time = visitor.get("total_time_spent", 0)
        new_total_time = current_total_time + time_spent
        
        visit_count = visitor.get("visit_count", 1)
        
        sessions_result = db.table("sessions").select("session_duration").eq("visitor_id", visitor_id).execute()
        total_duration = sum(s.get("session_duration", 0) for s in sessions_result.data) if sessions_result.data else 0
        avg_duration = total_duration // visit_count if visit_count > 0 else 0
        
        sessions_for_visitor = db.table("sessions").select("id").eq("visitor_id", visitor_id).execute()
        session_ids = [s["id"] for s in sessions_for_visitor.data] if sessions_for_visitor.data else []
        
        page_counts = {}
        if session_ids:
            for session_id in session_ids:
                try:
                    pages_result = db.table("page_events").select("page_url").eq("session_id", session_id).execute()
                    if pages_result.data:
                        for event in pages_result.data:
                            page_url = event.get("page_url", "")
                            if page_url:
                                page_counts[page_url] = page_counts.get(page_url, 0) + 1
                except Exception as e:
                    logger.warning(f"Error fetching page events for session {session_id}: {e}")
        
        most_visited = max(page_counts.items(), key=lambda x: x[1])[0] if page_counts else None
        
        total_pages = sum(page_counts.values())
        pages_per_session = total_pages / visit_count if visit_count > 0 else 0
        
        new_heat_level = calculate_heat_level(new_intent)
        
        update_data = {
            "intent_score": new_intent,
            "engagement_score": new_engagement,
            "heat_level": new_heat_level,
            "total_time_spent": new_total_time,
            "avg_session_duration": avg_duration,
            "pages_per_session": round(pages_per_session, 2),
            "most_visited_page": most_visited,
            "updated_at": datetime.utcnow().isoformat()
        }
        
        db.table("visitors").update(update_data).eq("id", visitor_id).execute()
    except Exception as e:
        logger.error(f"Error in update_visitor_metrics: {e}")


def get_sessions_in_7_days(visitor_id: str) -> int:
    """Get count of sessions in the last 7 days."""
    db = get_db()
    
    try:
        cutoff = (datetime.utcnow() - timedelta(days=7)).isoformat()
        result = db.table("sessions").select("id", count="exact").eq("visitor_id", visitor_id).gte("session_start", cutoff).execute()
        return result.count if hasattr(result, 'count') else 0
    except Exception as e:
        logger.error(f"Error in get_sessions_in_7_days: {e}")
        return 0


async def track_page_view(
    track_data: TrackRequest,
    request_headers: Dict[str, str],
    screen_resolution: Optional[str] = None
) -> Dict[str, Any]:
    """Main tracking function that orchestrates the entire flow."""
    try:
        user_agent = request_headers.get("user-agent", "")
        
        if is_bot(user_agent):
            logger.info(f"Bot detected: {user_agent}")
            return {"status": "ignored", "message": "Bot detected"}
        
        ip_address = get_client_ip(request_headers)
        
        if ip_address == "unknown":
            logger.warning("Could not determine IP address")
            return {"status": "error", "message": "IP address not found"}
        
        device_info = parse_user_agent(user_agent)
        referrer = get_referrer(request_headers)
        geo_data = await get_geo_data(ip_address)
        
        visitor, is_new_visitor = await find_or_create_visitor(
            ip_address=ip_address,
            geo_data=geo_data,
            device_info=device_info,
            referrer=referrer,
            utm_source=track_data.utm_source,
            utm_medium=track_data.utm_medium,
            utm_campaign=track_data.utm_campaign,
            screen_resolution=screen_resolution
        )
        
        session, is_new_session = get_or_create_session(visitor["id"])
        
        create_page_event(
            session_id=session["id"],
            page_url=track_data.page_url,
            event_type=track_data.event_type,
            time_spent=track_data.time_spent,
            scroll_depth=track_data.scroll_depth or 0,
            click_target=track_data.click_target
        )
        
        update_session_stats(session["id"], track_data.time_spent)
        
        is_returning = not is_new_visitor
        sessions_in_7_days = get_sessions_in_7_days(visitor["id"])
        
        intent_delta = calculate_intent(track_data.page_url)
        engagement_delta = calculate_engagement(
            scroll_depth=track_data.scroll_depth or 0,
            click_target=track_data.click_target,
            page_url=track_data.page_url,
            is_returning=is_returning,
            sessions_in_7_days=sessions_in_7_days
        )
        
        update_visitor_metrics(
            visitor_id=visitor["id"],
            intent_delta=intent_delta,
            engagement_delta=engagement_delta,
            time_spent=track_data.time_spent,
            is_returning=is_returning,
            sessions_in_7_days=sessions_in_7_days
        )
        
        return {
            "status": "success",
            "visitor_id": visitor["id"],
            "session_id": session["id"],
            "intent_delta": intent_delta,
            "engagement_delta": engagement_delta
        }
    except Exception as e:
        logger.error(f"Error in track_page_view: {e}")
        return {"status": "error", "message": str(e)}
