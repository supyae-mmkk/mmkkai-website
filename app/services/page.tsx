import Navbar from '@/components/Navbar'
import WhyBuyAdvanced from '@/components/WhyBuyAdvanced'
import InfrastructureFlow from '@/components/InfrastructureFlow'

export const dynamic = 'force-static'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
            Our Services
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            Complete infrastructure deployment and optimization services.
          </p>
        </div>
      </div>
      <InfrastructureFlow />
      <WhyBuyAdvanced />
    </main>
  )
}

