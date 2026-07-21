'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export interface TabItem {
  id: string
  label: string
  icon?: React.ReactNode
  content: React.ReactNode
}

// Generic, dependency-free tab switcher used to progressively disclose
// long-form content (implementation scope, migration steps, etc.) instead
// of stacking it all as visible paragraphs.
export default function Tabs({ items, tone = 'dark' }: { items: TabItem[]; tone?: 'dark' | 'light' }) {
  const [active, setActive] = useState(items[0]?.id)
  const isDark = tone === 'dark'
  const activeItem = items.find((i) => i.id === active) || items[0]

  return (
    <div>
      <div
        role="tablist"
        className={`flex flex-wrap gap-1 p-1 rounded-lg mb-6 ${isDark ? 'bg-surface-2 border border-border' : 'bg-black/[0.03] border border-black/5'}`}
      >
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={active === item.id}
            onClick={() => setActive(item.id)}
            className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              active === item.id
                ? isDark
                  ? 'text-black'
                  : 'text-black'
                : isDark
                  ? 'text-gray-400 hover:text-gray-200'
                  : 'text-gray-500 hover:text-ink'
            }`}
          >
            {active === item.id && (
              <motion.span
                layoutId={`tab-pill-${isDark ? 'dark' : 'light'}`}
                className="absolute inset-0 rounded-md bg-primary"
                transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {item.icon}
              {item.label}
            </span>
          </button>
        ))}
      </div>
      <motion.div
        key={activeItem?.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {activeItem?.content}
      </motion.div>
    </div>
  )
}
