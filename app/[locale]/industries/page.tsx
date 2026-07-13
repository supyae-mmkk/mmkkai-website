import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import { industries } from '@/lib/industries'
import { getSolution } from '@/lib/solutions'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale,
    path: 'industries',
    title: 'Industries We Serve | MMKK AI',
    description:
      'MMKK AI serves SMEs, mid-market companies, enterprises, international schools, real estate firms, technology companies, and professional services firms across Myanmar and Thailand.',
  })
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('industriesPage')
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${BASE_URL}/${locale}` },
          { name: 'Industries', url: `${BASE_URL}/${locale}/industries` },
        ])}
      />
      <Navbar />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{t('title')}</h1>
          <p className="text-lg text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {industries.map((industry) => (
            <div key={industry.slug} id={industry.slug} className="glass neon-border rounded-xl p-6 scroll-mt-28">
              <h2 className="text-2xl font-bold font-display text-primary mb-2">{industry.name}</h2>
              <p className="text-gray-400 mb-4">{industry.description}</p>
              <div className="flex flex-wrap gap-2">
                {industry.relevantSolutions.map((slug) => {
                  const s = getSolution(slug)
                  if (!s) return null
                  return (
                    <Link
                      key={slug}
                      href={`/solutions/${slug}`}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {s.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
