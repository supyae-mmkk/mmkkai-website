'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

export default function ProductModules() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const products = [
    {
      title: 'Google Cloud Infrastructure',
      description: 'Deploy Workspace, Cloud, Gemini AI',
      action: 'Configure Deployment',
      features: [
        'Google Workspace',
        'Google Cloud Infrastructure',
        'Google Gemini AI',
        'Chrome Enterprise',
        'Cloud Migration & Optimization',
      ],
      subtext: 'Buy directly through MMKK AI with deployment & cost optimization included.',
      color: 'primary',
    },
    {
      title: 'Microsoft Azure Infrastructure',
      description: 'Deploy Azure AI, compute, and security',
      action: 'Launch Infrastructure',
      features: [
        'Azure Cloud Servers',
        'Azure AI Services',
        'Enterprise Migration',
        'DevOps Infrastructure',
      ],
      color: 'secondary',
    },
    {
      title: 'MMKK AI Sales Engine',
      description: 'Deploy AI-powered chat commerce',
      action: 'Activate System',
      features: [
        'Chat-Commerce Engine',
        'AI Sales Automation',
        'Multi-platform Integration',
        'Custom AI Workflows',
      ],
      color: 'primary',
    },
  ]

  return (
    <div className="space-y-3">
      {products.map((product, index) => (
        <motion.div
          key={product.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          onMouseEnter={() => setExpanded(index)}
          onMouseLeave={() => setExpanded(null)}
          className="glass rounded-lg p-4 border border-primary/20 hover:border-primary/60 transition-all relative overflow-hidden group"
          style={{
            transform: expanded === index ? 'scale(1.02)' : 'scale(1)',
            boxShadow: expanded === index 
              ? '0 0 12px rgba(0, 200, 150, 0.2)' 
              : '0 0 4px rgba(0, 200, 150, 0.08)',
          }}
        >
          {/* Glow edge highlight */}
          <div 
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${product.color === 'primary' ? '#00C896' : '#007BFF'}, transparent)`,
              backgroundSize: '200% 100%',
              animation: expanded === index ? 'scan 2s ease infinite' : 'none',
            }}
          />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex-1">
              <h3 className={`text-base font-bold mb-1 ${product.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                {product.title}
              </h3>
              <p className="text-sm text-gray-400">{product.description}</p>
              
              {/* Expanded features */}
              {expanded === index && (
                <>
                  {product.subtext && (
                    <p className="text-xs text-gray-500 italic mt-2 mb-3">{product.subtext}</p>
                  )}
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-1"
                  >
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className={`w-3 h-3 ${product.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                        {feature}
                      </li>
                    ))}
                  </motion.ul>
                </>
              )}
            </div>
            
            <motion.div
              className="flex items-center gap-2 ml-4"
              animate={{ x: expanded === index ? 5 : 0 }}
            >
              <span className={`text-sm font-semibold ${product.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                {product.action}
              </span>
              <ArrowRight 
                size={16} 
                className={product.color === 'primary' ? 'text-primary' : 'text-secondary'} 
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

