import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { getLandingPage, getLandingPagesForCountry } from '@/lib/landingPages'
import { buildMetadata, pickLocaleMeta } from '@/lib/seo'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getLandingPagesForCountry('myanmar').map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const page = getLandingPage('myanmar', slug)
  if (!page) return {}
  const localeMeta = pickLocaleMeta(page.meta, locale)
  return buildMetadata({
    locale,
    path: `myanmar/${slug}`,
    title: localeMeta.title,
    description: localeMeta.description,
  })
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  const page = getLandingPage('myanmar', slug)
  if (!page) notFound()
  return <LandingPageTemplate page={page} locale={locale} />
}
