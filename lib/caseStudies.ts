// Case-study configuration file. Intentionally empty until a real, verified
// client case study is supplied and approved for publication - see the
// pre-deployment AEO audit constraint: "Never publish fictional examples as
// real customers." The CaseStudiesSection component reads this array and
// renders a clean "coming soon" state whenever it is empty, rather than the
// section being hidden entirely or backfilled with placeholder content.
export interface CaseStudy {
  slug: string
  clientName: string
  industry: string
  summary: string
  solutionSlugs: string[]
  logoPath?: string
}

export const caseStudies: CaseStudy[] = []
