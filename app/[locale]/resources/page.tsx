import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { guides } from '@/lib/guides'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata, pickLocaleMeta } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const localizedTitles: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Resources & Guides | MMKK AI',
      description: 'Guides for choosing and deploying Google Workspace, Microsoft 365, HubSpot CRM, and Apollo for businesses in Myanmar and Thailand.',
    },
    th: {
      title: 'แหล่งข้อมูลและคู่มือ | MMKK AI',
      description: 'คู่มือสำหรับเลือกและติดตั้ง Google Workspace, Microsoft 365, HubSpot CRM และ Apollo สำหรับธุรกิจในประเทศไทย',
    },
    mm: {
      title: 'အရင်းအမြစ်များနှင့် လမ်းညွှန်များ | MMKK AI',
      description: 'မြန်မာနိုင်ငံရှိ လုပ်ငန်းများအတွက် Google Workspace, Microsoft 365, HubSpot CRM နှင့် Apollo ရွေးချယ်ခြင်းနှင့် တပ်ဆင်ခြင်းအတွက် လမ်းညွှန်များ။',
    },
  }
  const meta = localizedTitles[locale] || localizedTitles.en
  return buildMetadata({ locale, path: 'resources', title: meta.title, description: meta.description })
}

export default async function ResourcesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('resourcesPage')
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${BASE_URL}/${locale}` },
          { name: 'Resources', url: `${BASE_URL}/${locale}/resources` },
        ])}
      />
      <Navbar />
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-left">
            <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'Resources', href: '' }]} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{t('title')}</h1>
          <p className="text-lg text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid gap-4">
          {guides.map((g) => (
            <Link key={g.slug} href={`/resources/${g.slug}`} className="glass neon-border rounded-xl p-6 hover:border-primary/60 transition-all flex items-center justify-between gap-4 group">
              <div>
                <h2 className="font-bold text-lg text-white mb-2">{g.title}</h2>
                <p className="text-sm text-gray-400">{pickLocaleMeta(g.meta, locale).description}</p>
              </div>
              <ArrowRight className="text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  )
}
