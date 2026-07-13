'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, MessageSquare } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      items: [
        'Google Workspace',
        'Google Cloud',
        'Microsoft Azure',
        'Migration & Security',
      ],
    },
    {
      icon: Brain,
      title: 'AI Deployment',
      items: [
        'Gemini Integration',
        'Azure OpenAI',
        'AI Agents',
        'CRM Automation',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Chat-Commerce Engine',
      items: [
        'AI-powered social selling',
        'TikTok / IG / LINE automation',
        'Multi-tenant SaaS',
        'Live commerce AI support',
      ],
    },
  ]

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-display text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Enterprise Solutions
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 neon-border hover:border-primary/70 transition-all group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-all mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

