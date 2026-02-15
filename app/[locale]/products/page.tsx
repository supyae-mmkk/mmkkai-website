import Navbar from '@/components/Navbar'
import ProductModules from '@/components/ProductModules'
import { getTranslations } from 'next-intl/server'

export const dynamic = 'force-static'

export default async function ProductsPage() {
  const t = await getTranslations('products')

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-400 mb-12">
            {t('subtitle')}
          </p>
          <ProductModules />
        </div>
      </div>
    </main>
  )
}

