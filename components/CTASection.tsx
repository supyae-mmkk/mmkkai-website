'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useState } from 'react'
import ConsultationPanel from './ConsultationPanel'

export default function CTASection() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-[26px] font-bold font-display mb-8 tracking-tight">
            Build Your Intelligent Infrastructure Today.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setIsPanelOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-primary text-black font-bold rounded-lg flex items-center gap-3 transition-all"
            >
              <Calendar size={20} />
              Talk to Cloud Specialist
            </motion.button>
            <motion.button
              onClick={() => setIsPanelOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/5 transition-all"
            >
              Request Proposal
            </motion.button>
          </div>
        </motion.div>
      </div>
      <ConsultationPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </section>
  )
}

