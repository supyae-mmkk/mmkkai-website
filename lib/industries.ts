export interface Industry {
  slug: string
  name: string
  problem: string
  outcome: string
  relevantSolutions: string[] // solution slugs most relevant to this industry
}

// Illustrative industry use cases - one common problem, one recommended
// system combination, one operational outcome per industry. No regulatory
// or compliance guarantees are made for any industry (see healthcare-
// administration in particular: this describes non-clinical admin/back-
// office systems only).
export const industries: Industry[] = [
  {
    slug: 'professional-services',
    name: 'Professional Services',
    problem: 'Client records, documents, and billing history are split across individual staff inboxes and personal folders.',
    outcome: 'A shared client record and document library that survives staff turnover, with licensing managed centrally.',
    relevantSolutions: ['hubspot-crm', 'microsoft-365', 'adobe-business'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    problem: 'Listings, viewings, and buyer follow-up are tracked across agents’ personal notes and spreadsheets.',
    outcome: 'One pipeline for every listing and buyer, with outbound prospecting feeding new leads directly in.',
    relevantSolutions: ['hubspot-crm', 'apollo-lead-generation', 'google-workspace'],
  },
  {
    slug: 'retail-distribution',
    name: 'Retail and Distribution',
    problem: 'Sales, supplier communication, and inventory-related admin work happen over disconnected email threads and chat apps.',
    outcome: 'Centralized email and files plus a shared pipeline for supplier and wholesale account management.',
    relevantSolutions: ['google-workspace', 'hubspot-crm', 'ai-automation'],
  },
  {
    slug: 'education',
    name: 'Education',
    problem: 'Staff and student accounts are managed inconsistently across campuses, with no central administration.',
    outcome: 'Centrally managed accounts and devices across every campus, administered from one console.',
    relevantSolutions: ['google-workspace', 'microsoft-365', 'teamviewer'],
  },
  {
    slug: 'healthcare-administration',
    name: 'Healthcare Administration',
    problem: 'Front-office scheduling, billing correspondence, and internal admin communication run on personal, unmanaged accounts.',
    outcome: 'Managed business accounts and centralized access control for non-clinical administrative systems.',
    relevantSolutions: ['google-workspace', 'microsoft-365', 'ai-automation'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    problem: 'Production reporting and supplier or client follow-up rely on manual spreadsheet updates across departments.',
    outcome: 'A shared pipeline for client accounts and automated compilation of recurring internal reports.',
    relevantSolutions: ['hubspot-crm', 'ai-automation', 'google-cloud'],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    problem: 'Guest and corporate-account communication is scattered across personal email and messaging apps.',
    outcome: 'Managed business email and a shared pipeline for corporate accounts and repeat bookings.',
    relevantSolutions: ['google-workspace', 'hubspot-crm', 'teamviewer'],
  },
  {
    slug: 'regional-businesses',
    name: 'Regional Businesses',
    problem: 'Teams operating across Myanmar and Thailand run on inconsistent tools with no shared administration between offices.',
    outcome: 'One managed technology stack administered centrally, with local support in both markets.',
    relevantSolutions: ['google-workspace', 'microsoft-365', 'google-cloud'],
  },
]

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}
