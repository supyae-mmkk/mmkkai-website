import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Check, ArrowRight, ExternalLink, ArrowLeftRight } from 'lucide-react'
import Navbar from './Navbar'
import CTASection from './CTASection'
import FaqSection from './FaqSection'
import JsonLd from './JsonLd'
import Breadcrumbs from './Breadcrumbs'
import Accordion from './sections/Accordion'
import GoogleWorkspaceDemo from './product-demos/GoogleWorkspaceDemo'
import Microsoft365Demo from './product-demos/Microsoft365Demo'
import HubSpotDemo from './product-demos/HubSpotDemo'
import ApolloDemo from './product-demos/ApolloDemo'
import GoogleCloudDemo from './product-demos/GoogleCloudDemo'

const DEMO_COMPONENTS: Record<string, React.ComponentType> = {
  'google-workspace': GoogleWorkspaceDemo,
  'google-workspace-migration': GoogleWorkspaceDemo,
  'microsoft-365': Microsoft365Demo,
  'hubspot-crm': HubSpotDemo,
  'apollo-lead-generation': ApolloDemo,
  'google-cloud': GoogleCloudDemo,
}
import { serviceSchema, breadcrumbSchema, localBusinessSchema } from '@/lib/schema'
import { getSolution } from '@/lib/solutions'
import { countries } from '@/lib/countries'
import { getLandingPage } from '@/lib/landingPages'
import { industries } from '@/lib/industries'
import type { LandingPage } from '@/lib/landingPages'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

export default async function LandingPageTemplate({ page, locale }: { page: LandingPage; locale: string }) {
  const tc = await getTranslations('common')
  const solution = getSolution(page.solutionSlug)
  const country = countries[page.country]
  const url = `${BASE_URL}/${locale}/${page.country}/${page.slug}`

  const siblingCountry: 'myanmar' | 'thailand' = page.country === 'myanmar' ? 'thailand' : 'myanmar'
  const siblingPage = getLandingPage(siblingCountry, page.slug)

  const relatedIndustries = industries.filter((i) => i.relevantSolutions.includes(page.solutionSlug)).slice(0, 3)
  const DemoComponent = DEMO_COMPONENTS[page.slug]

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          serviceSchema({
            name: page.h1,
            description: page.meta.en.description,
            url,
            areaServed: [page.country],
            serviceType: solution?.name || page.h1,
          }),
          localBusinessSchema(page.country),
          breadcrumbSchema([
            { name: 'Home', url: `${BASE_URL}/${locale}` },
            { name: 'Solutions', url: `${BASE_URL}/${locale}/solutions` },
            { name: country.name, url: `${BASE_URL}/${locale}/${page.country}/${page.slug}` },
            { name: page.h1, url },
          ]),
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Solutions', href: '/solutions' },
              { name: solution?.name || page.h1, href: solution ? `/solutions/${solution.slug}` : '' },
              { name: country.name, href: '' },
            ]}
          />
          <div className={`grid ${DemoComponent ? 'lg:grid-cols-2 gap-10' : ''} items-center`}>
            <div>
              <p className="text-sm uppercase tracking-wide text-primary mb-3">{country.name}</p>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{page.h1}</h1>
              <p className="text-xl text-gray-400 leading-relaxed">{page.problem}</p>
            </div>
            {DemoComponent && (
              <div>
                <DemoComponent />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold text-primary mb-3">Who This Is For</h2>
            <p className="text-gray-300 leading-relaxed text-sm">{page.whoFor}</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-primary mb-3">Common Implementation Scenarios</h2>
            <ul className="space-y-2">
              {page.scenarios.map((s) => (
                <li key={s} className="text-sm text-gray-300 leading-relaxed flex gap-2">
                  <span className="text-primary">&bull;</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-surface/40">
        <div className="max-w-4xl mx-auto">
          <Accordion
            items={[
              { id: 'process', title: 'Migration & Onboarding Process', content: page.process },
              { id: 'security', title: 'Security & Administration', content: page.security },
              { id: 'support', title: 'Local Support', content: page.support },
              { id: 'pricing', title: 'Pricing Approach', content: page.pricing },
            ]}
          />
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-6">What&apos;s Included</h2>
          <ul className="space-y-3">
            {page.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {page.crossBorderNote && siblingPage && (
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${siblingCountry}/${siblingPage.slug}`}
              className="flex items-start gap-4 glass neon-border rounded-xl p-6 hover:border-primary/60 transition-all group"
            >
              <ArrowLeftRight className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Cross-Border Operations</p>
                <p className="text-sm text-gray-300">{page.crossBorderNote}</p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <FaqSection items={page.faq} title="Frequently Asked Questions" subtitle={`Direct answers about ${page.h1.toLowerCase()}.`} />

      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
          {solution && (
            <Link
              href={`/solutions/${solution.slug}`}
              className="flex items-center justify-between glass neon-border rounded-xl p-5 hover:border-primary/60 transition-all group"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{tc('relatedSolution')}</p>
                <p className="font-semibold text-white text-sm">{solution.name} overview →</p>
              </div>
              <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" size={18} />
            </Link>
          )}
          {page.guideSlug && (
            <Link
              href={`/resources/${page.guideSlug}`}
              className="flex items-center justify-between glass neon-border rounded-xl p-5 hover:border-primary/60 transition-all group"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{tc('relatedGuide')}</p>
                <p className="font-semibold text-white text-sm">{tc('readGuide')} →</p>
              </div>
              <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" size={18} />
            </Link>
          )}
        </div>

        {relatedIndustries.length > 0 && (
          <div className="max-w-4xl mx-auto mt-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">Relevant Industries</p>
            <div className="flex flex-wrap gap-2">
              {relatedIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries#${ind.slug}`}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {page.citations && page.citations.length > 0 && (
          <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-primary/10">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">{tc('sourcesLabel')} &amp; Further Reading</p>
            <ul className="space-y-1.5">
              {page.citations.map((c) => (
                <li key={c.url}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors"
                  >
                    {c.label} <ExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <CTASection />
    </main>
  )
}
