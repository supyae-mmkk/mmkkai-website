// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for company entity information, verified partner /
// platform / certification status, and social/directory profile URLs.
//
// WHY THIS FILE EXISTS: earlier drafts of this site repeated "Official Google
// Cloud Co-Sell Partner" and "Microsoft Azure Deployment Partner" across ~15
// pages (and, until this pass, still in public/llms.txt), and separately
// invented LinkedIn/Facebook URLs for schema.org sameAs. Neither claim was
// ever checked against Google's or Microsoft's public partner directories,
// and the social URLs were never confirmed to exist. This file is the ONLY
// place a verified-partner claim, an alternate legal name, or a sameAs URL
// can be turned back on — every page, schema builder, and component reads
// from here rather than hardcoding its own copy.
//
// TO ACTIVATE A CREDENTIAL: flip the relevant `status` to 'verified' and fill
// in `verificationUrl` (link to the vendor's own public partner directory
// entry) and `evidenceUrl` (a certificate, confirmation email, or directory
// screenshot reference). Until status is 'verified', components must not
// render the entry in a "Verified Partner" context — see lib/partners.ts and
// components/partners/*.
// ---------------------------------------------------------------------------

export type RelationshipType =
  | 'verified-partner'
  | 'implementation-service'
  | 'product-supply'
  | 'certification'
  | 'membership'

export type CredentialStatus = 'verified' | 'unverified' | 'in-progress'

export interface PartnerEntry {
  id: string
  name: string
  relationshipType: RelationshipType
  description: string
  verificationUrl: string | null // link to the vendor's own public partner/directory listing
  evidenceUrl: string | null // certificate, confirmation, or directory reference
  certificateId: string | null
  dateVerified: string | null // ISO date the evidence was last checked
  status: CredentialStatus
  publicVisibility: boolean // if false, never render even if status flips to verified
}

// Every platform MMKK AI actually implements for clients, listed here as
// what they are: implementation services, not partnerships. A logo or a
// "we work with X" mention is not partnership evidence — see the relevant
// FAQ rewrite in lib/faq.ts and the neutral phrases below. None of these
// currently have a verified vendor partner-program relationship on file, so
// all read as 'unverified' / status-neutral implementation services rather
// than partner claims.
export const partnerRegistry: PartnerEntry[] = [
  {
    id: 'google-cloud-partner',
    name: 'Google Cloud',
    relationshipType: 'implementation-service',
    description: 'Google Cloud architecture, migration, and cost-optimization implementation work performed for clients.',
    verificationUrl: null, // would be e.g. https://cloud.google.com/find-a-partner/partner/<slug> once listed
    evidenceUrl: null,
    certificateId: null,
    dateVerified: null,
    status: 'unverified',
    publicVisibility: true,
  },
  {
    id: 'microsoft-partner',
    name: 'Microsoft 365 / Azure',
    relationshipType: 'implementation-service',
    description: 'Microsoft 365 and Azure deployment and support work performed for clients.',
    verificationUrl: null, // would be e.g. https://partner.microsoft.com/... once listed
    evidenceUrl: null,
    certificateId: null,
    dateVerified: null,
    status: 'unverified',
    publicVisibility: true,
  },
  {
    id: 'hubspot-solutions-partner',
    name: 'HubSpot',
    relationshipType: 'implementation-service',
    description: 'HubSpot CRM implementation, pipeline configuration, and onboarding performed for clients.',
    verificationUrl: null,
    evidenceUrl: null,
    certificateId: null,
    dateVerified: null,
    status: 'unverified',
    publicVisibility: true,
  },
  {
    id: 'apollo-certified-partner',
    name: 'Apollo.io',
    relationshipType: 'implementation-service',
    description: 'Apollo configuration for outbound prospecting, sequencing, and CRM integration performed for clients.',
    verificationUrl: null,
    evidenceUrl: null,
    certificateId: null,
    dateVerified: null,
    status: 'unverified',
    publicVisibility: true,
  },
  {
    id: 'teamviewer-reseller',
    name: 'TeamViewer',
    relationshipType: 'implementation-service',
    description: 'TeamViewer licensing, device enrollment, and remote monitoring and management setup performed for clients.',
    verificationUrl: null,
    evidenceUrl: null,
    certificateId: null,
    dateVerified: null,
    status: 'unverified',
    publicVisibility: true,
  },
  {
    id: 'adobe-reseller',
    name: 'Adobe',
    relationshipType: 'implementation-service',
    description: 'Adobe Creative Cloud and Acrobat licensing and rollout performed for clients.',
    verificationUrl: null,
    evidenceUrl: null,
    certificateId: null,
    dateVerified: null,
    status: 'unverified',
    publicVisibility: true,
  },
]

