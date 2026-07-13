'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, Zap, TrendingUp } from 'lucide-react'

export default function InfrastructureFlow() {
  const steps = [
    { icon: Cloud, label: 'Cloud', color: 'primary' },
    { icon: Brain, label: 'AI', color: 'secondary' },
    { icon: Zap, label: 'Automation', color: 'primary' },
    { icon: TrendingUp, label: 'Revenue', color: 'primary' },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold font-display text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Infrastructure Flow
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="glass rounded-xl p-6 neon-border text-center min-w-[120px]"
                >
                  <div className={`mb-3 flex justify-center ${step.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-sm font-bold">{step.label}</h3>
                </motion.div>
                
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="hidden md:block mx-4"
                  >
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="text-primary text-2xl"
                    >
                      →
                    </motion.div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

