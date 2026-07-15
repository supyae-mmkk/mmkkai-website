"""
Seed script to insert realistic test data for Visitor Intelligence system.
Run with: python -m scripts.seed_data
"""

import sys
import os
from datetime import datetime, timedelta
import random

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from app.core.database import get_db
from app.core.config import settings

# Sample data
COMPANIES = [
    {"name": "TechFinance Corp", "country": "US", "industry": "Finance", "ip": "192.168.1.100"},
    {"name": "Singapore Tech Solutions", "country": "SG", "industry": "Technology", "ip": "203.0.113.50"},
    {"name": "Bangkok Retail Group", "country": "TH", "industry": "Retail", "ip": "198.51.100.25"},
    {"name": "London Analytics Ltd", "country": "GB", "industry": "Analytics", "ip": "203.0.113.75"},
    {"name": "Tokyo Manufacturing Co", "country": "JP", "industry": "Manufacturing", "ip": "198.51.100.50"},
]

DEVICES = ["Desktop", "Mobile", "Tablet"]
BROWSERS = ["Chrome", "Firefox", "Safari", "Edge"]
OS_LIST = ["Windows", "macOS", "Linux", "iOS", "Android"]
HEAT_LEVELS = ["Cold", "Warm", "Hot", "Enterprise Ready"]


def generate_visitor_data(company: dict, days_ago: int = 0):
    """Generate realistic visitor data."""
    base_date = datetime.utcnow() - timedelta(days=days_ago)
    
    visit_count = random.randint(1, 15)
    intent_score = random.randint(0, 200)
    engagement_score = random.randint(0, 150)
    
    if intent_score <= 30:
        heat_level = "Cold"
    elif intent_score <= 70:
        heat_level = "Warm"
    elif intent_score <= 150:
        heat_level = "Hot"
    else:
        heat_level = "Enterprise Ready"
    
    total_time = random.randint(300, 7200)  # 5 minutes to 2 hours
    pages_per_session = round(random.uniform(2.0, 8.5), 2)
    
    return {
        "ip_address": company["ip"],
        "country": company["country"],
        "region": "Unknown",
        "city": "Unknown",
        "timezone": "UTC",
        "device_type": random.choice(DEVICES),
        "browser": random.choice(BROWSERS),
        "os": random.choice(OS_LIST),
        "screen_resolution": f"{random.choice([1920, 1366, 1440])}x{random.choice([1080, 768, 900])}",
        "referrer": random.choice(["google.com", "linkedin.com", "direct", None]),
        "utm_source": random.choice(["google", "linkedin", "twitter", None]),
        "utm_medium": random.choice(["cpc", "organic", "social", None]),
        "utm_campaign": random.choice(["summer2024", "enterprise", None]),
        "company_name": company["name"],
        "industry": company["industry"],
        "first_visit_date": (base_date - timedelta(days=random.randint(0, 30))).isoformat(),
        "last_visit_date": base_date.isoformat(),
        "visit_count": visit_count,
        "total_time_spent": total_time,
        "avg_session_duration": total_time // visit_count if visit_count > 0 else 0,
        "pages_per_session": pages_per_session,
        "engagement_score": engagement_score,
        "intent_score": intent_score,
        "heat_level": heat_level,
        "most_visited_page": random.choice(["/products", "/pricing", "/contact", "/"]),
        "primary_referral_source": random.choice(["google.com", "linkedin.com", "direct"]),
        "created_at": base_date.isoformat(),
        "updated_at": base_date.isoformat(),
    }


def seed_visitors():
    """Seed visitors table with test data."""
    db = get_db()
    
    print("Seeding visitors...")
    
    visitors_data = []
    for i, company in enumerate(COMPANIES):
        for j in range(3):  # Create 3 visitors per company
            days_ago = random.randint(0, 30)
            visitor_data = generate_visitor_data(company, days_ago)
            visitors_data.append(visitor_data)
    
    for visitor_data in visitors_data:
        try:
            result = db.table("visitors").insert(visitor_data).execute()
            print(f"✓ Created visitor: {visitor_data['company_name']} ({visitor_data['country']})")
        except Exception as e:
            print(f"✗ Error creating visitor {visitor_data['company_name']}: {e}")
    
    print(f"\n✓ Seeded {len(visitors_data)} visitors")


def seed_sessions():
    """Seed sessions for existing visitors."""
    db = get_db()
    
    print("\nSeeding sessions...")
    
    visitors_result = db.table("visitors").select("id,visit_count").execute()
    
    if not visitors_result.data:
        print("No visitors found. Please seed visitors first.")
        return
    
    session_count = 0
    for visitor in visitors_result.data:
        visitor_id = visitor["id"]
        visit_count = visitor.get("visit_count", 1)
        
        for i in range(visit_count):
            session_start = datetime.utcnow() - timedelta(days=random.randint(0, 30), hours=random.randint(0, 23))
            session_duration = random.randint(60, 1800)  # 1 minute to 30 minutes
            session_end = session_start + timedelta(seconds=session_duration)
            pages_count = random.randint(1, 10)
            
            session_data = {
                "visitor_id": visitor_id,
                "session_start": session_start.isoformat(),
                "session_end": session_end.isoformat(),
                "session_duration": session_duration,
                "pages_visited_count": pages_count,
                "created_at": session_start.isoformat(),
            }
            
            try:
                result = db.table("sessions").insert(session_data).execute()
                session_count += 1
            except Exception as e:
                print(f"✗ Error creating session: {e}")
    
    print(f"✓ Seeded {session_count} sessions")


def seed_page_events():
    """Seed page events for existing sessions."""
    db = get_db()
    
    print("\nSeeding page events...")
    
    sessions_result = db.table("sessions").select("id,pages_visited_count").execute()
    
    if not sessions_result.data:
        print("No sessions found. Please seed sessions first.")
        return
    
    event_count = 0
    pages = ["/", "/products", "/pricing", "/contact", "/services", "/about"]
    
    for session in sessions_result.data:
        session_id = session["id"]
        pages_count = session.get("pages_visited_count", 1)
        
        for i in range(pages_count):
            event_timestamp = datetime.utcnow() - timedelta(days=random.randint(0, 30))
            time_spent = random.randint(10, 300)
            scroll_depth = random.randint(0, 100)
            
            event_data = {
                "session_id": session_id,
                "page_url": random.choice(pages),
                "event_type": random.choice(["page_view", "scroll", "click"]),
                "scroll_depth": scroll_depth,
                "click_target": random.choice([None, "button.cta", "a.nav-link", "form.submit"]),
                "time_spent": time_spent,
                "timestamp": event_timestamp.isoformat(),
                "created_at": event_timestamp.isoformat(),
            }
            
            try:
                result = db.table("page_events").insert(event_data).execute()
                event_count += 1
            except Exception as e:
                print(f"✗ Error creating page event: {e}")
    
    print(f"✓ Seeded {event_count} page events")


def main():
    """Main seeding function."""
    print("=" * 50)
    print("MMKK AI Visitor Intelligence - Data Seeding")
    print("=" * 50)
    
    try:
        seed_visitors()
        seed_sessions()
        seed_page_events()
        
        print("\n" + "=" * 50)
        print("✓ Seeding completed successfully!")
        print("=" * 50)
    except Exception as e:
        print(f"\n✗ Seeding failed: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()

