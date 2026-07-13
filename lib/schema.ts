// JSON-LD structured data builders for AEO / SEO.
// Consumed by components/JsonLd.tsx and rendered server-side (force-static),
// so schema always matches the visible page content.
//
// Remediation notes (pre-deployment audit):
// - sameAs now pulls only from lib/companyConfig.ts's verifiedSameAs (empty
//   until a real URL is confirmed) — no more fabricated LinkedIn/Facebook URLs.
// - logo now points at public/logo.svg, a real file that exists in this repo.
// - areaServed uses proper Country objects instead of a free-text string.
// - Article schema carries per-article dates, author, publisher, image, and
//   mainEntityOfPage instead of one shared fake date.

import { verifiedSameAs, companyInfo } from './companyConfig'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

export const ORG_ID = `${BASE_URL}/#organization`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: companyInfo.name,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}${companyInfo.logoPath}`,
      width: 400,
      height: 120,
    },
    description:
      'MMKK AI provides cloud, CRM, and AI automation deployment and support for businesses in Myanmar and Thailand, covering Google Workspace, Microsoft 365, HubSpot CRM, Apollo, Google Cloud, and applied AI automation.',
    email: companyInfo.email,
    // Only ever populated from lib/companyConfig.ts — see that file before
    // adding anything here.
    ...(verifiedSameAs.length > 0 ? { sameAs: verifiedSameAs } : {}),
    contactPoint: [
      { '@type': 'ContactPoint', telephone: companyInfo.offices.us.phone, contactType: 'sales', areaServed: 'US' },
      { '@type': 'ContactPoint', telephone: companyInfo.offices.thailand.phone, contactType: 'sales', areaServed: 'TH' },
      { '@type': 'ContactPoint', telephone: companyInfo.offices.myanmar.phone, contactType: 'sales', areaServed: 'MM' },
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: companyInfo.name,
    publisher: { '@id': ORG_ID },
  }
}

export function countrySchema(country: 'myanmar' | 'thailand') {
  return { '@type': 'Country', name: country === 'myanmar' ? 'Myanmar' : 'Thailand' }
}

export function localBusinessSchema(country: 'myanmar' | 'thailand') {
  const data =
    country === 'myanmar'
      ? { name: 'MMKK AI Myanmar', telephone: companyInfo.offices.myanmar.phone, addressCountry: 'MM', addressLocality: 'Yangon' }
      : { name: 'MMKK AI Thailand', telephone: companyInfo.offices.thailand.phone, addressCountry: 'TH', addressLocality: 'Bangkok' }

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    parentOrganization: { '@id': ORG_ID },
    telephone: data.telephone,
    email: companyInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.addressLocality,
      addressCountry: data.addressCountry,
    },
    areaServed: countrySchema(country),
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  areaServed: Array<'myanmar' | 'thailand'>
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType,
    areaServed: opts.areaServed.map(countrySchema),
    provider: { '@id': ORG_ID },
  }
}

export function faqPageSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function articleSchema(opts: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    image: `${BASE_URL}/og-default.svg`,
    author: { '@id': ORG_ID },
    publisher: {
      '@id': ORG_ID,
      '@type': 'Organization',
      name: companyInfo.name,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}${companyInfo.logoPath}` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': opts.url },
  }
}
