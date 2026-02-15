from fastapi import APIRouter, Request, HTTPException, status, Query
from app.core.database import get_db
from app.core.config import settings
from app.models.schemas import VisitorResponse
from typing import List, Optional
from datetime import datetime, timedelta
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/admin", tags=["admin"])


@router.get("/visitors", response_model=List[VisitorResponse])
async def get_visitors(
    request: Request,
    sort_by: Optional[str] = Query("intent_score", description="Sort by: intent_score, visit_count, or last_visit_date"),
    limit: Optional[int] = Query(100, ge=1, le=1000),
    country: Optional[str] = Query(None, description="Filter by country"),
    heat_level: Optional[str] = Query(None, description="Filter by heat level"),
    industry: Optional[str] = Query(None, description="Filter by industry"),
    date_from: Optional[str] = Query(None, description="Filter from date (YYYY-MM-DD)"),
    date_to: Optional[str] = Query(None, description="Filter to date (YYYY-MM-DD)")
):
    """
    Get visitor list for admin dashboard with filters.
    
    Requires Bearer token authentication.
    Returns visitors with filtering and sorting options.
    """
    try:
        auth_header = request.headers.get("Authorization")
        if not auth_header:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Missing Authorization header"
            )
        
        try:
            scheme, token = auth_header.split(" ")
            if scheme.lower() != "bearer" or token != settings.admin_api_token:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid API token"
                )
        except ValueError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid Authorization header format"
            )
        
        db = get_db()
        
        query = db.table("visitors").select(
            "id,company_name,country,device_type,industry,visit_count,"
            "total_time_spent,pages_per_session,engagement_score,"
            "intent_score,heat_level,last_visit_date"
        )
        
        if country:
            query = query.eq("country", country)
        
        if heat_level:
            query = query.eq("heat_level", heat_level)
        
        if industry:
            query = query.eq("industry", industry)
        
        if date_from:
            try:
                date_from_obj = datetime.fromisoformat(date_from)
                query = query.gte("last_visit_date", date_from_obj.isoformat())
            except ValueError:
                pass
        
        if date_to:
            try:
                date_to_obj = datetime.fromisoformat(date_to)
                query = query.lte("last_visit_date", date_to_obj.isoformat())
            except ValueError:
                pass
        
        if sort_by == "visit_count":
            query = query.order("visit_count", desc=True)
        elif sort_by == "last_visit_date":
            query = query.order("last_visit_date", desc=True)
        else:
            query = query.order("intent_score", desc=True)
        
        query = query.limit(limit)
        
        result = query.execute()
        
        visitors = []
        for visitor in result.data:
            visitors.append(VisitorResponse(
                id=visitor["id"],
                company_name=visitor.get("company_name"),
                country=visitor.get("country"),
                device_type=visitor.get("device_type"),
                industry=visitor.get("industry"),
                visit_count=visitor.get("visit_count", 0),
                total_time_spent=visitor.get("total_time_spent", 0),
                pages_per_session=float(visitor.get("pages_per_session", 0)),
                engagement_score=visitor.get("engagement_score", 0),
                intent_score=visitor.get("intent_score", 0),
                heat_level=visitor.get("heat_level", "Cold"),
                last_visit_date=visitor.get("last_visit_date") or visitor.get("last_seen")
            ))
        
        return visitors
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in get_visitors: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        )


@router.get("/filters")
async def get_filter_options(request: Request):
    """Get available filter options for the dashboard."""
    try:
        auth_header = request.headers.get("Authorization")
        if not auth_header:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Missing Authorization header"
            )
        
        try:
            scheme, token = auth_header.split(" ")
            if scheme.lower() != "bearer" or token != settings.admin_api_token:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid API token"
                )
        except ValueError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid Authorization header format"
            )
        
        db = get_db()
        
        countries_result = db.table("visitors").select("country").not_.is_("country", "null").execute()
        countries = sorted(list(set(v.get("country") for v in countries_result.data if v.get("country"))))
        
        industries_result = db.table("visitors").select("industry").not_.is_("industry", "null").execute()
        industries = sorted(list(set(v.get("industry") for v in industries_result.data if v.get("industry"))))
        
        heat_levels = ["Cold", "Warm", "Hot", "Enterprise Ready"]
        
        return {
            "countries": countries,
            "industries": industries,
            "heat_levels": heat_levels
        }
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error in get_filter_options: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error"
        )
