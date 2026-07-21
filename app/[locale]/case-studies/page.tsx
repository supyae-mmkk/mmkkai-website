import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { FileClock, MessageSquareOff } from 'lucide-react'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import { caseStudies, testimonials } from '@/lib/caseStudies'
import { getSolution } from '@/lib/solutions'
import SiteImage from '@/components/media/SiteImage'
import ResourceThumbnail from '@/components/visuals/ResourceThumbnail'
import { breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const localized: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Case Studies & Client Results | MMKK AI',
      description: 'Verified client case studies and testimonials for MMKK AI\'s Google Workspace, Microsoft 365, HubSpot CRM, and Google Cloud implementation work in Myanmar and Thailand.',
    },
    th: {
      title: 'กรณีศึกษาและผลลัพธ์ของลูกค้า | MMKK AI',
      description: 'กรณีศึกษาและคำรับรองจากลูกค้าที่ได้รับการยืนยันสำหรับงานติดตั้ง Google Workspace, Microsoft 365, HubSpot CRM และ Google Cloud ของ MMKK AI',
    },
    mm: {
      title: 'Case Study များနှင့် Client ရလဒ်များ | MMKK AI',
      description: 'MMKK AI ၏ Google Workspace, Microsoft 365, HubSpot CRM နှင့် Google Cloud တပ်ဆင်မှုလုပ်ငန်းများအတွက် အတည်ပြုပြီးသော client case study များနှင့် သက်သေခံချက်များ။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'case-studies', title: meta.title, description: meta.description })
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('caseStudiesPage')
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

  const publishedCaseStudies = caseStudies.filter((cs) => cs.permissionToPublish)
  const publishedTestimonials = testimonials.filter((ts) => ts.permissionStatus === 'granted')

  return (
    <main className="min-h-screen">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `${BASE_URL}/${locale}` },
          { name: 'Case Studies', url: `${BASE_URL}/${locale}/case-studies` },
        ])}
      />
      <Navbar />

      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'Case Studies', href: '' }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{t('title')}</h1>
          <p className="text-lg text-gray-400 leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>

      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-6">{t('caseStudiesTitle')}</h2>
          {publishedCaseStudies.length === 0 ? (
            <div className="rounded-xl2 border border-dashed border-border bg-surface/50 px-6 py-10 flex items-start gap-4">
              <FileClock size={22} className="text-gray-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-300 font-medium mb-1">{t('caseStudiesEmptyHeadline')}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{t('caseStudiesEmptyBody')}</p>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {publishedCaseStudies.map((cs) => (
                <div key={cs.slug} className="rounded-xl2 border border-border bg-surface overflow-hidden">
                  {cs.imageId && (
                    <SiteImage
                      id={cs.imageId}
                      className="w-full h-40 object-cover"
                      fallback={cs.illustrationVariant ? <div className="w-full h-40"><ResourceThumbnail variant={cs.illustrationVariant} /></div> : undefined}
                    />
                  )}
                  <div className="p-5">
                  <p className="font-semibold text-white mb-1">{cs.clientName}</p>
                  <p className="text-xs text-gray-500 mb-3">{cs.industry}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">{t('problemLabel')}</p>
                  <p className="text-sm text-gray-400 mb-3">{cs.businessProblem}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">{t('outcomeLabel')}</p>
                  <p className="text-sm text-gray-400 mb-3">{cs.verifiedOutcome}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.solutionSlugs.map((slug) => {
                      const s = getSolution(slug)
                      if (!s) return null
                      return (
                        <Link key={slug} href={`/solutions/${slug}`} className="text-[10px] px-2 py-1 rounded-full border border-primary/25 text-primary hover:bg-primary/10 transition-colors">
                          {s.name}
                        </Link>
                      )
                    })}
                  </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-6">{t('testimonialsTitle')}</h2>
          {publishedTestimonials.length === 0 ? (
            <div className="rounded-xl2 border border-dashed border-border bg-surface/50 px-6 py-10 flex items-start gap-4">
              <MessageSquareOff size={22} className="text-gray-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-300 font-medium mb-1">{t('testimonialsEmptyHeadline')}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{t('testimonialsEmptyBody')}</p>
              </div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {publishedTestimonials.map((ts) => (
                <blockquote key={ts.slug} className="rounded-xl2 border border-border bg-surface p-5">
                  <p className="text-sm text-gray-300 leading-relaxed mb-3">&ldquo;{ts.quote}&rdquo;</p>
                  <footer className="text-xs text-gray-500">{ts.personName}, {ts.role} — {ts.company}</footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-xl2 border border-border bg-surface p-6 md:p-8">
          <p className="text-sm text-gray-400 leading-relaxed">
            {t('methodologyNote')}{' '}
            <Link href="/partners" className="text-primary hover:underline">{t('methodologyLinkText')}</Link>.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
