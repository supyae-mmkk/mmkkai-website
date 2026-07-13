'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface ClientSegment {
  name: string
  description: string
}

export default function WhoWeServeSection() {
  const t = useTranslations('whoWeServe')
  // next-intl supports returning raw arrays/objects from messages via t.raw()
  const clients = t.raw('items') as ClientSegment[]

  return (
    <section id="who-we-serve" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-display text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('title')}
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('subtitle')}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{client.name}</h3>
              <p className="text-gray-400 text-sm">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
