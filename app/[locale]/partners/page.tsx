import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import PlatformCard from '@/components/partners/PlatformCard'
import PartnerCard from '@/components/partners/PartnerCard'
import CertificationCard from '@/components/partners/CertificationCard'
import { getVerifiedPartnerships, getImplementedPlatforms, getSuppliedProducts, getCertifications, getMemberships } from '@/lib/partners'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const localized: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Partners, Platforms & Certifications | MMKK AI',
      description: 'A clear, evidence-based breakdown of which platforms MMKK AI implements for clients, which relationships are independently verified partnerships, and which are not.',
    },
    th: {
      title: 'พันธมิตร แพลตฟอร์ม และการรับรอง | MMKK AI',
      description: 'รายละเอียดที่ชัดเจนและมีหลักฐานว่าแพลตฟอร์มใดที่ MMKK AI ติดตั้งให้ลูกค้า และความสัมพันธ์ใดได้รับการยืนยันอย่างเป็นทางการ',
    },
    mm: {
      title: 'မိတ်ဖက်များ၊ ပလက်ဖောင်းများနှင့် အသိအမှတ်ပြုလက်မှတ်များ | MMKK AI',
      description: 'MMKK AI သည် client များအတွက် မည်သည့် platform ကို တပ်ဆင်ပေးသည်၊ မည်သည့် ဆက်နွယ်မှုများကို သီးခြားစွာ အတည်ပြုပြီးကြောင်း ရှင်းလင်းစွာ ဖော်ပြထားသည်။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'partners', title: meta.title, description: meta.description })
}

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('partnersPage')
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

  const verifiedPartnerships = getVerifiedPartnerships()
  const platforms = getImplementedPlatforms()
  const products = getSuppliedProducts()
  const certifications = getCertifications()
  const memberships = getMemberships()

  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${BASE_URL}/${locale}` },
          { name: 'Partners', url: `${BASE_URL}/${locale}/partners` },
        ])}
      />
      <Navbar />

      <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'Partners', href: '' }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{t('title')}</h1>
          <p className="text-lg text-gray-400 leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>

      {/* Verified Partnerships — kept strictly separate from platforms we
          merely implement. Empty state is the honest state until a
          relationship is independently verified. */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-2">{t('verifiedTitle')}</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-2xl">{t('verifiedSubtitle')}</p>
          {verifiedPartnerships.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {verifiedPartnerships.map((p) => <PartnerCard key={p.id} entry={p} />)}
            </div>
          ) : (
            <div className="rounded-xl2 border border-dashed border-border bg-surface/40 p-6">
              <p className="text-sm text-gray-400">{t('verifiedEmpty')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Platforms We Implement — the honest description of what MMKK AI
          actually does with each platform: implementation and support work,
          not an official partnership. */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-surface/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-2">{t('platformsTitle')}</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-2xl">{t('platformsSubtitle')}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((p) => <PlatformCard key={p.id} entry={p} />)}
          </div>
        </div>
      </section>

      {products.length > 0 && (
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold font-display mb-2">{t('productsTitle')}</h2>
            <p className="text-sm text-gray-400 mb-6 max-w-2xl">{t('productsSubtitle')}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((p) => <PlatformCard key={p.id} entry={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Certifications — separate section, empty state until evidenced. */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-surface/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-2">{t('certificationsTitle')}</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-2xl">{t('certificationsSubtitle')}</p>
          {certifications.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((c) => <CertificationCard key={c.id} entry={c} />)}
            </div>
          ) : (
            <div className="rounded-xl2 border border-dashed border-border bg-surface/40 p-6">
              <p className="text-sm text-gray-400">{t('certificationsEmpty')}</p>
            </div>
          )}
        </div>
      </section>

      {memberships.length > 0 && (
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold font-display mb-2">{t('membershipsTitle')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {memberships.map((m) => <PartnerCard key={m.id} entry={m} />)}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-xl2 border border-border bg-surface p-6 md:p-8">
          <p className="text-sm text-gray-400 leading-relaxed">
            {t('methodologyNote')}{' '}
            <Link href="/contact" className="text-primary hover:underline">{t('methodologyLinkText')}</Link>.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
