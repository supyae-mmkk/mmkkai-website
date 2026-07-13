import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import { countries } from '@/lib/countries'
import { breadcrumbSchema, organizationSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale,
    path: 'about',
    title: 'About MMKK AI | Business Technology Partner for Myanmar & Thailand',
    description:
      'MMKK AI is an official Google Cloud Co-Sell Partner and Microsoft Azure Deployment Partner serving businesses across Myanmar and Thailand.',
  })
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('aboutPage')
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: `${BASE_URL}/${locale}` },
            { name: 'About', url: `${BASE_URL}/${locale}/about` },
          ]),
        ]}
      />
      <Navbar />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-400 mb-10">{t('subtitle')}</p>
          <p className="text-gray-300 leading-relaxed mb-6">{t('body1')}</p>
          <p className="text-gray-300 leading-relaxed mb-12">{t('body2')}</p>

          <h2 className="text-xl font-bold text-primary mb-6">{t('officesTitle')}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.values(countries).map((c) => (
              <div key={c.slug} className="glass neon-border rounded-xl p-5">
                <p className="font-semibold text-white mb-1">{c.name}</p>
                <a href={c.phoneHref} className="text-sm text-gray-400 hover:text-primary transition-colors">
                  {c.phone}
                </a>
              </div>
            ))}
            <div className="glass neon-border rounded-xl p-5">
              <p className="font-semibold text-white mb-1">United States</p>
              <a href="tel:+13323339868" className="text-sm text-gray-400 hover:text-primary transition-colors">
                +1 332 333 9868
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
