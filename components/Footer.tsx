'use client'

import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')

  return (
    <footer className="border-t border-primary/20 bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/">
              <h3 className="text-2xl font-bold font-display gradient-text mb-3 cursor-pointer">
                MMKK AI
              </h3>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              {t('description')}
            </p>
            
            {/* Contact Information */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:sales@mmkkai.com"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  sales@mmkkai.com
                </a>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex gap-4">
                  <span className="w-24 text-gray-500">{t('us')}:</span>
                  <a
                    href="tel:+13323339868"
                    className="hover:text-primary transition-colors"
                  >
                    +1 332 333 9868
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="w-24 text-gray-500">{t('thailand')}:</span>
                  <a
                    href="tel:+66981135613"
                    className="hover:text-primary transition-colors"
                  >
                    +66 98 113 5613
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="w-24 text-gray-500">{t('myanmar')}:</span>
                  <a
                    href="tel:+9595186635"
                    className="hover:text-primary transition-colors"
                  >
                    +95 95186635
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t('navigation')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  {t('whoWeServe')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary transition-colors">
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t('company')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary transition-colors">
                  {t('solutions')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/10 pt-8 text-center text-sm text-gray-500">
          <p>{t('copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  )
}
