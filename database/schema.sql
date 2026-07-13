-- MMKK AI Visitor Intelligence System - Database Schema
-- Supabase Postgres

-- VISITORS TABLE
CREATE TABLE IF NOT EXISTS visitors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  company_name TEXT,
  industry TEXT,
  company_size TEXT,
  revenue_estimate TEXT,
  first_seen TIMESTAMP DEFAULT NOW(),
  last_seen TIMESTAMP DEFAULT NOW(),
  session_count INT DEFAULT 1,
  intent_score INT DEFAULT 0,
  heat_level TEXT DEFAULT 'Cold'
);

-- SESSIONS TABLE
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_id UUID REFERENCES visitors(id) ON DELETE CASCADE,
  started_at TIMESTAMP DEFAULT NOW(),
  ended_at TIMESTAMP,
  total_time INT DEFAULT 0
);

-- PAGE EVENTS TABLE
CREATE TABLE IF NOT EXISTS page_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE,
  page_url TEXT,
  event_type TEXT,
  time_spent INT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- INDEXES FOR PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_visitors_ip_address ON visitors(ip_address);
CREATE INDEX IF NOT EXISTS idx_visitors_intent_score ON visitors(intent_score);
CREATE INDEX IF NOT EXISTS idx_sessions_visitor_id ON sessions(visitor_id);
CREATE INDEX IF NOT EXISTS idx_page_events_session_id ON page_events(session_id);
CREATE INDEX IF NOT EXISTS idx_visitors_last_seen ON visitors(last_seen DESC);

