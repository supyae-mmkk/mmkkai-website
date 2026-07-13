import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import Navbar from './Navbar'
import CTASection from './CTASection'
import FaqSection from './FaqSection'
import JsonLd from './JsonLd'
import { serviceSchema, breadcrumbSchema, localBusinessSchema } from '@/lib/schema'
import { getSolution } from '@/lib/solutions'
import { countries } from '@/lib/countries'
import type { LandingPage } from '@/lib/landingPages'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

export default function LandingPageTemplate({ page, locale }: { page: LandingPage; locale: string }) {
  const solution = getSolution(page.solutionSlug)
  const country = countries[page.country]
  const url = `${BASE_URL}/${locale}/${page.country}/${page.slug}`

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          serviceSchema({
            name: page.h1,
            description: page.metaDescription,
            url,
            areaServed: country.name,
            serviceType: solution?.name || page.h1,
          }),
          localBusinessSchema(page.country),
          breadcrumbSchema([
            { name: 'Home', url: `${BASE_URL}/${locale}` },
            { name: 'Solutions', url: `${BASE_URL}/${locale}/solutions` },
            { name: country.name, url: `${BASE_URL}/${locale}/${page.country}/${page.slug}` },
            { name: page.h1, url },
          ]),
        ]}
      />
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-wide text-primary mb-3">{country.name}</p>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{page.h1}</h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-4">{page.intro}</p>
          <p className="text-gray-400 leading-relaxed">{page.body}</p>
          <p className="text-sm text-gray-500 mt-6 italic">{country.currencyNote}</p>

          {solution && (
            <Link
              href={`/solutions/${solution.slug}`}
              className="inline-flex items-center gap-2 mt-6 text-sm text-primary hover:underline"
            >
              ← Back to {solution.name} overview
            </Link>
          )}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-display mb-6">What&apos;s Included</h2>
          <ul className="space-y-3">
            {page.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={page.faq} title="Frequently Asked Questions" subtitle={`Direct answers about ${page.h1.toLowerCase()}.`} />

      {page.guideSlug && (
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/resources/${page.guideSlug}`}
              className="flex items-center justify-between glass neon-border rounded-xl p-6 hover:border-primary/60 transition-all group"
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Related Guide</p>
                <p className="font-semibold text-white">Read the full guide →</p>
              </div>
              <ArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      )}

      <CTASection />
    </main>
  )
}
