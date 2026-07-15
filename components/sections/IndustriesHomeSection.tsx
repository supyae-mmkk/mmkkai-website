'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Building2, ShoppingBag, GraduationCap, HeartPulse, Factory, UtensilsCrossed, Globe2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { industries } from '@/lib/industries'

const ICONS: Record<string, typeof Briefcase> = {
  'professional-services': Briefcase,
  'real-estate': Building2,
  'retail-distribution': ShoppingBag,
  'education': GraduationCap,
  'healthcare-administration': HeartPulse,
  'manufacturing': Factory,
  'hospitality': UtensilsCrossed,
  'regional-businesses': Globe2,
}

export default function IndustriesHomeSection() {
  const t = useTranslations('industriesHome')

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 section-paper">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display">{t('title')}</h2>
          </div>
          <Link href="/industries" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-primary transition-colors">
            {t('viewAll')} <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {industries.map((industry, i) => {
            const Icon = ICONS[industry.slug] || Briefcase
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <Link
                  href={`/industries#${industry.slug}`}
                  className="block h-full bg-white border border-black/10 rounded-xl p-4 hover:border-primary/40 hover:shadow-card-light transition-all card-lift"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-ink mb-1.5">{industry.name}</p>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{industry.problem}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
