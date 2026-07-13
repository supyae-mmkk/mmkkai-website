import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import JsonLd from '@/components/JsonLd'
import { guides, getGuide } from '@/lib/guides'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  return buildMetadata({ locale, path: `resources/${slug}`, title: `${guide.title} | MMKK AI`, description: guide.metaDescription })
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'
  const url = `${BASE_URL}/${locale}/resources/${slug}`

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          articleSchema({ headline: guide.title, description: guide.metaDescription, url, datePublished: guide.datePublished }),
          breadcrumbSchema([
            { name: 'Home', url: `${BASE_URL}/${locale}` },
            { name: 'Resources', url: `${BASE_URL}/${locale}/resources` },
            { name: guide.title, url },
          ]),
        ]}
      />
      <Navbar />
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-6">{guide.title}</h1>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed">{guide.intro}</p>

          <div className="space-y-10">
            {guide.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-primary mb-3">{section.heading}</h2>
                <p className="text-gray-300 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <CTASection />
    </main>
  )
}
