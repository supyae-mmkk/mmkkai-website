'use client'

import { motion } from 'framer-motion'

export default function WhoWeServeSection() {
  const clients = [
    { name: 'SMEs', description: 'Small to medium enterprises' },
    { name: 'Enterprises', description: 'Large-scale organizations' },
    { name: 'E-commerce', description: 'Online retail platforms' },
    { name: 'Clinics & Hospitality', description: 'Healthcare & service industries' },
  ]

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
          Who We Serve
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">{client.name}</h3>
              <p className="text-gray-400 text-lg">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

