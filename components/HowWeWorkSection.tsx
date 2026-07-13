'use client'

import { motion } from 'framer-motion'
import { Search, Settings, Rocket } from 'lucide-react'

export default function HowWeWorkSection() {
  const steps = [
    {
      icon: Search,
      title: 'Assess',
      description: 'Analyze your current infrastructure and identify opportunities.',
    },
    {
      icon: Settings,
      title: 'Build',
      description: 'Deploy cloud, AI, and automation systems tailored to your needs.',
    },
    {
      icon: Rocket,
      title: 'Scale',
      description: 'Monitor, optimize, and expand as your business grows.',
    },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How We Work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass rounded-2xl p-8 neon-border text-center relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-4 mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary text-2xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

