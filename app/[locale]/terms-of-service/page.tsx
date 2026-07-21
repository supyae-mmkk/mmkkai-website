import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const localized: Record<string, { title: string; description: string }> = {
    en: {
      title: 'Terms of Service | MMKK AI',
      description: 'The terms that govern your use of the MMKK AI website and the services described on it.',
    },
    th: {
      title: 'ข้อกำหนดการใช้บริการ | MMKK AI',
      description: 'ข้อกำหนดที่ควบคุมการใช้งานเว็บไซต์ MMKK AI และบริการที่อธิบายไว้บนเว็บไซต์นี้',
    },
    mm: {
      title: 'ဝန်ဆောင်မှု စည်းမျဉ်းများ | MMKK AI',
      description: 'MMKK AI ဝဘ်ဆိုက်နှင့် ၎င်း၏ ဝန်ဆောင်မှုများကို အသုံးပြုခြင်းကို ထိန်းချုပ်သော စည်းမျဉ်းများ။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'terms-of-service', title: meta.title, description: meta.description })
}

const LAST_UPDATED = 'July 13, 2026'

export default async function TermsPage({ params }: Props) {
  const { locale } = await params
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'Terms of Service', href: '' }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5 mb-12 text-sm text-yellow-200/90 leading-relaxed">
            <strong>Legal disclaimer:</strong> These terms are a general-purpose starting point and have not been
            reviewed by a qualified lawyer. They are not a substitute for legal advice specific to Myanmar,
            Thailand, or the United States. Have these terms reviewed by licensed counsel before relying on them as
            your binding commercial agreement.
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Use of this website</h2>
              <p>
                This website describes MMKK AI&apos;s services for cloud, CRM, and AI automation deployment and support.
                Content on this site is provided for general information about our services and does not itself
                constitute a binding offer. Specific engagements are governed by a separate signed agreement or
                statement of work between MMKK AI and the client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">No guarantee of results or timelines</h2>
              <p>
                Any timelines, process descriptions, or outcomes described on this site (including on solution and
                landing pages) are general estimates based on typical engagements. Actual scope, timeline, and cost
                depend on factors specific to your business, including user count, data volume, existing systems,
                integrations required, and migration complexity, and are confirmed in writing after a scoping
                conversation, not guaranteed by anything published on this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Third-party products and trademarks</h2>
              <p>
                Google Workspace, Google Cloud, and Gemini are trademarks of Google LLC. Microsoft 365 and Azure are
                trademarks of Microsoft Corporation. HubSpot is a trademark of HubSpot, Inc. Apollo is a trademark
                of Apollo.io. TeamViewer is a trademark of TeamViewer Germany GmbH. Adobe and Creative Cloud are
                trademarks of Adobe Inc. MMKK AI is not owned by, operated by, or an official representative of any
                of these companies unless explicitly stated and verifiable via that company&apos;s own public partner or
                reseller directory.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Accuracy of information</h2>
              <p>
                We make reasonable efforts to keep this website accurate and current, including product
                capabilities, regional considerations, and process descriptions. Product features and pricing for
                third-party platforms (Google Workspace, Microsoft 365, HubSpot, Apollo, Google Cloud) change over
                time and are set by those companies, not MMKK AI &mdash; always confirm current pricing and features
                directly with the vendor or with MMKK AI before making a purchasing decision.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Limitation of liability</h2>
              <p>
                To the maximum extent permitted by applicable law, MMKK AI is not liable for indirect, incidental,
                or consequential damages arising from your use of this website. This does not limit any liability
                that cannot legally be excluded in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Governing law</h2>
              <p>
                Given MMKK AI&apos;s operations across the United States, Thailand, and Myanmar, the governing law for
                any specific engagement is specified in that engagement&apos;s signed agreement, not by this general
                website terms page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Contact</h2>
              <p>
                Questions about these terms can be sent to{' '}
                <a href="mailto:sales@mmkkai.com" className="text-primary hover:underline">
                  sales@mmkkai.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
      <CTASection />
    </main>
  )
}
