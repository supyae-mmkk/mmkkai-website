'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { solutions } from '@/lib/solutions'
import { industries } from '@/lib/industries'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [desktopMenu, setDesktopMenu] = useState<'solutions' | 'industries' | null>(null)
  const pathname = usePathname()
  const t = useTranslations('nav')

  useEffect(() => {
    setIsOpen(false)
    setMobileSection(null)
  }, [pathname])

  const isActive = (href: string) => pathname.includes(href)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      onMouseLeave={() => setDesktopMenu(null)}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 cursor-pointer">
              <span className="text-2xl font-bold font-display gradient-text">MMKK AI</span>
              <span className="hidden md:inline text-sm text-gray-400">Cloud, CRM &amp; AI Solutions</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive('/en') || pathname.match(/^\/(en|th|mm)\/?$/) ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}>
              {t('home')}
            </Link>

            {/* Solutions mega-menu */}
            <div className="relative" onMouseEnter={() => setDesktopMenu('solutions')}>
              <Link
                href="/solutions"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive('/solutions') || isActive('/myanmar') || isActive('/thailand') ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
              >
                {t('solutions')}
                <ChevronDown size={14} className={`transition-transform ${desktopMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </Link>
              <AnimatePresence>
                {desktopMenu === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-[560px] glass neon-border rounded-xl p-4 grid grid-cols-2 gap-1"
                  >
                    {solutions.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/solutions/${s.slug}`}
                        className="block px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                      >
                        <p className="text-sm font-semibold text-white">{s.name}</p>
                        <p className="text-xs text-gray-400 line-clamp-1">{s.tagline}</p>
                      </Link>
                    ))}
                    <Link
                      href="/solutions"
                      className="col-span-2 mt-2 text-center text-xs font-semibold text-primary hover:underline py-2"
                    >
                      {t('viewAllSolutions')} →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries mega-menu */}
            <div className="relative" onMouseEnter={() => setDesktopMenu('industries')}>
              <Link
                href="/industries"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive('/industries') ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
              >
                {t('industries')}
                <ChevronDown size={14} className={`transition-transform ${desktopMenu === 'industries' ? 'rotate-180' : ''}`} />
              </Link>
              <AnimatePresence>
                {desktopMenu === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-[420px] glass neon-border rounded-xl p-4"
                  >
                    {industries.map((i) => (
                      <Link
                        key={i.slug}
                        href={`/industries#${i.slug}`}
                        className="block px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors text-sm text-gray-200"
                      >
                        {i.name}
                      </Link>
                    ))}
                    <Link
                      href="/industries"
                      className="block mt-2 text-center text-xs font-semibold text-primary hover:underline py-2"
                    >
                      {t('viewAllIndustries')} →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/resources" className={`text-sm font-medium transition-colors ${isActive('/resources') ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}>
              {t('resources')}
            </Link>
            <Link href="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}>
              {t('about')}
            </Link>
            <Link href="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}>
              {t('contact')}
            </Link>

            <LanguageSwitcher />
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary text-black font-semibold rounded-lg hover-glow transition-all whitespace-nowrap"
              >
                {t('bookCall')}
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-primary/20 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="block py-2 text-gray-300 hover:text-primary transition-colors">
                {t('home')}
              </Link>

              {/* Solutions accordion */}
              <button
                onClick={() => setMobileSection(mobileSection === 'solutions' ? null : 'solutions')}
                className="w-full flex items-center justify-between py-2 text-gray-300"
              >
                <span>{t('solutions')}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileSection === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'solutions' && (
                <div className="pl-4 space-y-1 pb-2">
                  {solutions.map((s) => (
                    <Link key={s.slug} href={`/solutions/${s.slug}`} className="block py-1.5 text-sm text-gray-400 hover:text-primary">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Industries accordion */}
              <button
                onClick={() => setMobileSection(mobileSection === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between py-2 text-gray-300"
              >
                <span>{t('industries')}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileSection === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSection === 'industries' && (
                <div className="pl-4 space-y-1 pb-2">
                  {industries.map((i) => (
                    <Link key={i.slug} href={`/industries#${i.slug}`} className="block py-1.5 text-sm text-gray-400 hover:text-primary">
                      {i.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/resources" className="block py-2 text-gray-300 hover:text-primary transition-colors">
                {t('resources')}
              </Link>
              <Link href="/about" className="block py-2 text-gray-300 hover:text-primary transition-colors">
                {t('about')}
              </Link>
              <Link href="/contact" className="block py-2 text-gray-300 hover:text-primary transition-colors">
                {t('contact')}
              </Link>

              <div className="flex items-center justify-between pt-3">
                <LanguageSwitcher />
                <Link href="/contact">
                  <button className="px-6 py-2 bg-primary text-black font-semibold rounded-lg">{t('bookCall')}</button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
