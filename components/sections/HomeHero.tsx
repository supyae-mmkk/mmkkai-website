'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ConsultationPanel from '@/components/ConsultationPanel'
import HomepageHeroIllustration from '@/components/illustrations/HomepageHeroIllustration'
import SiteImage from '@/components/media/SiteImage'

const PRODUCT_BADGES = ['Google Workspace', 'Microsoft 365', 'HubSpot', 'Google Cloud', 'Apollo', 'TeamViewer', 'Adobe']

export default function HomeHero() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const t = useTranslations('hero')

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,150,0.08),transparent_55%)]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 border border-primary/25 rounded-full px-3 py-1 mb-6"
          >
            {t('eyebrow')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.08] mb-6"
          >
            {t('title1')} <span className="gradient-text">{t('title2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-9"
          >
            {PRODUCT_BADGES.map((name) => (
              <span key={name} className="text-xs font-medium text-gray-400 bg-surface border border-border rounded-full px-3 py-1.5">
                {name}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => setIsPanelOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Calendar size={16} /> {t('primaryCta')}
            </button>
            <Link
              href="/solutions"
              className="flex items-center gap-2 px-6 py-3 border border-white/15 text-white font-semibold rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
            >
              {t('secondaryCta')} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 md:mt-20 rounded-xl2 border border-border bg-surface/60 backdrop-blur-sm p-6 md:p-10"
        >
          <HomepageHeroIllustration />
        </motion.div>

        {/* Real-photo slot - renders nothing until a licensed Bangkok/
            Thailand business photo is approved in lib/imageConfig.ts (id:
            home-hero-bangkok). No layout shift while empty. */}
        <SiteImage
          id="home-hero-bangkok"
          className="w-full rounded-xl2 border border-border object-cover mt-6 max-h-80"
        />
      </div>

      <ConsultationPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </section>
  )
}
