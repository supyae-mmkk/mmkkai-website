'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <span ref={ref}>
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CountUp value={value} suffix={suffix} />
        </motion.span>
      )}
    </span>
  )
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps
    
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        return next >= value ? value : next
      })
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [value])
  
  return <>{Math.round(count)}{suffix}</>
}

export default function WhySection() {
  const metrics = [
    { value: 42, suffix: '%', label: 'Conversion Increase' },
    { value: 35, suffix: '%', label: 'Cost Reduction', prefix: '-' },
    { value: 70, suffix: '%', label: 'Automation Rate' },
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
            One Partner for
            <br />
            <span className="gradient-text">Cloud, AI & Automation.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass rounded-2xl p-8 neon-border text-center"
            >
              <div className="text-6xl font-bold text-primary mb-4">
                {metric.prefix}
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-xl text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

