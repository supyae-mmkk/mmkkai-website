'use client'

import { motion } from 'framer-motion'

export default function TrustedInfrastructureLayer() {
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
          <p className="text-sm uppercase tracking-wider text-gray-400">
            We are an <span className="text-primary">Official Google Cloud Co-Sell Partner</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Deploying Workspace, Cloud & AI Systems
          </p>
        </motion.div>
      </div>
    </section>
  )
}

