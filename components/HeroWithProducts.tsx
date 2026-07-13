'use client'

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import CubeScene from './CubeScene'
import { useState } from 'react'

export default function HeroWithProducts() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const products = [
    {
      title: 'Buy & Deploy Google Products',
      items: [
        'Google Workspace',
        'Google Cloud',
        'Gemini AI',
      ],
      buttonText: 'Start with Google',
      color: 'primary',
      icon: 'cloud',
    },
    {
      title: 'Microsoft Azure Solutions',
      items: [
        'Azure Cloud',
        'Azure AI',
        'Enterprise Migration',
      ],
      buttonText: 'Deploy Azure',
      color: 'secondary',
      icon: 'ai',
    },
    {
      title: 'AI Revenue Systems',
      items: [
        'Chat-Commerce Engine',
        'AI Sales Automation',
        'Multi-platform Integration',
      ],
      buttonText: 'Launch AI Engine',
      color: 'primary',
      icon: 'commerce',
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Canvas Particle Background */}
      <ParticleBackground />
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" style={{ zIndex: 2 }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" style={{ zIndex: 2 }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        {/* Top Section: Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-16 flex-1">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Official Cloud & AI
              <br />
              <span className="gradient-text">Deployment Partner</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Google Workspace. Google Cloud. Microsoft Azure.
              <br />
              AI Systems & Revenue Automation.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 200, 150, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary text-black font-bold rounded-lg flex items-center justify-center lg:justify-start gap-2 hover-glow transition-all text-sm md:text-base"
              >
                Buy Google Workspace
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all text-sm md:text-base"
              >
                Deploy AI System
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all text-sm md:text-base"
              >
                Launch Sales Engine
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            className="h-64 md:h-80 lg:h-96"
          >
            <CubeScene />
          </motion.div>
        </div>

        {/* Bottom Section: Product Cards (Visible Above Fold) */}
        <div className="grid md:grid-cols-3 gap-6 pb-12 lg:pb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="glass rounded-xl p-6 neon-border hover:border-primary/70 transition-all relative overflow-hidden group"
              style={{
                transform: hoveredCard === index 
                  ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-4px)' 
                  : 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)',
                transition: 'transform 0.3s ease-out',
                boxShadow: hoveredCard === index 
                  ? '0 0 30px rgba(0, 200, 150, 0.3)' 
                  : '0 0 10px rgba(0, 200, 150, 0.1)',
              }}
            >

              {/* Small Animated Icon */}
              <div className="mb-4 h-12 flex items-center">
                {product.icon === 'cloud' && <CloudIcon />}
                {product.icon === 'ai' && <AIIcon />}
                {product.icon === 'commerce' && <CommerceIcon />}
              </div>

              <h3 className={`text-xl font-bold mb-4 ${product.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                {product.title}
              </h3>
              <ul className="space-y-2 mb-4 flex-1">
                {product.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-300 text-sm">
                    <Check className={`w-4 h-4 ${product.color === 'primary' ? 'text-primary' : 'text-secondary'} flex-shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ x: 5 }}
                className={`flex items-center gap-2 font-semibold text-sm ${product.color === 'primary' ? 'text-primary' : 'text-secondary'}`}
              >
                {product.buttonText}
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Small animated icons
function CloudIcon() {
  return (
    <motion.div
      className="relative w-12 h-12"
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary rounded-full opacity-50" />
        <div className="absolute w-4 h-4 border-2 border-primary rounded-full -left-2 top-2 opacity-70" />
        <div className="absolute w-3 h-3 border-2 border-primary rounded-full -right-1 top-3 opacity-60" />
      </div>
    </motion.div>
  )
}

function AIIcon() {
  return (
    <motion.div
      className="relative w-12 h-12"
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-1">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-secondary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function CommerceIcon() {
  return (
    <motion.div
      className="relative w-12 h-12 flex items-center justify-center"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="text-2xl">💬</div>
      <motion.div
        className="absolute text-lg"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        $
      </motion.div>
    </motion.div>
  )
}

