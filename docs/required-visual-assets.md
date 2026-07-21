# Visual Asset Plan

Structured plan for every major page's visual content, covering what already exists,
what was added as an original SVG/CSS component in this pass, and what still needs a
real, licensed photograph supplied by the business. No photograph has been added in
this pass - see `docs/image-assets-register.md` for why, and `lib/imageConfig.ts` for
the exact slot each row below maps to.

Category legend: **real photography**, **product screenshot**, **original SVG
diagram**, **interface mockup** (an original, non-vendor-copied conceptual UI, not a
real screenshot), **map**, **branded illustration**.

## 1. Homepage

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Hero | System flow diagram | Show leads -> CRM -> automation -> cloud -> reporting -> growth at a glance | responsive, full width | landscape | original SVG diagram | Owned (already built) | `role="img"` composite label, not a static alt | Stacks to vertical flow below `md` | Live |
| Hero (supporting) | Bangkok business photo | Ground the brand in Thailand instantly | 1600x1000 | landscape | real photography | Licensed stock or MMKK AI-owned | "Bangkok business district representing MMKK AI's Thailand technology services" | Center crop to 4:3 | High (slot: `home-hero-bangkok`, pending) |
| Trust strip | Platform name list | Show implemented platforms without implying partnership | n/a | n/a | typography | Owned | n/a | n/a | Live |
| Regional coverage | Region coverage diagram | Show Myanmar/Thailand coverage without a literal (and error-prone) map | responsive | landscape | original SVG diagram | Owned (new this pass) | `role="img"` composite label | Stacks to vertical on mobile | Live |
| Regional coverage (supporting) | Thailand/SEA business photo | Reinforce regional presence visually | 1200x900 | landscape | real photography | Licensed stock or MMKK AI-owned | "Modern Bangkok commercial building representing regional technology services in Thailand" | Center crop to 4:3 | Medium (slot: `home-regional-thailand`, pending) |
| Process | 4-step process timeline | Show how engagements work | responsive | landscape | original SVG diagram | Owned (already built) | Per-step icon + label, decorative icon alt="" | Collapses to 2x2 grid | Live |
| Solution platform | Architecture diagram | Show how systems connect | responsive | landscape | original SVG diagram | Owned (already built) | `role="img"` composite label | Stacks vertically | Live |

## 2. About

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Intro | Team/office photo | Put a real face on the company | 1200x800 | landscape | real photography | MMKK AI-owned, consent required for anyone shown | "MMKK AI team at work" | Center crop to 1:1, keep faces in frame | High (slot: `about-team-office`, pending) |
| Intro | Leadership photo (optional) | Personal accountability/trust | 800x800 | square | real photography | MMKK AI-owned, only if supplied and approved | "MMKK AI leadership" | Center crop to 1:1 | Low - optional (slot: `about-leadership`, pending) |
| Trust section | none needed | Trust conveyed via text + links to /partners and /case-studies | n/a | n/a | typography | Owned | n/a | n/a | Live |

## 3. Contact

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Regional support | Region coverage diagram | Show Myanmar/Thailand coverage | responsive | landscape | original SVG diagram | Owned (new this pass) | `role="img"` composite label | Stacks vertically | Live |
| Regional support (supporting) | Office/region photo | Ground contact info in a real place | 1000x700 | landscape | real photography | Licensed stock or MMKK AI-owned | "MMKK AI regional office or service area in Thailand" | Center crop to 4:3 | Medium (slot: `contact-office-region`, pending) |

## 4. AI Visibility (no dedicated route - covered by /resources/what-is-ai-visibility and /resources/improve-ai-answer-visibility)

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Guide body | AI visibility process diagram | Show website -> structured data -> AI crawl -> citation | responsive | landscape | original SVG diagram | Owned (new this pass) | `role="img"` composite label | Stacks vertically | Live |

Note: there is no standalone `/ai-visibility` page - MMKK AI does not sell AI-
visibility auditing as a productized service per the evidence available in this
codebase (see `AI_VISIBILITY_REMEDIATION_REPORT.md` §11). This topic is covered
editorially through the two resource guides instead.

## 5. Google Cloud

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Hero | Cloud console mockup | Convey the admin surface conceptually | responsive | landscape | interface mockup (labeled "Conceptual illustration") | Owned | n/a - decorative, labeled in-component | Stacks below text on mobile | Live |
| Overview tab | Infrastructure flow diagram | Show compute/storage/networking/security layers | responsive | landscape | original SVG diagram | Owned (new this pass) | `role="img"` composite label | Stacks vertically | Live |
| Hero (optional future) | Approved Google Cloud brand asset | Polish, if Google's brand guidelines permit | 1200x800 | landscape | product screenshot / branded illustration | Google's official media kit only, if permitted | n/a | n/a | Low - current mockup already adequate |

