// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for every real-photograph slot on this site.
//
// WHY THIS FILE EXISTS: this codebase currently contains zero raster
// photographs (confirmed by a full repo audit - see docs/image-assets-
// register.md). The visual-design brief asks for real Thailand/Myanmar
// business photography, team photos, and approved platform imagery, but
// none of that has been supplied or licensed yet. Rather than fabricate
// stock photography or leave broken <img> tags in the codebase, every real-
// photo slot is defined here with `approvalStatus: 'pending'` and
// `srcPath: null`. Nothing renders until BOTH `approvalStatus === 'approved'`
// AND `publicVisibility === true` AND a real `srcPath` under /public/images
// is supplied - see components/media/SiteImage.tsx.
//
// TO ACTIVATE A SLOT: drop the licensed file in /public/images/... , set
// `srcPath` to that path, fill in `licenseType`/`sourceUrl`/`attribution` if
// it's licensed stock (leave null if it's an MMKK AI-owned original), set
// `approvalStatus: 'approved'`, and set `publicVisibility: true`. The page
// consuming that slot's <SiteImage id="..."> will then render it
// automatically - no other code change is required.
// ---------------------------------------------------------------------------

export type ApprovalStatus = 'approved' | 'pending' | 'rejected'

export interface SiteImageConfig {
  id: string
  page: string
  section: string
  srcPath: string | null // path under /public, e.g. '/images/homepage/bangkok-hero.jpg'
  alt: string
  width: number
  height: number
  priority?: boolean
  mobileCrop: string // guidance for how this asset should be cropped/framed on narrow viewports
  licenseType: string | null // e.g. 'Owned - MMKK AI', 'Licensed stock - [provider]'
  sourceUrl: string | null
  attribution: string | null
  approvalStatus: ApprovalStatus
  publicVisibility: boolean
}

export const siteImages: SiteImageConfig[] = [
  {
    id: 'home-hero-bangkok',
    page: 'Homepage',
    section: 'Hero supporting visual',
    srcPath: null,
    alt: 'Bangkok business district representing MMKK AI\'s Thailand technology services',
    width: 1600,
    height: 1000,
    priority: true,
    mobileCrop: 'Center crop to 4:3, keep skyline midground - avoid cropping into building tops',
    licenseType: null,
    sourceUrl: null,
    attribution: null,
    approvalStatus: 'pending',
    publicVisibility: false,
  },
  {
    id: 'home-regional-thailand',
    page: 'Homepage',
    section: 'Regional Thailand/SEA visual section',
    srcPath: null,
    alt: 'Modern Bangkok commercial building representing regional technology services in Thailand',
    width: 1200,
    height: 900,
    mobileCrop: 'Center crop to 4:3',
    licenseType: null,
    sourceUrl: null,
    attribution: null,
    approvalStatus: 'pending',
    publicVisibility: false,
  },
  {
    id: 'about-team-office',
    page: 'About',
    section: 'Intro',
    srcPath: null,
    alt: 'MMKK AI team at work',
    width: 1200,
    height: 800,
    mobileCrop: 'Center crop to 1:1 on mobile, keep faces in frame',
    licenseType: null,
    sourceUrl: null,
    attribution: null,
    approvalStatus: 'pending',
    publicVisibility: false,
  },
  {
    id: 'about-leadership',
    page: 'About',
    section: 'Leadership (optional)',
    srcPath: null,
    alt: 'MMKK AI leadership',
    width: 800,
    height: 800,
    mobileCrop: 'Center crop to 1:1',
    licenseType: null,
    sourceUrl: null,
    attribution: null,
    approvalStatus: 'pending',
    publicVisibility: false,
  },
  {
    id: 'contact-office-region',
    page: 'Contact',
    section: 'Regional support sidebar',
    srcPath: null,
    alt: 'MMKK AI regional office or service area in Thailand',
    width: 1000,
    height: 700,
    mobileCrop: 'Center crop to 4:3',
    licenseType: null,
    sourceUrl: null,
    attribution: null,
    approvalStatus: 'pending',
    publicVisibility: false,
  },
  {
    id: 'partners-platform-visual',
    page: 'Partners',
    section: 'Platforms We Implement (supporting visual only - never placed to imply partnership)',
    srcPath: null,
    alt: 'MMKK AI technology implementation work',
    width: 1200,
    height: 700,
    mobileCrop: 'Center crop to 4:3',
    licenseType: null,
    sourceUrl: null,
    attribution: null,
    approvalStatus: 'pending',
    publicVisibility: false,
  },
  {
    id: 'case-study-project-1',
    page: 'Case Studies',
    section: 'First published case study (placeholder slot - no case study exists yet)',
    srcPath: null,
    alt: 'Client project screenshot, redacted for confidentiality',
    width: 1200,
    height: 800,
    mobileCrop: 'Center crop to 4:3',
    licenseType: null,
    sourceUrl: null,
    attribution: null,
    approvalStatus: 'pending',
    publicVisibility: false,
  },
]

export function getImage(id: string): SiteImageConfig | undefined {
  return siteImages.find((i) => i.id === id)
}

// An image is only ever safe to render when every one of these is true -
// see components/media/SiteImage.tsx, which is the only place this should
// be called from.
export function isRenderable(img: SiteImageConfig | undefined): img is SiteImageConfig & { srcPath: string } {
  return !!img && img.approvalStatus === 'approved' && img.publicVisibility && !!img.srcPath
}
