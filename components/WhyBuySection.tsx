'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function WhyBuySection() {
  const benefits = [
    'Infrastructure planning',
    'AI integration',
    'Cost optimization',
    'Ongoing support',
    'Revenue automation layer',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-[26px] font-bold font-display mb-6 tracking-tight">
            Why Buy Through MMKK AI?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            You are not just buying products. You&apos;re getting a complete infrastructure partner.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-2xl p-8 neon-border"
        >
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

