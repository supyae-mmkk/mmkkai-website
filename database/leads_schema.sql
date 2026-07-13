-- MMKK AI Leads Table
-- Run in the same Supabase project as database/schema.sql
-- Captures submissions from the /contact page and the ConsultationPanel
-- slide-out form (app/api/contact/route.ts), neither of which persisted
-- leads anywhere before this change.

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  interests TEXT[] DEFAULT '{}',
  locale TEXT,
  country TEXT,
  source TEXT DEFAULT 'contact_page',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
