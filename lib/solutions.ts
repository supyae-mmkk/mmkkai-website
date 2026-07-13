// Canonical list of the 8 solutions MMKK AI sells.
// Single source of truth for the Navbar "Solutions" mega-menu,
// the homepage solutions grid, and each /solutions/[slug] page.

export type Pillar = 'cloud' | 'crm' | 'ai' | 'support' | 'creative'

export interface Solution {
  slug: string
  name: string
  shortName: string
  pillar: Pillar
  tagline: string
  description: string
  features: string[]
  countries: Array<'myanmar' | 'thailand'>
}

export const pillars: Record<Pillar, { name: string; description: string }> = {
  cloud: {
    name: 'Cloud & Productivity',
    description: 'Setup, licensing, and migration of the core workplace platforms your team runs on every day.',
  },
  crm: {
    name: 'CRM & Sales Growth',
    description: 'Pipeline, lead generation, and sales-system setup that turns outreach into revenue.',
  },
  ai: {
    name: 'AI Automation',
    description: 'Workflow automation and applied AI that removes manual work from your team’s day.',
  },
  support: {
    name: 'IT & Remote Support',
    description: 'Ongoing technical support and device management so systems keep running.',
  },
  creative: {
    name: 'Creative & Design Ops',
    description: 'Licensing and rollout of the creative tools your marketing and design teams depend on.',
  },
}

export const solutions: Solution[] = [
  {
    slug: 'google-workspace',
    name: 'Google Workspace',
    shortName: 'Google Workspace',
    pillar: 'cloud',
    tagline: 'Gmail, Drive, Docs, and Meet — set up and licensed correctly from day one.',
    description:
      'MMKK AI deploys and manages Google Workspace for growing businesses across Myanmar and Thailand — from first-time setup and domain verification to user provisioning, security policies, and shared drive structure. As an official Google Cloud partner, we handle licensing, billing, and admin console configuration so your team gets a workspace that is secure and ready to use, not just a login.',
    features: [
      'Domain setup, MX records, and email migration',
      'User provisioning and organizational unit structure',
      'Security policies: 2-step verification, device management, DLP',
      'Shared Drive architecture for teams and departments',
      'Ongoing admin support and license management',
    ],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    shortName: 'Microsoft 365',
    pillar: 'cloud',
    tagline: 'Outlook, Teams, SharePoint, and Office apps — deployed and supported locally.',
    description:
      'MMKK AI deploys Microsoft 365 for businesses that need Outlook, Teams, SharePoint, and the full Office suite running reliably. We handle tenant setup, licensing tier selection (Business Basic through Enterprise), security defaults, and SharePoint/Teams architecture, with local support in Myanmar and Thailand so issues get resolved without waiting on an overseas queue.',
    features: [
      'Tenant setup and licensing tier selection',
      'Exchange Online mailbox migration',
      'Teams and SharePoint site architecture',
      'Conditional access and security baseline configuration',
      'Local billing and ongoing support',
    ],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'hubspot-crm',
    name: 'HubSpot CRM',
    shortName: 'HubSpot CRM',
    pillar: 'crm',
    tagline: 'A sales pipeline your team will actually keep updated.',
    description:
      'MMKK AI implements HubSpot CRM for SMEs, mid-market companies, and professional services firms that have outgrown spreadsheets. We configure pipelines, deal stages, email sequences, and reporting dashboards, and connect HubSpot to the tools your sales team already uses — so adoption doesn’t stall in week two.',
    features: [
      'Pipeline and deal-stage configuration matched to your sales process',
      'Contact and company data import/cleanup',
      'Email sequence and marketing automation setup',
      'Reporting dashboards for pipeline visibility',
      'Team onboarding and adoption training',
    ],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'apollo-lead-generation',
    name: 'Apollo Lead Generation',
    shortName: 'Apollo',
    pillar: 'crm',
    tagline: 'Find and reach the right buyers before your competitors do.',
    description:
      'MMKK AI sets up Apollo for outbound prospecting and lead generation — building targeted contact lists, configuring sequences, and connecting Apollo to your CRM so leads flow straight into your pipeline instead of a spreadsheet. Built for sales teams that need a repeatable, trackable outbound motion rather than one-off cold outreach.',
    features: [
      'Ideal customer profile and list-building setup',
      'Outbound email sequence configuration',
      'CRM integration (HubSpot and others)',
      'Deliverability and sender reputation setup',
      'Reporting on reply and meeting-booked rates',
    ],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'google-cloud',
    name: 'Google Cloud',
    shortName: 'Google Cloud',
    pillar: 'cloud',
    tagline: 'Infrastructure, AI, and compute — architected and cost-optimized.',
    description:
      'As an official Google Cloud Co-Sell Partner, MMKK AI architects and manages Google Cloud infrastructure — compute, storage, networking, and Gemini AI deployment — for businesses that need more than shared hosting. We handle architecture design, cost optimization, and ongoing management, with local billing support in Myanmar and Thailand.',
    features: [
      'Cloud architecture design and migration planning',
      'Compute, storage, and networking setup',
      'Gemini AI and Vertex AI deployment',
      'Cost monitoring and optimization',
      'Local billing and technical support',
    ],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    shortName: 'AI Automation',
    pillar: 'ai',
    tagline: 'Practical AI workflows that remove manual work, not science projects.',
    description:
      'MMKK AI builds applied AI automation for real business workflows — customer support triage, lead qualification, internal reporting, and document processing — using the tools your team already has (Gemini, Copilot, and custom workflow automation). The goal is measurable time saved, not a proof of concept that never ships.',
    features: [
      'AI-powered customer support and chat commerce',
      'Lead qualification and intent scoring automation',
      'Document processing and internal reporting workflows',
      'Gemini / Copilot deployment for internal teams',
      'Custom automation for repetitive operational tasks',
    ],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'teamviewer',
    name: 'TeamViewer',
    shortName: 'TeamViewer',
    pillar: 'support',
    tagline: 'Remote support and device management for distributed teams.',
    description:
      'MMKK AI deploys and manages TeamViewer for businesses that need reliable remote support across multiple offices or branch locations — common among real estate firms, schools, and retail operations in Myanmar and Thailand. We handle licensing, device enrollment, and integrate remote support into your existing IT helpdesk process.',
    features: [
      'Licensing and multi-device deployment',
      'Remote monitoring and management (RMM) setup',
      'Helpdesk workflow integration',
      'Security policy configuration',
      'Ongoing IT support coverage',
    ],
    countries: [],
  },
  {
    slug: 'adobe-business',
    name: 'Adobe Business',
    shortName: 'Adobe Business',
    pillar: 'creative',
    tagline: 'Creative Cloud and Acrobat licensing, managed for your whole team.',
    description:
      'MMKK AI manages Adobe Business licensing — Creative Cloud for design and marketing teams, Acrobat for document workflows — including seat management, billing consolidation, and rollout support so creative and operations teams get the tools they need without procurement friction.',
    features: [
      'Creative Cloud for Teams / Enterprise licensing',
      'Acrobat and document workflow deployment',
      'Seat management and billing consolidation',
      'Rollout support for design and marketing teams',
      'Ongoing license and renewal management',
    ],
    countries: [],
  },
]

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}
