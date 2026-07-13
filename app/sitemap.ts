import type { MetadataRoute } from 'next'
import { locales } from '@/i18n'
import { solutions } from '@/lib/solutions'
import { landingPages } from '@/lib/landingPages'
import { guides } from '@/lib/guides'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

// Next.js 14 native sitemap — there was no sitemap.xml anywhere in the
// codebase or on the live domain before this change (Phase 1.7 / 5.5 of the
// approved strategy). Covers every locale x route combination, including all
// new Solutions, Industries, Resources, and country landing pages.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['', 'solutions', 'industries', 'resources', 'about', 'contact']
  const solutionPaths = solutions.map((s) => `solutions/${s.slug}`)
  const guidePaths = guides.map((g) => `resources/${g.slug}`)
  const landingPagePaths = landingPages.map((p) => `${p.country}/${p.slug}`)

  const allPaths = [...staticPaths, ...solutionPaths, ...guidePaths, ...landingPagePaths]

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const path of allPaths) {
      const cleanPath = path ? `/${path}` : ''
      entries.push({
        url: `${BASE_URL}/${locale}${cleanPath}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1.0 : landingPagePaths.includes(path) ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc === 'mm' ? 'my-MM' : loc, `${BASE_URL}/${loc}${cleanPath}`])
          ),
        },
      })
    }
  }

  return entries
}
