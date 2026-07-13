import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'
const LOCALES = ['en', 'th', 'mm'] as const

// Shared metadata builder so every route (existing + new) produces the same
// canonical / hreflang / Open Graph shape already established in
// app/[locale]/layout.tsx, instead of re-deriving it per page.
export function buildMetadata(opts: {
  locale: string
  path: string // e.g. '' for home, 'myanmar/google-workspace' for a landing page
  title: string
  description: string
}): Metadata {
  const { locale, path, title, description } = opts
  const cleanPath = path ? `/${path}` : ''

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}${cleanPath}`,
      languages: Object.fromEntries(
        LOCALES.map((loc) => [loc === 'mm' ? 'my-MM' : loc, `${BASE_URL}/${loc}${cleanPath}`])
      ),
    },
    openGraph: {
      title,
      description,
      locale: locale === 'mm' ? 'my_MM' : locale,
      alternateLocale: ['en', 'th', 'my_MM'],
      url: `${BASE_URL}/${locale}${cleanPath}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
