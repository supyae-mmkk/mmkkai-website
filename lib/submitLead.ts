export interface LeadPayload {
  name: string
  email: string
  company?: string
  message?: string
  interests?: string[]
  locale?: string
  country?: string
  source?: string
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      return { ok: false, error: data.error || 'Something went wrong.' }
    }
    return { ok: true }
  } catch {
    return { ok: false, error: 'Network error. Please try again.' }
  }
}
