'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import type { FaqItem } from '@/lib/faq'
import JsonLd from './JsonLd'
import { faqPageSchema } from '@/lib/schema'

// Reusable FAQ block used on the homepage and on every solution / landing
// page. Renders FAQPage JSON-LD alongside the visible Q&A so the schema
// always matches what's on the page (Phase 3.6 / 3.7 of the approved plan).
export default function FaqSection({ items, title, subtitle }: { items: FaqItem[]; title?: string; subtitle?: string }) {
  const t = useTranslations('faqSection')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <JsonLd data={faqPageSchema(items)} />
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-display text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title || t('title')}
        </motion.h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">{subtitle || t('subtitle')}</p>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={item.question} className="glass rounded-lg border border-primary/20 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-white">{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-primary flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                  {item.answer}
                  {item.href && (
                    <>
                      {' '}
                      <Link href={item.href} className="text-primary hover:underline">
                        Learn more →
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
