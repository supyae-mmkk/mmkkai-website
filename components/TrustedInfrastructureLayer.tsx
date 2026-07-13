'use client'

import { motion } from 'framer-motion'
import { credentials, NEUTRAL_PHRASES } from '@/lib/companyConfig'

// Previously hardcoded "We are an Official Google Cloud Co-Sell Partner" —
// an unverified claim (see lib/companyConfig.ts for why). This now renders
// verified credentials only if credentials.ts marks them verified; otherwise
// it falls back to neutral, defensible service-capability language.
export default function TrustedInfrastructureLayer() {
  const verifiedOnes = credentials.filter((c) => c.verified)

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 relative border-y border-primary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {verifiedOnes.length > 0 ? (
            <p className="text-sm uppercase tracking-wider text-gray-400">
              {verifiedOnes.map((c) => c.label).join('  ·  ')}
            </p>
          ) : (
            <p className="text-sm uppercase tracking-wider text-gray-400">
              {NEUTRAL_PHRASES.googleCloud} <span className="text-primary">·</span> {NEUTRAL_PHRASES.microsoft}
            </p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Deploying Workspace, Cloud &amp; AI systems for businesses in Myanmar and Thailand
          </p>
        </motion.div>
      </div>
    </section>
  )
}
