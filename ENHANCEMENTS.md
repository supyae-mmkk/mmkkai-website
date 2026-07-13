# Visitor Intelligence System - Enhancements

## Overview

The Visitor Intelligence system has been enhanced with enterprise-grade tracking capabilities, comprehensive analytics, and advanced filtering options.

## New Features

### 1. Enhanced Database Schema

**Visitors Table - New Fields:**
- `timezone` - Visitor timezone
- `device_type` - Desktop/Mobile/Tablet
- `browser` - Browser name
- `os` - Operating system
- `screen_resolution` - Screen dimensions
- `referrer` - Referral source
- `utm_source`, `utm_medium`, `utm_campaign` - UTM parameters
- `first_visit_date`, `last_visit_date` - Visit timestamps
- `visit_count` - Total number of visits
- `total_time_spent` - Cumulative time in seconds
- `avg_session_duration` - Average session length
- `pages_per_session` - Average pages per session
- `engagement_score` - Calculated engagement metric
- `most_visited_page` - Most frequently visited page
- `primary_referral_source` - Main referral source

**Sessions Table - New Fields:**
- `session_start`, `session_end` - Session timestamps
- `session_duration` - Total session duration
- `pages_visited_count` - Number of pages in session

**Page Events Table - New Fields:**
- `scroll_depth` - Maximum scroll percentage (0-100)
- `click_target` - Target element of click events
- `timestamp` - Event timestamp

### 2. Enhanced Tracking

**Frontend Tracking:**
- Automatic scroll depth tracking
- Click event tracking with target identification
- UTM parameter capture from URL
- Screen resolution detection
- Time-on-page tracking with periodic updates
- Non-blocking async tracking

**Backend Processing:**
- User agent parsing (device, browser, OS)
- IP geolocation with timezone
- Bot detection and filtering
- Referrer tracking
- UTM parameter storage

### 3. Advanced Scoring Engine

**Engagement Score:**
- +10 for scroll depth > 50%
- +20 for scroll depth > 75%
- +30 for CTA clicks
- +40 for contact page visits
- +20 for product page visits
- +5 for homepage visits
- +15 for returning visitors
- +25 for multiple sessions in 7 days

**Intent Score:**
- Pricing page: +50
- Contact page: +60
- Products page: +25
- Homepage: +5

**Heat Levels:**
- Cold: 0-30
- Warm: 31-70
- Hot: 71-150
- Enterprise Ready: 150+

### 4. Enhanced Admin Dashboard

**New Columns:**
- Device Type
- Visit Count
- Total Time Spent
- Pages per Session
- Engagement Score

**Filters:**
- Country
- Heat Level
- Industry
- Date Range (from/to)

**Sorting Options:**
- Highest Intent
- Most Sessions
- Most Recent

### 5. Security Enhancements

- Bot detection via user agent analysis
- Rate limiting on all endpoints
- Security headers middleware
- Bearer token authentication for admin routes
- Error logging and monitoring

### 6. Data Seeding

Sample data seed script includes:
- US finance company
- Singapore tech startup
- Thailand SME retail
- Various intent and engagement levels
- Realistic session and event data

## Migration Guide

### Database Migration

Run the enhanced schema SQL file:
```sql
-- Execute database/schema_enhanced.sql in Supabase SQL Editor
```

The migration script will:
- Add new columns to existing tables
- Migrate data from old column names to new ones
- Create new indexes for performance

### Backend Updates

No breaking changes. The API accepts both old and new field formats.

### Frontend Updates

The tracking hook automatically captures all new data. No changes required to existing pages.

## Usage

### Running Seed Script

```bash
cd backend
python -m scripts.seed_data
```

### Accessing Admin Dashboard

Navigate to `/admin/insights` with proper authentication token.

## Performance Considerations

- All tracking is non-blocking
- Database indexes optimized for common queries
- Rate limiting prevents abuse
- Bot detection reduces noise in analytics

## Future Enhancements

The system is designed to easily integrate:
- Company enrichment APIs (Clearbit, 6sense, Apollo)
- Advanced bot detection
- Real-time analytics
- Export functionality
- Custom scoring rules

