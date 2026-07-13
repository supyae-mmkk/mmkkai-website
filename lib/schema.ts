// JSON-LD structured data builders for AEO / SEO.
// Consumed by components/JsonLd.tsx and rendered server-side (force-static),
// so schema always matches the visible page content.

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

export const ORG_ID = `${BASE_URL}/#organization`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'MMKK AI',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      'MMKK AI is a business technology partner deploying Google Workspace, Microsoft 365, HubSpot CRM, Apollo, Google Cloud, and AI automation for growing businesses in Myanmar and Thailand.',
    email: 'sales@mmkkai.com',
    sameAs: [
      'https://www.linkedin.com/company/mmkkai',
      'https://www.facebook.com/mmkkai',
      // Add G2 / Capterra / Clutch / Google Cloud Partner Directory / Microsoft Partner Center
      // profile URLs here once each listing (Phase 3.5) is live.
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '+1-332-333-9868', contactType: 'sales', areaServed: 'US' },
      { '@type': 'ContactPoint', telephone: '+66-98-113-5613', contactType: 'sales', areaServed: 'TH' },
      { '@type': 'ContactPoint', telephone: '+95-9-5186635', contactType: 'sales', areaServed: 'MM' },
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'MMKK AI',
    publisher: { '@id': ORG_ID },
  }
}

export function localBusinessSchema(country: 'myanmar' | 'thailand') {
  const data =
    country === 'myanmar'
      ? { name: 'MMKK AI Myanmar', telephone: '+95-9-5186635', addressCountry: 'MM', addressLocality: 'Yangon' }
      : { name: 'MMKK AI Thailand', telephone: '+66-98-113-5613', addressCountry: 'TH', addressLocality: 'Bangkok' }

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    parentOrganization: { '@id': ORG_ID },
    telephone: data.telephone,
    email: 'sales@mmkkai.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.addressLocality,
      addressCountry: data.addressCountry,
    },
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  areaServed: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType,
    areaServed: opts.areaServed,
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

export function articleSchema(opts: { headline: string; description: string; url: string; datePublished: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  }
}
