import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
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
      description: 'MMKK AI serves professional services, real estate, retail, education, healthcare administration, manufacturing, hospitality, and regional businesses across Myanmar and Thailand.',
    },
    th: {
      title: 'อุตสาหกรรมที่เราให้บริการ | MMKK AI',
      description: 'MMKK AI ให้บริการธุรกิจบริการวิชาชีพ อสังหาริมทรัพย์ ค้าปลีก การศึกษา และธุรกิจภูมิภาคในประเทศไทย',
    },
    mm: {
      title: 'ကျွန်ုပ်တို့ ဝန်ဆောင်မှုပေးသော လုပ်ငန်းများ | MMKK AI',
      description: 'MMKK AI သည် ပညာရှင်ဝန်ဆောင်မှု၊ အိမ်ခြံမြေ၊ လက်လီရောင်းချရေးနှင့် ဒေသဆိုင်ရာလုပ်ငန်းများကို မြန်မာနိုင်ငံတွင် ဝန်ဆောင်မှုပေးသည်။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'industries', title: meta.title, description: meta.description })
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('industriesPage')
  const tc = await getTranslations('common')
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
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry) => {
            const countryPages = landingPages.filter((p) => industry.relevantSolutions.includes(p.solutionSlug))
            const solutionNames = industry.relevantSolutions.map((slug) => getSolution(slug)?.name).filter(Boolean)
            return (
              <div key={industry.slug} id={industry.slug} className="rounded-xl border border-border bg-surface p-5 scroll-mt-28 flex flex-col card-lift">
                <h2 className="font-bold font-display text-primary mb-3">{industry.name}</h2>
                <div className="space-y-3 flex-1">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 mb-1">{tc('problemLabel')}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{industry.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 mb-1">{tc('systemsLabel')}</p>
                    <p className="text-xs text-gray-300">{solutionNames.join(' + ')}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 mb-1">{tc('outcomeLabel')}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{industry.outcome}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                  {industry.relevantSolutions.map((slug) => {
                    const s = getSolution(slug)
                    if (!s) return null
                    return (
                      <Link key={slug} href={`/solutions/${slug}`} className="text-[10px] px-2 py-1 rounded-full border border-primary/25 text-primary hover:bg-primary/10 transition-colors">
                        {s.name}
                      </Link>
                    )
                  })}
                </div>
                {countryPages.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {countryPages.slice(0, 2).map((p) => (
                      <Link
                        key={`${p.country}-${p.slug}`}
                        href={`/${p.country}/${p.slug}`}
                        className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {countries[p.country].name} <ArrowRight size={9} />
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
