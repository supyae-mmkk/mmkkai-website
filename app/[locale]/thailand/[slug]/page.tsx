import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { getLandingPage, getLandingPagesForCountry } from '@/lib/landingPages'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getLandingPagesForCountry('thailand').map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const page = getLandingPage('thailand', slug)
  if (!page) return {}
  return buildMetadata({
    locale,
    path: `thailand/${slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
  })
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params
  const page = getLandingPage('thailand', slug)
  if (!page) notFound()
  return <LandingPageTemplate page={page} locale={locale} />
}