## 6. Google Workspace

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Hero | Mail/admin console mockup | Convey the admin surface conceptually | responsive | landscape | interface mockup (labeled "Conceptual illustration") | Owned | n/a - decorative | Stacks below text on mobile | Live |
| Overview tab | Collaboration flow diagram | Show Gmail -> Drive -> Meet -> Calendar | responsive | landscape | original SVG diagram | Owned (new this pass) | `role="img"` composite label | Stacks vertically | Live |
| Hero (optional future) | Approved Workspace product imagery | Polish, if Google's brand guidelines permit | 1200x800 | landscape | product screenshot | Google's official media kit only, if permitted | n/a | n/a | Low |

## 7. Apollo

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Hero | Prospect list mockup | Convey outbound tooling conceptually | responsive | landscape | interface mockup (labeled "Conceptual illustration") | Owned | n/a - decorative | Stacks below text on mobile | Live |
| Overview tab | Apollo -> CRM flow diagram | Show prospecting -> reply -> CRM deal -> close | responsive | landscape | original SVG diagram | Owned (new this pass) | `role="img"` composite label | Stacks vertically | Live |

## 8. TeamViewer

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Hero | Device management console mockup | Convey remote-support tooling conceptually | responsive | landscape | interface mockup (labeled "Conceptual illustration") | Owned | n/a - decorative | Stacks below text on mobile | Live |
| Overview tab | Support session flow diagram | Show device flagged -> session -> resolved -> logged | responsive | landscape | original SVG diagram | Owned (new this pass) | `role="img"` composite label | Stacks vertically | Live |

## 9. Adobe

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Hero | Creative Cloud admin console mockup | Convey licensing/admin tooling conceptually | responsive | landscape | interface mockup (labeled "Conceptual illustration") | Owned | n/a - decorative | Stacks below text on mobile | Live |
| Overview tab | Creative workflow diagram | Show draft -> review -> approved -> published | responsive | landscape | original SVG diagram | Owned (new this pass) | `role="img"` composite label | Stacks vertically | Live |

## 10. Sales Workflow Design

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Hero | Pipeline/kanban mockup | This page previously had a text-only hero - now shows a conceptual staged-pipeline mockup | responsive | landscape | interface mockup (labeled "Conceptual illustration") | Owned (new this pass) | n/a - decorative | Stacks below text on mobile | Live |
| Overview tab | Apollo -> CRM flow diagram | Reinforce the workflow being designed | responsive | landscape | original SVG diagram | Owned (new this pass, shared with Apollo page) | `role="img"` composite label | Stacks vertically | Live |

## 11. Remote Monitoring and Management

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Hero | Device status dashboard mockup | This page previously had a text-only hero - now shows a conceptual device-monitoring mockup | responsive | landscape | interface mockup (labeled "Conceptual illustration") | Owned (new this pass) | n/a - decorative | Stacks below text on mobile | Live |

## 12. Partners

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Platforms We Implement | Supporting photo of implementation work | Add visual warmth without implying partnership | 1200x700 | landscape | real photography | Licensed stock or MMKK AI-owned | "MMKK AI technology implementation work" | Center crop to 4:3 | Low (slot: `partners-platform-visual`, pending) |
| Verified Partnerships | None | Deliberately no image here - an empty, evidence-based state should not be visually dressed up | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

## 13. Case Studies

| Section | Image type | Purpose | Dimensions | Orientation | Category | Ownership/license | Alt text | Mobile crop | Priority |
|---|---|---|---|---|---|---|---|---|---|
| Case study card | Redacted project screenshot | Illustrate real delivered work once a case study is approved | 1200x800 | landscape | product screenshot (redacted) | MMKK AI's own work; strip all personal data, account IDs, client names unless permitted | "Client project screenshot, redacted for confidentiality" | Center crop to 4:3 | Medium - blocked on a case study existing (slot: `case-study-project-1`, pending) |

## How to activate a pending slot

Every "pending" row above corresponds to an entry in `lib/imageConfig.ts`. To publish
a real photo: place the licensed file under `/public/images/...`, set that entry's
`srcPath`, fill in `licenseType`/`sourceUrl`/`attribution` if it's licensed stock (or
leave null if it's an MMKK AI-owned original), then set `approvalStatus: 'approved'`
and `publicVisibility: true`. The page automatically renders it via
`<SiteImage id="...">` - no other code change is required, and nothing renders (no
broken image, no layout shift) until all three conditions are met.
