import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import { industries } from '@/lib/industries'
import { getSolution } from '@/lib/solutions'
import { landingPages } from '@/lib/landingPages'
import { countries } from '@/lib/countries'
import Breadcrumbs from '@/components/Breadcrumbs'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const localized: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Industries We Serve | MMKK AI',
      description: 'MMKK AI serves SMEs, mid-market companies, enterprises, international schools, real estate firms, technology companies, and professional services firms across Myanmar and Thailand.',
    },
    th: {
      title: 'อุตสาหกรรมที่เราให้บริการ | MMKK AI',
      description: 'MMKK AI ให้บริการ SME บริษัทระดับกลาง องค์กรขนาดใหญ่ และบริษัทอสังหาริมทรัพย์ในประเทศไทย',
    },
    mm: {
      title: 'ကျွန်ုပ်တို့ ဝန်ဆောင်မှုပေးသော လုပ်ငန်းများ | MMKK AI',
      description: 'MMKK AI သည် မြန်မာနိုင်ငံရှိ SME၊ အလတ်စားကုမ္ပဏီများ၊ လုပ်ငန်းကြီးများနှင့် အပြည်ပြည်ဆိုင်ရာကျောင်းများကို ဝန်ဆောင်မှုပေးသည်။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'industries', title: meta.title, description: meta.description })
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
          <div className="text-left">
            <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'Industries', href: '' }]} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{t('title')}</h1>
          <p className="text-lg text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {industries.map((industry) => {
            // Country-specific landing pages relevant to this industry, so
            // the industries page links to /myanmar or /thailand pages
            // directly rather than only the generic /solutions overview.
            const countryPages = landingPages.filter((p) => industry.relevantSolutions.includes(p.solutionSlug))
            return (
              <div key={industry.slug} id={industry.slug} className="glass neon-border rounded-xl p-6 scroll-mt-28">
                <h2 className="text-2xl font-bold font-display text-primary mb-2">{industry.name}</h2>
                <p className="text-gray-400 mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
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
                {countryPages.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                    {countryPages.map((p) => (
                      <Link
                        key={`${p.country}-${p.slug}`}
                        href={`/${p.country}/${p.slug}`}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {p.h1} - {countries[p.country].name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
