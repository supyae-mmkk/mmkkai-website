'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { solutions } from '@/lib/solutions'

// Homepage solutions grid — sourced from lib/solutions.ts (the same data that
// powers the Navbar mega-menu and the /solutions pages) so the product list
// shown here can never drift out of sync with what's actually sold.
export default function ProductModules() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {solutions.map((solution, index) => (
        <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            onMouseEnter={() => setExpanded(index)}
            onMouseLeave={() => setExpanded(null)}
            className="glass rounded-lg p-4 border border-primary/20 hover:border-primary/60 transition-all relative overflow-hidden group cursor-pointer h-full"
            style={{
              transform: expanded === index ? 'scale(1.02)' : 'scale(1)',
              boxShadow: expanded === index ? '0 0 12px rgba(0, 200, 150, 0.2)' : '0 0 4px rgba(0, 200, 150, 0.08)',
            }}
          >
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, #00C896, transparent)',
                backgroundSize: '200% 100%',
                animation: expanded === index ? 'scan 2s ease infinite' : 'none',
              }}
            />

            <div className="flex items-center justify-between relative z-10">
              <div className="flex-1">
                <h3 className="text-base font-bold mb-1 text-primary">{solution.name}</h3>
                <p className="text-sm text-gray-400">{solution.tagline}</p>

                {expanded === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-1"
                  >
                    {solution.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="w-3 h-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>

              <motion.div className="flex items-center gap-2 ml-4" animate={{ x: expanded === index ? 5 : 0 }}>
                <ArrowRight size={16} className="text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
