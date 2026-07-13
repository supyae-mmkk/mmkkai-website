import type { MetadataRoute } from 'next'
import { locales } from '@/i18n'
import { solutions } from '@/lib/solutions'
import { landingPages } from '@/lib/landingPages'
import { guides } from '@/lib/guides'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

// Fixed date this rebrand/remediation content was last substantively
// revised. Deliberately NOT `new Date()` - a sitemap that reports every URL
// as "modified today" on every single build is meaningless to crawlers and
// was flagged in the pre-deployment AEO audit. Update this constant only
// when the underlying static page content (not the build itself) changes.
const CONTENT_LAST_MODIFIED = '2026-07-13'

// Static marketing pages with no per-item content-freshness field of their
// own. Dated to the same fixed remediation date above rather than computed
// at build time.
const staticPaths = ['', 'solutions', 'industries', 'resources', 'about', 'contact', 'privacy-policy', 'terms-of-service']

// Note: legacy /products and /services routes are intentionally excluded -
// they are 301 redirects into /solutions, not indexable content, and
// robots.txt already disallows /api/, /admin/, /_next/, /private/.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  const pushEntry = (path: string, lastModified: string | undefined, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) => {
    for (const locale of locales) {
      const cleanPath = path ? `/${path}` : ''
      const entry: MetadataRoute.Sitemap[number] = {
        url: `${BASE_URL}/${locale}${cleanPath}`,
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc === 'mm' ? 'my-MM' : loc, `${BASE_URL}/${loc}${cleanPath}`])
          ),
        },
      }
      if (lastModified) entry.lastModified = lastModified
      entries.push(entry)
    }
  }

  for (const path of staticPaths) {
    pushEntry(path, CONTENT_LAST_MODIFIED, path === '' ? 1.0 : 0.7, path === '' ? 'weekly' : 'monthly')
  }

  // Solution overview pages - dated to the same remediation pass; individual
  // solutions don't yet track their own per-item revision date.
  for (const s of solutions) {
    pushEntry(`solutions/${s.slug}`, CONTENT_LAST_MODIFIED, 0.7, 'monthly')
  }

  // Country landing pages carry their own `lastModified` field, set when
  // that specific page's content last materially changed.
  for (const p of landingPages) {
    pushEntry(`${p.country}/${p.slug}`, p.lastModified, 0.9, 'monthly')
  }

  // Guides carry a real dateModified distinct per article.
  for (const g of guides) {
    pushEntry(`resources/${g.slug}`, g.dateModified, 0.7, 'monthly')
  }

  return entries
}
