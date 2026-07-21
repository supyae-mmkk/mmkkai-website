'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Calendar } from 'lucide-react'
import {
  LayoutGrid, Cloud, ArrowRightLeft, Users2, Bot, Workflow, Sparkles, BarChart3,
  MonitorSmartphone, PenTool, LifeBuoy, Layers, Search, Activity,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import ConsultationPanel from './ConsultationPanel'
import { industries } from '@/lib/industries'

// Structured Solutions mega-menu. A handful of entries (Cloud Migration,
// CRM Implementation, Sales Automation, Business Workflow Automation, AI
// Assistants, Data and Reporting, Licensing and Deployment Support) describe
// capabilities covered *within* an existing solution page rather than having
// a dedicated route of their own - each links to the real page that covers
// that capability so nothing here is a dead link or an invented page.
const MEGA_MENU_CATEGORIES = [
  {
    id: 'workplace',
    icon: Cloud,
    items: [
      { icon: LayoutGrid, href: '/solutions/google-workspace', nameKey: 'googleWorkspace' },
      { icon: MonitorSmartphone, href: '/solutions/microsoft-365', nameKey: 'microsoft365' },
      { icon: Cloud, href: '/solutions/google-cloud', nameKey: 'googleCloud' },
      { icon: ArrowRightLeft, href: '/solutions/google-workspace', nameKey: 'cloudMigration' },
    ],
  },
  {
    id: 'sales',
    icon: Layers,
    items: [
      { icon: Layers, href: '/solutions/hubspot-crm', nameKey: 'hubspotCrm' },
      { icon: Search, href: '/solutions/apollo-lead-generation', nameKey: 'apollo' },
      { icon: Users2, href: '/solutions/hubspot-crm', nameKey: 'crmImplementation' },
      { icon: Workflow, href: '/solutions/sales-workflow-design', nameKey: 'salesAutomation' },
    ],
  },
  {
    id: 'ai',
    icon: Bot,
    items: [
      { icon: Bot, href: '/solutions/ai-automation', nameKey: 'aiAutomation' },
      { icon: Workflow, href: '/solutions/ai-automation', nameKey: 'businessWorkflowAutomation' },
      { icon: Sparkles, href: '/solutions/ai-automation', nameKey: 'aiAssistants' },
      { icon: BarChart3, href: '/solutions/ai-automation', nameKey: 'dataAndReporting' },
    ],
  },
  {
    id: 'support',
    icon: LifeBuoy,
    items: [
      { icon: MonitorSmartphone, href: '/solutions/teamviewer', nameKey: 'teamviewer' },
      { icon: Activity, href: '/solutions/remote-monitoring-management', nameKey: 'remoteMonitoring' },
      { icon: PenTool, href: '/solutions/adobe-business', nameKey: 'adobe' },
      { icon: LifeBuoy, href: '/solutions', nameKey: 'licensingSupport' },
    ],
  },
] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [desktopMenu, setDesktopMenu] = useState<'solutions' | 'industries' | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('nav')
  const tMenu = useTranslations('megaMenu')

  useEffect(() => {
    setIsOpen(false)
    setMobileSection(null)
  }, [pathname])

  const isActive = (href: string) => pathname.includes(href)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        onMouseLeave={() => setDesktopMenu(null)}
        className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-white/[0.06] transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-18 md:h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="text-xl md:text-2xl font-bold font-display gradient-text">MMKK AI</span>
              <span className="hidden xl:inline text-xs text-gray-500 border-l border-white/10 pl-2 ml-1">Cloud, CRM &amp; AI</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${pathname.match(/^\/(en|th|mm)\/?$/) ? 'text-primary' : 'text-gray-300 hover:text-white'}`}
              >
                {t('home')}
              </Link>

              <div className="relative" onMouseEnter={() => setDesktopMenu('solutions')}>
                <Link
                  href="/solutions"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/solutions') || isActive('/myanmar') || isActive('/thailand') ? 'text-primary' : 'text-gray-300 hover:text-white'}`}
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
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-[720px] max-w-[90vw] rounded-2xl border border-border bg-surface shadow-card p-5 grid grid-cols-4 gap-5"
                    >
                      {MEGA_MENU_CATEGORIES.map((cat) => (
                        <div key={cat.id}>
                          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary mb-3">
                            <cat.icon size={13} /> {tMenu(`categories.${cat.id}`)}
                          </p>
                          <div className="space-y-0.5">
                            {cat.items.map((item) => (
                              <Link
                                key={item.nameKey}
                                href={item.href}
                                className="flex items-start gap-2 px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors group"
                              >
                                <item.icon size={14} className="text-gray-500 group-hover:text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-[13px] text-gray-300 group-hover:text-white leading-tight">
                                  {tMenu(`items.${item.nameKey}`)}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Link
                        href="/solutions"
                        className="col-span-4 mt-1 pt-3 border-t border-border text-center text-xs font-semibold text-primary hover:underline"
                      >
                        {t('viewAllSolutions')} →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/#business-problems"
                className="px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                {t('businessProblems')}
              </Link>

              <div className="relative" onMouseEnter={() => setDesktopMenu('industries')}>
                <Link
                  href="/industries"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/industries') ? 'text-primary' : 'text-gray-300 hover:text-white'}`}
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
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-[380px] rounded-2xl border border-border bg-surface shadow-card p-3"
                    >
                      {industries.map((i) => (
                        <Link
                          key={i.slug}
                          href={`/industries#${i.slug}`}
                          className="block px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm text-gray-300 hover:text-white"
                        >
                          {i.name}
                        </Link>
                      ))}
                      <Link
                        href="/industries"
                        className="block mt-1 pt-2 border-t border-border text-center text-xs font-semibold text-primary hover:underline"
                      >
                        {t('viewAllIndustries')} →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/resources" className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/resources') ? 'text-primary' : 'text-gray-300 hover:text-white'}`}>
                {t('resources')}
              </Link>
              <Link href="/about" className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-300 hover:text-white'}`}>
                {t('about')}
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => setIsPanelOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 bg-primary text-black text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                <Calendar size={14} /> {t('bookCall')}
              </button>
            </div>

            <button className="lg:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-background"
            >
              <div className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
                <Link href="/" className="block px-3 py-2.5 rounded-lg text-gray-200 font-medium">{t('home')}</Link>

                <button
                  onClick={() => setMobileSection(mobileSection === 'solutions' ? null : 'solutions')}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-gray-200 font-medium"
                >
                  {t('solutions')}
                  <ChevronDown size={16} className={`transition-transform ${mobileSection === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileSection === 'solutions' && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden pl-3 space-y-3">
                      {MEGA_MENU_CATEGORIES.map((cat) => (
                        <div key={cat.id}>
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-primary mb-1 mt-2">{tMenu(`categories.${cat.id}`)}</p>
                          {cat.items.map((item) => (
                            <Link key={item.nameKey} href={item.href} className="block px-3 py-1.5 text-sm text-gray-400">
                              {tMenu(`items.${item.nameKey}`)}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link href="/#business-problems" className="block px-3 py-2.5 rounded-lg text-gray-200 font-medium">{t('businessProblems')}</Link>
                <Link href="/industries" className="block px-3 py-2.5 rounded-lg text-gray-200 font-medium">{t('industries')}</Link>
                <Link href="/resources" className="block px-3 py-2.5 rounded-lg text-gray-200 font-medium">{t('resources')}</Link>
                <Link href="/about" className="block px-3 py-2.5 rounded-lg text-gray-200 font-medium">{t('about')}</Link>
                <Link href="/contact" className="block px-3 py-2.5 rounded-lg text-gray-200 font-medium">{t('contact')}</Link>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <LanguageSwitcher />
                  <button
                    onClick={() => { setIsPanelOpen(true); setIsOpen(false) }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary text-black text-sm font-semibold rounded-lg"
                  >
                    <Calendar size={14} /> {t('bookCall')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ConsultationPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  )
}
