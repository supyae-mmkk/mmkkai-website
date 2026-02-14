'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Cube3D() {
  const [size, setSize] = useState(128)

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth >= 768 ? 160 : 128)
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const depth = size / 2

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 perspective-1000" style={{ width: size, height: size }}>
      <motion.div
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm"
          style={{ transform: `translateZ(${depth}px)` }}
        />
        {/* Back */}
        <div
          className="absolute w-full h-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm"
          style={{ transform: `translateZ(-${depth}px) rotateY(180deg)` }}
        />
        {/* Right */}
        <div
          className="absolute w-full h-full border-2 border-secondary/50 bg-secondary/5 backdrop-blur-sm"
          style={{ transform: `rotateY(90deg) translateZ(${depth}px)` }}
        />
        {/* Left */}
        <div
          className="absolute w-full h-full border-2 border-secondary/50 bg-secondary/5 backdrop-blur-sm"
          style={{ transform: `rotateY(-90deg) translateZ(${depth}px)` }}
        />
        {/* Top */}
        <div
          className="absolute w-full h-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm"
          style={{ transform: `rotateX(90deg) translateZ(${depth}px)` }}
        />
        {/* Bottom */}
        <div
          className="absolute w-full h-full border-2 border-primary/50 bg-primary/5 backdrop-blur-sm"
          style={{ transform: `rotateX(-90deg) translateZ(${depth}px)` }}
        />
      </motion.div>
    </div>
  )
}

