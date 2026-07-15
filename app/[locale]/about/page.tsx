import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Check } from 'lucide-react'
import { solutions } from '@/lib/solutions'
import { countries } from '@/lib/countries'
import { breadcrumbSchema, organizationSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const localized: Record<string, { title: string; description: string }> = {
    en: {
      title: 'About MMKK AI | Cloud, CRM & AI Solutions Partner for Myanmar & Thailand',
      description: 'MMKK AI provides Google Workspace, Microsoft 365, HubSpot CRM, and Google Cloud implementation and support services for businesses across Myanmar and Thailand.',
    },
    th: {
      title: 'เกี่ยวกับ MMKK AI | พันธมิตรโซลูชัน Cloud, CRM และ AI สำหรับไทย',
      description: 'MMKK AI ให้บริการติดตั้งและดูแล Google Workspace, Microsoft 365, HubSpot CRM และ Google Cloud สำหรับธุรกิจในประเทศไทย',
    },
    mm: {
      title: 'MMKK AI အကြောင်း | မြန်မာနှင့်ထိုင်းအတွက် Cloud, CRM & AI ဖြေရှင်းချက် မိတ်ဖက် | MMKK AI',
      description: 'MMKK AI သည် မြန်မာနှင့်ထိုင်းနိုင်ငံတစ်ဝှမ်းရှိ လုပ်ငန်းများအတွက် Google Workspace, Microsoft 365, HubSpot CRM နှင့် Google Cloud တပ်ဆင်ခြင်းနှင့် ပံ့ပိုးမှု ဝန်ဆောင်မှုများ ပေးအပ်သည်။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'about', title: meta.title, description: meta.description })
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
          <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'About', href: '' }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-400 mb-10">{t('subtitle')}</p>
          <p className="text-gray-300 leading-relaxed mb-6">{t('body1')}</p>
          <p className="text-gray-300 leading-relaxed mb-12">{t('body2')}</p>

          <h2 className="text-xl font-bold text-primary mb-5">{t('implementsTitle')}</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {solutions.map((s) => (
              <span key={s.slug} className="text-xs font-medium text-gray-300 bg-surface border border-border rounded-full px-3 py-1.5">
                {s.name}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-bold text-primary mb-5">{t('principlesTitle')}</h2>
          <ul className="space-y-2.5 mb-12">
            {(t.raw('principles') as string[]).map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-gray-300">
                <Check size={16} className="text-primary flex-shrink-0 mt-0.5" /> {p}
              </li>
            ))}
          </ul>

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
