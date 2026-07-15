'use client'

import { motion } from 'framer-motion'
import { Search, Compass, Wrench, LifeBuoy } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ICONS = [Search, Compass, Wrench, LifeBuoy]

interface Step {
  n: string
  title: string
  body: string
}

export default function ProcessSection() {
  const t = useTranslations('process')
  const steps = t.raw('steps') as Step[]

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">{t('title')}</h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-border" />
          {steps.map((step, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center mb-4 relative z-10">
                  <Icon size={22} className="text-primary" strokeWidth={1.75} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-black text-xs font-bold flex items-center justify-center">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-1.5">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.body}</p>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-10 text-xs text-gray-500 border-t border-border pt-6">{t('disclaimer')}</p>
      </div>
    </section>
  )
}
