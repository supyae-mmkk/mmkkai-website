export interface Industry {
  slug: string
  name: string
  description: string
  relevantSolutions: string[] // solution slugs most relevant to this industry
}

export const industries: Industry[] = [
  {
    slug: 'smes',
    name: 'SMEs',
    description:
      'Small and medium enterprises setting up their first real IT stack — email, file storage, and a CRM that scales past a spreadsheet.',
    relevantSolutions: ['google-workspace', 'microsoft-365', 'hubspot-crm'],
  },
  {
    slug: 'mid-market',
    name: 'Mid-Market Companies',
    description:
      'Growing companies that have outgrown ad-hoc tools and need structured pipelines, automation, and IT support across multiple teams.',
    relevantSolutions: ['hubspot-crm', 'apollo-lead-generation', 'ai-automation'],
  },
  {
    slug: 'enterprises',
    name: 'Enterprises',
    description:
      'Larger organizations consolidating platforms, migrating legacy infrastructure, or standardizing security policy across departments.',
    relevantSolutions: ['google-cloud', 'microsoft-365', 'teamviewer'],
  },
  {
    slug: 'international-schools',
    name: 'International Schools',
    description:
      'Schools running Google Workspace for Education, managing staff and student accounts, and needing reliable IT support across campuses.',
    relevantSolutions: ['google-workspace', 'microsoft-365', 'teamviewer'],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate Companies',
    description:
      'Brokerages and developers that need a CRM built around listings and client pipelines, plus outbound lead generation for new business.',
    relevantSolutions: ['hubspot-crm', 'apollo-lead-generation', 'google-workspace'],
  },
  {
    slug: 'technology-companies',
    name: 'Technology Companies',
    description:
      'Product and engineering teams that need Google Cloud architecture, AI automation, and a productivity stack that doesn’t get in the way.',
    relevantSolutions: ['google-cloud', 'ai-automation', 'google-workspace'],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services Firms',
    description:
      'Law firms, accounting practices, and consultancies that need a CRM for client relationships and Adobe/Microsoft licensing managed centrally.',
    relevantSolutions: ['hubspot-crm', 'microsoft-365', 'adobe-business'],
  },
]

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}
