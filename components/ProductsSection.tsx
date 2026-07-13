'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, MessageSquare, ArrowRight } from 'lucide-react'

export default function ProductsSection() {
  const products = [
    {
      icon: Cloud,
      title: 'Business Cloud Setup',
      features: [
        'Google Workspace',
        'Business Email & Domain',
        'Google Cloud',
        'Microsoft Azure',
        'Migration & Security',
      ],
      buttonText: 'Explore Cloud',
      buttonHref: '#contact',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      features: [
        'Gemini for Enterprise',
        'Azure OpenAI',
        'AI Workflow Automation',
        'AI Chatbots',
      ],
      buttonText: 'Deploy AI',
      buttonHref: '#contact',
    },
    {
      icon: MessageSquare,
      title: 'Chat-Commerce Engine',
      features: [
        'Social media auto-selling',
        'TikTok / IG / LINE integration',
        'Live stream AI sales',
        'Payment & inventory sync',
      ],
      buttonText: 'Launch Sales Engine',
      buttonHref: '#contact',
    },
  ]

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
          What You Can Buy
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 neon-border hover:border-primary/70 transition-all group cursor-pointer h-full flex flex-col"
              >
                <div className="mb-6">
                  <div className="p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-all mb-6">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">{product.title}</h3>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={product.buttonHref}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-semibold text-lg group-hover:text-primary/80 transition-colors"
                >
                  {product.buttonText}
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

