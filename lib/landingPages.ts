import type { FaqItem } from './faq'

export interface LocalizedMeta {
  title: string
  description: string
}

export interface Citation {
  label: string
  url: string
}

export interface LandingPage {
  country: 'myanmar' | 'thailand'
  slug: string
  solutionSlug: string
  h1: string
  meta: { en: LocalizedMeta; th: LocalizedMeta; mm: LocalizedMeta }
  lastModified: string // ISO date - set when this page's content last materially changed
  problem: string
  whoFor: string
  scenarios: string[]
  process: string
  security: string
  support: string
  pricing: string
  features: string[]
  faq: FaqItem[]
  citations?: Citation[]
  guideSlug?: string
  crossBorderNote?: string
}

const TIMELINE_DISCLAIMER =
  'Estimated timelines are confirmed after technical scoping and depend on user count, data volume, integrations, and migration complexity.'

export const landingPages: LandingPage[] = [
  // ==================== MYANMAR (6) ====================
  {
    country: 'myanmar',
    slug: 'google-workspace',
    solutionSlug: 'google-workspace',
    h1: 'Google Workspace in Myanmar',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'Google Workspace Myanmar | Setup & Admin Support | MMKK AI',
        description: 'Google Workspace setup, admin, and migration support for businesses in Myanmar, moving teams off personal Gmail onto managed, secure accounts.',
      },
      th: {
        title: 'Google Workspace สำหรับธุรกิจเมียนมาร์ | MMKK AI',
        description: 'บริการติดตั้งและดูแล Google Workspace สำหรับธุรกิจในเมียนมาร์ ย้ายทีมจากบัญชี Gmail ส่วนตัวสู่ระบบที่ปลอดภัยและบริหารจัดการได้',
      },
      mm: {
        title: 'မြန်မာနိုင်ငံရှိ Google Workspace | MMKK AI',
        description: 'မြန်မာနိုင်ငံရှိ လုပ်ငန်းများအတွက် Google Workspace တပ်ဆင်ခြင်းနှင့် စီမံခန့်ခွဲမှု ပံ့ပိုးမှု — ကိုယ်ပိုင် Gmail အကောင့်များမှ လုံခြုံစွာ စီမံနိုင်သော အကောင့်များသို့ ပြောင်းရွှေ့ပေးသည်။',
      },
    },
    problem:
      'Many businesses in Yangon and Mandalay start out running on a founder\'s personal Gmail account, or a mix of personal accounts across the team, forwarding client emails between inboxes with no shared record of who said what to whom. That works until someone leaves the company and takes their inbox history with them, or a client email gets missed because it landed in an account nobody checks anymore. Google Workspace exists to solve exactly this: company email on your own domain, with accounts your business controls, not the individual who happens to hold them.',
    whoFor:
      'This is for businesses in Myanmar that are still on personal or unmanaged Gmail accounts and need to move to a proper company domain, and for businesses already on Workspace that have outgrown a single admin managing everything by memory. International schools with rotating staff, real estate offices with agents who come and go, and small professional services firms with two or three people sharing one inbox are the most common starting points we see.',
    scenarios: [
      'A 15-person real estate brokerage in Yangon consolidating five different personal Gmail accounts used by agents into a single domain, with shared drives per property listing instead of attachments scattered across email threads.',
      'An international school moving staff and administrative accounts onto Google Workspace for Education, with separate organizational units for teaching staff, administrative staff, and IT, each with different access policies.',
      'A professional services firm that needs client correspondence to survive staff turnover — when someone leaves, their account and email history stay with the company, not the departing employee.',
    ],
    process:
      'We start with a short audit of what you\'re running today — personal Gmail, an existing Workspace account, or another provider — and how much mail and file history needs to move. Setup itself covers domain verification, MX record configuration, and organizational unit structure so different teams (admin, sales, operations) can have different security policies. If you\'re migrating existing mail and files, that happens on a staged basis so nothing is deleted from the old system until the new one is confirmed working. ' + TIMELINE_DISCLAIMER,
    security:
      'Once your team is on Workspace, we configure two-step verification, device management for company-owned and personal devices accessing company mail, and data-loss prevention rules appropriate to what your business handles. For businesses with limited internal IT staff — common for SMEs and schools in Myanmar — this means security policy is set up once, correctly, rather than left at Google\'s defaults or configured ad hoc by whoever happens to have admin access.',
    support:
      'Support is handled directly by MMKK AI rather than routed through a general help center, with local contact numbers for Myanmar. When something breaks — a locked-out account, a bounced email, a permissions issue on a shared drive — you reach a person who already knows your setup.',
    pricing:
      'Google Workspace is priced per user, per month, across several tiers (Business Starter through Enterprise), billed in USD by Google directly. We help you pick the right tier for your team size and usage, and advise on the local payment and billing considerations relevant to Myanmar businesses, without quoting a fixed price here since the right tier depends on your team size and feature needs.',
    features: [
      'Domain verification and MX record setup',
      'Organizational unit structure for different teams and access levels',
      '2-step verification and device management policy configuration',
      'Data-loss prevention rules appropriate to your business',
      'Shared Drive structure for departments and projects',
      'Ongoing admin support and license management from a local contact',
    ],
    faq: [
      {
        question: 'We\'re currently using personal Gmail accounts for business email — how hard is it to move to Google Workspace?',
        answer:
          'It\'s a well-established process: we set up your domain on Workspace, create managed accounts for each person, and migrate mail and contacts from the personal accounts before switching your domain\'s mail routing over. ' + TIMELINE_DISCLAIMER,
      },
      {
        question: 'Can a Myanmar business pay for Google Workspace locally, or is it USD-billed?',
        answer:
          'Google bills Workspace in USD directly. We advise on payment routing given Myanmar\'s banking and foreign-currency environment, though the underlying billing relationship is with Google, not MMKK AI.',
      },
      {
        question: 'What happens to email history when a staff member leaves?',
        answer:
          'Because the account belongs to the organizational unit administered by your company, not the individual, admins can reassign, transfer, or archive that person\'s mail and files rather than losing access when they leave.',
      },
      {
        question: 'Do international schools get education pricing?',
        answer:
          'Google offers Workspace for Education editions with different terms than standard business Workspace. We help schools confirm eligibility and set up the correct edition rather than defaulting to the business tier.',
      },
    ],
    citations: [
      { label: 'Google Workspace Admin Help', url: 'https://support.google.com/a/' },
    ],
    guideSlug: 'google-workspace-vs-microsoft-365',
  },

  {
    country: 'myanmar',
    slug: 'microsoft-365',
    solutionSlug: 'microsoft-365',
    h1: 'Microsoft 365 in Myanmar',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'Microsoft 365 Myanmar | Setup & Admin Support | MMKK AI',
        description: 'Microsoft 365 tenant setup, licensing, and admin support for businesses in Myanmar already standardized on Outlook, Teams, and Office file formats.',
      },
      th: {
        title: 'Microsoft 365 สำหรับธุรกิจเมียนมาร์ | MMKK AI',
        description: 'บริการติดตั้งและดูแลระบบ Microsoft 365 สำหรับธุรกิจในเมียนมาร์ที่ใช้งาน Outlook, Teams และไฟล์ Office เป็นหลัก',
      },
      mm: {
        title: 'မြန်မာနိုင်ငံရှိ Microsoft 365 | MMKK AI',
        description: 'Outlook၊ Teams နှင့် Office ဖိုင်ပုံစံများကို အသုံးပြုနေသော မြန်မာလုပ်ငန်းများအတွက် Microsoft 365 tenant တပ်ဆင်ခြင်းနှင့် စီမံခန့်ခွဲမှု ပံ့ပိုးမှု။',
      },
    },
    problem:
      'Businesses in Myanmar that already run on Windows PCs and exchange .docx and .xlsx files with government offices, banks, or international partners often find Microsoft 365 is the path of least resistance — but a default Microsoft 365 signup leaves security settings on Microsoft\'s defaults, Teams and SharePoint unstructured, and no one specifically responsible for managing licenses as the team grows.',
    whoFor:
      'This fits businesses already standardized on Windows and Office file formats, teams that exchange documents with international partners or government bodies expecting .docx/.xlsx rather than Google formats, and mid-market companies that need SharePoint document libraries with real folder permissions instead of email attachments.',
    scenarios: [
      'A logistics company with field staff who need Teams on mobile for dispatch communication, plus a head-office SharePoint library for shipping documentation with permissions restricted by department.',
      'A manufacturer that exchanges compliance documents with an overseas parent company or partner in Microsoft-native formats and needs Exchange Online mailboxes that behave identically to the partner\'s own Microsoft 365 tenant.',
      'A company moving off a mix of personal Outlook.com accounts and locally-hosted email onto a single managed Microsoft 365 tenant with proper admin control.',
      'An accounting or professional services firm that needs document version history and access logs on shared files for audit purposes, which ad hoc email attachments cannot provide.',
    ],
    process:
      'Setup starts with tenant provisioning and choosing the right licensing tier for your team\'s actual usage — Business Basic for lighter needs, Business Standard or Premium where desktop Office apps and more security controls are required. If you\'re migrating existing mailboxes, we move mail, calendar, and contacts into Exchange Online on a staged basis with a single planned cutover window. Teams and SharePoint sites are then structured around your actual departments rather than left as a flat, unorganized default. ' + TIMELINE_DISCLAIMER,
    security:
      'We configure conditional access policies (who can sign in, from where, and on what device), multi-factor authentication, and a security baseline appropriate for a team without a dedicated in-house security specialist — the goal is sensible defaults set once by someone who understands them, not a checklist left unchecked.',
    support:
      'MMKK AI provides direct support for Microsoft 365 issues — mailbox problems, permission issues on SharePoint, Teams configuration — with a Myanmar contact number, rather than routing every issue through Microsoft\'s general support channel.',
    pricing:
      'Microsoft 365 licenses are billed per user per month directly by Microsoft, with tiers from Business Basic to Enterprise. We help you choose the right tier for your team\'s actual needs (many teams over-buy Premium when Standard would cover them, or under-buy Basic and hit feature gaps) rather than quoting a flat number here, since the right tier depends on team size and required features.',
    features: [
      'Tenant setup and licensing-tier selection matched to actual usage',
      'Exchange Online mailbox migration from existing email',
      'Teams and SharePoint site architecture by department',
      'Conditional access and multi-factor authentication baseline',
      'Ongoing local support and license management',
    ],
    faq: [
      {
        question: 'Our team already uses Outlook and Word daily — does that mean Microsoft 365 is the right choice over Google Workspace?',
        answer:
          'It\'s a strong signal in that direction, particularly if you exchange native Office files with partners who expect Microsoft formatting. See our Google Workspace vs. Microsoft 365 guide for the full comparison rather than assuming based on current habit alone.',
      },
      {
        question: 'Can we migrate from Google Workspace to Microsoft 365 later if we start on Workspace?',
        answer:
          'Yes, migrations run in both directions. It\'s more disruptive than getting the choice right the first time, which is why we scope this properly up front rather than defaulting to whichever platform is easier to set up quickly.',
      },
      {
        question: 'Do we need Microsoft 365 Premium, or is Business Standard enough?',
        answer:
          'Premium adds advanced device management and threat protection features that many small teams in Myanmar don\'t need yet. We assess this based on your actual team size and risk profile rather than defaulting to the most expensive tier.',
      },
      {
        question: 'Can Microsoft 365 work well for a team with limited or no dedicated IT staff?',
        answer:
          'Yes — this is one of the most common situations we set up for in Myanmar. The goal is configuring conditional access, backup, and permission policies correctly once, so day-to-day administration doesn\'t require a dedicated IT specialist to keep the system secure.',
      },
    ],
    citations: [
      { label: 'Microsoft 365 Admin Documentation', url: 'https://learn.microsoft.com/en-us/microsoft-365/admin/' },
    ],
    guideSlug: 'google-workspace-vs-microsoft-365',
  },

  {
    country: 'myanmar',
    slug: 'google-workspace-migration',
    solutionSlug: 'google-workspace',
    h1: 'Google Workspace Migration in Myanmar',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'Google Workspace Migration Myanmar | MMKK AI',
        description: 'Migrate to Google Workspace from personal Gmail, Microsoft 365, or an existing email host — a staged process built for businesses in Myanmar.',
      },
      th: {
        title: 'ย้ายระบบสู่ Google Workspace ในเมียนมาร์ | MMKK AI',
        description: 'ย้ายจาก Gmail ส่วนตัว, Microsoft 365 หรือระบบอีเมลเดิม มาสู่ Google Workspace ด้วยกระบวนการที่ออกแบบมาสำหรับธุรกิจในเมียนมาร์',
      },
      mm: {
        title: 'မြန်မာနိုင်ငံရှိ Google Workspace သို့ ပြောင်းရွှေ့ခြင်း | MMKK AI',
        description: 'ကိုယ်ပိုင် Gmail၊ Microsoft 365 သို့မဟုတ် လက်ရှိအီးမေးလ်စနစ်မှ Google Workspace သို့ ပြောင်းရွှေ့ခြင်း — မြန်မာလုပ်ငန်းများအတွက် ရေးဆွဲထားသည်။',
      },
    },
    problem:
      'The risk in any email migration isn\'t the destination platform — it\'s the week in between. Businesses that attempt a DIY migration by changing MX records before mail and files are actually copied over routinely lose incoming email during the gap, break calendar invites that were mid-flight, and end up with staff locked out while IT scrambles to fix permissions. For a Myanmar business already managing limited internal IT resources, that downtime is expensive in a way a bigger company might absorb more easily.',
    whoFor:
      'This is for any Myanmar business moving to Google Workspace from personal Gmail accounts, an existing Microsoft 365 tenant, or a locally-hosted mail server — anyone who needs mail, contacts, calendar, and files to survive the switch intact, with minimal disruption to a small or stretched IT team.',
    scenarios: [
      'A business moving five to fifteen personal Gmail accounts onto a single managed company domain, consolidating scattered inboxes into one administered system.',
      'A company switching from Microsoft 365 to Google Workspace (or the reverse) after determining the other platform fits their workflow better, needing mail and file history to transfer rather than starting from zero.',
      'An organization migrating off a locally-hosted or third-party email host that is being discontinued or has become unreliable, under time pressure to move before the old system goes dark.',
    ],
    process:
      'We audit your current system first — how many mailboxes, how much mail and file history, and which shared resources (distribution lists, shared drives, delegated calendars) need to be recreated. Mail, contacts, and files are then migrated into the new Google Workspace accounts while your existing system is still live and receiving mail, so nothing is switched off before the new system is verified working. Delegated calendars, distribution lists, and shared drive permission structures are documented and rebuilt in the new environment rather than left for staff to recreate manually after the fact. Once migration is confirmed complete, we schedule the MX record cutover during a low-traffic window, typically evenings or weekends, which is usually the only point with any visible interruption. Staff get a short onboarding session immediately after cutover so the migration isn\'t "complete" the moment data moves — it\'s complete when your team knows where their files are. ' + TIMELINE_DISCLAIMER,
    security:
      'Migrated accounts inherit the same organizational unit structure, two-step verification, and device management policy as a fresh Workspace setup — migration doesn\'t mean inheriting the old system\'s weaker security posture by default.',
    support:
      'A named MMKK AI contact runs your migration end to end and remains your support contact afterward, rather than handing you off to a general support queue once the cutover is done.',
    pricing:
      'Migration is scoped and quoted separately from Workspace licensing itself (which is billed by Google), based on mailbox count and data volume — we provide a fixed quote after the initial audit rather than an estimate that changes once work is underway.',
    features: [
      'Pre-migration audit of existing mail, calendar, and file systems',
      'Staged migration plan with a defined cutover window',
      'Mail, contacts, calendar, and shared file migration',
      'DNS and MX record cutover management',
      'Staff onboarding and post-migration support',
    ],
    faq: [
      {
        question: 'How long does a Google Workspace migration take for a small Myanmar business?',
        answer: TIMELINE_DISCLAIMER + ' Most migrations for a 10-50 person team involve a single planned downtime window, usually under an hour, scheduled outside business hours.',
      },
      {
        question: 'What actually breaks if we try to migrate ourselves without a staged plan?',
        answer:
          'The most common failures are lost inbound email during DNS cutover, broken shared-drive permissions that weren\'t recreated, and calendar invites that reference the old system. A staged migration avoids these by moving data before switching mail routing, not after.',
      },
      {
        question: 'Can you migrate us from Microsoft 365 to Google Workspace?',
        answer: 'Yes — migrations run in both directions, using the same staged audit-then-cutover process regardless of which platform you\'re moving from or to.',
      },
      {
        question: 'Will our old email system still receive mail during the migration?',
        answer:
          'Yes — your existing system stays live and continues receiving mail throughout the migration itself. Mail routing (MX records) only switches over once we\'ve confirmed the new Workspace accounts are fully populated and working, which is what avoids the lost-email risk of a rushed cutover.',
      },
    ],
    guideSlug: 'google-workspace-migration-guide',
  },

  {
    country: 'myanmar',
    slug: 'hubspot-crm',
    solutionSlug: 'hubspot-crm',
    h1: 'HubSpot CRM in Myanmar',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'HubSpot CRM Myanmar | Implementation & Setup | MMKK AI',
        description: 'HubSpot CRM implementation for SMEs and mid-market companies in Myanmar, replacing spreadsheet-based sales tracking with a real pipeline.',
      },
      th: {
        title: 'HubSpot CRM สำหรับธุรกิจเมียนมาร์ | MMKK AI',
        description: 'บริการติดตั้งระบบ HubSpot CRM สำหรับธุรกิจ SME และระดับกลางในเมียนมาร์ แทนที่การติดตามยอดขายด้วยสเปรดชีตด้วยไปป์ไลน์ที่ใช้งานได้จริง',
      },
      mm: {
        title: 'မြန်မာနိုင်ငံရှိ HubSpot CRM | MMKK AI',
        description: 'spreadsheet ဖြင့် အရောင်းခြေရာခံခြင်းအစား လုပ်ငန်းလည်ပတ်နိုင်သော pipeline ဖြင့် အစားထိုးပေးသည့် မြန်မာ SME နှင့် အလတ်စား ကုမ္ပဏီများအတွက် HubSpot CRM တပ်ဆင်မှု။',
      },
    },
    problem:
      'A common pattern in growing Myanmar businesses: sales starts as a shared Excel file, then a WhatsApp group, then a mix of both with no single source of truth for which deals are actually active. Deals get forgotten when the person tracking them is out sick, follow-ups slip, and leadership has no real visibility into pipeline value until a deal either closes or obviously dies. A CRM fixes the visibility problem — but only if it\'s configured around how the team actually sells, not a generic template nobody adopts.',
    whoFor:
      'Built for SMEs and mid-market companies in Myanmar that have outgrown spreadsheet-based sales tracking, real estate brokerages managing listings and buyer pipelines, and professional services firms that need a record of client interactions that survives staff turnover.',
    scenarios: [
      'A real estate brokerage replacing a shared spreadsheet of listings and interested buyers with a pipeline that tracks each property from listing through offer to closing, with agent-level visibility for management.',
      'A B2B services company with two or three salespeople who previously tracked deals in personal notebooks or private spreadsheets, now needing leadership visibility into total pipeline value.',
      'A company scaling past the point where "ask the sales rep" is a reliable way to find out deal status, needing a shared, current record instead.',
      'A professional services firm onboarding new clients through a multi-step process (proposal, contract, kickoff) that currently lives across email threads rather than a single trackable record.',
    ],
    process:
      'We start by mapping your actual sales process — not a generic template — documenting how deals really move from first contact to close in your business today. Existing contact and company data (usually spreadsheets, sometimes a previous CRM) is cleaned up and imported rather than dumped in as-is, since importing years of messy data without cleanup just moves the mess into HubSpot. Email sequences and follow-up reminders are configured for the handoffs your team actually misses. Reporting dashboards are built around two or three metrics leadership will actually check, not dozens of reports nobody opens. ' + TIMELINE_DISCLAIMER,
    security:
      'User permissions are configured so sales reps see their own deals while managers see team-wide pipeline, and export/deletion permissions are restricted to admins — relevant for businesses with limited internal IT oversight where a departing salesperson shouldn\'t be able to export the entire client list on their way out.',
    support:
      'We run live onboarding sessions with your sales team rather than handing over a login and a help article — the biggest reason CRM rollouts fail is skipped adoption, not bad configuration, so this step isn\'t optional in our process.',
    pricing:
      'HubSpot CRM has a free tier and several paid tiers (Starter, Professional, Enterprise) depending on the automation and reporting features you need. We scope implementation cost separately based on team size and how much data migration and customization is required, and provide a fixed quote before work begins rather than an open-ended hourly estimate.',
    features: [
      'Pipeline and deal-stage configuration matched to your actual sales process',
      'Contact and company data import and cleanup',
      'Email sequence and follow-up automation setup',
      'Reporting dashboards built around metrics leadership will use',
      'Live team onboarding and adoption training',
    ],
    faq: [
      {
        question: 'Is HubSpot CRM implementation available in Myanmar?',
        answer: 'Yes. We implement HubSpot CRM for SMEs and mid-market companies in Myanmar, including pipeline setup, data migration, and hands-on team onboarding.',
      },
      {
        question: 'How is HubSpot different from Apollo?',
        answer: 'HubSpot manages your pipeline once a lead exists — deal stages, notes, follow-ups, reporting. Apollo finds and reaches new contacts to create leads in the first place. Most sales teams use Apollo to generate leads and HubSpot to manage them once they reply; see our What Is Apollo guide for the full breakdown.',
      },
      {
        question: 'We only have two or three salespeople — is a CRM overkill?',
        answer: 'Not necessarily — the value isn\'t team size, it\'s whether deal information currently lives in one person\'s head or notebook. If losing that person for a week would mean losing track of active deals, a lightweight CRM setup solves that regardless of headcount.',
      },
      {
        question: 'What happens to our existing spreadsheet data during setup?',
        answer:
          'We clean and de-duplicate it before import — standardizing company names, removing stale contacts, and tagging records by segment — rather than uploading years of accumulated mess directly into HubSpot, which just relocates the problem instead of fixing it.',
      },
    ],
    citations: [{ label: 'HubSpot Knowledge Base', url: 'https://knowledge.hubspot.com/' }],
    guideSlug: 'hubspot-crm-guide',
  },

  {
    country: 'myanmar',
    slug: 'apollo-lead-generation',
    solutionSlug: 'apollo-lead-generation',
    h1: 'Apollo Lead Generation in Myanmar',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'Apollo Lead Generation Myanmar | MMKK AI',
        description: 'Apollo setup for outbound B2B lead generation in Myanmar, built for sales teams that need a repeatable prospecting process rather than one-off cold outreach.',
      },
      th: {
        title: 'Apollo สำหรับการหาลูกค้าใหม่ในเมียนมาร์ | MMKK AI',
        description: 'บริการติดตั้ง Apollo สำหรับการหาลูกค้าใหม่แบบ outbound ในเมียนมาร์ สำหรับทีมขายที่ต้องการกระบวนการที่ทำซ้ำได้',
      },
      mm: {
        title: 'မြန်မာနိုင်ငံရှိ Apollo Lead Generation | MMKK AI',
        description: 'အထူးပြု cold outreach အစား ထပ်ခါထပ်ခါ လုပ်ဆောင်နိုင်သော prospecting လုပ်ငန်းစဉ်လိုအပ်သော အရောင်းအဖွဲ့များအတွက် မြန်မာနိုင်ငံရှိ outbound B2B lead generation အတွက် Apollo တပ်ဆင်မှု။',
      },
    },
    problem:
      'Outbound sales in Myanmar often means one person manually searching LinkedIn, copying contact details into a spreadsheet, and sending individual emails from a personal account — slow, unscalable, and impossible to measure. Apollo replaces the manual search-and-copy work with a searchable contact database and sequencing tools, but the database alone doesn\'t produce meetings; the setup around it does.',
    whoFor:
      'For businesses in Myanmar running active outbound sales — technology companies selling to regional or international buyers, agencies pursuing new clients, and B2B service firms that need a pipeline of new leads rather than relying only on referrals, particularly where growth targets have outpaced what word-of-mouth alone can sustain.',
    scenarios: [
      'A technology company targeting mid-market buyers across Southeast Asia, needing an accurate, filterable contact list by industry, company size, and role rather than manual LinkedIn searching.',
      'An agency running outbound campaigns to win new clients, needing sequences that don\'t all sound the same and a way to see which messaging actually gets replies.',
      'A B2B services firm expanding beyond referral-based growth, needing a repeatable outbound motion its team can run consistently, not one person\'s manual habit.',
      'A founder currently doing all outbound personally, needing a system that could hand off to a hired salesperson later without starting from zero.',
    ],
    process:
      'We start by defining your ideal customer profile precisely — industry, company size, role, and region — so outreach targets the right people rather than a broad, low-relevance list. Sequences are written with real personalization variables, not a single generic template blasted at everyone. Sender domain and deliverability configuration (SPF, DKIM, warm-up) is set up before any sequence goes live, since this is what determines whether messages land in an inbox or a spam folder. Apollo is then connected to your CRM so replies flow directly into a tracked pipeline instead of sitting in a separate inbox. ' + TIMELINE_DISCLAIMER,
    security:
      'Apollo user seats and list-export permissions are scoped per team member, and sender domain configuration is set up to protect your primary company domain\'s deliverability reputation rather than risking it on unproven cold-outreach sequences.',
    support:
      'We monitor deliverability and reply-rate performance in the first weeks after launch and adjust sequences based on real results, rather than setting it up once and leaving it unmonitored.',
    pricing:
      'Apollo is priced per seat per month across several plans depending on database credits and sequencing volume needed. We help size the right plan for your outbound volume and scope setup separately, without quoting a fixed figure here since it depends on team size and campaign scale. As a general guide, a single-person outbound effort typically needs a smaller plan tier than a five-person sales team running parallel campaigns across different segments, and we size accordingly rather than defaulting everyone to the same plan.',
    features: [
      'Ideal customer profile and targeted list-building',
      'Outbound sequence configuration with real personalization',
      'Sender domain and deliverability setup (SPF/DKIM/warm-up)',
      'CRM integration so replies become tracked deals',
      'Ongoing monitoring of reply rates and deliverability',
    ],
    faq: [
      {
        question: 'Can MMKK AI set up Apollo for a small sales team in Myanmar?',
        answer: 'Yes — we configure Apollo for teams of any size, from a single founder doing outbound to a multi-person sales team, scaled to the plan and sequence volume that fits.',
      },
      {
        question: 'Does Apollo integrate with HubSpot?',
        answer: 'Yes. We connect Apollo to HubSpot so replies and engaged leads sync directly into your CRM pipeline rather than staying in a separate outreach tool.',
      },
      {
        question: 'What actually determines whether Apollo outreach works?',
        answer: 'Not the database size — the targeting precision, message personalization, and deliverability setup. A large but poorly-targeted list with generic messaging underperforms a smaller, precisely-targeted one every time.',
      },
      {
        question: 'How many contacts should a first outbound campaign target?',
        answer:
          'We usually recommend starting narrower than founders expect — a few hundred tightly-matched contacts with strong personalization outperforms several thousand loosely-matched ones, and it\'s easier to diagnose what\'s working at a smaller scale before expanding.',
      },
      {
        question: 'Is Apollo worth it if we mostly get business through referrals?',
        answer:
          'If referrals alone are meeting your growth targets, outbound may not be necessary yet. Apollo becomes worth the setup investment once you need a growth channel that doesn\'t depend on waiting for someone else to make an introduction.',
      },
    ],
    citations: [{ label: 'Apollo Documentation', url: 'https://docs.apollo.io/' }],
    guideSlug: 'what-is-apollo',
  },

  {
    country: 'myanmar',
    slug: 'google-cloud',
    solutionSlug: 'google-cloud',
    h1: 'Google Cloud in Myanmar',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'Google Cloud Myanmar | Architecture & Migration | MMKK AI',
        description: 'Google Cloud architecture, migration, and cost-optimization support for technology companies and enterprises in Myanmar.',
      },
      th: {
        title: 'Google Cloud สำหรับธุรกิจเมียนมาร์ | MMKK AI',
        description: 'บริการด้านสถาปัตยกรรม การย้ายระบบ และการปรับต้นทุน Google Cloud สำหรับบริษัทเทคโนโลยีและองค์กรในเมียนมาร์',
      },
      mm: {
        title: 'မြန်မာနိုင်ငံရှိ Google Cloud | MMKK AI',
        description: 'မြန်မာနိုင်ငံရှိ နည်းပညာကုမ္ပဏီများနှင့် လုပ်ငန်းကြီးများအတွက် Google Cloud ဗိသုကာပုံစံ၊ ပြောင်းရွှေ့ခြင်းနှင့် ကုန်ကျစရိတ် ပိုမိုကောင်းမွန်အောင်ပြုလုပ်ခြင်း ပံ့ပိုးမှု။',
      },
    },
    problem:
      'Signing up for Google Cloud directly is simple; running production infrastructure on it safely and affordably is not. Businesses that self-manage their first Google Cloud deployment commonly end up with an architecture sized for launch day traffic that never scales down, security groups left wide open because locking them down "later" never happens, and a monthly bill that creeps upward with no one specifically responsible for noticing why.',
    whoFor:
      'For technology companies and enterprises in Myanmar running production workloads that need more than shared hosting — product teams that need proper compute, storage, and networking architecture, and businesses migrating off legacy on-premise infrastructure or another cloud provider.',
    scenarios: [
      'A technology company launching a new product that needs infrastructure sized correctly from day one, rather than over-provisioned "just in case" compute that inflates monthly spend.',
      'An enterprise migrating from on-premise servers or another cloud provider, needing a migration plan that doesn\'t take the current system offline mid-transition.',
      'A product team wanting to deploy Gemini AI or Vertex AI capabilities into an existing application without redesigning the whole architecture around it.',
      'A business currently paying for significantly more compute than it uses, needing a rightsizing pass rather than a full migration.',
    ],
    process:
      'We start with an architecture review — what you\'re running today, what it actually needs to handle (not a worst-case guess), and where the current setup wastes money or creates risk. For new deployments, we design compute, storage, and networking around actual expected load with room to scale, not a fixed guess. For migrations, workloads move in a planned sequence with rollback points, rather than a single high-risk cutover. ' + TIMELINE_DISCLAIMER,
    security:
      'We configure IAM roles and network security groups based on least-privilege access rather than broad default permissions, and set up basic cost-alerting so an unexpected spend spike gets noticed within days, not discovered on next month\'s invoice. For businesses handling customer data, we also review storage bucket permissions specifically, since misconfigured public storage is one of the most common cloud security mistakes we see in early-stage setups.',
    support:
      'Ongoing management includes ongoing cost monitoring and optimization — rightsizing compute resources and flagging unused or oversized allocations — with local billing support so questions about the invoice don\'t require a support ticket into Google\'s general queue.',
    pricing:
      'Google Cloud itself is billed by Google based on actual resource consumption, which varies significantly by workload. We scope architecture and migration work separately with a fixed quote after the initial review, and our ongoing cost-optimization work is specifically aimed at keeping your Google Cloud bill predictable rather than letting consumption-based pricing surprise you.',
    features: [
      'Cloud architecture design and migration planning',
      'Compute, storage, and networking setup sized to actual load',
      'Gemini AI and Vertex AI deployment support',
      'IAM and network security configuration on least-privilege principles',
      'Ongoing cost monitoring and optimization',
    ],
    faq: [
      {
        question: 'What does a Google Cloud implementation partner in Myanmar actually do versus buying directly from Google?',
        answer: 'Architecture design, migration execution, security configuration, and ongoing cost optimization — work that simply opening a Google Cloud account does not include. We also provide local billing support and technical escalation.',
      },
      {
        question: 'Is Google Cloud consulting available for startups in Myanmar?',
        answer: 'Yes — we work with businesses of all sizes, from early-stage technology companies needing a lean architecture to enterprises migrating legacy infrastructure.',
      },
      {
        question: 'Can MMKK AI help reduce our Google Cloud bill?',
        answer: 'Yes — cost monitoring and optimization is a standard part of our Google Cloud engagement, including rightsizing compute resources and identifying unused or oversized allocations.',
      },
      {
        question: 'Do you only work with large enterprises, or can a smaller technology company get help too?',
        answer:
          'We work with businesses of all sizes. A smaller team often benefits the most from getting the architecture right early, since fixing an under-planned setup later is more disruptive than designing it properly the first time.',
      },
      {
        question: 'How long does an initial Google Cloud architecture review take?',
        answer: 'Estimated timelines are confirmed after technical scoping and depend on user count, data volume, integrations, and migration complexity. An initial architecture review is generally the fastest step; a full migration plan takes longer and depends on workload complexity.',
      },
    ],
    citations: [{ label: 'Google Cloud Documentation', url: 'https://cloud.google.com/docs' }],
  },

  // ==================== THAILAND (4) ====================
  {
    country: 'thailand',
    slug: 'google-workspace',
    solutionSlug: 'google-workspace',
    h1: 'Google Workspace in Thailand',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'Google Workspace Thailand | Setup & Admin Support | MMKK AI',
        description: 'Google Workspace setup and administration for businesses in Thailand with multilingual teams, regional operations, and growing headcount.',
      },
      th: {
        title: 'Google Workspace สำหรับธุรกิจในประเทศไทย | MMKK AI',
        description: 'บริการติดตั้งและดูแลระบบ Google Workspace สำหรับธุรกิจในประเทศไทยที่มีทีมงานหลายภาษาและการดำเนินงานระดับภูมิภาค',
      },
      mm: {
        title: 'ထိုင်းနိုင်ငံရှိ Google Workspace | MMKK AI',
        description: 'ဘာသာစကားများစွာသုံး အဖွဲ့များနှင့် ဒေသဆိုင်ရာလုပ်ငန်းများရှိသော ထိုင်းနိုင်ငံရှိ လုပ်ငန်းများအတွက် Google Workspace တပ်ဆင်ခြင်းနှင့် စီမံခန့်ခွဲမှု။',
      },
    },
    problem:
      'Thailand-based businesses with regional ambitions often run into a structural problem before a technical one: a Thai-language team, an English-speaking regional office, and international partners all need to collaborate on the same documents and calendars without three separate, disconnected systems. A default Google Workspace signup doesn\'t solve that organization on its own — it needs to be structured for multilingual, multi-office use from the start.',
    whoFor:
      'For businesses in Thailand with multilingual teams, regional or international operations spanning more than one office, and growing SMEs that need account structure to scale past a handful of users without a rebuild later.',
    scenarios: [
      'A Bangkok-headquartered company with a regional office in another country, needing shared calendars and drives that work identically across offices and time zones.',
      'A multilingual team where interface language needs to be set per user (Thai for local staff, English for regional staff) without affecting shared document access.',
      'A growing SME structuring organizational units now — sales, operations, finance — so adding the next twenty employees doesn\'t mean retrofitting access policy after the fact.',
      'A company standardizing on Google Workspace after previously relying on a mix of free personal accounts across departments, needing a single governed system before an external audit or investor due-diligence review.',
    ],
    process:
      'We set up domain verification, MX records, and an organizational unit structure designed around your actual office and team layout, not a flat default. For multilingual teams, individual interface language preferences are configured without fragmenting shared drive or calendar access. If migrating from another system, mail and files move on a staged basis with a single planned cutover window. ' + TIMELINE_DISCLAIMER,
    security:
      'Access control is configured with governance in mind — which organizational unit can access which shared drives, two-step verification requirements, and device management policy — set up deliberately rather than left at defaults, which matters as Thailand\'s data protection expectations (see PDPA considerations below) increasingly shape how businesses are expected to handle access control.',
    support:
      'Local support is available directly through MMKK AI\'s Thailand contact line, with the same setup process used across our Myanmar deployments, so multi-country businesses get a consistent experience across both markets.',
    pricing:
      'Google Workspace is billed per user per month directly by Google across several tiers. We help Thailand-based businesses select the right tier and manage renewals, without quoting a fixed price here since it depends on team size and tier.',
    features: [
      'Domain verification and organizational unit structure for multi-office teams',
      'Per-user interface language configuration without fragmenting shared access',
      '2-step verification and device management policy',
      'Shared Drive governance aligned with data-handling expectations',
      'Local billing guidance and ongoing admin support',
    ],
    faq: [
      {
        question: 'Can Google Workspace support a team split between Thailand and another country?',
        answer: 'Yes — organizational units and shared drives work identically across offices and time zones once structured correctly; the setup work is making sure permissions reflect your actual reporting lines rather than a flat default.',
      },
      {
        question: 'Does Google Workspace support Thai-language interfaces alongside English-speaking staff?',
        answer: 'Yes, interface language is a per-user setting and doesn\'t affect shared document or calendar access between Thai- and English-interface users.',
      },
      {
        question: 'How does Google Workspace relate to Thailand\'s PDPA?',
        answer: 'Workspace\'s admin controls (access permissions, device management, audit logs) are tools your business can use to support PDPA-aligned data handling, but configuring them correctly is your organization\'s responsibility, not something enabled by default at signup.',
      },
      {
        question: 'How does Google Workspace handle multiple offices in different time zones?',
        answer:
          'Shared calendars, meeting scheduling, and file access work the same regardless of which office a user is in, once accounts are set up under a consistent organizational structure — the coordination challenge is organizational, not something the platform solves automatically without setup.',
      },
      {
        question: 'Can we start on Google Workspace with a small team and add organizational structure later?',
        answer: 'You can, but retrofitting organizational units and access policy after a team has grown past ten or fifteen people is more disruptive than setting the structure up correctly from the start, even if you only have three or four users today.',
      },
    ],
    citations: [
      { label: 'Google Workspace Admin Help', url: 'https://support.google.com/a/' },
      { label: "Thailand PDPC — official PDPA regulator", url: 'https://www.pdpc.or.th/en/home/' },
    ],
    guideSlug: 'google-workspace-vs-microsoft-365',
    crossBorderNote:
      'Expanding operations between Thailand and Myanmar? The same organizational-unit structure and admin process applies on the Myanmar side — see Google Workspace in Myanmar for that market\'s specific considerations.',
  },

  {
    country: 'thailand',
    slug: 'microsoft-365',
    solutionSlug: 'microsoft-365',
    h1: 'Microsoft 365 in Thailand',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'Microsoft 365 Thailand | Setup & Admin Support | MMKK AI',
        description: 'Microsoft 365 setup, governance, and admin support for businesses in Thailand integrating with existing enterprise systems.',
      },
      th: {
        title: 'Microsoft 365 สำหรับธุรกิจในประเทศไทย | MMKK AI',
        description: 'บริการติดตั้งและดูแลระบบ Microsoft 365 สำหรับธุรกิจในประเทศไทยที่ต้องผสานการทำงานกับระบบองค์กรที่มีอยู่',
      },
      mm: {
        title: 'ထိုင်းနိုင်ငံရှိ Microsoft 365 | MMKK AI',
        description: 'လက်ရှိလုပ်ငန်းစနစ်များနှင့် ပေါင်းစပ်အသုံးပြုနေသော ထိုင်းနိုင်ငံရှိ လုပ်ငန်းများအတွက် Microsoft 365 တပ်ဆင်ခြင်းနှင့် စီမံခန့်ခွဲမှု ပံ့ပိုးမှု။',
      },
    },
    problem:
      'Larger Thai businesses and regional subsidiaries of international companies often already run other Microsoft-ecosystem tools — Dynamics, Power BI, on-premise Active Directory — and need Microsoft 365 to integrate with that existing footprint, not exist as a disconnected email system alongside it. Getting that integration and governance right requires more than accepting Microsoft\'s default tenant settings.',
    whoFor:
      'For Thailand-based businesses needing structured governance and access control across a growing team, companies integrating Microsoft 365 with existing business systems (ERP, on-premise directory, other Microsoft tools), and regional operations coordinating with offices in other countries where a single consistent identity and access policy needs to span all locations.',
    scenarios: [
      'A regional subsidiary that needs its Microsoft 365 tenant to align with a parent company\'s existing Active Directory and security policy rather than operating as an independent island.',
      'A company integrating Microsoft 365 with an existing ERP or line-of-business system, needing Teams and SharePoint to fit into an established workflow rather than replace it.',
      'A growing SME formalizing access governance — who can access what, and under what conditions — as headcount grows past the point where informal permission-sharing is manageable.',
      'A company preparing for a compliance review or investor due diligence that needs demonstrable access logs and governance policy, not an ad hoc permission structure nobody has documented.',
    ],
    process:
      'We provision the tenant and select licensing tiers matched to actual usage across the team, then structure Teams and SharePoint around your real departments and, where relevant, your integration requirements with existing systems. Migrating mailboxes from an existing system happens on the same staged, single-cutover-window basis we use everywhere. ' + TIMELINE_DISCLAIMER,
    security:
      'Conditional access policies, multi-factor authentication, and governance structures (who approves access changes, how permissions are reviewed) are configured deliberately, which matters for Thailand-based businesses operating under PDPA-driven expectations around access control and data handling. Where a business already has an on-premise Active Directory, we also plan the identity-sync approach (hybrid identity) so account management doesn\'t end up split across two disconnected systems.',
    support:
      'Direct local support is available through our Thailand contact line, with the same setup discipline applied across our Myanmar engagements for businesses operating in both markets. Response times and escalation paths are agreed during onboarding rather than left undefined, so there\'s a clear expectation of how quickly an issue gets picked up.',
    pricing:
      'Microsoft 365 is billed per user per month directly by Microsoft across several tiers. We help select the right tier for actual usage and scope any integration work with existing systems separately, with a fixed quote after scoping.',
    features: [
      'Tenant setup and licensing-tier selection matched to actual usage',
      'Integration planning with existing business systems where required',
      'Teams and SharePoint architecture by department',
      'Conditional access, MFA, and access-governance configuration',
      'Local billing support and ongoing admin assistance',
    ],
    faq: [
      {
        question: 'Does MMKK AI support Microsoft 365 integration with our existing ERP or Active Directory?',
        answer: 'Integration scope varies by system — we assess your existing setup during scoping and advise on what\'s realistic to connect versus what requires a separate integration project.',
      },
      {
        question: 'Is local support available for Microsoft 365 in Thailand?',
        answer: 'Yes, direct local support and billing assistance is available through our Thailand contact line.',
      },
      {
        question: 'How does Microsoft 365 relate to PDPA access-governance expectations?',
        answer: 'Microsoft 365\'s conditional access and audit logging features support PDPA-aligned governance, but they need to be configured deliberately for your organization — they are not enabled by default at signup.',
      },
      {
        question: 'Can Microsoft 365 governance settings be reviewed periodically, not just set up once?',
        answer:
          'Yes, and we recommend it — access policy that was correct at 10 employees often needs revisiting at 50. We can scope a periodic governance review separately from the initial setup for businesses that want ongoing oversight.',
      },
      {
        question: 'Does MMKK AI handle hybrid identity setup with an existing on-premise Active Directory?',
        answer: 'Yes, we plan and configure identity sync between an existing on-premise directory and Microsoft 365 where a business already runs Active Directory, so user accounts stay managed from a single source rather than drifting out of sync between two systems.',
      },
    ],
    citations: [
      { label: 'Microsoft 365 Admin Documentation', url: 'https://learn.microsoft.com/en-us/microsoft-365/admin/' },
      { label: 'Thailand PDPC — official PDPA regulator', url: 'https://www.pdpc.or.th/en/home/' },
    ],
    guideSlug: 'google-workspace-vs-microsoft-365',
    crossBorderNote:
      'Running teams in both Thailand and Myanmar? The same tenant governance approach applies across borders — see Microsoft 365 in Myanmar for that market\'s specific setup considerations.',
  },

  {
    country: 'thailand',
    slug: 'hubspot-crm',
    solutionSlug: 'hubspot-crm',
    h1: 'HubSpot CRM in Thailand',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'HubSpot CRM Thailand | Implementation & Setup | MMKK AI',
        description: 'HubSpot CRM implementation for growing SMEs and regional teams in Thailand, with structured pipeline adoption beyond spreadsheets.',
      },
      th: {
        title: 'HubSpot CRM สำหรับธุรกิจในประเทศไทย | MMKK AI',
        description: 'บริการติดตั้งระบบ HubSpot CRM สำหรับ SME ที่กำลังเติบโตและทีมงานระดับภูมิภาคในประเทศไทย',
      },
      mm: {
        title: 'ထိုင်းနိုင်ငံရှိ HubSpot CRM | MMKK AI',
        description: 'ထိုင်းနိုင်ငံရှိ ကြီးထွားနေသော SME များနှင့် ဒေသဆိုင်ရာအဖွဲ့များအတွက် HubSpot CRM တပ်ဆင်မှု။',
      },
    },
    problem:
      'Growing Thai SMEs and regional teams often reach a point where sales tracking outgrows a spreadsheet but the business isn\'t ready for a heavyweight enterprise CRM either — they need structured pipeline adoption, real reporting, and integration with tools they already use, without months of implementation overhead or a rebuild six months later once the team outgrows whatever was set up in a rush.',
    whoFor:
      'For growing SMEs in Thailand structuring their first real CRM adoption, regional teams that need a shared pipeline view across offices, and real estate or professional services firms needing pipeline stages matched to how they actually sell rather than a generic software-sales template.',
    scenarios: [
      'A regional sales team split across Bangkok and another office needing one shared pipeline view instead of country-specific spreadsheets that never quite reconcile.',
      'A real estate firm needing custom deal stages for property listings and buyer engagement rather than HubSpot\'s default software-sales pipeline.',
      'A growing SME integrating HubSpot with existing business systems (accounting, support ticketing) rather than running the CRM as an isolated tool.',
      'A professional services firm managing multilingual client communication (Thai and English) that needs pipeline notes and deal records accessible to both language groups on the team.',
    ],
    process:
      'We map your actual sales process before touching configuration — for a real estate firm that means listing stages, not generic deal stages. Existing contact and company data is cleaned up during import rather than dumped in as-is. Where relevant, we scope integration between HubSpot and other business systems you run. Reporting dashboards are built around the two or three metrics leadership actually needs, and we run live onboarding sessions with the sales team rather than a self-serve rollout, scheduled to fit around a distributed team\'s actual working hours across offices rather than a single time slot that only suits one location. ' + TIMELINE_DISCLAIMER,
    security:
      'Access permissions are structured so regional teams see appropriate visibility (their own deals plus relevant shared pipeline) while data export and deletion rights stay restricted to admins — a governance point that matters more as Thai businesses formalize data-handling practices generally.',
    support:
      'Support continues past go-live with adoption monitoring — checking whether the team is actually logging deals in the weeks after launch, not just handing over a login and moving on. For regional teams, this includes a follow-up check with each office individually, since adoption often lags in whichever location didn\'t get the initial onboarding session.',
    pricing:
      'HubSpot has a free tier and paid tiers (Starter, Professional, Enterprise) depending on required automation and reporting depth. We scope implementation separately with a fixed quote based on team size and data migration complexity, provided before any work begins so there are no open-ended hourly surprises.',
    features: [
      'Pipeline and deal-stage configuration matched to your actual sales process',
      'Contact and company data import and cleanup',
      'Integration scoping with existing business systems',
      'Reporting dashboards built around metrics leadership will use',
      'Live team onboarding with post-launch adoption monitoring',
    ],
    faq: [
      {
        question: 'Does MMKK AI support HubSpot CRM setup and onboarding in Thailand?',
        answer: 'Yes — we implement HubSpot CRM for businesses in Thailand, including pipeline configuration, data migration, and hands-on team onboarding to drive adoption.',
      },
      {
        question: 'Can HubSpot be customized for real estate sales in Thailand?',
        answer: 'Yes — we configure custom pipeline stages and property/deal tracking fields for real estate firms rather than relying on HubSpot\'s default software-sales pipeline template.',
      },
      {
        question: 'Can HubSpot integrate with our existing accounting or support system?',
        answer: 'Many common business tools have native or third-party HubSpot integrations; we assess your specific systems during scoping to confirm what\'s realistic to connect.',
      },
      {
        question: 'Can HubSpot support a bilingual Thai/English sales team?',
        answer:
          'Yes — deal records, notes, and reporting are accessible to the whole team regardless of the language any individual note is written in; HubSpot doesn\'t require standardizing on one language, though we do recommend a consistent tagging convention across the team.',
      },
      {
        question: 'How long does HubSpot implementation take for a regional team?',
        answer: TIMELINE_DISCLAIMER + ' A team split across two offices typically needs a slightly longer onboarding phase to cover both locations properly, which we account for in scoping rather than treating as an afterthought.',
      },
    ],
    citations: [{ label: 'HubSpot Knowledge Base', url: 'https://knowledge.hubspot.com/' }],
    guideSlug: 'hubspot-crm-guide',
  },

  {
    country: 'thailand',
    slug: 'google-cloud',
    solutionSlug: 'google-cloud',
    h1: 'Google Cloud in Thailand',
    lastModified: '2026-07-13',
    meta: {
      en: {
        title: 'Google Cloud Thailand | Architecture & Migration | MMKK AI',
        description: 'Google Cloud architecture and migration support for technology companies and enterprises in Thailand, including the Bangkok region.',
      },
      th: {
        title: 'Google Cloud สำหรับธุรกิจในประเทศไทย | MMKK AI',
        description: 'บริการด้านสถาปัตยกรรมและการย้ายระบบ Google Cloud สำหรับบริษัทเทคโนโลยีและองค์กรในประเทศไทย รวมถึงบริเวณกรุงเทพฯ',
      },
      mm: {
        title: 'ထိုင်းနိုင်ငံရှိ Google Cloud | MMKK AI',
        description: 'ဘန်ကောက်ဒေသအပါအဝင် ထိုင်းနိုင်ငံရှိ နည်းပညာကုမ္ပဏီများနှင့် လုပ်ငန်းကြီးများအတွက် Google Cloud ဗိသုကာပုံစံနှင့် ပြောင်းရွှေ့ခြင်း ပံ့ပိုးမှု။',
      },
    },
    problem:
      'With Google Cloud\'s Bangkok region now live, Thailand-based businesses have a real option to run infrastructure with lower latency and in-country data residency — but taking advantage of that requires an architecture actually designed for the new region, not a lift-and-shift of whatever was running elsewhere. Businesses that self-manage this transition often either stay on a distant region out of inertia, or migrate without re-architecting for the performance and governance benefits the local region actually offers.',
    whoFor:
      'For technology companies and enterprises in Thailand running production workloads that would benefit from local data residency or lower latency, and businesses integrating Google Cloud services with existing on-premise or hybrid infrastructure rather than committing to a full cloud-only migration in one step.',
    scenarios: [
      'A technology company migrating an existing workload to the Bangkok region specifically to reduce latency for Thailand-based users and address data-residency preferences.',
      'An enterprise integrating Google Cloud services (storage, compute, or Vertex AI) alongside existing on-premise infrastructure rather than a full migration.',
      'A growing SME moving off shared hosting into a properly architected cloud environment sized for actual growth, not guesswork.',
      'A regional business consolidating infrastructure that was previously split across ad hoc providers in different countries into a single, properly governed Google Cloud environment.',
    ],
    process:
      'We review your current infrastructure and workload requirements, then design an architecture specifically for the Bangkok region where relevant — compute, storage, and networking sized to actual expected load. Migrations move in a planned sequence with rollback points rather than a single high-risk cutover, and we help identify where Gemini AI or Vertex AI can be deployed into existing applications without a full redesign, prioritizing changes that reduce risk before changes that add new capability. ' + TIMELINE_DISCLAIMER,
    security:
      'IAM roles and network security groups are configured on least-privilege principles, with cost-alerting set up so unexpected spend is caught within days — relevant given Thailand\'s broader move toward stronger data governance expectations under the PDPA, which increasingly shapes how businesses are expected to document access control over cloud-hosted data.',
    support:
      'Ongoing cost monitoring and optimization is standard, with local billing support so invoice questions are answered directly rather than through Google\'s general support queue. For businesses running infrastructure across both Thailand and other markets, we provide a single point of contact rather than requiring separate support relationships per region.',
    pricing:
      'Google Cloud is billed by Google based on actual resource consumption. We scope architecture and migration work separately with a fixed quote after the initial review, and ongoing cost-optimization work is aimed specifically at keeping consumption-based billing predictable.',
    features: [
      'Cloud architecture design for the Bangkok region specifically',
      'Migration planning from existing or hybrid infrastructure',
      'Gemini AI and Vertex AI deployment support',
      'IAM and network security configuration on least-privilege principles',
      'Ongoing cost monitoring and optimization',
    ],
    faq: [
      {
        question: 'Does MMKK AI offer Google Cloud consulting in Thailand?',
        answer: 'Yes — we provide architecture, migration, and cost-optimization support for businesses in Thailand, including deployments in the Bangkok region.',
      },
      {
        question: 'What changed with the new Google Cloud Bangkok region?',
        answer: 'Google Cloud launched a cloud region in Bangkok in January 2026, allowing Thailand-based businesses to run workloads with lower latency and local data residency. We help businesses plan migrations to take advantage of it where it makes sense.',
      },
      {
        question: 'Can MMKK AI help reduce our Google Cloud bill in Thailand?',
        answer: 'Yes — cost monitoring and optimization is a standard part of our Google Cloud engagement, including rightsizing and identifying unused resources.',
      },
      {
        question: 'Should we migrate to the Bangkok region if we\'re already running on another Google Cloud region?',
        answer:
          'It depends on where your users and data actually are — if most traffic is Thailand-based, migrating can meaningfully improve latency and may align better with data-residency preferences, but it\'s not automatically the right move for every workload. We assess this case by case rather than defaulting to a regional migration for everyone.',
      },
      {
        question: 'Can Google Cloud infrastructure in Thailand integrate with systems still running in Myanmar?',
        answer: 'Yes — cross-border architectures connecting Thailand-based Google Cloud infrastructure with systems in Myanmar or elsewhere are common for regionally operating businesses; the design work focuses on network connectivity and latency between the two rather than treating them as fully separate deployments.',
      },
    ],
    citations: [
      { label: 'Google Cloud Documentation', url: 'https://cloud.google.com/docs' },
      { label: 'Google Cloud Bangkok region announcement', url: 'https://cloud.google.com/blog/products/infrastructure/google-cloud-launches-new-region-in-bangkok-thailand' },
    ],
  },
]

export function getLandingPage(country: 'myanmar' | 'thailand', slug: string) {
  return landingPages.find((p) => p.country === country && p.slug === slug)
}

export function getLandingPagesForCountry(country: 'myanmar' | 'thailand') {
  return landingPages.filter((p) => p.country === country)
}
