'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Cloud, Brain, Zap, TrendingUp, Check } from 'lucide-react'

export default function WhyBuyAdvanced() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const benefits = [
    {
      title: 'Infrastructure Planning',
      description: 'Strategic architecture design for scalable cloud infrastructure.',
    },
    {
      title: 'AI Integration',
      description: 'Seamless deployment of AI systems across your infrastructure.',
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce operational costs through intelligent automation.',
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous monitoring and optimization of your systems.',
    },
    {
      title: 'Revenue Automation',
      description: 'AI-powered workflows that drive revenue growth.',
    },
  ]

  const nodes = [
    { icon: Cloud, label: 'Cloud', delay: 0 },
    { icon: Brain, label: 'AI', delay: 0.2 },
    { icon: Zap, label: 'Optimization', delay: 0.4 },
    { icon: TrendingUp, label: 'Revenue', delay: 0.6 },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-[26px] font-bold font-display mb-6 tracking-tight">
              Infrastructure Advantage
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-8">
              You&apos;re not buying licenses.
              <br />
              You&apos;re building infrastructure.
            </p>
          </motion.div>

          {/* Right Column: Animated Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-8 neon-border"
          >
            <div className="flex items-center justify-between mb-8">
              {nodes.map((node, index) => {
                const Icon = node.icon
                return (
                  <div key={node.label} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: node.delay, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs text-gray-400">{node.label}</span>
                    </motion.div>
                    {index < nodes.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: node.delay + 0.1, duration: 0.5 }}
                        className="mx-2"
                      >
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: node.delay,
                          }}
                          className="text-primary text-lg"
                        >
                          →
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Interactive Rows */}
        <div className="mt-12 space-y-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              className="glass rounded-lg p-4 border border-primary/20 hover:border-primary/60 transition-all relative overflow-hidden"
              style={{
                transform: hoveredRow === index ? 'scale(1.01)' : 'scale(1)',
                boxShadow: hoveredRow === index 
                  ? '0 0 15px rgba(0, 200, 150, 0.2)' 
                  : '0 0 5px rgba(0, 200, 150, 0.05)',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-200">{benefit.title}</h3>
                    {hoveredRow === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-gray-400 mt-1"
                      >
                        {benefit.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

