-- MMKK AI Visitor Intelligence System - Enhanced Database Schema
-- Supabase Postgres

-- Drop existing tables if needed (use with caution in production)
-- DROP TABLE IF EXISTS page_events CASCADE;
-- DROP TABLE IF EXISTS sessions CASCADE;
-- DROP TABLE IF EXISTS visitors CASCADE;

-- VISITORS TABLE (Enhanced)
CREATE TABLE IF NOT EXISTS visitors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  timezone TEXT,
  device_type TEXT,
  browser TEXT,
  os TEXT,
  screen_resolution TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  company_name TEXT,
  industry TEXT,
  company_size TEXT,
  revenue_estimate TEXT,
  first_visit_date TIMESTAMP DEFAULT NOW(),
  last_visit_date TIMESTAMP DEFAULT NOW(),
  visit_count INT DEFAULT 1,
  total_time_spent INT DEFAULT 0,
  avg_session_duration INT DEFAULT 0,
  pages_per_session DECIMAL(10, 2) DEFAULT 0,
  engagement_score INT DEFAULT 0,
  intent_score INT DEFAULT 0,
  heat_level TEXT DEFAULT 'Cold',
  most_visited_page TEXT,
  primary_referral_source TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- SESSIONS TABLE (Enhanced)
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_id UUID REFERENCES visitors(id) ON DELETE CASCADE,
  session_start TIMESTAMP DEFAULT NOW(),
  session_end TIMESTAMP,
  session_duration INT DEFAULT 0,
  pages_visited_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- PAGE EVENTS TABLE (Enhanced)
CREATE TABLE IF NOT EXISTS page_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  page_url TEXT,
  event_type TEXT,
  scroll_depth INT DEFAULT 0,
  click_target TEXT,
  time_spent INT DEFAULT 0,
  timestamp TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_visitors_ip_address ON visitors(ip_address);
CREATE INDEX IF NOT EXISTS idx_visitors_intent_score ON visitors(intent_score);
CREATE INDEX IF NOT EXISTS idx_visitors_engagement_score ON visitors(engagement_score);
CREATE INDEX IF NOT EXISTS idx_visitors_heat_level ON visitors(heat_level);
CREATE INDEX IF NOT EXISTS idx_visitors_country ON visitors(country);
CREATE INDEX IF NOT EXISTS idx_visitors_industry ON visitors(industry);
CREATE INDEX IF NOT EXISTS idx_visitors_last_visit_date ON visitors(last_visit_date DESC);
CREATE INDEX IF NOT EXISTS idx_visitors_visit_count ON visitors(visit_count DESC);
CREATE INDEX IF NOT EXISTS idx_sessions_visitor_id ON sessions(visitor_id);
CREATE INDEX IF NOT EXISTS idx_sessions_session_start ON sessions(session_start DESC);
CREATE INDEX IF NOT EXISTS idx_page_events_session_id ON page_events(session_id);
CREATE INDEX IF NOT EXISTS idx_page_events_timestamp ON page_events(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_page_events_page_url ON page_events(page_url);

-- Migration script to add new columns to existing tables (run if tables already exist)
DO $$
BEGIN
  -- Add new columns to visitors table if they don't exist
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='timezone') THEN
    ALTER TABLE visitors ADD COLUMN timezone TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='device_type') THEN
    ALTER TABLE visitors ADD COLUMN device_type TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='browser') THEN
    ALTER TABLE visitors ADD COLUMN browser TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='os') THEN
    ALTER TABLE visitors ADD COLUMN os TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='screen_resolution') THEN
    ALTER TABLE visitors ADD COLUMN screen_resolution TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='referrer') THEN
    ALTER TABLE visitors ADD COLUMN referrer TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='utm_source') THEN
    ALTER TABLE visitors ADD COLUMN utm_source TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='utm_medium') THEN
    ALTER TABLE visitors ADD COLUMN utm_medium TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='utm_campaign') THEN
    ALTER TABLE visitors ADD COLUMN utm_campaign TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='first_visit_date') THEN
    ALTER TABLE visitors ADD COLUMN first_visit_date TIMESTAMP DEFAULT NOW();
    UPDATE visitors SET first_visit_date = first_seen WHERE first_visit_date IS NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='last_visit_date') THEN
    ALTER TABLE visitors ADD COLUMN last_visit_date TIMESTAMP DEFAULT NOW();
    UPDATE visitors SET last_visit_date = last_seen WHERE last_visit_date IS NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='visit_count') THEN
    ALTER TABLE visitors ADD COLUMN visit_count INT DEFAULT 1;
    UPDATE visitors SET visit_count = session_count WHERE visit_count IS NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='total_time_spent') THEN
    ALTER TABLE visitors ADD COLUMN total_time_spent INT DEFAULT 0;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='avg_session_duration') THEN
    ALTER TABLE visitors ADD COLUMN avg_session_duration INT DEFAULT 0;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='pages_per_session') THEN
    ALTER TABLE visitors ADD COLUMN pages_per_session DECIMAL(10, 2) DEFAULT 0;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='engagement_score') THEN
    ALTER TABLE visitors ADD COLUMN engagement_score INT DEFAULT 0;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='most_visited_page') THEN
    ALTER TABLE visitors ADD COLUMN most_visited_page TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='visitors' AND column_name='primary_referral_source') THEN
    ALTER TABLE visitors ADD COLUMN primary_referral_source TEXT;
  END IF;
  
  -- Add new columns to sessions table
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='sessions' AND column_name='session_start') THEN
    ALTER TABLE sessions ADD COLUMN session_start TIMESTAMP;
    UPDATE sessions SET session_start = started_at WHERE session_start IS NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='sessions' AND column_name='session_end') THEN
    ALTER TABLE sessions ADD COLUMN session_end TIMESTAMP;
    UPDATE sessions SET session_end = ended_at WHERE session_end IS NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='sessions' AND column_name='session_duration') THEN
    ALTER TABLE sessions ADD COLUMN session_duration INT DEFAULT 0;
    UPDATE sessions SET session_duration = total_time WHERE session_duration IS NULL;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='sessions' AND column_name='pages_visited_count') THEN
    ALTER TABLE sessions ADD COLUMN pages_visited_count INT DEFAULT 0;
  END IF;
  
  -- Add new columns to page_events table
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='page_events' AND column_name='scroll_depth') THEN
    ALTER TABLE page_events ADD COLUMN scroll_depth INT DEFAULT 0;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='page_events' AND column_name='click_target') THEN
    ALTER TABLE page_events ADD COLUMN click_target TEXT;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='page_events' AND column_name='timestamp') THEN
    ALTER TABLE page_events ADD COLUMN timestamp TIMESTAMP DEFAULT NOW();
    UPDATE page_events SET timestamp = created_at WHERE timestamp IS NULL;
  END IF;
END $$;

