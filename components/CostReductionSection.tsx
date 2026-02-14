'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

export default function CostReductionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-display text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Reduce Cost. Increase Intelligence. Scale Faster.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Without Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-red-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-400">Without Infrastructure</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Manual work</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg">High labor cost</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Slow operations</span>
              </li>
            </ul>
          </motion.div>

          {/* With MMKK AI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 neon-border"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">With MMKK AI</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Automated systems</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">AI workflows</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg">Optimized cloud cost</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-xl text-gray-400 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Small investment. Long-term leverage.
        </motion.p>
      </div>
    </section>
  )
}

