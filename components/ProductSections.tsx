'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export default function ProductSections() {
  const googleProducts = {
    title: 'Buy & Deploy Google Products',
    items: [
      'Google Workspace (Business Email)',
      'Google Cloud Infrastructure',
      'Gemini AI for Enterprise',
      'Chrome Enterprise',
      'Cloud Migration & Setup',
    ],
    copy: 'We don&apos;t just resell. We deploy, configure and optimize.',
    buttonText: 'Start with Google',
    color: 'primary',
  }

  const azureProducts = {
    title: 'Microsoft Azure Solutions',
    items: [
      'Azure Cloud Servers',
      'Azure AI',
      'Enterprise Migration',
      'Secure DevOps Infrastructure',
    ],
    buttonText: 'Deploy Azure',
    color: 'secondary',
  }

  const mmkkProducts = {
    title: 'AI Revenue Systems',
    items: [
      'Chat-Commerce Engine',
      'AI Sales Automation',
      'Multi-platform Social Selling',
      'Custom AI Integration',
    ],
    buttonText: 'Launch AI Engine',
    color: 'primary',
  }

  return (
    <section id="products" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What You Can Buy From Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Google Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-8 neon-border hover:border-primary/70 transition-all h-full flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">{googleProducts.title}</h3>
            </div>
            <ul className="space-y-3 mb-6 flex-1">
              {googleProducts.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            {googleProducts.copy && (
              <p className="text-sm text-gray-400 mb-6 italic">{googleProducts.copy}</p>
            )}
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-primary font-semibold text-lg"
            >
              {googleProducts.buttonText}
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Azure Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-8 border border-secondary/30 hover:border-secondary/70 transition-all h-full flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-secondary">{azureProducts.title}</h3>
            </div>
            <ul className="space-y-3 mb-6 flex-1">
              {azureProducts.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-secondary font-semibold text-lg"
            >
              {azureProducts.buttonText}
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* MMKK AI SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-8 neon-border hover:border-primary/70 transition-all h-full flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">{mmkkProducts.title}</h3>
            </div>
            <ul className="space-y-3 mb-6 flex-1">
              {mmkkProducts.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-primary font-semibold text-lg"
            >
              {mmkkProducts.buttonText}
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

