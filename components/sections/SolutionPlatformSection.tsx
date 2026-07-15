'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, LayoutGrid, MonitorSmartphone, Layers, Search, Bot, Cloud, Check } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import GoogleWorkspaceDemo from '@/components/product-demos/GoogleWorkspaceDemo'
import Microsoft365Demo from '@/components/product-demos/Microsoft365Demo'
import HubSpotDemo from '@/components/product-demos/HubSpotDemo'
import ApolloDemo from '@/components/product-demos/ApolloDemo'
import AiAutomationDemo from '@/components/product-demos/AiAutomationDemo'
import GoogleCloudDemo from '@/components/product-demos/GoogleCloudDemo'

const MODULE_ORDER = [
  { key: 'google-workspace', icon: LayoutGrid, Demo: GoogleWorkspaceDemo, href: '/solutions/google-workspace' },
  { key: 'microsoft-365', icon: MonitorSmartphone, Demo: Microsoft365Demo, href: '/solutions/microsoft-365' },
  { key: 'hubspot-crm', icon: Layers, Demo: HubSpotDemo, href: '/solutions/hubspot-crm' },
  { key: 'apollo', icon: Search, Demo: ApolloDemo, href: '/solutions/apollo-lead-generation' },
  { key: 'ai-automation', icon: Bot, Demo: AiAutomationDemo, href: '/solutions/ai-automation' },
  { key: 'google-cloud', icon: Cloud, Demo: GoogleCloudDemo, href: '/solutions/google-cloud' },
] as const

interface ModuleCopy {
  name: string
  headline: string
  body: string
  benefits: string[]
  cta: string
}

export default function SolutionPlatformSection() {
  const t = useTranslations('solutionPlatform')
  const modules = t.raw('modules') as Record<string, ModuleCopy>
  const [active, setActive] = useState(0)
  const activeModule = MODULE_ORDER[active]
  const copy = modules[activeModule.key]

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 section-paper">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">{t('title')}</h2>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {MODULE_ORDER.map((m, i) => (
            <button
              key={m.key}
              onClick={() => setActive(i)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium border transition-colors ${
                i === active ? 'bg-ink text-white border-ink' : 'bg-white text-gray-600 border-black/10 hover:border-black/25'
              }`}
            >
              <m.icon size={14} /> {modules[m.key]?.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div>
              <activeModule.Demo />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-display mb-3">{copy?.headline}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{copy?.body}</p>
              <ul className="space-y-2.5 mb-6">
                {copy?.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
              <Link href={activeModule.href} className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary transition-colors">
                {copy?.cta} <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
