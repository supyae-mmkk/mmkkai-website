'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, FileClock } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { caseStudies } from '@/lib/caseStudies'

export default function ProofSection() {
  const t = useTranslations('proof')
  const capabilities = t.raw('capabilities') as string[]

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">{t('title')}</h2>
          <p className="text-gray-400 text-sm">{t('subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-4 py-3"
            >
              <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
              <span className="text-sm text-gray-300">{cap}</span>
            </motion.div>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">{t('caseStudiesTitle')}</p>
          {caseStudies.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-surface/50 px-6 py-8 flex items-center gap-3">
              <FileClock size={20} className="text-gray-600 flex-shrink-0" />
              <p className="text-sm text-gray-500">{t('caseStudiesComingSoon')}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudies.map((cs) => (
                <div key={cs.slug} className="rounded-xl border border-border bg-surface p-5">
                  <p className="font-semibold text-white mb-1">{cs.clientName}</p>
                  <p className="text-xs text-gray-500 mb-2">{cs.industry}</p>
                  <p className="text-sm text-gray-400">{cs.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
