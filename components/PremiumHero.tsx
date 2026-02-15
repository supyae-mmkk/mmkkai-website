'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import ParticleBackground from './ParticleBackground'
import ProductModules from './ProductModules'
import ConsultationPanel from './ConsultationPanel'

const CubeScene = dynamic(() => import('./CubeScene'), {
  ssr: false,
})

export default function PremiumHero() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24 overflow-hidden pt-28 md:pt-32 lg:pt-36">
      {/* Subtle Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(46,230,194,0.08),transparent_60%)]" style={{ zIndex: 1 }} />
      
      {/* Canvas Particle Background */}
      <ParticleBackground />
      
      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 bg-background/95" style={{ zIndex: 2 }} />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" style={{ zIndex: 2 }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col">
        {/* Top Section: Hero Content - 40/60 Split */}
        <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center mb-8 flex-1">
          {/* Left Column (40%): Headline, Subtext, Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col justify-center"
          >
            <div className="max-w-4xl">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="block">{t('title1')}</span>
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t('title2')}</span>
              </motion.h1>
            </div>

            {/* Partner Badges */}
            <motion.div
              className="mt-6 max-w-3xl space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-wide text-gray-500">
                {t('badge1')}
              </p>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                {t('badge2')}
              </p>
            </motion.div>

            {/* Clean Product Lines */}
            <motion.div
              className="mt-6 max-w-3xl space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-gray-500 leading-relaxed">
                {t('product1')}
              </p>
              <p className="text-gray-500 leading-relaxed">
                {t('product2')}
              </p>
              <p className="text-gray-500 leading-relaxed">
                {t('product3')}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button
                onClick={() => setIsPanelOpen(true)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="px-6 py-3 bg-[#111] border border-[#2EE6C2]/40 text-[#2EE6C2] hover:bg-[#2EE6C2]/10 transition-all duration-300 rounded-lg flex items-center justify-center lg:justify-start gap-2 text-sm font-medium"
              >
                {t('button1')}
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                onClick={() => setIsPanelOpen(true)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="px-6 py-3 bg-[#111] border border-[#2EE6C2]/40 text-[#2EE6C2] hover:bg-[#2EE6C2]/10 transition-all duration-300 rounded-lg text-sm font-medium"
              >
                {t('button2')}
              </motion.button>
              <motion.button
                onClick={() => setIsPanelOpen(true)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="px-6 py-3 bg-[#111] border border-[#2EE6C2]/40 text-[#2EE6C2] hover:bg-[#2EE6C2]/10 transition-all duration-300 rounded-lg text-sm font-medium"
              >
                {t('button3')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column (60%): Animated Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="h-64 md:h-80 lg:h-96"
          >
            <CubeScene />
          </motion.div>
        </div>

        {/* Bottom Section: Compact Product Modules */}
        <div className="mt-8">
          <ProductModules />
        </div>
      </div>

      {/* Consultation Panel */}
      <ConsultationPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </section>
  )
}
