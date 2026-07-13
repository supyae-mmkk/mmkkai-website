import Navbar from '@/components/Navbar'
import PremiumHero from '@/components/PremiumHero'
import TrustedInfrastructureLayer from '@/components/TrustedInfrastructureLayer'
import InfrastructureFlow from '@/components/InfrastructureFlow'
import WhyBuyAdvanced from '@/components/WhyBuyAdvanced'
import CTASection from '@/components/CTASection'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PremiumHero />
      <TrustedInfrastructureLayer />
      <InfrastructureFlow />
      <WhyBuyAdvanced />
      <CTASection />
    </main>
  )
}