export function isVerified(id: string): boolean {
  return partnerRegistry.some((c) => c.id === id && c.status === 'verified')
}

// Legacy alias kept for any code that still imports `credentials` by its old
// name — same data, new shape.
export const credentials = partnerRegistry

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
// Verified social / directory profile URLs for schema.org `sameAs` and any
// visible social links in the Footer / Contact page.
//
// EVIDENCE STATUS: no Facebook, LinkedIn, or LINE URL for MMKK AI could be
// confirmed from anything in this repository. The AI-visibility audit
// recommends adding these, but per the "do not invent facts" rule this list
// stays empty until the business supplies the real, live URLs. Nothing else
// in the codebase should hardcode a sameAs or social URL — see
// docs/ai-visibility-offsite-actions.md for the action item this creates.
// ---------------------------------------------------------------------------
export interface SocialProfile {
  platform: 'facebook' | 'linkedin' | 'line' | 'instagram' | 'x'
  url: string
  label: string
}

export const socialProfiles: SocialProfile[] = [
  // { platform: 'facebook', url: 'https://www.facebook.com/REPLACE_WITH_REAL_PAGE', label: 'MMKK AI on Facebook' },
  // { platform: 'linkedin', url: 'https://www.linkedin.com/company/REPLACE_WITH_REAL_HANDLE', label: 'MMKK AI on LinkedIn' },
  // { platform: 'line', url: 'https://line.me/R/ti/p/REPLACE_WITH_REAL_LINE_ID', label: 'MMKK AI on LINE' },
]

export const verifiedSameAs: string[] = socialProfiles.map((s) => s.url)

// ---------------------------------------------------------------------------
// Legal entity information.
//
// EVIDENCE STATUS: the audit flagged that an alternate name, "Myanmar
// Myanmar Kando Konnect", is not connected to MMKK AI anywhere on the site.
// Nothing in this repository (code, content, or supplied configuration)
// documents what that name is (a legal entity name, a former trading name,
// a registration record, or something else), so no public statement about
// it can be published without fabricating the relationship. legalName and
// alternateNames stay null/empty until the business confirms the exact
// relationship and provides supporting evidence (e.g. a business
// registration document or certificate reference). Once confirmed, set
// legalName below and the Organization schema and About page will pick it
// up automatically — see lib/schema.ts organizationSchema().
// ---------------------------------------------------------------------------
export interface LegalEntityInfo {
  legalName: string | null // TODO: confirm legal entity name and its exact relationship to "MMKK AI" before publishing
  alternateNames: string[] // TODO: add "Myanmar Myanmar Kando Konnect" here ONLY once its relationship to MMKK AI is verified
  registrationNumber: string | null
  registrationCountry: string | null
  foundingDate: string | null // ISO date, only once verified
  evidenceUrl: string | null
}

export const legalEntity: LegalEntityInfo = {
  legalName: null,
  alternateNames: [],
  registrationNumber: null,
  registrationCountry: null,
  foundingDate: null,
  evidenceUrl: null,
}

// ---------------------------------------------------------------------------
// Verified contact & office information (unchanged from what the company
// provided — these are treated as verified since they're the company's own
// stated contact details, not a third-party claim).
// ---------------------------------------------------------------------------
export const companyInfo = {
  name: 'MMKK AI',
  email: 'sales@mmkkai.com',
  logoPath: '/logo.svg',
  url: 'https://www.mmkkai.com',
  countriesServed: ['Myanmar', 'Thailand'] as const,
  offices: {
    us: { phone: '+1 332 333 9868', phoneHref: 'tel:+13323339868' },
    thailand: { phone: '+66 98 113 5613', phoneHref: 'tel:+66981135613' },
    myanmar: { phone: '+95 95186635', phoneHref: 'tel:+9595186635' },
  },
  // Street address: not present anywhere in this repository or supplied
  // configuration. Left unset rather than fabricated - see
  // docs/ai-visibility-offsite-actions.md for the action item this creates
  // (a verified business address materially helps LocalBusiness/Google
  // Business Profile completeness).
  streetAddress: null as string | null,
}
