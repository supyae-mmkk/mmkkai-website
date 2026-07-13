// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for verified company credentials, partner status,
// and social/directory profile URLs.
//
// WHY THIS FILE EXISTS: earlier drafts of this site repeated "Official Google
// Cloud Co-Sell Partner" and "Microsoft Azure Deployment Partner" across ~15
// pages, and separately invented LinkedIn/Facebook URLs for schema.org
// sameAs. Neither claim was ever checked against Google's or Microsoft's
// public partner directories, and the social URLs were never confirmed to
// exist. Every occurrence has been rewritten to neutral, defensible language
// (see NEUTRAL_PHRASES below), and this file is now the ONLY place a
// verified-partner claim or a sameAs URL can be turned back on.
//
// TO ACTIVATE A CREDENTIAL: flip the relevant `verified: true` and fill in
// the supporting `evidenceUrl` (a link to the entry on Google's / Microsoft's
// own public partner directory). Until `verified` is true, no page will
// render the claim — see components/CredentialBadge.tsx.
// ---------------------------------------------------------------------------

export interface Credential {
  id: string
  label: string
  verified: boolean
  evidenceUrl: string | null // link to the public directory listing that proves this
}

export const credentials: Credential[] = [
  {
    id: 'google-cloud-partner',
    label: 'Google Cloud Partner status',
    verified: false,
    evidenceUrl: null, // e.g. https://cloud.google.com/find-a-partner/partner/<slug> once listed
  },
  {
    id: 'microsoft-partner',
    label: 'Microsoft Partner status',
    verified: false,
    evidenceUrl: null, // e.g. https://partner.microsoft.com/... once listed
  },
  {
    id: 'hubspot-solutions-partner',
    label: 'HubSpot Solutions Partner status',
    verified: false,
    evidenceUrl: null,
  },
  {
    id: 'apollo-certified-partner',
    label: 'Apollo Certified Partner status',
    verified: false,
    evidenceUrl: null,
  },
]

export function isVerified(id: string): boolean {
  return credentials.some((c) => c.id === id && c.verified)
}

// Neutral replacements used everywhere a partner/certification claim used to
// appear. None of these imply official authorization, certification,
// reseller status, partnership tier, or directory membership.
export const NEUTRAL_PHRASES = {
  googleCloud: 'Google Cloud implementation and support',
  microsoft: 'Microsoft cloud deployment services',
  cloudGeneral: 'Cloud migration and technical support',
  licensing: 'Licensing consultation and deployment assistance',
} as const

// ---------------------------------------------------------------------------
// Verified social / directory profile URLs for schema.org `sameAs`.
// Previously this list contained invented LinkedIn/Facebook URLs that were
// never confirmed to exist. It is now empty until a real, confirmed URL is
// added here — nothing else in the codebase should hardcode a sameAs URL.
// ---------------------------------------------------------------------------
export const verifiedSameAs: string[] = [
  // 'https://www.linkedin.com/company/REPLACE_WITH_REAL_HANDLE',
  // 'https://www.facebook.com/REPLACE_WITH_REAL_PAGE',
]

// ---------------------------------------------------------------------------
// Verified contact & office information (unchanged from what the company
// provided — these are treated as verified since they're the company's own
// stated contact details, not a third-party claim).
// ---------------------------------------------------------------------------
export const companyInfo = {
  name: 'MMKK AI',
  email: 'sales@mmkkai.com',
  logoPath: '/logo.svg',
  offices: {
    us: { phone: '+1 332 333 9868', phoneHref: 'tel:+13323339868' },
    thailand: { phone: '+66 98 113 5613', phoneHref: 'tel:+66981135613' },
    myanmar: { phone: '+95 95186635', phoneHref: 'tel:+9595186635' },
  },
}
