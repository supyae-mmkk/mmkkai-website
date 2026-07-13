'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

export default function ProblemSolutionSection() {
  const problems = [
    'Manual processes',
    'Scattered systems',
    'High operational costs',
    'Limited scalability',
  ]

  const solutions = [
    'AI automation',
    'Unified platform',
    'Cost optimization',
    'Infinite scale',
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 border border-red-500/20"
          >
            <h3 className="text-3xl font-bold mb-6 text-red-400">Without MMKK AI</h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-lg">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary text-4xl"
            >
              →
            </motion.div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 neon-border"
          >
            <h3 className="text-3xl font-bold mb-6 text-primary">With MMKK AI</h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={solution}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

