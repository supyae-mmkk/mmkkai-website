'use client'

import Link from 'next/link'
import { Mail, Phone, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { solutions } from '@/lib/solutions'
import { socialProfiles } from '@/lib/companyConfig'

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
              <h3 className="text-2xl font-bold font-display gradient-text mb-3 cursor-pointer">MMKK AI</h3>
            </Link>
            <p className="text-gray-400 text-sm mb-6">{t('description')}</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:sales@mmkkai.com" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  sales@mmkkai.com
                </a>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex gap-4">
                  <span className="w-24 text-gray-500">{t('us')}:</span>
                  <a href="tel:+13323339868" className="hover:text-primary transition-colors">
                    +1 332 333 9868
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="w-24 text-gray-500">{t('thailand')}:</span>
                  <a href="tel:+66981135613" className="hover:text-primary transition-colors">
                    +66 98 113 5613
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="w-24 text-gray-500">{t('myanmar')}:</span>
                  <a href="tel:+9595186635" className="hover:text-primary transition-colors">
                    +95 95186635
                  </a>
                </div>
              </div>
            </div>

            {/* Social profile links - only ever populated in
                lib/companyConfig.ts once a real, live URL is confirmed. See
                that file for why this list is empty by default rather than
                filled with invented handles. */}
            {socialProfiles.length > 0 && (
              <div className="flex items-center gap-3 mt-6">
                {socialProfiles.map((s) => {
                  const Icon = s.platform === 'facebook' ? Facebook : s.platform === 'linkedin' ? Linkedin : MessageCircle
                  return (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="p-2 rounded-lg border border-border text-gray-400 hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t('solutionsCol')}</h4>
            <ul className="space-y-2 text-sm">
              {solutions.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/solutions/${s.slug}`} className="text-gray-400 hover:text-primary transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">{t('company')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-primary transition-colors">
                  {t('industries')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-primary transition-colors">
                  {t('resources')}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-primary transition-colors">
                  {t('partners')}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-primary transition-colors">
                  {t('caseStudies')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>{t('copyright', { year: currentYear })}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
