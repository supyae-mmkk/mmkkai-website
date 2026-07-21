// Canonical list of the 8 solutions MMKK AI sells.
// Single source of truth for the Navbar "Solutions" mega-menu, the homepage
// solutions grid, and each /solutions/[slug] page.

import type { FaqItem } from './faq'
import { NEUTRAL_PHRASES } from './companyConfig'

export type Pillar = 'cloud' | 'crm' | 'ai' | 'support' | 'creative'

export interface LocalizedMeta {
  title: string
  description: string
}

export interface Solution {
  slug: string
  name: string
  shortName: string
  pillar: Pillar
  tagline: string
  meta: { en: LocalizedMeta; th: LocalizedMeta; mm: LocalizedMeta }
  whatItDoes: string
  suitableFor: string
  outcomes: string[]
  implementationScope: string
  migrationConsiderations: string
  security: string
  integrations: string[]
  limitations: string
  features: string[]
  faq: FaqItem[]
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
    tagline: 'Gmail, Drive, Docs, and Meet - set up and administered correctly from day one.',
    meta: {
      en: {
        title: 'Google Workspace Implementation & Support | MMKK AI',
        description: 'Google Workspace setup, migration, and admin support for growing businesses - domain setup, security policy, and shared drive structure.',
      },
      th: {
        title: 'บริการติดตั้งและดูแล Google Workspace | MMKK AI',
        description: 'บริการติดตั้ง ย้ายระบบ และดูแล Google Workspace สำหรับธุรกิจที่กำลังเติบโต',
      },
      mm: {
        title: 'Google Workspace အသုံးပြုမှုနှင့် ပံ့ပိုးမှု | MMKK AI',
        description: 'ကြီးထွားနေသော လုပ်ငန်းများအတွက် Google Workspace တပ်ဆင်ခြင်း၊ ပြောင်းရွှေ့ခြင်းနှင့် စီမံခန့်ခွဲမှု ပံ့ပိုးမှု။',
      },
    },
    whatItDoes:
      'Google Workspace bundles Gmail, Drive, Docs, Sheets, Slides, Meet, and Calendar under a company-controlled domain, with a central admin console for managing users, security policy, and shared storage. MMKK AI handles the setup and administration work that turns a Workspace subscription into a properly governed system: domain verification, account provisioning, security configuration, and shared drive architecture, rather than a collection of default settings nobody has reviewed.',
    suitableFor:
      'Suitable for businesses currently running on personal or unmanaged Gmail accounts, teams that need documents and calendars shared across departments without emailing attachments back and forth, and organizations - including international schools using Workspace for Education - that need account structure to survive staff turnover.',
    outcomes: [
      'Company email and files that belong to the organization, not whichever individual happens to hold the account',
      'A shared drive structure teams can actually navigate, replacing scattered email attachments',
      'Security policy (2-step verification, device management) applied consistently rather than left at defaults',
      'One admin console for managing every account, rather than tracking logins individually',
    ],
    implementationScope:
      'A typical setup covers domain verification and MX record configuration, organizational unit structure matched to your team layout, security policy configuration, and shared drive setup for departments or projects. For teams already on Workspace but administered ad hoc, we can also audit and restructure an existing setup rather than starting from zero.',
    migrationConsiderations:
      'Moving from personal Gmail accounts, Microsoft 365, or another email host involves migrating mail, contacts, calendar entries, and files on a staged basis, with the old system still live until the new one is verified working, followed by a single planned MX-record cutover window.',
    security:
      'We configure 2-step verification, device management for company and personal devices accessing company mail, and data-loss prevention rules appropriate to what your business handles, so security is deliberately set rather than left at Google’s defaults. For organizations with limited internal IT staff, this means the policy is configured once by someone who understands the tradeoffs, rather than left unconfigured indefinitely because nobody has time to review it.',
    integrations: [
      'Google Calendar and Meet for scheduling and video conferencing',
      'Third-party apps via the Google Workspace Marketplace',
      'Single sign-on (SSO) configuration for businesses with additional identity providers',
    ],
    limitations:
      'Google Workspace is not a CRM, project management tool, or accounting system - it covers email, files, and calendar/meeting infrastructure. Businesses needing structured sales pipelines or financial record-keeping will need a separate tool (see HubSpot CRM) integrated alongside it.',
    features: [
      'Domain verification and MX record setup',
      'Organizational unit structure for different teams',
      '2-step verification and device management',
      'Shared Drive structure for departments and projects',
      'Ongoing admin support and license management',
    ],
    faq: [
      {
        question: 'How is Google Workspace different from using free Gmail?',
        answer: 'Free Gmail accounts belong to individuals and offer no central admin control. Google Workspace runs on your own domain with a central console for managing accounts, security policy, and storage - the account belongs to the organization, not the person using it.',
      },
      {
        question: 'Can Google Workspace replace our file server?',
        answer: 'For most SMEs and mid-market businesses, yes - Shared Drives replace a traditional file server for document storage and collaboration. Businesses with specialized storage or compliance requirements should discuss specifics during scoping.',
      },
      {
        question: 'Do you support Google Workspace for Education?',
        answer: 'Yes - international schools have different licensing terms than standard business Workspace, and we help confirm eligibility and set up the correct edition.',
      },
          {
        question: 'How long does a fresh Google Workspace setup take?',
        answer: 'Estimated timelines are confirmed after technical scoping and depend on user count, data volume, integrations, and migration complexity. For a straightforward setup, this typically covers domain verification, account provisioning, and security configuration.',
      },
      {
        question: 'Can we keep our existing domain when moving to Google Workspace?',
        answer: 'Yes - Workspace runs on the domain you already own; setup involves verifying ownership and updating mail-routing (MX) records rather than changing or replacing the domain itself.',
      },
],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    shortName: 'Microsoft 365',
    pillar: 'cloud',
    tagline: 'Outlook, Teams, SharePoint, and Office apps - deployed and governed properly.',
    meta: {
      en: {
        title: 'Microsoft 365 Implementation & Support | MMKK AI',
        description: 'Microsoft 365 tenant setup, licensing, and admin support - Exchange Online, Teams, and SharePoint architecture for growing teams.',
      },
      th: {
        title: 'บริการติดตั้งและดูแล Microsoft 365 | MMKK AI',
        description: 'บริการติดตั้งระบบ Microsoft 365 การกำหนดสิทธิ์ใช้งาน และการดูแลระบบสำหรับทีมที่กำลังเติบโต',
      },
      mm: {
        title: 'Microsoft 365 အသုံးပြုမှုနှင့် ပံ့ပိုးမှု | MMKK AI',
        description: 'ကြီးထွားနေသော အဖွဲ့များအတွက် Microsoft 365 tenant တပ်ဆင်ခြင်း၊ လိုင်စင်ခွင့်ပြုချက်နှင့် စီမံခန့်ခွဲမှု ပံ့ပိုးမှု။',
      },
    },
    whatItDoes:
      'Microsoft 365 bundles Outlook, Teams, SharePoint, OneDrive, and the desktop and web Office apps under a managed tenant. MMKK AI handles tenant provisioning, licensing-tier selection, and the governance work (conditional access, Teams/SharePoint architecture) that determines whether a Microsoft 365 rollout is actually secure and organized, or just a collection of defaults.',
    suitableFor:
      'Suitable for businesses already standardized on Windows and Office file formats, teams that exchange native Office documents with partners, banks, or government bodies, and organizations that need SharePoint document libraries with real folder permissions rather than email attachments.',
    outcomes: [
      'Company email, Teams, and file storage under one managed tenant instead of unmanaged personal accounts',
      'SharePoint and Teams structured around actual departments, not a flat, unorganized default',
      'Conditional access and multi-factor authentication configured deliberately',
      'A licensing tier matched to actual usage, avoiding both under- and over-buying',
    ],
    implementationScope:
      'A typical engagement covers tenant setup, licensing-tier selection (Business Basic through Enterprise), Exchange Online configuration, and Teams/SharePoint site architecture by department. For businesses with an existing on-premise Active Directory, we also plan identity-sync (hybrid identity) so accounts stay managed from one source.',
    migrationConsiderations:
      'Migrating mailboxes from Google Workspace, another email host, or a legacy on-premise system happens on a staged basis - mail and calendar data move into Exchange Online while the old system stays live, with a single planned cutover window once everything is verified.',
    security:
      'We configure conditional access policies (who can sign in, from where, and on what device), multi-factor authentication, and a security baseline appropriate for teams without a dedicated in-house security specialist, rather than leaving Microsoft’s defaults unreviewed. This matters in particular for teams without a dedicated in-house security specialist, where default settings might otherwise go unquestioned indefinitely.',
    integrations: [
      'Power BI and Power Automate for reporting and workflow automation',
      'On-premise Active Directory via hybrid identity sync',
      'Third-party apps via Microsoft AppSource',
    ],
    limitations:
      'Microsoft 365 covers productivity and collaboration, not CRM or dedicated project management - businesses needing structured sales pipelines will still need HubSpot or a comparable tool alongside it. Teams unfamiliar with SharePoint’s permission model also face a steeper initial learning curve than simpler file-sharing tools.',
    features: [
      'Tenant setup and licensing-tier selection',
      'Exchange Online mailbox migration',
      'Teams and SharePoint site architecture',
      'Conditional access and MFA configuration',
      'Local billing support and ongoing admin assistance',
    ],
    faq: [
      {
        question: 'Is Microsoft 365 better than Google Workspace?',
        answer: 'Neither is universally better - it depends on your existing tools and team habits. See our Google Workspace vs. Microsoft 365 guide for a full comparison rather than defaulting to either based on familiarity alone.',
      },
      {
        question: 'Do you handle hybrid identity with an existing Active Directory?',
        answer: 'Yes, for businesses that already run on-premise Active Directory, we plan and configure identity sync so accounts stay managed from a single source rather than drifting out of sync between two systems, which avoids the common problem of an employee\'s access being updated in one system but not the other.',
      },
      {
        question: 'What licensing tier do most small teams need?',
        answer: 'Business Standard covers most small-team needs (desktop Office apps plus Teams and SharePoint); Premium adds advanced device management and threat protection that many smaller teams don’t need yet. We assess this based on actual team size and risk profile.',
      },
          {
        question: 'Can Microsoft 365 integrate with Power BI for reporting?',
        answer: 'Yes - Power BI connects natively to Microsoft 365 data sources, and we can help scope basic reporting dashboards as part of a broader implementation, though deep Power BI development is typically its own project.',
      },
      {
        question: 'What happens to our files if we ever move away from Microsoft 365?',
        answer: 'Files can be exported in standard formats at any time - Microsoft 365 does not lock documents into a proprietary format that blocks retrieval, though a planned export is easier to manage than an unplanned one if a business switches platforms later.',
      },
],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'hubspot-crm',
    name: 'HubSpot CRM',
    shortName: 'HubSpot CRM',
    pillar: 'crm',
    tagline: 'A sales pipeline your team will actually keep updated.',
    meta: {
      en: {
        title: 'HubSpot CRM Implementation | MMKK AI',
        description: 'HubSpot CRM implementation - pipeline configuration, data migration, and team onboarding for SMEs and mid-market companies.',
      },
      th: {
        title: 'บริการติดตั้งระบบ HubSpot CRM | MMKK AI',
        description: 'บริการติดตั้งระบบ HubSpot CRM การกำหนดค่าไปป์ไลน์ และการฝึกอบรมทีมงานสำหรับ SME และธุรกิจระดับกลาง',
      },
      mm: {
        title: 'HubSpot CRM တပ်ဆင်မှု | MMKK AI',
        description: 'SME နှင့် အလတ်စားကုမ္ပဏီများအတွက် HubSpot CRM တပ်ဆင်မှု — pipeline ပြင်ဆင်သတ်မှတ်ခြင်း၊ ဒေတာပြောင်းရွှေ့ခြင်းနှင့် အဖွဲ့လေ့ကျင့်ရေး။',
      },
    },
    whatItDoes:
      'HubSpot CRM tracks contacts, companies, and deals through a configurable pipeline, with email sequences, task reminders, and reporting dashboards on top. MMKK AI configures HubSpot around your actual sales process - deal stages, data migration, and reporting - and runs the team onboarding that determines whether a CRM actually gets used.',
    suitableFor:
      'Suitable for SMEs and mid-market companies that have outgrown spreadsheet-based sales tracking, real estate brokerages managing property listings and buyer pipelines, and professional services firms that need a client record that survives staff turnover.',
    outcomes: [
      'One current, shared record of every active deal instead of scattered spreadsheets or one person’s memory',
      'Follow-ups that get scheduled and tracked instead of forgotten',
      'Leadership visibility into total pipeline value without asking individual reps',
      'Client history that survives when a salesperson leaves the company',
    ],
    implementationScope:
      'A typical implementation covers sales-process mapping (documenting how your team actually sells before configuring anything), pipeline and deal-stage setup, contact/company data cleanup and import, email sequence configuration, and two to three focused reporting dashboards.',
    migrationConsiderations:
      'Existing data - almost always a spreadsheet, sometimes a previous CRM - is cleaned and de-duplicated before import, since moving years of messy data in as-is just relocates the mess into HubSpot rather than solving it. This cleanup step is usually where most of the implementation time goes, and skipping it is the most common reason a new CRM ends up feeling just as disorganized as the spreadsheet it replaced.',
    security:
      'User permissions are configured so reps see their own deals while managers see team-wide pipeline, with data export and deletion rights restricted to admins - relevant for businesses concerned about a departing salesperson exporting the client list on their way out.',
    integrations: [
      'Apollo for outbound lead generation feeding directly into the pipeline',
      'Email providers (Gmail, Outlook) for two-way email sync',
      'Common accounting and support-ticketing tools via native or third-party integrations',
    ],
    limitations:
      'HubSpot’s free and Starter tiers have limited automation and reporting depth; businesses with complex multi-stage approval workflows may need Professional or Enterprise tiers, which we scope based on actual requirements rather than defaulting to the cheapest option and hitting a wall later. We size this during scoping rather than assuming every business needs the same tier.',
    features: [
      'Pipeline and deal-stage configuration matched to your sales process',
      'Contact and company data import and cleanup',
      'Email sequence and follow-up automation setup',
      'Reporting dashboards built around metrics leadership will use',
      'Live team onboarding and adoption training',
    ],
    faq: [
      {
        question: 'Is HubSpot CRM implementation available in Myanmar and Thailand?',
        answer: 'Yes - see our Myanmar and Thailand HubSpot CRM pages for country-specific implementation details and local support information.',
      },
      {
        question: 'How is HubSpot different from Apollo?',
        answer: 'HubSpot manages your pipeline once a lead exists; Apollo finds and reaches new contacts to create leads in the first place. Most teams use both together - see our What Is Apollo guide.',
      },
      {
        question: 'Do you customize pipeline stages for specific industries like real estate?',
        answer: 'Yes - we configure custom deal stages matched to your actual sales process (listings and buyer engagement for real estate, for example) rather than relying on HubSpot’s default software-sales template.',
      },
      {
        question: 'Can HubSpot send automated follow-up reminders to sales reps?',
        answer: 'Yes - task reminders and sequence-based follow-ups are core HubSpot features; we configure these around the specific points in your sales process where deals are most commonly forgotten or delayed.',
      },
      {
        question: 'Can we import data from a previous CRM, not just a spreadsheet?',
        answer: 'Yes - migrating from another CRM is common; the process still involves cleaning and mapping fields to HubSpot\'s structure rather than a direct one-to-one transfer, since the two systems rarely organize data identically.',
      },
          {
        question: 'How long does HubSpot implementation typically take?',
        answer: 'Estimated timelines are confirmed after technical scoping and depend on user count, data volume, integrations, and migration complexity. For a typical small-to-mid-size sales team, this covers sales-process mapping, pipeline configuration, and data cleanup and import.',
      },
],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'apollo-lead-generation',
    name: 'Apollo Lead Generation',
    shortName: 'Apollo',
    pillar: 'crm',
    tagline: 'Find and reach the right buyers before your competitors do.',
    meta: {
      en: {
        title: 'Apollo Lead Generation Setup | MMKK AI',
        description: 'Apollo setup for outbound B2B lead generation - targeted lists, sequences, deliverability, and CRM integration.',
      },
      th: {
        title: 'บริการติดตั้ง Apollo สำหรับการหาลูกค้าใหม่ | MMKK AI',
        description: 'บริการติดตั้ง Apollo สำหรับการหาลูกค้าใหม่แบบ outbound รายชื่อเป้าหมาย ลำดับอีเมล และการเชื่อมต่อกับ CRM',
      },
      mm: {
        title: 'Apollo Lead Generation တပ်ဆင်မှု | MMKK AI',
        description: 'outbound B2B lead generation အတွက် Apollo တပ်ဆင်မှု — ပစ်မှတ်ထားသည့်စာရင်းများ၊ email sequence များနှင့် CRM ချိတ်ဆက်မှု။',
      },
    },
    whatItDoes:
      'Apollo combines a searchable B2B contact database with outbound email sequencing and reply tracking. MMKK AI configures the targeting, messaging, and deliverability setup that determines whether Apollo produces meetings or just noise - the database alone doesn’t generate leads; the setup around it does.',
    suitableFor:
      'Suitable for technology companies selling to regional or international buyers, agencies pursuing new clients through outbound rather than only referrals, and B2B service firms that need a repeatable prospecting motion their team can run consistently.',
    outcomes: [
      'A precisely-targeted contact list instead of broad, low-relevance outreach',
      'Sequences with real personalization that get replies instead of being ignored',
      'Deliverability configuration that keeps messages out of spam folders',
      'Replies flowing directly into a tracked CRM pipeline instead of a separate inbox',
    ],
    implementationScope:
      'A typical setup covers ideal-customer-profile definition, sequence writing with genuine personalization variables, sender domain and deliverability configuration (SPF, DKIM, warm-up), and CRM integration so replies become tracked deals.',
    migrationConsiderations:
      'Businesses moving from manual LinkedIn prospecting or a different outreach tool typically need existing contact lists reviewed and cleaned before import, since carrying over an unfiltered list undermines the targeting precision Apollo is meant to provide. We typically recommend starting from a smaller, freshly-verified list rather than importing an old list wholesale, even when the old list is larger.',
    security:
      'Apollo seats and list-export permissions are scoped per team member, and sender domain configuration is set up to protect your primary company domain’s deliverability reputation rather than risking it on unproven sequences sent from the main domain directly. We typically recommend a dedicated sending subdomain during the first months of a new sequence, moving to the primary domain only once deliverability is proven stable.',
    integrations: [
      'HubSpot and other CRMs for two-way contact and deal sync',
      'Email providers for sending and deliverability monitoring',
      'LinkedIn Sales Navigator workflows for combined prospecting',
    ],
    limitations:
      'Apollo is a prospecting tool, not a CRM - it doesn’t manage the full deal lifecycle once a lead replies, which is why we typically pair it with HubSpot. Results also depend heavily on targeting precision; a large but poorly-matched list underperforms a smaller, well-targeted one regardless of sequence quality.',
    features: [
      'Ideal customer profile and targeted list-building',
      'Outbound sequence configuration with real personalization',
      'Sender domain and deliverability setup (SPF/DKIM/warm-up)',
      'CRM integration so replies become tracked deals',
      'Ongoing monitoring of reply rates and deliverability',
    ],
    faq: [
      {
        question: 'What is Apollo used for?',
        answer: 'Apollo is a B2B sales intelligence and outbound platform used to find contact information for target buyers and run email outreach sequences at scale. See our full What Is Apollo guide for a detailed breakdown.',
      },
      {
        question: 'Does Apollo work for a small sales team?',
        answer: 'Yes - we configure Apollo for teams of any size, from a single founder doing outbound to a multi-person sales team, scaled to the plan and sequence volume that fits.',
      },
      {
        question: 'How many contacts should a first campaign target?',
        answer: 'Usually narrower than expected - a few hundred tightly-matched contacts with strong personalization outperforms several thousand loosely-matched ones, and it’s easier to diagnose what’s working at smaller scale.',
      },
      {
        question: 'Can Apollo be used for account-based marketing instead of broad outbound prospecting?',
        answer: 'Yes - Apollo\'s filtering supports narrow, account-based targeting as well as broader prospecting; the sequence structure and messaging differ between the two, which we scope based on your specific sales motion.',
      },
      {
        question: 'Does Apollo integrate with LinkedIn outreach as well as email?',
        answer: 'Apollo\'s core sequencing is email-based, but it pairs with LinkedIn Sales Navigator so reps can combine both channels in a coordinated outreach plan rather than running them separately.',
      },
      {
        question: 'How long before an Apollo sequence shows reliable results?',
        answer: 'Most sequences need two to four weeks of live sending before reply and meeting-booking rates stabilize enough to judge performance, since early sends are also where deliverability and messaging get tuned.',
      },
    ],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'google-cloud',
    name: 'Google Cloud',
    shortName: 'Google Cloud',
    pillar: 'cloud',
    tagline: 'Infrastructure, AI, and compute - architected and cost-optimized.',
    meta: {
      en: {
        title: 'Google Cloud Architecture & Migration | MMKK AI',
        description: 'Google Cloud architecture, migration, and cost-optimization for technology companies and enterprises.',
      },
      th: {
        title: 'บริการสถาปัตยกรรมและการย้ายระบบ Google Cloud | MMKK AI',
        description: 'บริการด้านสถาปัตยกรรม การย้ายระบบ และการปรับต้นทุน Google Cloud สำหรับบริษัทเทคโนโลยีและองค์กร',
      },
      mm: {
        title: 'Google Cloud ဗိသုကာပုံစံနှင့် ပြောင်းရွှေ့ခြင်း | MMKK AI',
        description: 'နည်းပညာကုမ္ပဏီများနှင့် လုပ်ငန်းကြီးများအတွက် Google Cloud ဗိသုကာပုံစံ၊ ပြောင်းရွှေ့ခြင်းနှင့် ကုန်ကျစရိတ် ပိုမိုကောင်းမွန်အောင်ပြုလုပ်ခြင်း။',
      },
    },
    whatItDoes:
      'Google Cloud provides compute, storage, networking, and AI infrastructure (including Gemini and Vertex AI). MMKK AI designs the architecture, executes migrations, and manages ongoing cost optimization - the work that determines whether a Google Cloud deployment is properly sized and secured, or an expensive, loosely-managed default.',
    suitableFor:
      'Suitable for technology companies running production workloads that need more than shared hosting, enterprises migrating off on-premise infrastructure or another cloud provider, and product teams wanting to deploy AI capabilities into existing applications.',
    outcomes: [
      'Infrastructure sized for actual expected load, not a worst-case guess that inflates monthly spend',
      'Migrations executed with rollback points rather than one high-risk cutover',
      'IAM and network security configured on least-privilege principles',
      'A predictable monthly bill instead of consumption-based costs that creep upward unnoticed',
    ],
    implementationScope:
      'A typical engagement starts with an architecture review of current or planned infrastructure, followed by compute/storage/networking design, migration execution where relevant, and Gemini AI or Vertex AI deployment support for teams adding AI capabilities to existing applications.',
    migrationConsiderations:
      'Migrations from on-premise infrastructure or another cloud provider move in a planned sequence with defined rollback points at each stage, rather than a single high-risk cutover that risks extended downtime if something goes wrong.',
    security:
      'IAM roles and network security groups are configured on least-privilege principles rather than broad default permissions, with cost-alerting set up so an unexpected spend spike is caught within days, and storage bucket permissions specifically reviewed since misconfigured public storage is a common early-stage mistake.',
    integrations: [
      'Gemini AI and Vertex AI for applied AI capabilities',
      'Existing on-premise infrastructure via hybrid architectures',
      'CI/CD pipelines for development teams already using DevOps tooling',
    ],
    limitations:
      'Google Cloud is billed on consumption, meaning costs scale with usage rather than a fixed monthly fee - this requires ongoing monitoring to keep predictable, which is why cost optimization is a standard part of our engagement rather than a one-time setup task. Businesses used to fixed-fee hosting sometimes find this adjustment period the biggest change when moving to cloud infrastructure. We typically set up billing alerts and a monthly review cadence during the first few months specifically to manage that adjustment.',
    features: [
      'Cloud architecture design and migration planning',
      'Compute, storage, and networking setup sized to actual load',
      'Gemini AI and Vertex AI deployment support',
      'IAM and network security configuration on least-privilege principles',
      'Ongoing cost monitoring and optimization',
    ],
    faq: [
      {
        question: 'What does Google Cloud implementation support actually include versus buying directly from Google?',
        answer: 'Architecture design, migration execution, security configuration, and ongoing cost optimization - work that simply opening a Google Cloud account does not include.',
      },
      {
        question: 'Is this only for large enterprises?',
        answer: 'No - we work with businesses of all sizes, and smaller teams often benefit the most from getting the architecture right early rather than fixing an under-planned setup later.',
      },
      {
        question: 'Can you help reduce our existing Google Cloud bill?',
        answer: 'Yes - cost monitoring and optimization, including rightsizing compute resources and identifying unused allocations, is a standard part of our engagement.',
      },
          {
        question: 'How long does an initial architecture review take?',
        answer: 'Estimated timelines are confirmed after technical scoping and depend on user count, data volume, integrations, and migration complexity. An initial architecture review is generally the fastest step; a full migration plan takes longer and depends on workload complexity.',
      },
      {
        question: 'Do you support deploying Gemini AI into an existing application?',
        answer: 'Yes - we help identify where Gemini AI or Vertex AI can be added to an existing application without requiring a full architecture redesign, prioritizing lower-risk integration points first.',
      },
      {
        question: 'Can you migrate a workload from another cloud provider to Google Cloud?',
        answer: 'Yes - cross-provider migration is a common engagement; the approach and timeline depend on the workload\'s existing architecture and how tightly it is coupled to the current provider\'s specific services.',
      },
],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    shortName: 'AI Automation',
    pillar: 'ai',
    tagline: 'Practical AI workflows that remove manual work, not science projects.',
    meta: {
      en: {
        title: 'AI Automation for Business Workflows | MMKK AI',
        description: 'Applied AI automation for customer support, lead qualification, and internal reporting - built for measurable time saved, not a proof of concept.',
      },
      th: {
        title: 'AI Automation สำหรับกระบวนการทำงานทางธุรกิจ | MMKK AI',
        description: 'AI automation ที่ใช้งานได้จริงสำหรับฝ่ายบริการลูกค้า การคัดกรองลูกค้าเป้าหมาย และการรายงานภายใน',
      },
      mm: {
        title: 'လုပ်ငန်း Workflow များအတွက် AI Automation | MMKK AI',
        description: 'customer support၊ lead qualification နှင့် internal reporting အတွက် အသုံးချ AI automation — အချိန်ကုန်သက်သာမှုကို တိုင်းတာနိုင်စေရန် တည်ဆောက်ထားသည်။',
      },
    },
    whatItDoes:
      'AI automation applies large language models and workflow tooling to specific, repetitive business tasks - support ticket triage, lead qualification, document processing, internal reporting. MMKK AI builds these as targeted workflows using tools your team already has (Gemini, Copilot) rather than open-ended AI experimentation with no defined outcome.',
    suitableFor:
      'Suitable for businesses with clearly repetitive manual workflows - customer support teams triaging incoming tickets, sales teams qualifying inbound leads, and operations teams compiling recurring internal reports from multiple sources.',
    outcomes: [
      'Measurable time saved on specific, well-defined tasks rather than a general AI initiative with no metric attached',
      'Faster response times on customer support and lead qualification',
      'Reduced manual data entry and reporting compilation',
      'AI capabilities integrated into tools your team already uses, not a separate system to learn',
    ],
    implementationScope:
      'We start by identifying one or two specific, measurable workflows - not a company-wide AI transformation - and build automation around those, expanding to additional workflows once the first ones are proven to work reliably. This staged approach also makes it easier to catch and correct problems early, before automation is running across multiple parts of the business at once.',
    migrationConsiderations:
      'Most AI automation projects integrate with existing tools (your CRM, support platform, or reporting sources) rather than replacing them, so there is typically no data migration in the traditional sense - the work is connecting AI processing into your current workflow.',
    security:
      'Data passed to AI models is scoped to what’s necessary for the specific task, and we review what customer or business data any automation touches before deployment, since sending more data to a model than a task requires is an avoidable risk. This scoping step happens before any automation goes live, not as an afterthought.',
    integrations: [
      'Gemini and Google Workspace for document and email processing',
      'Microsoft Copilot for Microsoft 365-based workflows',
      'HubSpot and Apollo for lead-qualification automation',
    ],
    limitations:
      'AI automation works best on well-defined, repetitive tasks - it is not a substitute for human judgment on complex or ambiguous decisions, and any deployment we build includes a clear escalation path to a human for cases the automation isn’t confident about.',
    features: [
      'AI-powered customer support and chat commerce',
      'Lead qualification and intent scoring automation',
      'Document processing and internal reporting workflows',
      'Gemini / Copilot deployment for internal teams',
      'Custom automation for repetitive operational tasks',
    ],
    faq: [
      {
        question: 'What AI automation is realistic for a small business, versus enterprise-only tooling?',
        answer: 'Support ticket triage, lead qualification, and report compilation are all realistic starting points for SMEs - the key is picking one well-defined task rather than attempting a broad AI initiative with no specific target.',
      },
      {
        question: 'Do you build custom AI models?',
        answer: 'No - we build automation using existing, proven AI tools (Gemini, Copilot) applied to your specific workflow, rather than training custom models, which is unnecessary for the vast majority of business automation use cases.',
      },
      {
        question: 'How do you handle data privacy in AI automation?',
        answer: 'We scope exactly what data any automation needs to access before deployment and avoid passing more information to a model than the specific task requires.',
      },
          {
        question: 'How do you measure whether an AI automation is actually working?',
        answer: 'We define a specific metric before building anything - time saved per ticket, percentage of leads correctly qualified, hours removed from a reporting task - and measure against it after deployment rather than judging success subjectively.',
      },
      {
        question: 'What happens if an automation makes a mistake on a customer-facing task?',
        answer: 'Every deployment includes an escalation path to a human reviewer for cases the automation is not confident about, and we review error patterns during the first weeks after launch to catch recurring issues early, adjusting the automation\'s scope if a pattern of mistakes shows up in a specific area.',
      },
],
    countries: ['myanmar', 'thailand'],
  },
  {
    slug: 'teamviewer',
    name: 'TeamViewer',
    shortName: 'TeamViewer',
    pillar: 'support',
    tagline: 'Remote support and device management for distributed teams.',
    meta: {
      en: {
        title: 'TeamViewer Deployment & Remote Support | MMKK AI',
        description: 'TeamViewer licensing, device enrollment, and remote support setup for businesses with distributed teams or multiple locations.',
      },
      th: {
        title: 'บริการติดตั้ง TeamViewer และการสนับสนุนระยะไกล | MMKK AI',
        description: 'บริการด้านลิขสิทธิ์ TeamViewer การลงทะเบียนอุปกรณ์ และการสนับสนุนระยะไกลสำหรับธุรกิจที่มีทีมงานกระจายตัว',
      },
      mm: {
        title: 'TeamViewer အသုံးပြုမှုနှင့် အဝေးမှ ပံ့ပိုးမှု | MMKK AI',
        description: 'ဖြန့်ကျက်နေသော အဖွဲ့များ သို့မဟုတ် နေရာများစွာရှိသော လုပ်ငန်းများအတွက် TeamViewer လိုင်စင်၊ စက်ပစ္စည်း စာရင်းသွင်းခြင်းနှင့် အဝေးမှ ပံ့ပိုးမှု တပ်ဆင်ခြင်း။',
      },
    },
    whatItDoes:
      'TeamViewer provides remote access, device monitoring, and remote-support tooling. MMKK AI handles licensing, multi-device enrollment, and integrating remote support into your existing IT helpdesk workflow, so it functions as a managed system rather than an ad hoc tool installed on a handful of machines.',
    suitableFor:
      'Suitable for businesses operating across multiple branches or office locations - common among real estate firms, schools, and retail operations - that need reliable remote IT support without an on-site technician at every location.',
    outcomes: [
      'IT issues at remote branches resolved without an on-site visit',
      'Centralized device monitoring across multiple locations',
      'A defined helpdesk workflow instead of ad hoc remote-access tool usage',
      'Consistent security policy applied across all enrolled devices',
    ],
    implementationScope:
      'A typical setup covers licensing and multi-device enrollment, remote monitoring and management (RMM) configuration, and integrating TeamViewer into your existing helpdesk process so support requests follow a defined path rather than an unstructured one-off remote session.',
    migrationConsiderations:
      'Businesses currently using an ad hoc mix of remote-access tools typically need device inventory review and a consolidation plan before enrollment, so the new setup replaces the informal patchwork rather than adding another tool on top of it. This consolidation step also gives management a single, current inventory of every device with remote access, which is often missing entirely under an ad hoc setup.',
    security:
      'Device enrollment includes security policy configuration (access permissions, session logging) appropriate for a business with multiple locations and limited on-site IT presence at each one. Session logging in particular gives management visibility into what remote access occurred and when, which matters for businesses handling sensitive customer or financial data at branch locations.',
    integrations: [
      'Existing helpdesk or ticketing systems for support-request routing',
      'Device management policies aligned with your broader IT security baseline',
    ],
    limitations:
      'TeamViewer handles remote access and device monitoring - it is not a full managed-IT replacement for businesses that need broader IT support coverage beyond remote troubleshooting, which we scope as a separate managed-support arrangement where needed.',
    features: [
      'Licensing and multi-device deployment',
      'Remote monitoring and management (RMM) setup',
      'Helpdesk workflow integration',
      'Security policy configuration',
      'Ongoing IT support coverage',
    ],
    faq: [
      {
        question: 'Is TeamViewer better than a full managed IT support plan for a small office?',
        answer: 'It depends on how much IT support you need beyond remote troubleshooting - TeamViewer alone covers remote access and monitoring well, but a business needing broader IT coverage may want a managed-support arrangement built around it rather than TeamViewer as the sole solution.',
      },
      {
        question: 'Can TeamViewer be deployed across multiple branch locations?',
        answer: 'Yes - this is one of the most common setups we configure, with centralized device monitoring and a consistent security policy applied across every enrolled location.',
      },
          {
        question: 'How many devices can be managed under one TeamViewer license?',
        answer: 'Licensing scales by the number of managed devices and concurrent sessions needed; we help size the right plan based on your branch count and device inventory rather than defaulting to a single-license assumption.',
      },
      {
        question: 'Does TeamViewer work well for schools with limited on-site IT staff?',
        answer: 'Yes - this is a common setup for international schools managing devices across classrooms and administrative offices with a small central IT team, where centralized monitoring reduces the need for someone physically present at every device.',
      },
      {
        question: 'Can session activity be reviewed after the fact for compliance purposes?',
        answer: 'Yes - session logging records who accessed which device and when, which we configure as part of the initial security policy setup rather than leaving logging at default settings.',
      },
      {
        question: 'Does TeamViewer require installing software on every managed device?',
        answer: 'Yes - a lightweight client is installed on each device to be managed; enrollment can be scripted across many devices at once rather than requiring manual installation one at a time.',
      },
],
    countries: [],
  },
  {
    slug: 'adobe-business',
    name: 'Adobe Business',
    shortName: 'Adobe Business',
    pillar: 'creative',
    tagline: 'Creative Cloud and Acrobat licensing, managed for your whole team.',
    meta: {
      en: {
        title: 'Adobe Business Licensing & Rollout | MMKK AI',
        description: 'Adobe Creative Cloud and Acrobat licensing, seat management, and rollout support for design, marketing, and operations teams.',
      },
      th: {
        title: 'บริการลิขสิทธิ์และการติดตั้ง Adobe Business | MMKK AI',
        description: 'บริการด้านลิขสิทธิ์ Adobe Creative Cloud และ Acrobat การจัดการที่นั่งใช้งาน และการสนับสนุนการติดตั้งสำหรับทีมออกแบบและการตลาด',
      },
      mm: {
        title: 'Adobe Business လိုင်စင်နှင့် အသုံးပြုမှု | MMKK AI',
        description: 'ဒီဇိုင်း၊ စျေးကွက်ရှာဖွေရေးနှင့် လုပ်ငန်းလည်ပတ်မှုအဖွဲ့များအတွက် Adobe Creative Cloud နှင့် Acrobat လိုင်စင်၊ နေရာစီမံခန့်ခွဲမှုနှင့် အသုံးပြုမှု ပံ့ပိုးမှု။',
      },
    },
    whatItDoes:
      'Adobe Business licensing covers Creative Cloud (design and marketing tools) and Acrobat (document workflows) under centrally managed, billed seats. MMKK AI handles seat management, billing consolidation, and rollout support so creative and operations teams get the tools they need without individual procurement requests piling up.',
    suitableFor:
      'Suitable for marketing and design teams needing Creative Cloud apps (Photoshop, Illustrator, InDesign), and operations or legal teams needing Acrobat for document workflows, particularly businesses currently paying for scattered individual licenses rather than a consolidated business plan.',
    outcomes: [
      'Consolidated billing instead of scattered individual Adobe subscriptions',
      'Faster onboarding for new design or marketing hires - a seat is provisioned, not purchased individually',
      'Centralized visibility into which licenses are active and in use',
      'A single point of contact for renewals instead of tracking multiple individual subscription dates',
    ],
    implementationScope:
      'A typical engagement covers licensing tier selection (Creative Cloud for Teams versus Enterprise), seat provisioning for current staff, and a rollout plan for onboarding new hires into the licensing structure going forward.',
    migrationConsiderations:
      'Businesses moving from individual personal Adobe subscriptions to a consolidated business plan need those individual subscriptions identified and transitioned in a coordinated way to avoid double-billing or lapsed access during the switch. We typically stagger the cutover by team so no one loses access to active project files mid-transition.',
    security:
      'Seat access is tied to company accounts rather than personal ones, so access can be reassigned or revoked centrally when someone changes roles or leaves, rather than licenses remaining tied to a personal account after departure.',
    integrations: [
      'Single sign-on (SSO) for businesses with an existing identity provider',
      'Shared storage integration for creative asset libraries',
    ],
    limitations:
      'Adobe licensing itself is billed and managed by Adobe - MMKK AI manages the business relationship, seat provisioning, and rollout, but cannot alter Adobe’s own pricing or plan structure. Businesses evaluating cost should compare consolidated business pricing against the sum of individual subscriptions directly with Adobe, since the savings vary by team size and current subscription mix, and a side-by-side comparison during scoping avoids assuming consolidation is automatically cheaper.',
    features: [
      'Creative Cloud for Teams / Enterprise licensing',
      'Acrobat and document workflow deployment',
      'Seat management and billing consolidation',
      'Rollout support for design and marketing teams',
      'Ongoing license and renewal management',
    ],
    faq: [
      {
        question: 'Can we consolidate individual employee Adobe subscriptions into one business plan?',
        answer: 'Yes - this is one of the most common engagements we handle, identifying existing individual subscriptions and transitioning them to a consolidated business plan without a coverage gap.',
      },
      {
        question: 'Does Adobe Business licensing work differently for businesses versus individuals?',
        answer: 'Yes - business plans offer centralized billing, admin console management, and the ability to reassign seats, none of which exist on individual consumer subscriptions.',
      },
          {
        question: 'What happens to files when an employee with an Adobe seat leaves the company?',
        answer: 'Because the seat belongs to a company-managed account, files and cloud documents stay accessible to the organization when a seat is reassigned, rather than remaining tied to a departing employee\'s personal account.',
      },
      {
        question: 'Can seats be reassigned between employees without losing files?',
        answer: 'Yes - because content lives under the company-managed account rather than an individual\'s personal login, a seat can be reassigned to a new employee without losing access to previously created files.',
      },
      {
        question: 'Do all employees need the same Adobe apps, or can licensing be mixed?',
        answer: 'Licensing can be mixed - a designer may need the full Creative Cloud suite while an operations team member only needs Acrobat, and we scope seat types individually rather than assigning a single plan to every employee.',
      },
      {
        question: 'Is training included when rolling out Adobe Business licensing?',
        answer: 'Basic onboarding on the admin console and seat management is included; deep application training (advanced Photoshop or Illustrator techniques, for example) is typically scoped separately based on team skill level.',
      },
],
    countries: [],
  },
  {
    slug: 'sales-workflow-design',
    name: 'Sales Workflow Design',
    shortName: 'Sales Workflow Design',
    pillar: 'crm',
    tagline: 'Design how a lead moves from first contact to closed deal, end to end.',
    meta: {
      en: {
        title: 'Sales Workflow Design | Apollo to CRM to Close | MMKK AI',
        description: 'MMKK AI designs the sales workflow connecting prospecting, CRM, and follow-up automation, so leads flow through a defined process instead of getting lost between tools.',
      },
      th: {
        title: 'ออกแบบขั้นตอนการขาย | จาก Apollo สู่ CRM จนถึงปิดการขาย | MMKK AI',
        description: 'MMKK AI ออกแบบขั้นตอนการขายที่เชื่อมโยงการหาลูกค้าใหม่ CRM และระบบติดตามผลอัตโนมัติ เพื่อให้ลีดไม่หลุดหายระหว่างเครื่องมือต่าง ๆ',
      },
      mm: {
        title: 'Sales Workflow ဒီဇိုင်း | Apollo မှ CRM အထိ | MMKK AI',
        description: 'MMKK AI သည် lead ရှာဖွေခြင်း၊ CRM နှင့် စောင့်ကြည့်အလိုအလျောက် စနစ်များကို ချိတ်ဆက်သော sales workflow ကို ဒီဇိုင်းရေးဆွဲပေးသည်။',
      },
    },
    whatItDoes:
      'Sales workflow design is the work of defining exactly how a lead moves from first contact through to a closed deal - which tool owns each stage, what triggers a handoff between prospecting and follow-up, and what data has to travel with the lead at each step. Most businesses we work with already own the individual pieces - Apollo for outbound, HubSpot for the pipeline, an inbox for follow-up - but nobody has actually designed how those pieces connect, so leads stall in the gaps between tools rather than because any one tool failed.',
    suitableFor:
      'Suitable for businesses that have already implemented Apollo, HubSpot, or a similar CRM individually but still rely on someone manually checking each system and re-entering data between them, and for founder-led sales teams scaling to a multi-person team where an informal, undocumented process no longer holds up once more than one person is running it.',
    outcomes: [
      'A documented, repeatable path from first contact to closed deal instead of an informal process that lives in one person\'s head',
      'Defined handoff rules between prospecting, qualification, and account management so leads don\'t stall waiting for someone to notice them',
      'Automated data flow between Apollo, the CRM, and follow-up sequencing instead of manual re-entry at each stage',
      'Pipeline stages and reporting fields that reflect how your team actually sells, not a generic CRM default',
    ],
    implementationScope:
      'A typical engagement starts by mapping the current path a lead actually takes today, stage by stage, including every manual step nobody has written down. From there we define the target workflow: pipeline stages, the specific criteria that move a lead from one stage to the next, which fields are required at each stage for reporting to be trustworthy, and which handoffs between prospecting and account management should be automatic versus manually reviewed. The output is both a configured system (CRM pipeline, automation rules, integration between prospecting and CRM tools) and a written reference your team can actually follow.',
    migrationConsiderations:
      'Businesses moving from an ad hoc process - a shared spreadsheet, personal notes, or a CRM that was set up once and never revisited - typically need existing deal and contact data cleaned before it\'s mapped onto the new stage structure, since carrying over inconsistent stage labels or duplicate records undermines the reporting the new workflow is meant to produce. We usually recommend running the new workflow in parallel with the old process for a short period rather than switching over all at once, so the team can validate the new stage definitions against real deals before the old process is retired.',
    security:
      'Pipeline visibility and edit permissions are scoped by role, so a rep sees the deals relevant to them while managers retain full pipeline visibility for reporting - configured deliberately rather than left at a CRM\'s default all-or-nothing access model. Where prospecting and CRM tools are integrated, the integration is scoped to sync only the fields the workflow actually requires, rather than a blanket data sync between systems.',
    integrations: [
      'Apollo or another prospecting tool for lead source and initial contact data',
      'HubSpot or another CRM as the system of record for pipeline stages',
      'Email and calendar tools for follow-up sequencing and meeting scheduling',
      'Automation tooling for stage-triggered handoffs and notifications',
    ],
    limitations:
      'Sales workflow design assumes the underlying tools (a CRM, a prospecting platform) are already implemented or being implemented alongside it - see our HubSpot CRM and Apollo Lead Generation pages for that implementation work specifically. This service is the design and configuration of how those tools work together, not a replacement for implementing any one of them individually.',
    features: [
      'Current-state mapping of how leads actually move today',
      'Pipeline stage and handoff-rule definition',
      'Automation configuration between prospecting and CRM tools',
      'Reporting fields aligned to how your team sells',
      'A written workflow reference your team can follow without re-explaining it verbally',
    ],
    faq: [
      {
        question: 'What is sales workflow design, exactly?',
        answer: 'It\'s the work of defining and configuring how a lead moves from first contact to a closed deal - which tool owns each stage, what triggers a handoff, and what data travels with the lead - rather than leaving that process undocumented and dependent on one person remembering how it works.',
      },
      {
        question: 'Do we need Apollo and HubSpot already set up before this?',
        answer: 'Not necessarily before the design phase, but the workflow itself is built around whichever prospecting and CRM tools you use - we can scope this alongside a HubSpot or Apollo implementation rather than requiring it to happen first.',
      },
      {
        question: 'How is this different from just implementing a CRM?',
        answer: 'CRM implementation sets up the tool itself - pipeline structure, user accounts, data migration. Sales workflow design is the layer above that: defining the rules for how leads move between prospecting, the CRM, and follow-up, and automating the handoffs so the process runs consistently regardless of who\'s working a given deal.',
      },
      {
        question: 'Can this work for a single-founder sales process, not just a team?',
        answer: 'Yes - a founder-led process benefits from the same documentation and automation, and it makes handing off pieces of the process to a first sales hire much smoother than trying to explain an undocumented process verbally.',
      },
      {
        question: 'What does the final deliverable look like?',
        answer: 'A configured pipeline and automation setup in your CRM plus a written reference document describing each stage, its entry and exit criteria, and who owns what - so the workflow doesn\'t depend on institutional memory.',
      },
    ],
    countries: [],
  },
  {
    slug: 'remote-monitoring-management',
    name: 'Remote Monitoring and Management',
    shortName: 'Remote Monitoring (RMM)',
    pillar: 'support',
    tagline: 'Proactive device oversight and remote troubleshooting across every location.',
    meta: {
      en: {
        title: 'Remote Monitoring and Management (RMM) | MMKK AI',
        description: 'MMKK AI configures remote monitoring and management using TeamViewer - device oversight, alerting, and remote troubleshooting across every branch, without an on-site technician.',
      },
      th: {
        title: 'การตรวจสอบและจัดการอุปกรณ์ระยะไกล (RMM) | MMKK AI',
        description: 'MMKK AI ตั้งค่าระบบตรวจสอบและจัดการอุปกรณ์ระยะไกลด้วย TeamViewer สำหรับทุกสาขาโดยไม่ต้องมีช่างเทคนิคประจำที่',
      },
      mm: {
        title: 'အဝေးမှ စောင့်ကြည့်စီမံခြင်း (RMM) | MMKK AI',
        description: 'MMKK AI သည် TeamViewer ကို အသုံးပြု၍ ရုံးခွဲတိုင်းအတွက် device စောင့်ကြည့်ခြင်းနှင့် အဝေးမှ ပြင်ဆင်ပေးမှု ဆက်တင်ပြုလုပ်ပေးသည်။',
      },
    },
    whatItDoes:
      'Remote monitoring and management is the ongoing, proactive counterpart to one-off remote access: instead of a technician connecting to a device only after someone reports a problem, RMM continuously tracks device health, security status, and update compliance across every enrolled machine, and surfaces issues before they become a support ticket. MMKK AI configures this using TeamViewer as the underlying platform, so it functions as a managed monitoring practice rather than remote-access software installed on a handful of machines and otherwise ignored.',
    suitableFor:
      'Suitable for businesses operating across multiple branches or office locations - a pattern we see often among real estate firms, schools, and retail operations - where no single location has a full-time, on-site IT presence, and management currently has no consolidated view of device health across sites.',
    outcomes: [
      'Device and security issues identified before they cause a work stoppage, rather than discovered when a user calls in',
      'One consolidated view of device health across every branch, instead of each location being a blackbox until something breaks',
      'IT issues resolved remotely in most cases, without dispatching someone to a physical location',
      'A documented device inventory across the business, which is often missing entirely once devices have accumulated informally over time',
    ],
    implementationScope:
      'A typical setup starts with a device inventory audit across every location, since businesses without existing RMM in place frequently don\'t have an accurate current list of what devices exist, let alone their patch status. From there we configure monitoring thresholds and alerting rules (what counts as urgent versus something that can wait for a weekly review), enroll devices with the appropriate remote-access and monitoring permissions, and integrate alerts into your existing support workflow so a flagged device becomes a tracked ticket rather than an email nobody actions.',
    migrationConsiderations:
      'Businesses currently relying on an ad hoc mix of remote-access tools, or no monitoring at all beyond waiting for a user to report a problem, typically need the device inventory review above before enrollment, so the new setup consolidates and replaces informal tooling rather than adding another layer on top of it. This is also the point where multi-location businesses usually discover devices nobody remembers deploying, which the inventory step surfaces and resolves before monitoring begins.',
    security:
      'Device enrollment includes access-permission and session-logging configuration scoped to who legitimately needs remote access to which devices, rather than a blanket administrator-level setup across every machine. Session logs record who accessed a device and when, which matters for businesses that need to account for remote access to machines handling customer or financial data at branch locations with limited on-site oversight.',
    integrations: [
      'Existing helpdesk or ticketing systems, so a monitoring alert becomes a tracked support request',
      'Device security policy baselines (patch status, endpoint protection) already in place elsewhere in your IT setup',
    ],
    limitations:
      'Remote monitoring and management covers device oversight, alerting, and remote troubleshooting - it is not a full managed-IT department replacement for a business that needs broader coverage such as on-site hardware repair or network infrastructure work, which we scope separately when it applies. It also depends on a device having the monitoring client installed; devices outside the enrolled inventory are not covered until they\'re added.',
    features: [
      'Device inventory audit across all locations',
      'Monitoring threshold and alerting configuration',
      'Remote troubleshooting without an on-site visit in most cases',
      'Session logging for access accountability',
      'Helpdesk workflow integration for tracked, actioned alerts',
    ],
    faq: [
      {
        question: 'How is remote monitoring and management different from just having TeamViewer installed?',
        answer: 'TeamViewer installed on a device without configured monitoring is remote-access software waiting for someone to use it reactively. RMM configuration adds proactive monitoring, alerting thresholds, and a defined process for what happens when something is flagged, so issues surface before a user has to report them.',
      },
      {
        question: 'Do you need to visit our office to set this up?',
        answer: 'Initial device enrollment can typically be scripted and rolled out remotely across many machines at once; a site visit is occasionally useful for the inventory audit step if device records are especially incomplete, but is not required in most cases.',
      },
      {
        question: 'Can this cover multiple countries or branch locations under one setup?',
        answer: 'Yes - this is one of the most common configurations we build, with a single consolidated monitoring view across every enrolled location regardless of country.',
      },
      {
        question: 'What happens when a device is flagged?',
        answer: 'The alert is routed into your existing helpdesk or ticketing process (or a simple one we help set up if none exists), so it becomes a tracked, actioned item rather than a notification that sits unread.',
      },
      {
        question: 'Is this suitable for a school managing devices across multiple classrooms and offices?',
        answer: 'Yes - this is a common setup for international schools with a small central IT team responsible for devices across many classrooms and administrative offices, where centralized monitoring reduces how often someone needs to be physically present at each device.',
      },
      {
        question: 'Does this replace our existing IT support arrangement?',
        answer: 'Not necessarily - RMM covers device monitoring and remote troubleshooting specifically; if you need broader IT coverage such as hardware repair or network work, we scope that as a separate, complementary arrangement rather than assuming RMM replaces it.',
      },
    ],
    countries: [],
  },
]

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}

// Kept for reference in code comments - not rendered directly.
export const _neutralPhraseReminder = NEUTRAL_PHRASES
