import { NextRequest, NextResponse } from 'next/server'

// Lead-capture endpoint for both the /contact page and the ConsultationPanel
// slide-out form. Previously neither form submitted anywhere (contact/page.tsx
// only ran console.log; ConsultationPanel had no onSubmit handler at all).
//
// Persists to the existing Supabase project (see database/leads_schema.sql)
// using the same SUPABASE_URL / SUPABASE_KEY env vars already documented in
// the project README for the visitor-tracking backend. No new infrastructure
// or dependency required.

interface ContactPayload {
  name: string
  email: string
  company?: string
  message?: string
  interests?: string[]
  locale?: string
  country?: string
  source?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let body: ContactPayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, company, message, interests, locale, country, source } = body

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 400 })
  }

  const SUPABASE_URL = process.env.SUPABASE_URL
  const SUPABASE_KEY = process.env.SUPABASE_KEY

  // If Supabase isn't configured yet in this environment, don't silently drop
  // the lead — fail loudly so it's obvious in logs/monitoring that env vars
  // are missing, rather than returning a fake "success" to the visitor.
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('[contact] SUPABASE_URL / SUPABASE_KEY not configured — lead was NOT persisted', {
      name,
      email,
      company,
    })
    return NextResponse.json(
      { error: 'Lead capture is not fully configured yet. Please email sales@mmkkai.com directly.' },
      { status: 503 }
    )
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
          company: company || null,
          message: message || null,
          interests: interests || [],
          locale: locale || null,
          country: country || null,
          source: source || 'contact_page',
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
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 })
  }
}
