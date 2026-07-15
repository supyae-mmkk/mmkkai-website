from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class TrackRequest(BaseModel):
    page_url: str
    event_type: str
    time_spent: int
    scroll_depth: Optional[int] = 0
    click_target: Optional[str] = None
    utm_source: Optional[str] = None
    utm_medium: Optional[str] = None
    utm_campaign: Optional[str] = None


class VisitorResponse(BaseModel):
    id: str
    company_name: Optional[str]
    country: Optional[str]
    device_type: Optional[str]
    industry: Optional[str]
    visit_count: int
    total_time_spent: int
    pages_per_session: float
    engagement_score: int
    intent_score: int
    heat_level: str
    last_visit_date: datetime

    class Config:
        from_attributes = True


class GeoData(BaseModel):
    country: Optional[str] = None
    region: Optional[str] = None
    city: Optional[str] = None
    timezone: Optional[str] = None


class DeviceInfo(BaseModel):
    device_type: Optional[str] = None
    browser: Optional[str] = None
    os: Optional[str] = None
