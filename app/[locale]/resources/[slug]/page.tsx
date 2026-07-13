import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { guides, getGuide } from '@/lib/guides'
import { getSolution } from '@/lib/solutions'
import { getLandingPage } from '@/lib/landingPages'
import { countries } from '@/lib/countries'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { buildMetadata, pickLocaleMeta } from '@/lib/seo'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  const meta = pickLocaleMeta(guide.meta, locale)
  return buildMetadata({ locale, path: `resources/${slug}`, title: meta.title, description: meta.description })
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'
  const url = `${BASE_URL}/${locale}/resources/${slug}`
  const meta = pickLocaleMeta(guide.meta, locale)

  const relatedSolution = getSolution(guide.solutionSlug)
  const relatedLandingPages = guide.landingPageLinks
    .map((l) => getLandingPage(l.country, l.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          articleSchema({
            headline: guide.title,
            description: meta.description,
            url,
            datePublished: guide.datePublished,
            dateModified: guide.dateModified,
          }),
          breadcrumbSchema([
            { name: 'Home', url: `${BASE_URL}/${locale}` },
            { name: 'Resources', url: `${BASE_URL}/${locale}/resources` },
            { name: guide.title, url },
          ]),
        ]}
      />
      <Navbar />
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: `/${locale}` },
              { name: 'Resources', href: `/${locale}/resources` },
              { name: guide.title, href: '' },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">{guide.title}</h1>
          <p className="text-xs text-gray-500 mb-8">
            Published {new Date(guide.datePublished).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            {guide.dateModified !== guide.datePublished &&
              ` · Updated ${new Date(guide.dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
          </p>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">{guide.intro}</p>

          <div className="space-y-10">
            {guide.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-primary mb-3">{section.heading}</h2>
                <p className="text-gray-300 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          {guide.citations.length > 0 && (
            <div className="mt-14 pt-8 border-t border-white/10">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-4">Sources</h2>
              <ul className="space-y-2">
                {guide.citations.map((c) => (
                  <li key={c.url}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={13} className="flex-shrink-0" />
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-14 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-4">
            {relatedSolution && (
              <Link href={`/solutions/${relatedSolution.slug}`} className="glass neon-border rounded-lg p-4 hover:border-primary/60 transition-all flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Related solution</p>
                  <p className="font-semibold text-primary text-sm">{relatedSolution.name}</p>
                </div>
                <ArrowRight size={16} className="text-gray-500 flex-shrink-0" />
              </Link>
            )}
            {relatedLandingPages.map((p) => (
              <Link
                key={`${p.country}-${p.slug}`}
                href={`/${p.country}/${p.slug}`}
                className="glass neon-border rounded-lg p-4 hover:border-primary/60 transition-all flex items-center justify-between gap-3"
              >
                <div>
                  <p className="text-xs text-gray-500 mb-1">{countries[p.country].name} implementation</p>
                  <p className="font-semibold text-primary text-sm">{p.h1}</p>
                </div>
                <ArrowRight size={16} className="text-gray-500 flex-shrink-0" />
              </Link>
            ))}
            <Link href="/contact" className="glass neon-border rounded-lg p-4 hover:border-primary/60 transition-all flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Have questions?</p>
                <p className="font-semibold text-primary text-sm">Talk to us</p>
              </div>
              <ArrowRight size={16} className="text-gray-500 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </article>
      <CTASection />
    </main>
  )
}
