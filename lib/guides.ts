export interface LocalizedMeta {
  title: string
  description: string
}

export interface Citation {
  label: string
  url: string
}

export interface GuideSection {
  heading: string
  body: string
}

export interface Guide {
  slug: string
  title: string
  meta: { en: LocalizedMeta; th: LocalizedMeta; mm: LocalizedMeta }
  datePublished: string
  dateModified: string
  intro: string
  sections: GuideSection[]
  citations: Citation[]
  solutionSlug: string
  landingPageLinks: Array<{ country: 'myanmar' | 'thailand'; slug: string }>
}

export const guides: Guide[] = [
  {
    slug: 'google-workspace-vs-microsoft-365',
    title: 'Google Workspace vs. Microsoft 365: Which Is Right for Your Business?',
    meta: {
      en: {
        title: 'Google Workspace vs. Microsoft 365 Comparison Guide | MMKK AI',
        description: 'A practical comparison of Google Workspace and Microsoft 365 for SMEs in Myanmar and Thailand - cost, admin complexity, and migration effort.',
      },
      th: {
        title: 'เปรียบเทียบ Google Workspace กับ Microsoft 365 | MMKK AI',
        description: 'คู่มือเปรียบเทียบ Google Workspace และ Microsoft 365 สำหรับ SME ในประเทศไทย - ต้นทุน ความซับซ้อนในการดูแลระบบ และการย้ายระบบ',
      },
      mm: {
        title: 'Google Workspace နှင့် Microsoft 365 နှိုင်းယှဉ်ချက် | MMKK AI',
        description: 'မြန်မာနိုင်ငံရှိ SME များအတွက် Google Workspace နှင့် Microsoft 365 လက်တွေ့ကျသော နှိုင်းယှဉ်ချက် လမ်းညွှန်။',
      },
    },
    datePublished: '2026-03-11',
    dateModified: '2026-06-02',
    intro:
      'Both platforms cover the same core ground - email, file storage, video calls, and office documents - but they get there differently, and the right choice depends on what your team already uses and how it works, not which platform is generically "better." This guide walks through the practical differences that actually affect a day-to-day decision, without assuming one platform is the answer for every business.',
    sections: [
      {
        heading: 'Start with what your team already does, not the feature list',
        body: 'Feature comparisons between Google Workspace and Microsoft 365 tend to converge on similar checklists - both include email, calendar, video calls, shared documents, and file storage - so a side-by-side feature table rarely settles the decision on its own. The more useful starting question is what your team is already doing today: if most staff already work in Word and Excel and exchange .docx/.xlsx files with clients or partners, Microsoft 365 usually creates less day-one friction. If the team is largely browser-based, works across a mix of personal and company devices, and values a simpler admin console, Google Workspace is often faster to roll out and easier for a small internal IT function to administer.',
      },
      {
        heading: 'Cost structure and what actually drives the price difference',
        body: 'At the entry tier, Google Workspace Business Starter and Microsoft 365 Business Basic are priced comparably per user per month, and both cover core email, calendar, and basic file storage. The price gap widens at higher tiers, largely driven by advanced security and compliance add-ons - Microsoft\'s higher tiers bundle more granular conditional-access and information-protection controls, while Google\'s higher tiers focus more on storage pooling and enterprise search. Neither platform publishes a single "right" tier for a given business size; the correct tier depends on what security posture and storage volume the business actually needs, which is why a written cost comparison should be scoped against your specific requirements rather than taken from a generic price list.',
      },
      {
        heading: 'Administration: simplicity versus depth',
        body: 'Google Workspace\'s admin console is generally considered more approachable for a business without a dedicated systems administrator - user provisioning, basic security policy, and shared drive permissions are laid out in a relatively linear set of screens. Microsoft 365\'s admin center is more powerful in aggregate - conditional access policies, Intune device management, and SharePoint permission structures allow finer control - but that depth comes with a steeper learning curve. A business with an in-house IT person who already knows Microsoft\'s ecosystem may find that depth an advantage rather than a burden; a business without dedicated IT staff often does better starting with the platform that requires less specialist knowledge to administer safely.',
      },
      {
        heading: 'Collaboration and document workflows',
        body: 'Google Docs, Sheets, and Slides are built around simultaneous real-time editing and comment threads, which suits teams that draft and revise collaboratively inside the browser. Microsoft\'s Office apps (Word, Excel, PowerPoint) support real-time co-authoring as well, but many businesses still exchange these files with external parties as attachments, in which case format fidelity with recipients who are also on Microsoft 365 matters. If your business regularly exchanges complex spreadsheets or formatted documents with external partners, clients, or government bodies who default to Microsoft file formats, that external compatibility is a real factor - not just an internal preference.',
      },
      {
        heading: 'Migration effort is rarely the deciding factor',
        body: 'Migrating mail, calendar entries, contacts, and files between the two platforms is a well-established, plannable process on either side, typically executed with the old system still live until the new one is verified working, followed by a single scheduled cutover window. Because the migration mechanics themselves are broadly comparable in either direction, the more relevant question usually is not "which migration is easier" but "which platform will the team actually adopt and use well once the migration is done" - a technically smooth migration into a platform the team resists using is not a win.',
      },
      {
        heading: 'Where each platform tends to fit better',
        body: 'In practice, Google Workspace tends to fit teams that are already browser-first, have a simple IT support structure, and prioritize ease of administration over granular policy control - this includes many SMEs, schools, and organizations without dedicated IT staff. Microsoft 365 tends to fit teams already standardized on Windows and Office file formats, businesses that need deep SharePoint or Teams integration for internal workflows, or organizations that already have IT staff comfortable with Microsoft\'s administration tools. Neither pattern is a rule - some technology companies run entirely on Google Workspace, and some small teams run comfortably on Microsoft 365 - but they describe where each platform\'s design choices tend to pay off.',
      },
      {
        heading: 'How we approach the recommendation for a specific business',
        body: 'MMKK AI does not default to recommending one platform over the other. The assessment looks at current tools in use, team size, existing technical comfort level, any file-compatibility requirements with external partners, and rough budget range, then recommends Google Workspace or Microsoft 365 based on which is more likely to actually be adopted and properly administered by that specific team - not which platform is easier for us to sell. For businesses already partially standardized on one ecosystem (existing Windows devices and Office licenses, for example), that existing investment is weighed into the recommendation rather than ignored.',
      },
      {
        heading: 'Mobile access and working offline',
        body: 'Both platforms support full mobile apps and offline access to documents and email, but the experience differs slightly in practice - Google\'s mobile apps are generally considered more consistent across Android and iOS since Google builds for both natively, while Microsoft\'s mobile Office apps are strong but occasionally lag behind desktop feature parity by a release cycle. For businesses with field staff or teams that travel between office locations with unreliable internet, offline document editing and email queuing work reliably on both platforms, so this is rarely the deciding factor on its own, but it is worth testing with your actual team\'s devices before committing at scale.',
      },
      {
        heading: 'Security and compliance defaults',
        body: 'Neither platform is automatically compliant with a specific regulatory framework out of the box - both provide the underlying controls (encryption, access logging, data loss prevention rules, multi-factor authentication) that a business can configure to meet its own compliance obligations, but configuring those controls correctly is a deliberate setup step, not something that happens by default at signup. Microsoft 365\'s higher tiers offer more granular compliance and information-governance tooling out of the box, which can matter for businesses in regulated industries, while Google Workspace\'s approach is generally simpler to configure correctly for a business without dedicated compliance staff. Either way, a business with specific regulatory requirements (data residency, retention periods, audit logging) should confirm those requirements are met through explicit configuration, not assumed from the platform\'s general reputation for security.',
      },
      {
        heading: 'Support options and the local vendor ecosystem',
        body: 'Both Google and Microsoft offer direct support plans, and both also work through a network of local implementation partners and resellers in the region, which is often the more practical support path for a smaller business that doesn\'t want to manage a support relationship directly with a large global vendor. Working through a local partner typically means faster response times in local business hours and support that already understands regional context - local billing preferences, common connectivity constraints, and staff who can communicate in Burmese or Thai where needed - compared to routing every support ticket through a global queue.',
      },
    ],
    citations: [
      { label: 'Google Workspace pricing and plans (Google)', url: 'https://workspace.google.com/pricing' },
      { label: 'Microsoft 365 plans for business (Microsoft)', url: 'https://www.microsoft.com/en-us/microsoft-365/business/compare-all-microsoft-365-business-products' },
      { label: 'Google Workspace Admin Help - Admin console overview (Google)', url: 'https://support.google.com/a/answer/182076' },
    ],
    solutionSlug: 'google-workspace',
    landingPageLinks: [
      { country: 'myanmar', slug: 'google-workspace' },
      { country: 'thailand', slug: 'microsoft-365' },
    ],
  },
  {
    slug: 'what-is-apollo',
    title: 'What Is Apollo? A Practical Guide to B2B Lead Generation',
    meta: {
      en: {
        title: 'What Is Apollo? B2B Lead Generation Guide | MMKK AI',
        description: 'What Apollo is, how it differs from a CRM like HubSpot, and how businesses in Myanmar use it for outbound lead generation.',
      },
      th: {
        title: 'Apollo คืออะไร? คู่มือการสร้างลูกค้าเป้าหมาย B2B | MMKK AI',
        description: 'Apollo คืออะไร แตกต่างจาก CRM เช่น HubSpot อย่างไร และธุรกิจใช้งานเพื่อการสร้างลูกค้าเป้าหมายแบบ outbound อย่างไร',
      },
      mm: {
        title: 'Apollo ဆိုတာဘာလဲ? B2B Lead Generation လမ်းညွှန် | MMKK AI',
        description: 'Apollo ဆိုတာဘာလဲ၊ HubSpot ကဲ့သို့ CRM နှင့်မည်သို့ကွာခြားသည်၊ မြန်မာလုပ်ငန်းများ outbound lead generation အတွက် မည်သို့အသုံးပြုကြသည်ကို ရှင်းပြထားသည်။',
      },
    },
    datePublished: '2026-02-18',
    dateModified: '2026-05-14',
    intro:
      'Apollo is a B2B sales intelligence and outbound engagement platform - it helps sales teams find the right contacts and reach them at scale, rather than managing deals once a lead already exists. This guide explains what it actually does, how it differs from a CRM, and what determines whether it produces real meetings or just noise in someone\'s inbox.',
    sections: [
      {
        heading: 'What Apollo actually does',
        body: 'Apollo combines a large, searchable database of business contacts - filterable by industry, company size, job title, seniority, and location - with tools to build and run outbound email sequences, track opens and replies, and measure which messaging actually gets meetings booked. In practical terms, a sales rep can define an ideal customer profile (say, operations managers at logistics companies with 50-200 employees in a specific region), pull a filtered list of matching contacts, and launch a multi-step email sequence to that list, all from within the same platform. Reply tracking and basic reporting on open/reply/meeting-booked rates are built in, which is what lets a team see whether a given message or list is actually working.',
      },
      {
        heading: 'Apollo vs. a CRM: two different jobs',
        body: 'Apollo is a prospecting tool, not a system of record. A CRM like HubSpot manages the full lifecycle of a deal once a lead exists - which pipeline stage it\'s in, what notes and follow-up tasks are attached, and reporting on total pipeline value. Apollo\'s job ends, in a sense, at the point a prospect replies with interest; from there, most sales teams want that reply to become a tracked deal in a CRM rather than sitting in an inbox where progress is invisible to the rest of the team. Because of this, Apollo and a CRM typically get implemented together, with replies flowing directly into the CRM as new deals rather than the two systems operating separately.',
      },
      {
        heading: 'What actually determines whether Apollo works',
        body: 'The contact database and sequencing tools are the easy part - most of what determines whether a campaign produces real meetings or gets ignored happens in the setup. A precisely defined ideal-customer-profile filter matters more than list size; a smaller, tightly-matched list of a few hundred contacts routinely outperforms a list of several thousand loosely-matched ones, because reply rates depend heavily on relevance, not volume. Genuine, specific personalization in the opening lines of a sequence (referencing something real about the recipient\'s company or role) meaningfully outperforms generic templated openers. Sender domain and deliverability configuration - proper SPF/DKIM setup and a gradual sending "warm-up" period for a new domain - also determines whether messages land in an inbox or a spam folder, regardless of how good the copy is.',
      },
      {
        heading: 'Deliverability: the part that gets skipped and shouldn\'t',
        body: 'A new sending domain or subdomain needs its sending reputation built up gradually - sending a large volume of cold email on day one from a brand-new domain is one of the most common reasons a campaign underperforms, regardless of targeting or messaging quality. Most implementations use a dedicated subdomain (rather than the company\'s primary domain) for cold outbound specifically so that any deliverability issues during the early sending period don\'t affect the primary domain\'s ability to send normal business email. This is a technical setup step that is easy to skip and hard to notice is missing until reply rates are already unexpectedly low.',
      },
      {
        heading: 'Is Apollo worth it for a small team?',
        body: 'For teams doing active outbound sales - real estate brokers reaching property developers, agencies pursuing new clients, or B2B service firms building a pipeline from scratch - Apollo is generally a reasonable fit regardless of team size; a single founder doing their own outbound and a five-person sales team both use the same core tools, just at different sequence volumes. It is a weaker fit for businesses that rely almost entirely on inbound leads or referrals, where the spend and setup time is often better directed toward the channels that are already working rather than adding a new outbound motion on top.',
      },
      {
        heading: 'Account-based versus broad prospecting',
        body: 'Apollo supports two meaningfully different approaches: broad prospecting, where a wider list matching general criteria is contacted at scale, and account-based targeting, where a short, specific list of named target companies is researched and approached with more tailored messaging per account. The right approach depends on deal size and sales motion - a business selling a lower-cost, higher-volume product usually leans toward broader prospecting, while a business selling a small number of large, high-value contracts usually gets better results from a smaller, more researched account-based list. Sequence structure and message personalization differ meaningfully between the two, which is why this is scoped based on the specific sales motion rather than applying one template to every business.',
      },
      {
        heading: 'How long before results are reliable',
        body: 'A new Apollo sequence typically needs two to four weeks of live sending before reply and meeting-booking rates stabilize enough to judge overall performance - the first send batches are also where sender reputation is still warming up and messaging is still being refined based on early replies. Judging a sequence\'s effectiveness from the first few days of sending, before deliverability has stabilized, tends to produce an inaccurate read on whether the targeting or messaging is actually working.',
      },
      {
        heading: 'Email regulations and consent considerations',
        body: 'Outbound cold email is subject to anti-spam and data-protection rules that vary by jurisdiction - most frameworks require a functioning unsubscribe mechanism, accurate sender identification, and a genuine business relevance to the recipient rather than indiscriminate mass sending. Businesses sending outbound email into Thailand should be aware of the Personal Data Protection Act\'s requirements around processing personal data, including contact information gathered for prospecting purposes; this is a factor in how contact lists are sourced and used, not just how messages are worded. We recommend treating unsubscribe requests as immediate and permanent, and keeping sequence volume and targeting narrow enough that recipients can reasonably see the message as relevant to their role, rather than optimizing purely for list size.',
      },
      {
        heading: 'Measuring whether a campaign is actually working',
        body: 'Reply rate alone is a misleading success metric, since a message can get replies without generating real sales interest - the more useful metrics are meetings booked per hundred contacts reached, and eventually, deals closed per meeting booked, tracked over a long enough window to smooth out weekly variance. Because deliverability and messaging both take a few weeks to stabilize, we recommend judging a new sequence\'s performance after a full send cycle rather than reacting to the first few days of data, and comparing performance across different list segments to identify which target profile is actually converting rather than assuming the whole list performs uniformly.',
      },
      {
        heading: 'What a first campaign setup actually involves',
        body: 'A first Apollo campaign generally moves through defining the ideal-customer-profile filters (industry, company size, title, location), building an initial list against those filters and manually reviewing a sample for relevance before sending anything, writing a short sequence (typically three to five touches) with genuine personalization variables, and configuring the sending domain\'s technical records ahead of the first send. Skipping the manual review step and sending to an unreviewed filtered list is one of the more common early mistakes, since automated filters occasionally include contacts that technically match the criteria but are clearly not a good fit on manual inspection.',
      },
    ],
    citations: [
      { label: 'Apollo.io help center - getting started', url: 'https://docs.apollo.io/docs/getting-started-with-apollo' },
      { label: 'Apollo.io - email deliverability and sending best practices', url: 'https://docs.apollo.io/docs/email-deliverability' },
    ],
    solutionSlug: 'apollo-lead-generation',
    landingPageLinks: [{ country: 'myanmar', slug: 'apollo-lead-generation' }],
  },
  {
    slug: 'hubspot-crm-guide',
    title: 'HubSpot CRM Implementation Guide for Growing Businesses',
    meta: {
      en: {
        title: 'HubSpot CRM Implementation Guide | MMKK AI',
        description: 'How HubSpot CRM implementation actually works - pipeline setup, data migration, and the adoption mistakes that make most CRM rollouts fail.',
      },
      th: {
        title: 'คู่มือการติดตั้งระบบ HubSpot CRM | MMKK AI',
        description: 'วิธีการติดตั้งระบบ HubSpot CRM ที่แท้จริง - การตั้งค่าไปป์ไลน์ การย้ายข้อมูล และข้อผิดพลาดที่ทำให้การใช้งาน CRM ล้มเหลว',
      },
      mm: {
        title: 'HubSpot CRM တပ်ဆင်မှု လမ်းညွှန် | MMKK AI',
        description: 'HubSpot CRM တပ်ဆင်မှု အမှန်တကယ်လုပ်ဆောင်ပုံ - pipeline ပြင်ဆင်ခြင်း၊ ဒေတာပြောင်းရွှေ့ခြင်းနှင့် CRM အသုံးပြုမှု မအောင်မြင်စေသော အမှားများ။',
      },
    },
    datePublished: '2026-01-22',
    dateModified: '2026-04-30',
    intro:
      'Most CRM rollouts don\'t fail because the software is bad - they fail because the pipeline doesn\'t match how the sales team actually sells, the imported data is a mess nobody cleaned up, or nobody runs the onboarding needed to make logging a deal an actual habit rather than an ignored chore. This guide walks through the implementation steps in the order they matter, and the specific points where rollouts commonly go wrong.',
    sections: [
      {
        heading: 'Step 1: Map the actual sales process before configuring anything',
        body: 'Before any HubSpot configuration happens, the sales process needs to be documented as it actually happens today - not a generic template pulled from HubSpot\'s default setup. A real estate brokerage\'s pipeline (listing intake, viewing scheduled, offer submitted, closing) looks nothing like a software company\'s (demo booked, trial started, contract sent, signed), and configuring deal stages around the wrong template is one of the most common reasons a sales team abandons a new CRM within the first few weeks - the tool feels like it\'s fighting their actual workflow rather than supporting it.',
      },
      {
        heading: 'Step 2: Clean data in, not just data in',
        body: 'Existing contact and company data - almost always a spreadsheet, sometimes a previous CRM export - nearly always contains duplicate entries, inconsistent company name spellings, and outdated contact information. Importing this data as-is without cleanup doesn\'t solve the underlying disorganization; it just relocates the same mess into HubSpot, where it now looks more official while remaining just as unreliable for reporting. Deduplication, standardizing company name formats, and tagging contacts by segment before import is usually the single most time-consuming step of an implementation, and it is also the step most likely to get rushed or skipped under time pressure - which is exactly why skipping it causes problems months later when reports don\'t match reality.',
      },
      {
        heading: 'Step 3: Configure pipeline stages and required fields deliberately',
        body: 'Each deal stage should represent a specific, observable event (an offer was sent, a contract was signed) rather than a vague status a rep has to interpret subjectively - vague stage definitions are a common source of inconsistent pipeline reporting, where two reps categorize similar deals differently. Required fields at each stage should be kept to the minimum genuinely needed for reporting; every additional required field is friction that makes reps more likely to skip logging a deal accurately, or at all.',
      },
      {
        heading: 'Step 4: Automate the follow-ups that get skipped',
        body: 'Email sequences and task reminders for follow-up are frequently where a CRM earns its keep in practice - leads that would otherwise go cold because a busy rep forgot to follow up instead get a scheduled reminder or an automated nudge. This matters most for businesses with long or seasonal sales cycles, where a lead from three months ago is easy to forget about entirely without a system prompting a check-in at the right interval.',
      },
      {
        heading: 'Step 5: Build a small number of dashboards leadership will actually check',
        body: 'A reporting dashboard nobody opens is a wasted configuration effort - the goal is two to three focused dashboards (total pipeline value, deals by stage, individual rep activity, for example) that answer questions leadership actually asks in a weekly or monthly review, rather than a large number of reports that dilute attention and get ignored. Dashboards should be revisited a few months after go-live, since the questions leadership actually wants answered often shift once the team has real data to look at.',
      },
      {
        heading: 'Step 6: Run live onboarding, not a shared help article',
        body: 'This is the step most implementations skip or underinvest in, and it is arguably the one that determines success more than any configuration choice. A live onboarding session with the actual sales team - showing them exactly how to log a call, move a deal forward, and check their own dashboard - produces meaningfully higher adoption than sending a help-center link and assuming people will read it. A CRM nobody logs into consistently is worse than no CRM at all, because it creates a false sense that pipeline data exists and is being tracked, when in practice the real information is scattered across reps\' memory and personal notes.',
      },
      {
        heading: 'What tier is actually needed',
        body: 'HubSpot\'s free and Starter tiers cover basic contact and deal tracking but have limited automation depth and reporting flexibility; Professional and Enterprise tiers add more advanced sequence branching, custom reporting, and workflow automation, but not every business needs that depth at launch. Sizing the right tier against actual requirements - rather than defaulting to the cheapest available option and hitting a capability wall a few months in, or over-buying capability the team will never use - is part of the initial scoping conversation rather than an assumption made upfront.',
      },
      {
        heading: 'Early warning signs an implementation is heading off track',
        body: 'A few patterns tend to show up early when a rollout is struggling: reps logging deals inconsistently or well after the fact rather than in real time, deal stages that don\'t map cleanly to real decision points so multiple reps interpret the same situation differently, and a growing gap between what the pipeline dashboard shows and what sales leadership actually believes is happening. Catching these signs in the first month or two - through a quick check-in with reps rather than waiting for a quarterly review - is meaningfully easier to correct than after months of inconsistent data have accumulated and reporting has already lost leadership\'s trust.',
      },
      {
        heading: 'Maintaining the system after go-live',
        body: 'A CRM implementation is not a one-time project - pipeline stages, required fields, and automation rules typically need adjustment as the sales process itself evolves, new products are added, or the team grows. We recommend a brief review three to six months after go-live specifically to check whether the original configuration still matches how the team actually sells, since sales processes usually drift somewhat from the original design once real deals start flowing through the system, and small configuration adjustments at that point are far less disruptive than a full re-implementation later.',
      },
      {
        heading: 'How HubSpot fits alongside a lead-generation tool like Apollo',
        body: 'HubSpot manages the pipeline once a lead exists; it does not, on its own, find new prospects to contact. Businesses running active outbound prospecting typically pair HubSpot with a tool like Apollo, configured so that a positive reply to an outbound sequence automatically creates a new deal in HubSpot rather than requiring a rep to manually re-enter the lead. This integration is usually one of the more valuable pieces of a combined setup, since it removes the manual step (and the risk of a promising reply being missed or forgotten) between a lead expressing interest and that lead becoming a tracked, followed-up deal.',
      },
      {
        heading: 'Setting realistic expectations for the first month',
        body: 'Sales teams rarely log deals perfectly from day one - the first few weeks after go-live typically involve reps forgetting steps, mis-categorizing deals, or reverting briefly to old habits like tracking a deal in a personal notebook alongside the new system. This is normal and not a sign the implementation has failed; what matters is whether logging behavior steadily improves week over week as the team gets comfortable, which is easier to track and correct with brief weekly check-ins during the first month than by waiting for a formal review much later, by which point bad habits are harder to unwind.',
      },
    ],
    citations: [
      { label: 'HubSpot Knowledge Base - set up your sales pipeline', url: 'https://knowledge.hubspot.com/deals/create-and-customize-pipelines-and-deal-stages' },
      { label: 'HubSpot Knowledge Base - import data into HubSpot', url: 'https://knowledge.hubspot.com/import-and-export/import-objects' },
    ],
    solutionSlug: 'hubspot-crm',
    landingPageLinks: [
      { country: 'myanmar', slug: 'hubspot-crm' },
      { country: 'thailand', slug: 'hubspot-crm' },
    ],
  },
  {
    slug: 'google-workspace-migration-guide',
    title: 'Google Workspace Migration: The Complete Process and Timeline',
    meta: {
      en: {
        title: 'Google Workspace Migration Guide & Timeline | MMKK AI',
        description: 'What actually happens during a Google Workspace migration - the audit, staged migration, and cutover steps, and how long each typically takes.',
      },
      th: {
        title: 'คู่มือการย้ายระบบ Google Workspace | MMKK AI',
        description: 'ขั้นตอนที่แท้จริงในการย้ายระบบ Google Workspace - การตรวจสอบ การย้ายข้อมูลแบบเป็นขั้นตอน และการเปลี่ยนระบบ',
      },
      mm: {
        title: 'Google Workspace ပြောင်းရွှေ့ခြင်း လမ်းညွှန်နှင့် အချိန်ဇယား | MMKK AI',
        description: 'Google Workspace ပြောင်းရွှေ့ခြင်းအတွင်း အမှန်တကယ်ဖြစ်ပေါ်လာသည့် စစ်ဆေးခြင်း၊ အဆင့်ဆင့်ပြောင်းရွှေ့ခြင်းနှင့် ခလုတ်ပြောင်းခြင်း အဆင့်များ။',
      },
    },
    datePublished: '2026-04-05',
    dateModified: '2026-06-28',
    intro:
      'A Google Workspace migration is a well-understood, plannable process, but most of the actual risk in a migration comes from skipping the planning steps and going straight to a DNS cutover before mail and files have been properly moved and verified. This guide walks through what a properly sequenced migration actually looks like, step by step, and what realistically affects the timeline.',
    sections: [
      {
        heading: 'Step 1: Audit the current environment before touching anything',
        body: 'Before any migration work begins, the current email system, file storage, and calendar setup need to be audited in enough detail to plan the move accurately - how many mailboxes exist, roughly how much mail and file data needs to move, and which shared drives, shared mailboxes, or distribution lists need to be recreated in the new environment rather than simply forgotten. Skipping this step is one of the most common causes of a migration running longer than expected, because gaps in the original inventory tend to surface midway through the move rather than up front.',
      },
      {
        heading: 'Step 2: Provision the new accounts and structure',
        body: 'New Google Workspace accounts are provisioned and organized into an organizational unit structure that mirrors how the business is actually organized - by department, office location, or role - since this structure determines how security policy and shared drive permissions get applied later. Getting this structure right at provisioning time avoids a much more disruptive restructuring exercise after the business is already relying on the new accounts day to day.',
      },
      {
        heading: 'Step 3: Staged migration while the old system stays live',
        body: 'Mail, contacts, and files are migrated into the new accounts while the old system remains fully live and continues receiving incoming mail - nothing is switched off at this stage. This is the step that actually prevents lost email during a transition: because the old system keeps working normally throughout, there is no window where incoming messages have nowhere to land. Migration tools generally support an initial full sync followed by incremental syncs that pick up any mail that arrived after the first pass, which is what allows the final cutover window to be short.',
      },
      {
        heading: 'Step 4: Verify before cutover, not after',
        body: 'Before scheduling the DNS cutover, migrated mailboxes, calendars, and file structures are checked against the source system to confirm the migration is actually complete and accurate - spot-checking mailbox counts, folder structures, and shared drive permissions rather than assuming a migration tool\'s completion status alone. This verification step is what makes the eventual cutover a low-risk, mostly uneventful event rather than a moment where problems are first discovered.',
      },
      {
        heading: 'Step 5: The cutover window',
        body: 'Once data is fully migrated and verified, MX records are updated so new incoming mail routes to Google Workspace instead of the old system. This is scheduled during a low-traffic window - typically a weekend or evening - and is usually the only point in the entire process with any visible impact to end users, often under an hour as DNS changes propagate. Because the bulk of the actual data movement already happened during the staged migration step, the cutover itself is comparatively low-drama when the earlier steps were done properly.',
      },
      {
        heading: 'Step 6: Staff onboarding immediately after cutover',
        body: 'The migration is not complete when the data has moved - it is complete when the team actually knows where their files are, how shared drives are organized, and how to use Gmail, Drive, and Calendar day to day. Short onboarding sessions run immediately after cutover, while the change is still fresh, meaningfully reduce the volume of basic "where is my file" support requests in the following weeks compared to leaving the team to figure it out unassisted.',
      },
      {
        heading: 'What actually affects the timeline',
        body: 'For a business in the 10-50 user range with a relatively simple existing setup (no complex custom mail-routing rules, a modest volume of historical email and files), the full process from initial audit to completed onboarding commonly falls within a few weeks, but this is not a fixed number - it depends directly on user count, total data volume, the number of shared drives and distribution lists that need to be recreated, and how much custom mail routing the current system has in place. A specific timeline is provided only after the audit step, once these factors are actually known for the business in question, rather than quoted upfront from a generic range.',
      },
      {
        heading: 'Common risks and how they get mitigated',
        body: 'The most common migration risk is not data loss during the technical transfer itself - modern migration tools are generally reliable at moving mail and files - but rather incomplete discovery during the audit step, where a shared mailbox, an old distribution list still in active use, or a third-party integration tied to the old email system gets missed and only surfaces as a problem after cutover. This is mitigated by treating the audit step as genuinely thorough rather than a quick inventory, and by keeping the old system live and accessible for a defined period after cutover so anything missed can still be recovered rather than being permanently lost.',
      },
      {
        heading: 'Support in the weeks immediately after migration',
        body: 'The first two to three weeks after cutover typically see the highest volume of user questions - where a specific email or file ended up, how a particular shared drive permission works, or how a workflow that used to run through the old system now works in Google Workspace. Planning for a defined period of closer support availability immediately after cutover, rather than treating the migration as finished the moment mail is flowing, meaningfully reduces user frustration and the perception that "the new system is worse," which is often really just unfamiliarity rather than an actual functional gap.',
      },
      {
        heading: 'Choosing the cutover window and timing',
        body: 'Cutover windows are typically scheduled for evenings or weekends specifically to minimize the number of users actively sending or receiving mail during the DNS propagation period, though propagation itself is usually fast for most recipients. Businesses with predictable slow periods - a school migrating during a term break, or a business avoiding its own busiest sales season - often choose those windows deliberately so that any unexpected minor hiccup has the smallest possible impact on day-to-day operations, rather than treating the exact timing as an afterthought.',
      },
      {
        heading: 'Migrating from a previous Google Workspace administrator',
        body: 'A less common but real scenario is migrating administrative control of an existing Google Workspace domain - for example, when a business that has been running Workspace informally, administered by a departing staff member or an external contractor, needs that admin access properly transferred and documented rather than left with an outside party. This involves confirming domain ownership, resetting admin credentials, reviewing existing organizational unit structure and security policy for anything that needs correcting, and documenting the account inventory so the business has its own clear record of who has access to what, independent of whoever originally set the account up. This kind of administrative handover is worth treating with the same care as a full technical migration, since an undocumented account structure inherited from a previous administrator is often harder to work with safely than starting the setup from scratch, particularly where old shared drive permissions or forwarding rules were never fully recorded anywhere.',
      },
    ],
    citations: [
      { label: 'Google Workspace Admin Help - migrate email to Google Workspace', url: 'https://support.google.com/a/answer/6035784' },
      { label: 'Google Workspace Admin Help - MX record setup', url: 'https://support.google.com/a/answer/140034' },
    ],
    solutionSlug: 'google-workspace',
    landingPageLinks: [{ country: 'myanmar', slug: 'google-workspace-migration' }],
  },
]

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug)
}
