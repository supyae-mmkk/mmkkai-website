'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Cloud, Brain, Zap, MessageSquare, TrendingUp } from 'lucide-react'

export default function ArchitectureSection() {
  const layers = [
    { icon: Cloud, title: 'Cloud Layer', description: 'Infrastructure foundation' },
    { icon: Brain, title: 'AI Layer', description: 'Intelligent automation' },
    { icon: Zap, title: 'Automation Layer', description: 'Workflow optimization' },
    { icon: MessageSquare, title: 'Chat-Commerce Engine', description: 'Revenue conversion' },
    { icon: TrendingUp, title: 'Revenue Intelligence', description: 'Data-driven insights' },
  ]

  return (
    <section id="architecture" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How We Build Revenue Systems
        </motion.h2>

        <div className="flex flex-col items-center space-y-8">
          {layers.map((layer, index) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={layer.title}
                className="w-full max-w-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="glass rounded-2xl p-8 neon-border hover:border-primary/50 transition-all group">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{layer.title}</h3>
                      <p className="text-gray-400">{layer.description}</p>
                    </div>
                  </div>
                </div>

                {index < layers.length - 1 && (
                  <motion.div
                    className="flex justify-center my-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowDown className="w-8 h-8 text-primary" />
                    </motion.div>
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

