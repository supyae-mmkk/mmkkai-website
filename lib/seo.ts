import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'
const LOCALES = ['en', 'th', 'mm'] as const
const DEFAULT_LOCALE = 'en'

// Shared metadata builder so every route produces the same canonical /
// hreflang / Open Graph / Twitter shape. Title and description MUST already
// be locale-specific text by the time they reach this function — this
// function only derives the URL-shaped fields (canonical, hreflang,
// og:url), it does not translate anything.
export function buildMetadata(opts: {
  locale: string
  path: string // e.g. '' for home, 'myanmar/google-workspace' for a landing page
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}): Metadata {
  const { locale, path, title, description } = opts
  const ogTitle = opts.ogTitle || title
  const ogDescription = opts.ogDescription || description
  const twitterTitle = opts.twitterTitle || title
  const twitterDescription = opts.twitterDescription || description
  const cleanPath = path ? `/${path}` : ''

  const languageAlternates: Record<string, string> = Object.fromEntries(
    LOCALES.map((loc) => [loc === 'mm' ? 'my-MM' : loc, `${BASE_URL}/${loc}${cleanPath}`])
  )
  // x-default points at the default-locale version so crawlers/AI agents
  // that don't match any specific hreflang still get a sensible landing page.
  languageAlternates['x-default'] = `${BASE_URL}/${DEFAULT_LOCALE}${cleanPath}`

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}${cleanPath}`,
      languages: languageAlternates,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      locale: locale === 'mm' ? 'my_MM' : locale,
      alternateLocale: ['en', 'th', 'my_MM'],
      url: `${BASE_URL}/${locale}${cleanPath}`,
      images: [`${BASE_URL}/og-default.svg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: [`${BASE_URL}/og-default.svg`],
    },
  }
}


export interface LocalizedMetaMap {
  en: { title: string; description: string }
  th: { title: string; description: string }
  mm: { title: string; description: string }
}

// Picks the right localized title/description, falling back to English if a
// locale is somehow missing (defensive - all content in this repo defines
// all three).
export function pickLocaleMeta(meta: LocalizedMetaMap, locale: string) {
  const key = (locale === 'en' || locale === 'th' || locale === 'mm' ? locale : 'en') as keyof LocalizedMetaMap
  return meta[key] || meta.en
}
