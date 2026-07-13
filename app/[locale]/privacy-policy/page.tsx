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
      title: 'Privacy Policy | MMKK AI',
      description: 'How MMKK AI collects, stores, and uses information submitted through this website, including our use of Supabase and your rights under Thailand\'s PDPA.',
    },
    th: {
      title: 'นโยบายความเป็นส่วนตัว | MMKK AI',
      description: 'วิธีที่ MMKK AI เก็บรวบรวม จัดเก็บ และใช้ข้อมูลที่ส่งผ่านเว็บไซต์นี้ รวมถึงการใช้ Supabase และสิทธิ์ของคุณภายใต้ PDPA ของประเทศไทย',
    },
    mm: {
      title: 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ | MMKK AI',
      description: 'ဤဝဘ်ဆိုက်မှတစ်ဆင့် တင်သွင်းသော အချက်အလက်များကို MMKK AI မည်သို့ စုဆောင်း၊ သိမ်းဆည်းနှင့် အသုံးပြုကြောင်း၊ Supabase အသုံးပြုမှုနှင့် ထိုင်းနိုင်ငံ၏ PDPA အောက်ရှိ သင့်အခွင့်အရေးများ။',
    },
  }
  const meta = localized[locale] || localized.en
  return buildMetadata({ locale, path: 'privacy-policy', title: meta.title, description: meta.description })
}

const LAST_UPDATED = 'July 13, 2026'

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'Privacy Policy', href: '' }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5 mb-12 text-sm text-yellow-200/90 leading-relaxed">
            <strong>Legal disclaimer:</strong> This policy is a plain-language description of our current data
            practices. It has not been reviewed by a qualified lawyer and is not a substitute for legal advice.
            MMKK AI does not represent this policy as fully compliant with any specific law, including Thailand&apos;s
            Personal Data Protection Act (PDPA) or Myanmar&apos;s data protection framework, until it has been
            reviewed by legal counsel licensed in the relevant jurisdiction. If you are evaluating MMKK AI as a
            vendor and require a compliance attestation, please contact us directly.
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">What information we collect</h2>
              <p>
                When you submit the contact form or the &ldquo;Book a Consultation&rdquo; panel on this site, we collect
                the information you type into that form: your name, email address, company name (optional), the
                message you write, and, if used, which solutions you indicated interest in. We also record the
                language (locale) and country context of the page you submitted from, the date and time of
                submission, and your explicit consent confirmation and its timestamp. We do not collect payment
                information through this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Why we collect it</h2>
              <p>
                We use this information solely to respond to your enquiry, schedule a consultation, and follow up
                about the specific solutions you asked about. We do not sell this information, and we do not use it
                for advertising retargeting.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">How it is stored, and our use of Supabase</h2>
              <p>
                Form submissions are stored in a Supabase-hosted PostgreSQL database. Supabase is a third-party
                infrastructure provider; our database is access-controlled and not publicly readable. Access is
                limited to MMKK AI staff who need it to respond to enquiries. We do not publish, share, or transfer
                this data to any other third party except where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Contact and enquiry handling</h2>
              <p>
                A submitted enquiry is routed to our sales team for follow-up, typically within one business day.
                If you contact us by email or phone instead of the website form, the same handling and storage
                principles in this policy apply to that correspondence.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Retention</h2>
              <p>
                We retain enquiry data for as long as reasonably necessary to respond to your enquiry and maintain a
                record of business correspondence, and no longer than 24 months after your last contact with us
                unless you become a customer, in which case standard business-record retention applies. You may
                request earlier deletion at any time (see &ldquo;Your rights&rdquo; below).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Cookies and analytics</h2>
              <p>
                This site uses first-party visitor analytics (page views and general engagement signals) to
                understand how the site is used; see the code in this repository for the specifics of what is
                currently implemented. We do not currently use third-party advertising cookies or cross-site
                tracking pixels. If that changes, this policy will be updated accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Cross-border processing</h2>
              <p>
                MMKK AI operates across the United States, Thailand, and Myanmar. Information submitted through
                this website may be processed or stored on infrastructure located outside the country you submitted
                it from (for example, Supabase&apos;s hosting regions). By submitting the form, you acknowledge this
                cross-border handling.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Thailand PDPA considerations</h2>
              <p>
                Thailand&apos;s Personal Data Protection Act, B.E. 2562 (2019), is enforced by the Personal Data
                Protection Committee (PDPC). If you are located in Thailand, you have rights under the PDPA
                relating to your personal data, including the rights described below. Official information about
                the PDPA is published by the PDPC at{' '}
                <a
                  href="https://www.pdpc.or.th/en/home/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline"
                >
                  pdpc.or.th
                </a>
                . We encourage Thailand-based visitors to review that resource directly rather than relying solely
                on this summary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Your rights</h2>
              <p>
                Regardless of where you are located, you may ask us to: tell you what information we hold about
                you; correct inaccurate information; delete your information; or stop contacting you. To exercise
                any of these rights, email{' '}
                <a href="mailto:sales@mmkkai.com" className="text-primary hover:underline">
                  sales@mmkkai.com
                </a>{' '}
                with the subject line &ldquo;Data request&rdquo; and we will respond within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">Changes to this policy</h2>
              <p>
                We may update this policy as our data practices change. The &ldquo;Last updated&rdquo; date at the top of
                this page reflects the most recent revision.
              </p>
            </section>
          </div>
        </div>
      </article>
      <CTASection />
    </main>
  )
}
