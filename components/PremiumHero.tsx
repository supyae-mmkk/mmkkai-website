'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import ParticleBackground from './ParticleBackground'
import CubeScene from './CubeScene'
import ProductModules from './ProductModules'
import ConsultationPanel from './ConsultationPanel'

export default function PremiumHero() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Canvas Particle Background */}
      <ParticleBackground />
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" style={{ zIndex: 2 }} />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-15" style={{ zIndex: 2 }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col py-12">
        {/* Top Section: Hero Content - 40/60 Split */}
        <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center mb-8 flex-1">
          {/* Left Column (40%): Headline, Subtext, Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-[42px] font-bold font-display mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Official Cloud & AI
              <br />
              <span className="gradient-text">Deployment Partner</span>
            </motion.h1>

            {/* Partner Badges */}
            <motion.div
              className="mb-8 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-wider text-gray-400 opacity-80">
                Official Google Cloud Co-Sell Partner
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-400 opacity-80">
                Microsoft Azure Deployment Partner
              </p>
            </motion.div>

            {/* Clean Product Lines */}
            <motion.div
              className="mb-8 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-[15px] md:text-base text-gray-300 leading-relaxed">
                Google Cloud & Gemini AI
              </p>
              <p className="text-[15px] md:text-base text-gray-300 leading-relaxed">
                Microsoft Azure Infrastructure
              </p>
              <p className="text-[15px] md:text-base text-gray-300 leading-relaxed">
                AI Revenue Systems
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.button
                onClick={() => setIsPanelOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary text-black font-bold rounded-lg flex items-center justify-center lg:justify-start gap-2 transition-all text-sm"
              >
                Deploy Google Cloud & Gemini
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                onClick={() => setIsPanelOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/5 transition-all text-sm"
              >
                Deploy AI System
              </motion.button>
              <motion.button
                onClick={() => setIsPanelOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-secondary/30 text-secondary font-bold rounded-lg hover:bg-secondary/5 transition-all text-sm"
              >
                Launch Sales Engine
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column (60%): Animated Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="h-64 md:h-80 lg:h-96"
          >
            <CubeScene />
          </motion.div>
        </div>

        {/* Bottom Section: Compact Product Modules */}
        <div className="mt-8">
          <ProductModules />
        </div>
      </div>

      {/* Consultation Panel */}
      <ConsultationPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </section>
  )
}

