'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { partnerRegistry, NEUTRAL_PHRASES } from '@/lib/companyConfig'

const PRODUCTS = ['Google Workspace', 'Microsoft 365', 'HubSpot', 'Google Cloud', 'Apollo', 'TeamViewer', 'Adobe']

// Previously hardcoded "We are an Official Google Cloud Co-Sell Partner" —
// an unverified claim (see lib/companyConfig.ts for why). Renders verified
// credentials only if companyConfig.ts marks them verified; otherwise falls
// back to a neutral "Technology We Implement and Support" label with plain
// product names - no partner/certification claim, no logos implying
// endorsement.
export default function TrustedInfrastructureLayer() {
  const t = useTranslations('techStrip')
  const verifiedOnes = partnerRegistry.filter((c) => c.status === 'verified' && c.publicVisibility)

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 relative border-y border-white/[0.06] bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-5"
        >
          {verifiedOnes.length > 0 ? verifiedOnes.map((c) => c.name).join('  ·  ') : t('label')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {PRODUCTS.map((name) => (
            <span key={name} className="text-sm sm:text-base font-semibold font-display text-gray-400 hover:text-gray-200 transition-colors">
              {name}
            </span>
          ))}
        </motion.div>
        {verifiedOnes.length === 0 && (
          <p className="text-center text-[11px] text-gray-600 mt-4">
            {NEUTRAL_PHRASES.googleCloud} · {NEUTRAL_PHRASES.microsoft}
          </p>
        )}
      </div>
    </section>
  )
}
