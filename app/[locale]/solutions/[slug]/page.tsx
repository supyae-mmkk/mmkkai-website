import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowRight, ExternalLink } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Tabs from '@/components/sections/Tabs'
import GoogleWorkspaceDemo from '@/components/product-demos/GoogleWorkspaceDemo'
import Microsoft365Demo from '@/components/product-demos/Microsoft365Demo'
import HubSpotDemo from '@/components/product-demos/HubSpotDemo'
import ApolloDemo from '@/components/product-demos/ApolloDemo'
import AiAutomationDemo from '@/components/product-demos/AiAutomationDemo'
import GoogleCloudDemo from '@/components/product-demos/GoogleCloudDemo'
import TeamViewerDemo from '@/components/product-demos/TeamViewerDemo'
import AdobeDemo from '@/components/product-demos/AdobeDemo'
import SalesWorkflowHero from '@/components/product-demos/SalesWorkflowHero'
import RemoteMonitoringHero from '@/components/product-demos/RemoteMonitoringHero'
import ApolloCrmFlowDiagram from '@/components/visuals/ApolloCrmFlowDiagram'
import GoogleWorkspaceFlowDiagram from '@/components/visuals/GoogleWorkspaceFlowDiagram'
import GoogleCloudFlowDiagram from '@/components/visuals/GoogleCloudFlowDiagram'
import HubSpotFlowDiagram from '@/components/visuals/HubSpotFlowDiagram'
import TeamViewerFlowDiagram from '@/components/visuals/TeamViewerFlowDiagram'
import AdobeFlowDiagram from '@/components/visuals/AdobeFlowDiagram'
import ImplementationProcessMini from '@/components/visuals/ImplementationProcessMini'
import { solutions, getSolution, pillars } from '@/lib/solutions'
import { guides } from '@/lib/guides'
import { industries } from '@/lib/industries'
import { serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { buildMetadata, pickLocaleMeta } from '@/lib/seo'

const DEMO_COMPONENTS: Record<string, React.ComponentType> = {
  'google-workspace': GoogleWorkspaceDemo,
  'microsoft-365': Microsoft365Demo,
  'hubspot-crm': HubSpotDemo,
  'apollo-lead-generation': ApolloDemo,
  'ai-automation': AiAutomationDemo,
  'google-cloud': GoogleCloudDemo,
  'teamviewer': TeamViewerDemo,
  'adobe-business': AdobeDemo,
  'sales-workflow-design': SalesWorkflowHero,
  'remote-monitoring-management': RemoteMonitoringHero,
}

// Supplementary conceptual diagrams shown further down the page (Overview
// tab) for solutions where an extra system-relationship visual adds
// genuine clarity beyond the hero mockup. Optional - most solutions render
// without one.
const SUPPORTING_DIAGRAMS: Record<string, React.ComponentType> = {
  'apollo-lead-generation': ApolloCrmFlowDiagram,
  'sales-workflow-design': ApolloCrmFlowDiagram,
  'google-workspace': GoogleWorkspaceFlowDiagram,
  'google-cloud': GoogleCloudFlowDiagram,
  'hubspot-crm': HubSpotFlowDiagram,
  'teamviewer': TeamViewerFlowDiagram,
  'adobe-business': AdobeFlowDiagram,
}

export const dynamic = 'force-static'

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const solution = getSolution(slug)
  if (!solution) return {}
  const meta = pickLocaleMeta(solution.meta, locale)
  return buildMetadata({
    locale,
    path: `solutions/${slug}`,
    title: meta.title,
    description: meta.description,
  })
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params
  const solution = getSolution(slug)
  if (!solution) notFound()

  const t = await getTranslations('solutionsPage')
  const tc = await getTranslations('common')
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'
  const url = `${BASE_URL}/${locale}/solutions/${slug}`

  const related = solutions.filter((s) => s.pillar === solution.pillar && s.slug !== solution.slug)
  // Guides that reference this solution directly (Priority 7: solution -> guide links).
  const relatedGuides = guides.filter((g) => g.solutionSlug === solution.slug)
  // Industries whose relevantSolutions list includes this solution.
  const relatedIndustries = industries.filter((i) => i.relevantSolutions.includes(solution.slug))
  const DemoComponent = DEMO_COMPONENTS[solution.slug]
  const SupportingDiagram = SUPPORTING_DIAGRAMS[solution.slug]

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          serviceSchema({
            name: solution.name,
            description: solution.whatItDoes,
            url,
            areaServed: solution.countries,
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
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: `/${locale}` },
              { name: 'Solutions', href: `/${locale}/solutions` },
              { name: solution.name, href: '' },
            ]}
          />
          <div className={`grid ${DemoComponent ? 'lg:grid-cols-2 gap-10' : ''} items-center`}>
          <div>
          <p className="text-sm uppercase tracking-wide text-primary mb-3">{pillars[solution.pillar].name}</p>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{solution.name}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{solution.whatItDoes}</p>

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
          {DemoComponent && (
            <div>
              <DemoComponent />
            </div>
          )}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface/40">
        <div className="max-w-4xl mx-auto">
          <Tabs
            items={[
              {
                id: 'overview',
                label: tc('tabWhoFor'),
                content: (
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">{solution.suitableFor}</p>
                    <ul className="space-y-2">
                      {solution.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {o}
                        </li>
                      ))}
                    </ul>
                    {SupportingDiagram && (
                      <div className="pt-2">
                        <SupportingDiagram />
                      </div>
                    )}
                  </div>
                ),
              },
              {
                id: 'implementation',
                label: tc('tabImplementation'),
                content: (
                  <div className="space-y-6">
                    <ImplementationProcessMini />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Scope</p>
                      <p className="text-gray-300 leading-relaxed text-sm">{solution.implementationScope}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Migration considerations</p>
                      <p className="text-gray-300 leading-relaxed text-sm">{solution.migrationConsiderations}</p>
                    </div>
                  </div>
                ),
              },
              {
                id: 'security',
                label: tc('tabSecurity'),
                content: (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Security and administration</p>
                      <p className="text-gray-300 leading-relaxed text-sm">{solution.security}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Integrations</p>
                      <ul className="space-y-2">
                        {solution.integrations.map((i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                id: 'limitations',
                label: tc('tabLimitations'),
                content: <p className="text-gray-300 leading-relaxed text-sm">{solution.limitations}</p>,
              },
            ]}
          />
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-6">What&apos;s Included</h2>
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

      {relatedIndustries.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold font-display mb-6">Relevant Industries</h2>
            <div className="flex flex-wrap gap-3">
              {relatedIndustries.map((i) => (
                <Link
                  key={i.slug}
                  href={`/industries#${i.slug}`}
                  className="px-4 py-2 rounded-full border border-primary/30 text-sm text-gray-300 hover:border-primary/60 hover:text-primary transition-colors"
                >
                  {i.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {relatedGuides.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold font-display mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedGuides.map((g) => (
                <Link key={g.slug} href={`/resources/${g.slug}`} className="glass neon-border rounded-lg p-4 hover:border-primary/60 transition-all flex items-center justify-between gap-3">
                  <span className="font-semibold text-primary text-sm">{g.title}</span>
                  <ExternalLink size={14} className="text-gray-500 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.faq.length > 0 && <FaqSection items={solution.faq} title="Frequently Asked Questions" subtitle={`Common questions about ${solution.name}.`} />}

      <CTASection />
    </main>
  )
}
