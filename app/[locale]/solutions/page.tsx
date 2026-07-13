import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { solutions, pillars, type Pillar } from '@/lib/solutions'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const localized: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Solutions | Cloud, CRM & AI for Myanmar and Thailand | MMKK AI',
      description: 'Google Workspace, Microsoft 365, HubSpot CRM, Apollo, Google Cloud, AI Automation, TeamViewer, and Adobe Business — deployed and supported across Myanmar and Thailand.',
    },
    th: {
      title: 'โซลูชัน | Cloud, CRM และ AI สำหรับเมียนมาร์และไทย | MMKK AI',
      description: 'Google Workspace, Microsoft 365, HubSpot CRM, Google Cloud และระบบอัตโนมัติ AI ที่ติดตั้งและดูแลสำหรับธุรกิจในประเทศไทย',
    },
    mm: {
      title: 'ဖြေရှင်းချက်များ | မြန်မာနှင့်ထိုင်းအတွက် Cloud, CRM & AI | MMKK AI',
      description: 'Google Workspace, Microsoft 365, HubSpot CRM, Apollo, Google Cloud, AI Automation, TeamViewer နှင့် Adobe Business — မြန်မာနှင့်ထိုင်းနိုင်ငံတစ်ဝှမ်း တပ်ဆင်၍ ပံ့ပိုးပေးသည်။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'solutions', title: meta.title, description: meta.description })
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('solutionsPage')
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

  const pillarOrder: Pillar[] = ['cloud', 'crm', 'ai', 'support', 'creative']

  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${BASE_URL}/${locale}` },
          { name: 'Solutions', url: `${BASE_URL}/${locale}/solutions` },
        ])}
      />
      <Navbar />
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-left">
            <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'Solutions', href: '' }]} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{t('title')}</h1>
          <p className="text-lg text-gray-400">{t('subtitle')}</p>
        </div>
      </section>

      {pillarOrder.map((pillarKey) => {
        const pillar = pillars[pillarKey]
        const items = solutions.filter((s) => s.pillar === pillarKey)
        return (
          <section key={pillarKey} className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold font-display mb-1">{pillar.name}</h2>
              <p className="text-gray-400 mb-6">{pillar.description}</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/solutions/${s.slug}`}
                    className="glass neon-border rounded-xl p-5 hover:border-primary/60 transition-all"
                  >
                    <h3 className="font-bold text-primary mb-1">{s.name}</h3>
                    <p className="text-sm text-gray-400">{s.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <CTASection />
    </main>
  )
}
