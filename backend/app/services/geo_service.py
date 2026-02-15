import httpx
import logging
from typing import Optional
from app.models.schemas import GeoData
from app.core.config import settings

logger = logging.getLogger(__name__)


async def get_geo_data(ip_address: str) -> GeoData:
    """
    Fetch geo data from ipinfo.io API.
    Falls back to minimal data if API fails.
    """
    try:
        url = f"https://ipinfo.io/{ip_address}/json"
        headers = {}
        
        if settings.ipinfo_token:
            headers["Authorization"] = f"Bearer {settings.ipinfo_token}"
        
        async with httpx.AsyncClient(timeout=5.0) as client:
            response = await client.get(url, headers=headers)
            
            if response.status_code == 200:
                data = response.json()
                return GeoData(
                    country=data.get("country"),
                    region=data.get("region"),
                    city=data.get("city"),
                    timezone=data.get("timezone")
                )
    except Exception as e:
        logger.warning(f"Failed to fetch geo data for IP {ip_address}: {e}")
    
    return GeoData()

