'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

// Generic collapsible-content accordion (distinct from FaqSection, which
// renders FAQPage JSON-LD alongside its Q&A). Used for progressive
// disclosure of dense reference content - implementation scope, migration
// steps, limitations - so a solution page reads as short sections rather
// than one long scroll of paragraphs.
export default function Accordion({
  items,
  tone = 'dark',
  defaultOpen,
}: {
  items: AccordionItem[]
  tone?: 'dark' | 'light'
  defaultOpen?: string
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? items[0]?.id ?? null)
  const isDark = tone === 'dark'

  return (
    <div className={`rounded-xl border divide-y ${isDark ? 'border-border divide-border bg-surface' : 'border-black/10 divide-black/10 bg-white'}`}>
      {items.map((item) => {
        const isOpen = open === item.id
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left ${isDark ? 'text-gray-100' : 'text-ink'}`}
            >
              <span className="font-semibold text-sm md:text-base">{item.title}</span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-primary' : isDark ? 'text-gray-500' : 'text-gray-400'}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className={`px-5 pb-5 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
