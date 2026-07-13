export interface GuideSection {
  heading: string
  body: string
}

export interface Guide {
  slug: string
  title: string
  metaDescription: string
  datePublished: string
  intro: string
  sections: GuideSection[]
}

export const guides: Guide[] = [
  {
    slug: 'google-workspace-vs-microsoft-365',
    title: 'Google Workspace vs. Microsoft 365: Which Is Right for Your Business?',
    metaDescription:
      'A direct comparison of Google Workspace and Microsoft 365 for SMEs and mid-market companies in Myanmar and Thailand — cost, migration effort, and which fits your team.',
    datePublished: '2026-07-13',
    intro:
      'Both platforms do the same core job — email, file storage, video calls, and office documents — but they get there differently, and the right choice depends on what your team already uses, not which platform is "better."',
    sections: [
      {
        heading: 'The short answer',
        body: 'If your team is already standardized on Windows and Office file formats (.docx, .xlsx), or you need deep SharePoint/Teams integration for internal workflows, Microsoft 365 is usually the smoother fit. If your team is browser-first, uses a mix of devices, or values simpler admin controls, Google Workspace is usually faster to deploy and administer.',
      },
      {
        heading: 'Cost',
        body: 'Both platforms price per user per month across multiple tiers. Microsoft 365 Business Basic and Google Workspace Business Starter are comparably priced at the entry level; the gap widens at higher tiers depending on which advanced security and compliance features you need. MMKK AI scopes exact pricing for your team size and required tier before you commit.',
      },
      {
        heading: 'Administration',
        body: 'Google Workspace\'s admin console is generally considered simpler for IT teams without a dedicated systems administrator. Microsoft 365\'s admin center is more powerful but has a steeper learning curve, particularly around conditional access, compliance policies, and SharePoint permissions.',
      },
      {
        heading: 'Migration effort',
        body: 'Migrating between the two is a well-established process — mail, calendar, and files can all be moved with a planned cutover window. The more relevant question is usually not "how hard is the migration" but "which platform will your team actually adopt faster," since a smooth migration into a platform nobody uses well isn\'t a win.',
      },
      {
        heading: 'Our recommendation process',
        body: 'MMKK AI doesn\'t default to one platform. We look at your current tools, team size, technical comfort level, and any compliance requirements, then recommend Google Workspace or Microsoft 365 based on what will actually get adopted and maintained — not which one we prefer to sell.',
      },
    ],
  },
  {
    slug: 'what-is-apollo',
    title: 'What Is Apollo? A Practical Guide to B2B Lead Generation',
    metaDescription:
      'What Apollo is, how it differs from a CRM like HubSpot, and how businesses in Myanmar and Thailand use it for outbound lead generation.',
    datePublished: '2026-07-13',
    intro:
      'Apollo is a B2B sales intelligence and outbound engagement platform — it helps sales teams find the right contacts and reach them at scale, rather than managing deals once a lead already exists.',
    sections: [
      {
        heading: 'What Apollo actually does',
        body: 'Apollo combines a large searchable database of business contacts (filterable by industry, company size, job title, and location) with tools to build and run outbound email sequences, track opens and replies, and measure which messaging gets meetings booked.',
      },
      {
        heading: 'Apollo vs. a CRM',
        body: 'Apollo is a prospecting tool, not a system of record. A CRM like HubSpot manages the full lifecycle of a deal once a lead exists — pipeline stage, notes, follow-up tasks, and reporting. Most sales teams use Apollo to generate leads and a CRM to manage them once they reply. MMKK AI typically implements both together, with Apollo replies flowing directly into HubSpot as tracked deals.',
      },
      {
        heading: 'What determines whether Apollo works',
        body: 'The database and sequencing tools are the easy part. What actually determines results is the setup: a tightly defined ideal-customer-profile filter (so you\'re not emailing the wrong people), sequences with real personalization rather than generic templates, and sender domain / deliverability configuration so your emails land in inboxes instead of spam folders.',
      },
      {
        heading: 'Is Apollo worth it for a small team?',
        body: 'Yes, for teams doing active outbound sales — real estate brokers reaching property developers, agencies reaching new clients, or B2B service firms building a pipeline. It\'s less useful for businesses that rely entirely on inbound or referral leads, where the spend is better directed elsewhere.',
      },
    ],
  },
  {
    slug: 'hubspot-crm-guide',
    title: 'HubSpot CRM Implementation Guide for Growing Businesses',
    metaDescription:
      'How HubSpot CRM implementation actually works — pipeline setup, data migration, and the adoption mistakes that make most CRM rollouts fail.',
    datePublished: '2026-07-13',
    intro:
      'Most CRM rollouts don\'t fail because the software is bad — they fail because the pipeline doesn\'t match how the sales team actually sells, and nobody runs the onboarding needed to make logging a deal a habit.',
    sections: [
      {
        heading: 'Step 1: Map your actual sales process first',
        body: 'Before any HubSpot configuration happens, MMKK AI documents how deals actually move through your business today — not a generic template. A real estate brokerage\'s pipeline (listing → viewing → offer → closing) looks nothing like a software company\'s (demo → trial → contract), and using the wrong template is the single biggest reason teams abandon a new CRM.',
      },
      {
        heading: 'Step 2: Clean data in, not just data in',
        body: 'Importing years of messy spreadsheet contacts without cleanup just moves the mess into HubSpot. Deduplication, standardizing company names, and tagging contacts by segment before import saves months of reporting headaches later.',
      },
      {
        heading: 'Step 3: Automate the follow-ups that get skipped',
        body: 'Email sequences and task reminders for follow-up are where HubSpot pays for itself — leads that would have gone cold because someone forgot to follow up get a scheduled nudge instead.',
      },
      {
        heading: 'Step 4: Build dashboards leadership will actually check',
        body: 'A reporting dashboard nobody opens is a wasted feature. MMKK AI builds 2–3 focused dashboards (pipeline value, deals by stage, rep activity) rather than dozens of reports that dilute attention.',
      },
      {
        heading: 'Step 5: Onboard the team, don\'t just hand them a login',
        body: 'The adoption step most implementations skip. MMKK AI runs live onboarding sessions with your sales team, not just a shared help article, because a CRM nobody logs into is worse than no CRM at all — you lose visibility without gaining anything.',
      },
    ],
  },
  {
    slug: 'google-workspace-migration-guide',
    title: 'Google Workspace Migration: The Complete Process and Timeline',
    metaDescription:
      'What actually happens during a Google Workspace migration — the audit, cutover, and onboarding steps — and how long it takes for a typical SME.',
    datePublished: '2026-07-13',
    intro:
      'A Google Workspace migration is a well-understood process, but most of the risk comes from skipping the planning steps and going straight to a DNS cutover.',
    sections: [
      {
        heading: 'Step 1: Audit',
        body: 'Before touching anything, MMKK AI audits your current email system, file storage, and calendar setup — how many mailboxes, how much data, which shared drives or distribution lists need to be recreated in Google Workspace.',
      },
      {
        heading: 'Step 2: Staged migration plan',
        body: 'Mail, contacts, and files are migrated into the new Google Workspace accounts while the old system is still live and receiving mail — nothing is switched off yet. This is what prevents lost email during the transition.',
      },
      {
        heading: 'Step 3: Cutover',
        body: 'Once data is fully migrated and verified, MX records are switched so new mail routes to Google Workspace. This is scheduled during a low-traffic window (typically a weekend or evening) and is usually the only point with any visible downtime — often under an hour.',
      },
      {
        heading: 'Step 4: Staff onboarding',
        body: 'The migration isn\'t complete when the data moves — it\'s complete when your team knows where their files are and how to use Gmail, Drive, and Calendar day to day. MMKK AI runs short onboarding sessions immediately after cutover.',
      },
      {
        heading: 'Typical timeline',
        body: 'For a 10–50 person business, the full process from audit to completed onboarding typically takes one to two weeks. Larger migrations with complex shared drive permissions or custom mail routing rules can take longer — MMKK AI provides an exact timeline after the audit step.',
      },
    ],
  },
]

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug)
}
