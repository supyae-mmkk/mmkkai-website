'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Mail } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import ConsultationPanel from '@/components/ConsultationPanel'
import SystemFlowDiagram from '@/components/visuals/SystemFlowDiagram'

export default function FinalCtaSection() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const t = useTranslations('finalCta')

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,200,150,0.12),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold font-display mb-5"
        >
          {t('title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-gray-400 max-w-xl mx-auto mb-8"
        >
          {t('subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <button
            onClick={() => setIsPanelOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Calendar size={16} /> {t('primaryCta')}
          </button>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 border border-white/15 text-white font-semibold rounded-lg hover:border-primary/50 hover:text-primary transition-colors"
          >
            <Mail size={16} /> {t('secondaryCta')}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-xl2 border border-border bg-surface/60 backdrop-blur-sm p-6 md:p-8"
        >
          <SystemFlowDiagram compact />
        </motion.div>
      </div>

      <ConsultationPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </section>
  )
}
