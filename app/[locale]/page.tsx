import Navbar from '@/components/Navbar'
import HomeHero from '@/components/sections/HomeHero'
import TrustedInfrastructureLayer from '@/components/TrustedInfrastructureLayer'
import BusinessProblemsSection from '@/components/sections/BusinessProblemsSection'
import SolutionPlatformSection from '@/components/sections/SolutionPlatformSection'
import SystemsConnectSection from '@/components/sections/SystemsConnectSection'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection'
import ProcessSection from '@/components/sections/ProcessSection'
import IndustriesHomeSection from '@/components/sections/IndustriesHomeSection'
import RegionalSupportSection from '@/components/sections/RegionalSupportSection'
import ProofSection from '@/components/sections/ProofSection'
import ResourcesHomeSection from '@/components/sections/ResourcesHomeSection'
import FaqSection from '@/components/FaqSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'
import { homeFaq } from '@/lib/faq'

export const dynamic = 'force-static'

// Homepage - visual redesign (feature/aeo-rebrand-deployable). Section
// order follows the approved plan: Hero -> Tech ecosystem -> Business
// Problems -> Solution Platform -> How systems connect -> Before/After ->
// Process -> Industries -> Regional support -> Proof -> Resources -> FAQ ->
// Final CTA. All deep SEO/AEO content (FAQPage schema, breadcrumbs on inner
// pages, metadata, etc.) from the prior remediation pass is preserved -
// this file only changes presentation and section composition.
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HomeHero />
      <TrustedInfrastructureLayer />
      <BusinessProblemsSection />
      <SolutionPlatformSection />
      <SystemsConnectSection />
      <BeforeAfterSection />
      <ProcessSection />
      <IndustriesHomeSection />
      <RegionalSupportSection />
      <ProofSection />
      <ResourcesHomeSection />
      <FaqSection items={homeFaq} />
      <FinalCtaSection />
    </main>
  )
}
