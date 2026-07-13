-- MMKK AI Leads Table
-- Run in the same Supabase project as database/schema.sql
-- Captures submissions from the /contact page and the ConsultationPanel
-- slide-out form (app/api/contact/route.ts).
--
-- Remediation note: added consent_given / consent_timestamp so the site can
-- demonstrate that a visitor actively agreed to the privacy policy before
-- their data was stored, and honeypot_flagged so spam caught by the
-- honeypot field is visible for review rather than silently dropped.

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
  consent_given BOOLEAN NOT NULL DEFAULT FALSE,
  consent_timestamp TIMESTAMP,
  honeypot_flagged BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- If leads_schema.sql was already applied before this remediation pass,
-- run this migration instead of the CREATE TABLE above:
--
-- ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_given BOOLEAN NOT NULL DEFAULT FALSE;
-- ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_timestamp TIMESTAMP;
-- ALTER TABLE leads ADD COLUMN IF NOT EXISTS honeypot_flagged BOOLEAN NOT NULL DEFAULT FALSE;
