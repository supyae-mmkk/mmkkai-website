'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import Cube3D from './Cube3D'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Particle Background */}
      <ParticleBackground />
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" style={{ zIndex: 2 }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Official Cloud & AI
              <br />
              <span className="gradient-text">Deployment Partner</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Google Workspace. Google Cloud. Microsoft Azure.
              <br />
              AI Systems & Revenue Automation.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 200, 150, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-black font-bold rounded-lg flex items-center justify-center lg:justify-start gap-2 hover-glow transition-all"
              >
                Buy Google Workspace
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all"
              >
                Deploy AI System
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all"
              >
                Launch Sales Engine
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <Cube3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

