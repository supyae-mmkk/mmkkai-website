import logging
from typing import Optional
from datetime import datetime, timedelta

logger = logging.getLogger(__name__)


def calculate_intent(page_url: str) -> int:
    """
    Calculate intent score based on page URL.
    
    Rules:
    - pricing page = +50
    - contact page = +60
    - products page = +25
    - homepage = +5
    """
    page_lower = page_url.lower()
    
    if "pricing" in page_lower:
        return 50
    elif "contact" in page_lower:
        return 60
    elif "product" in page_lower:
        return 25
    elif page_lower.endswith("/") or "home" in page_lower:
        return 5
    else:
        return 5


def calculate_engagement(
    scroll_depth: int,
    click_target: Optional[str],
    page_url: str,
    is_returning: bool,
    sessions_in_7_days: int
) -> int:
    """
    Calculate engagement score based on user behavior.
    
    Rules:
    - +10 if scroll_depth > 50%
    - +20 if scroll_depth > 75%
    - +30 if click on CTA
    - +40 if visit contact page
    - +20 if visit products page
    - +5 homepage
    - +15 returning visitor
    - +25 multiple sessions in 7 days
    """
    score = 0
    
    if scroll_depth > 75:
        score += 20
    elif scroll_depth > 50:
        score += 10
    
    if click_target:
        click_lower = click_target.lower()
        if any(cta in click_lower for cta in ["button", "cta", "submit", "contact", "signup", "trial", "demo"]):
            score += 30
    
    page_lower = page_url.lower()
    if "contact" in page_lower:
        score += 40
    elif "product" in page_lower:
        score += 20
    elif page_lower.endswith("/") or "home" in page_lower:
        score += 5
    
    if is_returning:
        score += 15
    
    if sessions_in_7_days > 1:
        score += 25
    
    return score


def calculate_heat_level(intent_score: int) -> str:
    """
    Calculate heat level based on intent score.
    
    Rules:
    - 0-30 = Cold
    - 31-70 = Warm
    - 71-150 = Hot
    - 150+ = Enterprise Ready
    """
    if intent_score <= 30:
        return "Cold"
    elif intent_score <= 70:
        return "Warm"
    elif intent_score <= 150:
        return "Hot"
    else:
        return "Enterprise Ready"
