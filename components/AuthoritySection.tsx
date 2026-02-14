'use client'

import { motion } from 'framer-motion'

export default function AuthoritySection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
            Cloud & AI Infrastructure Deployment
          </h2>
          
          {/* Glow Line Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ maxWidth: '200px' }}
          />

          <p className="text-xl text-gray-400 leading-relaxed">
            We architect enterprise-grade revenue systems that scale. From cloud migration to AI deployment, 
            we build the infrastructure that powers growth-focused organizations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

