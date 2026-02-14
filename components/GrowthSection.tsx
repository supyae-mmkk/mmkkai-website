'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp } from 'lucide-react'

export default function GrowthSection() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (svgRef.current) {
      observer.observe(svgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Generate graph points (upward trend)
  const points = [
    { x: 40, y: 160 },
    { x: 100, y: 140 },
    { x: 160, y: 120 },
    { x: 220, y: 90 },
    { x: 280, y: 60 },
    { x: 340, y: 30 },
  ]

  const pathData = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Small Investment.
              <br />
              <span className="gradient-text">Big Growth.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Start with essential infrastructure. Scale to enterprise-level automation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-lg text-gray-300">Scalable architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-lg text-gray-300">Pay-as-you-grow pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-lg text-gray-300">ROI from day one</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Animated Graph */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 neon-border"
          >
            <div className="relative h-64">
              <svg
                ref={svgRef}
                className="w-full h-full"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={40 + i * 40}
                    x2="400"
                    y2={40 + i * 40}
                    stroke="rgba(0, 200, 150, 0.1)"
                    strokeWidth="1"
                  />
                ))}

                {/* Animated path */}
                <motion.path
                  d={pathData}
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00C896" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#00C896" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Animated dots */}
                {isInView &&
                  points.map((point, index) => (
                    <motion.circle
                      key={index}
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#00C896"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    />
                  ))}
              </svg>

              {/* Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-500">
                <span>Start</span>
                <span>Month 3</span>
                <span>Month 6</span>
                <span>Month 12</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

