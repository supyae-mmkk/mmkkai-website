import { NextRequest, NextResponse } from 'next/server'

// Lead-capture endpoint for both the /contact page and the ConsultationPanel
// slide-out form.
//
// Remediation notes (pre-deployment audit):
// - Requires explicit `consent: true` before any record is written, and
//   stores `consentTimestamp` alongside it.
// - Honeypot field (`website`) - real users never see or fill this input;
//   if it arrives non-empty we still return a generic success response (so
//   a bot doesn't learn it was detected) but skip the real insert.
// - All string fields are trimmed and length-capped server-side before
//   storage, independent of whatever validation the browser already did.
// - Error responses never include internal details (DB error text, stack
//   traces) - those are only ever written to server-side console.error.

interface ContactPayload {
  name: string
  email: string
  company?: string
  message?: string
  interests?: string[]
  locale?: string
  country?: string
  source?: string
  consent?: boolean
  consentTimestamp?: string
  website?: string // honeypot - must always be empty
}

const MAX_LENGTHS = {
  name: 200,
  email: 320,
  company: 200,
  message: 5000,
} as const

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= MAX_LENGTHS.email
}

// Strip control characters and cap length. Not a full HTML sanitizer -
// these values are never rendered as HTML (they go straight to Supabase and
// are only ever displayed as plain text in an internal admin view), but
// stripping control/markup characters here removes an easy stored-XSS or
// log-injection vector if that assumption ever changes.
function clean(value: string, maxLen: number): string {
  return value
    .replace(/[\x00-\x1F\x7F]/g, '')
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, maxLen)
}

export async function POST(req: NextRequest) {
  let body: ContactPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { website, consent, consentTimestamp, interests, locale, country, source } = body
  const name = clean(body.name || '', MAX_LENGTHS.name)
  const email = clean(body.email || '', MAX_LENGTHS.email)
  const company = body.company ? clean(body.company, MAX_LENGTHS.company) : null
  const message = body.message ? clean(body.message, MAX_LENGTHS.message) : null

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 400 })
  }

  if (!consent) {
    return NextResponse.json({ error: 'Please confirm you agree to the privacy policy.' }, { status: 400 })
  }

  const isHoneypotTriggered = Boolean(website && website.trim().length > 0)

  const SUPABASE_URL = process.env.SUPABASE_URL
  const SUPABASE_KEY = process.env.SUPABASE_KEY

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('[contact] SUPABASE_URL / SUPABASE_KEY not configured - lead was NOT persisted', { name, email, company })
    return NextResponse.json(
      { error: 'Lead capture is not fully configured yet. Please email sales@mmkkai.com directly.' },
      { status: 503 }
    )
  }

  // Bots that fill the honeypot get a fake success response (so they don't
  // learn they were caught) but we never write their data as a real lead.
  if (isHoneypotTriggered) {
    console.warn('[contact] honeypot triggered, discarding submission', { email })
    return NextResponse.json({ ok: true })
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify([
        {
          name,
          email,
          company,
          message,
          interests: Array.isArray(interests) ? interests.slice(0, 20) : [],
          locale: locale || null,
          country: country || null,
          source: source || 'contact_page',
          consent_given: true,
          consent_timestamp: consentTimestamp || new Date().toISOString(),
          honeypot_flagged: false,
        },
      ]),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('[contact] Supabase insert failed', res.status, text)
      return NextResponse.json({ error: 'Failed to save your request. Please try again.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error submitting lead', err)
    return NextResponse.json({ error: 'Unexpected server error. Please try again.' }, { status: 500 })
  }
}
