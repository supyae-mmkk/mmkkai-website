import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import { solutions, getSolution, pillars } from '@/lib/solutions'
import { countries } from '@/lib/countries'
import { landingPages } from '@/lib/landingPages'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const solution = getSolution(slug)
  if (!solution) return {}
  return buildMetadata({
    locale,
    path: `solutions/${slug}`,
    title: `${solution.name} | MMKK AI`,
    description: solution.description.slice(0, 155),
  })
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params
  const solution = getSolution(slug)
  if (!solution) notFound()

  const t = await getTranslations('solutionsPage')
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'
  const url = `${BASE_URL}/${locale}/solutions/${slug}`

  const related = solutions.filter((s) => s.pillar === solution.pillar && s.slug !== solution.slug)
  // FAQ entries pulled from any country landing page tied to this solution,
  // so the solution overview page also carries FAQPage schema (Phase 3.6/3.7).
  const relatedFaq = landingPages.filter((p) => p.solutionSlug === solution.slug).flatMap((p) => p.faq).slice(0, 4)

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          serviceSchema({
            name: solution.name,
            description: solution.description,
            url,
            areaServed: 'Myanmar, Thailand',
            serviceType: solution.name,
          }),
          breadcrumbSchema([
            { name: 'Home', url: `${BASE_URL}/${locale}` },
            { name: 'Solutions', url: `${BASE_URL}/${locale}/solutions` },
            { name: solution.name, url },
          ]),
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-primary mb-3">{pillars[solution.pillar].name}</p>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{solution.name}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{solution.description}</p>

          {solution.countries.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-8">
              {solution.countries.includes('myanmar') && (
                <Link
                  href={`/myanmar/${slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-black font-semibold rounded-lg text-sm"
                >
                  {t('countryCtaMyanmar')} <ArrowRight size={14} />
                </Link>
              )}
              {solution.countries.includes('thailand') && (
                <Link
                  href={`/thailand/${slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/40 text-primary font-semibold rounded-lg text-sm"
                >
                  {t('countryCtaThailand')} <ArrowRight size={14} />
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-6">{t('title') === 'Solutions' ? "What's Included" : "What's Included"}</h2>
          <ul className="space-y-3">
            {solution.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold font-display mb-6">{t('relatedTitle')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/solutions/${r.slug}`} className="glass neon-border rounded-lg p-4 hover:border-primary/60 transition-all">
                  <p className="font-semibold text-primary text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{r.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedFaq.length > 0 && <FaqSection items={relatedFaq} title="Frequently Asked Questions" subtitle={`Common questions about ${solution.name}.`} />}

      <CTASection />
    </main>
  )
}
