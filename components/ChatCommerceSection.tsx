'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Zap, CreditCard, Database, TrendingUp } from 'lucide-react'

export default function ChatCommerceSection() {
  const features = [
    { icon: MessageSquare, text: 'Auto-sell during LIVE' },
    { icon: Zap, text: 'Multi-platform integration' },
    { icon: CreditCard, text: 'Payment + inventory sync' },
    { icon: Database, text: 'Enterprise backend' },
  ]

  const stats = [
    { value: '42%', label: 'Conversion Increase' },
    { value: '24/7', label: 'Automated Support' },
    { value: '5+', label: 'Platform Integration' },
  ]

  return (
    <section id="chat-commerce" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Turn Messages Into{' '}
              <span className="gradient-text">Revenue</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              AI-powered chat-commerce engine that converts conversations into sales across TikTok, Instagram, LINE, and more.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-gray-300">{feature.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 neon-border">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-gray-400">Dashboard Preview</p>
                  <p className="text-sm text-gray-500 mt-2">Revenue analytics & automation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

