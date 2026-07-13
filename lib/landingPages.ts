import type { FaqItem } from './faq'

export interface LandingPage {
  country: 'myanmar' | 'thailand'
  slug: string // path segment after /myanmar/ or /thailand/
  solutionSlug: string // links back to lib/solutions.ts
  h1: string
  metaTitle: string
  metaDescription: string
  intro: string
  body: string
  features: string[]
  faq: FaqItem[]
  guideSlug?: string // links to a /resources guide
}

export const landingPages: LandingPage[] = [
  // ---------------- MYANMAR (6) ----------------
  {
    country: 'myanmar',
    slug: 'google-workspace',
    solutionSlug: 'google-workspace',
    h1: 'Google Workspace in Myanmar',
    metaTitle: 'Google Workspace Myanmar | Setup, Licensing & Support | MMKK AI',
    metaDescription:
      'Official Google Cloud partner deploying Google Workspace for businesses in Myanmar — setup, licensing, migration, and local support in Yangon and Mandalay.',
    intro:
      'MMKK AI is an official Google Cloud partner deploying Google Workspace for SMEs, mid-market companies, and enterprises across Myanmar.',
    body:
      'Buying Google Workspace directly is straightforward until you need domain verification, secure admin policies, or a shared drive structure that actually matches how your teams work — and until something breaks and there is no local number to call. MMKK AI handles the full setup: domain and MX record configuration, user provisioning by department, two-step verification and device management policies, and shared drive architecture for growing teams. Billing and support are both handled locally in Myanmar, in USD or with guidance on local payment options, so procurement isn’t the blocker it often is for cloud software in this market.',
    features: [
      'Domain verification and email (MX record) setup',
      'User provisioning and organizational unit structure',
      '2-step verification, device management, and data-loss prevention policies',
      'Shared Drive structure for departments and projects',
      'Local billing guidance and ongoing admin support',
    ],
    faq: [
      {
        question: 'How much does Google Workspace cost in Myanmar?',
        answer:
          'Google Workspace is priced per user per month in USD, with tiers from Business Starter to Enterprise. MMKK AI helps Myanmar businesses choose the right tier and manages billing and renewals so there are no surprises.',
      },
      {
        question: 'Can a Myanmar business pay for Google Workspace locally?',
        answer:
          'Google Workspace bills in USD by default. MMKK AI advises on payment routing and local billing workarounds for businesses in Myanmar that face foreign-currency or banking constraints.',
      },
      {
        question: 'How long does Google Workspace setup take?',
        answer:
          'A standard setup for a team of 10–50 users typically takes 3–7 business days, including domain verification, user provisioning, and security policy configuration.',
      },
    ],
    guideSlug: 'google-workspace-vs-microsoft-365',
  },
  {
    country: 'myanmar',
    slug: 'microsoft-365',
    solutionSlug: 'microsoft-365',
    h1: 'Microsoft 365 in Myanmar',
    metaTitle: 'Microsoft 365 Myanmar | Setup, Licensing & Support | MMKK AI',
    metaDescription:
      'Microsoft Azure Deployment Partner setting up Microsoft 365 — Outlook, Teams, SharePoint — for businesses in Myanmar, with local billing and support.',
    intro:
      'MMKK AI deploys Microsoft 365 for businesses in Myanmar that need Outlook, Teams, and SharePoint running reliably, with local support behind it.',
    body:
      'Microsoft 365 is often the default choice for businesses already using Windows and Office — but tenant setup, licensing-tier selection, and getting Teams/SharePoint structured for how your business actually operates takes real configuration work. MMKK AI, a Microsoft Azure Deployment Partner, handles tenant provisioning, mailbox migration from existing email systems, security defaults, and SharePoint/Teams site architecture for teams across Myanmar, backed by local billing and support.',
    features: [
      'Tenant setup and licensing-tier selection (Business Basic to Enterprise)',
      'Exchange Online mailbox migration',
      'Teams and SharePoint site architecture',
      'Conditional access and security baseline configuration',
      'Local billing support and ongoing helpdesk access',
    ],
    faq: [
      {
        question: 'What is the difference between Microsoft 365 and Google Workspace for a Myanmar business?',
        answer:
          'Microsoft 365 centers on Outlook, Teams, and SharePoint and suits businesses already standardized on Windows and Office file formats. Google Workspace centers on Gmail, Drive, and Docs and is often simpler to administer for smaller teams. MMKK AI advises on the right fit based on your existing tools and team size — see our full comparison guide.',
      },
      {
        question: 'Can I migrate from Google Workspace to Microsoft 365, or the reverse?',
        answer:
          'Yes. MMKK AI handles two-way migrations between Google Workspace and Microsoft 365, including mail, calendar, and file migration, with a planned cutover window to minimize disruption.',
      },
      {
        question: 'Does Microsoft 365 support work locally in Myanmar?',
        answer:
          'Yes. MMKK AI provides local billing guidance and direct support for Microsoft 365 customers in Myanmar rather than routing every issue through an overseas support queue.',
      },
    ],
    guideSlug: 'google-workspace-vs-microsoft-365',
  },
  {
    country: 'myanmar',
    slug: 'google-workspace-migration',
    solutionSlug: 'google-workspace',
    h1: 'Google Workspace Migration in Myanmar',
    metaTitle: 'Google Workspace Migration Myanmar | MMKK AI',
    metaDescription:
      'End-to-end Google Workspace migration for businesses in Myanmar — mail, calendar, and file migration with minimal downtime and full staff onboarding.',
    intro:
      'MMKK AI plans and executes Google Workspace migrations for businesses in Myanmar switching from legacy email, on-premise systems, or Microsoft 365.',
    body:
      'A migration that goes wrong means lost email history, broken calendar invites, and a week of confused staff. MMKK AI runs Google Workspace migrations on a fixed process: an audit of your current mail and file systems, a staged migration plan with a defined cutover window, the actual data migration (mail, contacts, calendar, and shared files), and hands-on staff onboarding so the switch doesn’t stall productivity. Most migrations for a 10–50 person team in Myanmar are completed within one to two weeks with no more than a single planned downtime window.',
    features: [
      'Pre-migration audit of existing mail, calendar, and file systems',
      'Staged migration plan with a defined cutover window',
      'Mail, contacts, calendar, and shared file migration',
      'DNS and MX record cutover management',
      'Staff onboarding and post-migration support',
    ],
    faq: [
      {
        question: 'How long does a Google Workspace migration take in Myanmar?',
        answer:
          'Most migrations for a 10–50 person team take one to two weeks from audit to completed cutover, with a single planned downtime window, usually scheduled outside business hours.',
      },
      {
        question: 'What breaks during a Google Workspace migration?',
        answer:
          'The most common risks are lost calendar invites, broken shared-drive permissions, and email delivery gaps during DNS cutover. MMKK AI’s staged process is built specifically to avoid these by migrating data before switching MX records live.',
      },
      {
        question: 'Can MMKK AI migrate us from Microsoft 365 to Google Workspace?',
        answer:
          'Yes. MMKK AI handles migrations in both directions — Microsoft 365 to Google Workspace and Google Workspace to Microsoft 365 — based on which platform fits your business better.',
      },
    ],
    guideSlug: 'google-workspace-migration-guide',
  },
  {
    country: 'myanmar',
    slug: 'hubspot-crm',
    solutionSlug: 'hubspot-crm',
    h1: 'HubSpot CRM in Myanmar',
    metaTitle: 'HubSpot CRM Myanmar | Implementation & Setup | MMKK AI',
    metaDescription:
      'HubSpot CRM implementation for SMEs and mid-market companies in Myanmar — pipeline setup, data migration, and team onboarding by MMKK AI.',
    intro:
      'MMKK AI implements HubSpot CRM for sales teams in Myanmar that have outgrown spreadsheets and need a pipeline that gets used, not abandoned.',
    body:
      'Most CRM rollouts fail on adoption, not configuration — the pipeline gets set up, the team logs a few deals, and within a month everyone is back to spreadsheets and messaging apps. MMKK AI implements HubSpot CRM with your actual sales process as the starting point: deal stages that match how your team really sells, contact and company data cleaned up during import, email sequences configured for follow-up, and reporting dashboards your sales lead can actually read. We also run the onboarding sessions, because a CRM nobody logs into is worse than no CRM at all.',
    features: [
      'Pipeline and deal-stage configuration matched to your sales process',
      'Contact and company data import and cleanup',
      'Email sequence and marketing automation setup',
      'Reporting dashboards for pipeline visibility',
      'Team onboarding and adoption training',
    ],
    faq: [
      {
        question: 'Is HubSpot CRM implementation available in Myanmar?',
        answer:
          'Yes. MMKK AI implements HubSpot CRM for SMEs and mid-market companies in Myanmar, including pipeline setup, data migration, and hands-on team onboarding.',
      },
      {
        question: 'How is HubSpot different from Apollo?',
        answer:
          'HubSpot is a CRM — it manages your pipeline, contacts, and deals once a lead exists. Apollo is a prospecting tool — it finds and reaches new contacts to create leads. Most sales teams use Apollo to generate leads and HubSpot to manage them; MMKK AI sets up both to work together.',
      },
      {
        question: 'How much does HubSpot CRM implementation cost?',
        answer:
          'Implementation cost depends on team size and how much data migration and customization is needed. MMKK AI scopes this after a short discovery call and provides a fixed quote before work begins.',
      },
    ],
    guideSlug: 'hubspot-crm-guide',
  },
  {
    country: 'myanmar',
    slug: 'apollo-lead-generation',
    solutionSlug: 'apollo-lead-generation',
    h1: 'Apollo Lead Generation in Myanmar',
    metaTitle: 'Apollo Lead Generation Myanmar | MMKK AI',
    metaDescription:
      'Apollo setup for B2B lead generation and outbound sales in Myanmar — targeted lists, sequences, and CRM integration by MMKK AI.',
    intro:
      'MMKK AI configures Apollo for businesses in Myanmar that need a repeatable outbound sales motion instead of one-off cold outreach.',
    body:
      'Apollo combines a large B2B contact database with sequencing tools, but the setup work — building an accurate ideal-customer-profile filter, configuring sequences that don’t land in spam, and connecting Apollo to your CRM so replies become tracked deals — is what determines whether it produces meetings or just noise. MMKK AI handles that setup end to end for sales teams in Myanmar, including sender domain and deliverability configuration, which is often the difference between a campaign that works and one that never leaves the outbox.',
    features: [
      'Ideal customer profile and targeted list-building',
      'Outbound email sequence configuration',
      'Sender domain and deliverability setup',
      'CRM integration so replies become tracked deals',
      'Reporting on reply rates and meetings booked',
    ],
    faq: [
      {
        question: 'What is Apollo used for?',
        answer:
          'Apollo is a B2B sales intelligence and outbound platform used to find contact information for target buyers and run email outreach sequences at scale. It is a prospecting tool, not a CRM — see our full guide for how it fits alongside HubSpot.',
      },
      {
        question: 'Can Apollo be set up for a small sales team in Myanmar?',
        answer:
          'Yes. MMKK AI configures Apollo for teams of any size in Myanmar, from a single founder doing outbound sales to a multi-person sales team, scaled to the plan and sequence volume that fits your budget.',
      },
      {
        question: 'Does Apollo integrate with HubSpot?',
        answer:
          'Yes. MMKK AI connects Apollo to HubSpot so that replies and engaged leads sync directly into your CRM pipeline rather than staying in a separate outreach tool.',
      },
    ],
    guideSlug: 'what-is-apollo',
  },
  {
    country: 'myanmar',
    slug: 'google-cloud',
    solutionSlug: 'google-cloud',
    h1: 'Google Cloud in Myanmar',
    metaTitle: 'Google Cloud Partner Myanmar | Architecture & Migration | MMKK AI',
    metaDescription:
      'Official Google Cloud Co-Sell Partner providing architecture, migration, and cost-optimization consulting for businesses in Myanmar.',
    intro:
      'MMKK AI is an official Google Cloud Co-Sell Partner providing infrastructure architecture, migration, and AI deployment for businesses in Myanmar.',
    body:
      'Buying Google Cloud directly gives you the infrastructure; it doesn’t give you an architecture that’s sized correctly, secured by default, or cost-optimized so your bill doesn’t creep up quietly every month. MMKK AI works with technology companies and enterprises in Myanmar as a Google Cloud partner, handling architecture design, migration from existing infrastructure, Gemini AI and Vertex AI deployment, and ongoing cost monitoring — with local billing and support so technical issues get resolved without an overseas escalation chain.',
    features: [
      'Cloud architecture design and migration planning',
      'Compute, storage, and networking setup',
      'Gemini AI and Vertex AI deployment',
      'Cost monitoring and optimization',
      'Local billing and technical support',
    ],
    faq: [
      {
        question: 'What does a Google Cloud partner in Myanmar actually do versus buying directly from Google?',
        answer:
          'A Google Cloud partner like MMKK AI handles architecture design, migration execution, security configuration, and ongoing cost optimization — work that buying a Google Cloud account directly does not include. Partners also provide local billing support and technical escalation.',
      },
      {
        question: 'Is Google Cloud consulting available for startups in Myanmar?',
        answer:
          'Yes. MMKK AI works with businesses of all sizes in Myanmar, from early-stage technology companies needing a lean architecture to enterprises migrating legacy infrastructure.',
      },
      {
        question: 'Can MMKK AI help reduce our Google Cloud bill?',
        answer:
          'Yes. Cost monitoring and optimization is a standard part of MMKK AI’s Google Cloud engagement, including rightsizing compute resources and identifying unused or oversized allocations.',
      },
    ],
  },

  // ---------------- THAILAND (4) ----------------
  {
    country: 'thailand',
    slug: 'google-workspace',
    solutionSlug: 'google-workspace',
    h1: 'Google Workspace in Thailand',
    metaTitle: 'Google Workspace Thailand | Setup, Licensing & Support | MMKK AI',
    metaDescription:
      'Official Google Cloud partner deploying Google Workspace for businesses in Thailand — setup, licensing, migration, and local support in Bangkok.',
    intro:
      'MMKK AI is an official Google Cloud partner deploying Google Workspace for SMEs, mid-market companies, and enterprises across Thailand.',
    body:
      'MMKK AI handles the full Google Workspace setup for businesses in Thailand: domain and MX record configuration, user provisioning, two-step verification and device management policies, and shared drive architecture built around how your teams actually work. Billing and support are handled locally, with the same setup process MMKK AI uses across its Myanmar deployments — so the experience is consistent whether your team is in Bangkok or Yangon.',
    features: [
      'Domain verification and email (MX record) setup',
      'User provisioning and organizational unit structure',
      '2-step verification, device management, and data-loss prevention policies',
      'Shared Drive structure for departments and projects',
      'Local billing guidance and ongoing admin support',
    ],
    faq: [
      {
        question: 'How much does Google Workspace cost in Thailand?',
        answer:
          'Google Workspace is priced per user per month across several tiers. MMKK AI helps Thailand-based businesses choose the right tier and manages billing and renewals directly.',
      },
      {
        question: 'Does Google Workspace support work locally in Bangkok?',
        answer:
          'Yes. MMKK AI provides a dedicated Thailand contact line and local billing support for Google Workspace customers, rather than routing support through Google’s general help center.',
      },
      {
        question: 'How long does setup take for a team in Thailand?',
        answer:
          'A standard setup for a team of 10–50 users typically takes 3–7 business days, covering domain verification, provisioning, and security configuration.',
      },
    ],
    guideSlug: 'google-workspace-vs-microsoft-365',
  },
  {
    country: 'thailand',
    slug: 'microsoft-365',
    solutionSlug: 'microsoft-365',
    h1: 'Microsoft 365 in Thailand',
    metaTitle: 'Microsoft 365 Thailand | Setup, Licensing & Support | MMKK AI',
    metaDescription:
      'Microsoft Azure Deployment Partner setting up Microsoft 365 — Outlook, Teams, SharePoint — for businesses in Thailand, with local billing and support.',
    intro:
      'MMKK AI deploys Microsoft 365 for businesses in Thailand that need Outlook, Teams, and SharePoint running reliably, with local support behind it.',
    body:
      'As a Microsoft Azure Deployment Partner, MMKK AI handles tenant provisioning, mailbox migration, security defaults, and SharePoint/Teams architecture for businesses across Thailand. The same setup discipline used for Myanmar deployments applies here — licensing-tier selection based on actual usage, not the default recommendation, and conditional access policies configured before rollout rather than after an incident.',
    features: [
      'Tenant setup and licensing-tier selection (Business Basic to Enterprise)',
      'Exchange Online mailbox migration',
      'Teams and SharePoint site architecture',
      'Conditional access and security baseline configuration',
      'Local billing support and ongoing helpdesk access',
    ],
    faq: [
      {
        question: 'Is Microsoft 365 or Google Workspace better for a business in Thailand?',
        answer:
          'It depends on your existing tools: Microsoft 365 suits teams standardized on Windows and Office file formats, while Google Workspace is often simpler for smaller, browser-first teams. See our full comparison guide for a detailed breakdown.',
      },
      {
        question: 'Can MMKK AI migrate our Thailand office from Google Workspace to Microsoft 365?',
        answer:
          'Yes. MMKK AI runs two-way migrations between Google Workspace and Microsoft 365 with a planned cutover window to minimize disruption to your Thailand team.',
      },
      {
        question: 'Is local support available for Microsoft 365 in Thailand?',
        answer:
          'Yes. MMKK AI provides direct local support and billing assistance for Microsoft 365 customers in Thailand.',
      },
    ],
    guideSlug: 'google-workspace-vs-microsoft-365',
  },
  {
    country: 'thailand',
    slug: 'hubspot-crm',
    solutionSlug: 'hubspot-crm',
    h1: 'HubSpot CRM in Thailand',
    metaTitle: 'HubSpot CRM Thailand | Implementation & Setup | MMKK AI',
    metaDescription:
      'HubSpot CRM implementation for SMEs and mid-market companies in Thailand — pipeline setup, data migration, and team onboarding by MMKK AI.',
    intro:
      'MMKK AI implements HubSpot CRM for sales teams in Thailand, from real estate brokerages to professional services firms managing client pipelines.',
    body:
      'MMKK AI configures HubSpot CRM around your actual sales process rather than a generic template — deal stages matched to how your team sells, contact data cleaned up during migration, and reporting dashboards that give sales leadership real visibility. For real estate firms and professional services companies in Thailand specifically, this usually means custom pipeline stages for listings or client engagements rather than HubSpot’s out-of-the-box software-sales pipeline.',
    features: [
      'Pipeline and deal-stage configuration matched to your sales process',
      'Contact and company data import and cleanup',
      'Email sequence and marketing automation setup',
      'Reporting dashboards for pipeline visibility',
      'Team onboarding and adoption training',
    ],
    faq: [
      {
        question: 'Does MMKK AI support HubSpot CRM setup and onboarding in Thailand?',
        answer:
          'Yes. MMKK AI implements HubSpot CRM for businesses in Thailand, including pipeline configuration, data migration, and hands-on team onboarding to drive adoption.',
      },
      {
        question: 'Can HubSpot be customized for real estate sales in Thailand?',
        answer:
          'Yes. MMKK AI configures custom pipeline stages and property/deal tracking fields for real estate firms, rather than relying on HubSpot’s default software-sales pipeline template.',
      },
      {
        question: 'How long does HubSpot implementation take?',
        answer:
          'A standard implementation for a small-to-mid-size sales team takes one to three weeks, depending on the amount of existing data to migrate and how much customization is needed.',
      },
    ],
    guideSlug: 'hubspot-crm-guide',
  },
  {
    country: 'thailand',
    slug: 'google-cloud',
    solutionSlug: 'google-cloud',
    h1: 'Google Cloud in Thailand',
    metaTitle: 'Google Cloud Partner Thailand | Architecture & Migration | MMKK AI',
    metaDescription:
      'Official Google Cloud Co-Sell Partner providing architecture, migration, and cost-optimization consulting for businesses in Thailand.',
    intro:
      'MMKK AI is an official Google Cloud Co-Sell Partner providing infrastructure architecture, migration, and AI deployment for businesses in Thailand.',
    body:
      'With Google Cloud’s Bangkok region now live, more Thailand-based businesses can run infrastructure with lower latency and in-country data residency. MMKK AI helps technology companies and enterprises in Thailand architect for that region specifically — migration planning, compute and storage setup, Gemini AI and Vertex AI deployment, and ongoing cost monitoring so infrastructure spend stays predictable as usage grows.',
    features: [
      'Cloud architecture design for the Bangkok region',
      'Migration planning from existing infrastructure',
      'Gemini AI and Vertex AI deployment',
      'Cost monitoring and optimization',
      'Local billing and technical support',
    ],
    faq: [
      {
        question: 'Does MMKK AI offer Google Cloud consulting in Thailand?',
        answer:
          'Yes. As an official Google Cloud Co-Sell Partner, MMKK AI provides architecture, migration, and cost-optimization consulting for businesses in Thailand, including deployments in the Bangkok region.',
      },
      {
        question: 'What changed with the new Google Cloud Bangkok region?',
        answer:
          'Google Cloud launched a cloud region in Bangkok in January 2026, allowing Thailand-based businesses to run workloads with lower latency and local data residency. MMKK AI helps businesses plan migrations to take advantage of it.',
      },
      {
        question: 'Can MMKK AI help reduce our Google Cloud bill in Thailand?',
        answer:
          'Yes. Cost monitoring and optimization is a standard part of MMKK AI’s Google Cloud engagement for Thailand-based clients, including rightsizing and identifying unused resources.',
      },
    ],
  },
]

export function getLandingPage(country: 'myanmar' | 'thailand', slug: string) {
  return landingPages.find((p) => p.country === country && p.slug === slug)
}

export function getLandingPagesForCountry(country: 'myanmar' | 'thailand') {
  return landingPages.filter((p) => p.country === country)
}
