// Case-study and testimonial configuration. Intentionally empty until a
// real, verified, permissioned client example is supplied - see the
// pre-deployment AEO audit constraint: "Never publish fictional examples as
// real customers." Both ProofSection (homepage) and the dedicated
// /case-studies page read these arrays and render a truthful "in
// preparation" state whenever they are empty, rather than the section being
// silently hidden or backfilled with placeholder content.
//
// TO PUBLISH AN ENTRY: every field below exists so a real case study or
// testimonial can be added with full traceability (what was done, what
// changed, and whether the subject gave permission to be named). Do not add
// an entry without the client's or reviewer's explicit permission on file.
export interface CaseStudy {
  slug: string
  clientName: string // use an industry-anonymized label (e.g. "Regional retail distributor") if the client did not permit naming
  industry: string
  country: 'myanmar' | 'thailand' | 'cross-border'
  businessProblem: string
  servicesDelivered: string[] // solution slugs
  implementationSummary: string
  verifiedOutcome: string // must be something MMKK AI can substantiate, not a marketing figure
  supportingEvidenceNote: string | null // e.g. "written confirmation on file" - not a public link unless the client agreed to one
  datePublished: string
  solutionSlugs: string[]
  logoPath?: string
  imageId?: string // optional id referencing lib/imageConfig.ts's siteImages - only rendered if that slot is approved
  permissionToPublish: boolean // must be true before this entry is ever rendered
}

export interface Testimonial {
  slug: string
  personName: string
  role: string
  company: string
  quote: string
  permissionStatus: 'granted' | 'pending'
  sourceNote: string | null // e.g. "email confirmation on file", "LinkedIn recommendation" - only if verifiable
}

export const caseStudies: CaseStudy[] = []

export const testimonials: Testimonial[] = []
