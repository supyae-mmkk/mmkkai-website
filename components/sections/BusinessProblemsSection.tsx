'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, FileSpreadsheet, Repeat, GitBranch, Lock, Unplug, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const ICONS = [Mail, FileSpreadsheet, Repeat, GitBranch, Lock, Unplug]

interface ProblemData {
  id: string
  label: string
  problem: string
  solution: string
  outcome: string
  href: string
}

// Interactive "what is slowing your business down?" picker. Six visual
// problem cards; selecting one reveals the problem/solution/outcome/link
// without a wall of paragraphs on first render.
export default function BusinessProblemsSection() {
  const t = useTranslations('businessProblems')
  const tc = useTranslations('common')
  const problems = t.raw('problems') as ProblemData[]
  const [active, setActive] = useState(0)
  const current = problems[active]

  return (
    <section id="business-problems" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">{t('title')}</h2>
          <p className="text-gray-400">{t('subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {problems.map((p, i) => {
            const Icon = ICONS[i % ICONS.length]
            const isActive = i === active
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`text-left flex items-start gap-3 p-4 rounded-xl border transition-all card-lift ${
                  isActive ? 'bg-primary/10 border-primary/50' : 'bg-surface border-border hover:border-white/20'
                }`}
              >
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-primary/20' : 'bg-surface-2'}`}>
                  <Icon size={16} className={isActive ? 'text-primary' : 'text-gray-500'} />
                </span>
                <span className={`text-sm font-medium leading-snug ${isActive ? 'text-white' : 'text-gray-400'}`}>{p.label}</span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current?.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl2 border border-border bg-surface p-6 md:p-8 grid md:grid-cols-3 gap-6"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-2">{tc('problemLabel')}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{current?.problem}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primary mb-2">{tc('solutionLabel')}</p>
              <p className="text-sm text-gray-100 font-medium leading-relaxed">{current?.solution}</p>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 mb-2">{tc('outcomeLabel')}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{current?.outcome}</p>
              </div>
              {current?.href && (
                <Link href={current.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mt-4">
                  {tc('learnMore')} <ArrowRight size={14} />
                </Link>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
