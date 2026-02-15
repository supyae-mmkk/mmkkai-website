import re
import logging
from typing import Dict, Optional
from app.models.schemas import DeviceInfo

logger = logging.getLogger(__name__)

# Enhanced bot patterns
BOT_PATTERNS = [
    # Common bots
    "bot", "crawler", "spider", "scraper", "crawling",
    # Tools
    "curl", "wget", "python-requests", "go-http-client", 
    "java/", "apache-httpclient", "okhttp", "scrapy",
    # Search engine bots
    "googlebot", "bingbot", "slurp", "duckduckbot", 
    "baiduspider", "yandexbot", "sogou", "exabot",
    # Social media bots
    "facebookexternalhit", "twitterbot", "linkedinbot",
    "whatsapp", "telegrambot", "slackbot",
    # Monitoring and testing
    "pingdom", "uptimerobot", "monitor", "check",
    # Security scanners
    "sqlmap", "nikto", "nmap", "masscan", "zap", "burp",
    # Headless browsers
    "headless", "phantom", "selenium", "webdriver",
    # Other
    "feed", "rss", "parser", "indexer"
]

SUSPICIOUS_PATTERNS = [
    "sqlmap", "nikto", "nmap", "masscan", "zap", "burp",
    "exploit", "injection", "xss", "sqli"
]


def parse_user_agent(user_agent: str) -> DeviceInfo:
    """
    Parse user agent string to extract device type, browser, and OS.
    Basic parser - can be enhanced with user-agents library if needed.
    """
    if not user_agent:
        return DeviceInfo()
    
    ua_lower = user_agent.lower()
    
    # Detect device type
    device_type = "Desktop"
    if "mobile" in ua_lower or "android" in ua_lower:
        device_type = "Mobile"
    elif "tablet" in ua_lower or "ipad" in ua_lower:
        device_type = "Tablet"
    
    # Detect browser
    browser = "Unknown"
    if "chrome" in ua_lower and "edg" not in ua_lower and "headless" not in ua_lower:
        browser = "Chrome"
    elif "firefox" in ua_lower:
        browser = "Firefox"
    elif "safari" in ua_lower and "chrome" not in ua_lower:
        browser = "Safari"
    elif "edg" in ua_lower or "edge" in ua_lower:
        browser = "Edge"
    elif "opera" in ua_lower or "opr" in ua_lower:
        browser = "Opera"
    elif "brave" in ua_lower:
        browser = "Brave"
    
    # Detect OS
    os_name = "Unknown"
    if "windows" in ua_lower:
        os_name = "Windows"
    elif "mac" in ua_lower or "darwin" in ua_lower:
        os_name = "macOS"
    elif "linux" in ua_lower:
        os_name = "Linux"
    elif "android" in ua_lower:
        os_name = "Android"
    elif "ios" in ua_lower or "iphone" in ua_lower or "ipad" in ua_lower:
        os_name = "iOS"
    
    return DeviceInfo(
        device_type=device_type,
        browser=browser,
        os=os_name
    )


def is_bot(user_agent: str) -> bool:
    """
    Enhanced bot detection based on user agent string.
    Returns True if user agent appears to be a bot.
    """
    if not user_agent:
        return True  # Missing UA is suspicious
    
    ua_lower = user_agent.lower()
    
    # Check against bot patterns
    for pattern in BOT_PATTERNS:
        if pattern in ua_lower:
            return True
    
    # Check for suspicious patterns
    for pattern in SUSPICIOUS_PATTERNS:
        if pattern in ua_lower:
            logger.warning(f"Suspicious user agent detected: {user_agent}")
            return True
    
    # Check for very short or very long user agents (often bots)
    if len(user_agent) < 10 or len(user_agent) > 500:
        return True
    
    # Check for common bot indicators
    if any(indicator in ua_lower for indicator in ["bot/", "crawler/", "spider/"]):
        return True
    
    return False


def is_suspicious_user_agent(user_agent: str) -> bool:
    """
    Detect suspicious user agent patterns that might indicate malicious activity.
    """
    if not user_agent:
        return True
    
    ua_lower = user_agent.lower()
    
    # Check for security scanner patterns
    scanner_patterns = [
        "sqlmap", "nikto", "nmap", "masscan", 
        "zap", "burp", "acunetix", "nessus"
    ]
    
    if any(pattern in ua_lower for pattern in scanner_patterns):
        return True
    
    # Check for exploit patterns
    exploit_patterns = [
        "exploit", "injection", "xss", "sqli", 
        "payload", "shell", "cmd"
    ]
    
    if any(pattern in ua_lower for pattern in exploit_patterns):
        return True
    
    return False
