import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import PremiumHero from '@/components/PremiumHero'
import TrustedInfrastructureLayer from '@/components/TrustedInfrastructureLayer'
import InfrastructureFlow from '@/components/InfrastructureFlow'
import WhyBuyAdvanced from '@/components/WhyBuyAdvanced'
import WhoWeServeSection from '@/components/WhoWeServeSection'
import FaqSection from '@/components/FaqSection'
import CTASection from '@/components/CTASection'
import { homeFaq } from '@/lib/faq'

export const dynamic = 'force-static'

export default async function Home() {
  const t = await getTranslations('pillars')

  return (
    <main className="min-h-screen">
      <Navbar />
      <PremiumHero />
      <TrustedInfrastructureLayer />
      <section className="pt-20 px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t('title')}</h2>
        <p className="text-gray-400">{t('subtitle')}</p>
      </section>
      <InfrastructureFlow />
      <WhyBuyAdvanced />
      <WhoWeServeSection />
      <FaqSection items={homeFaq} />
      <CTASection />
    </main>
  )
}
