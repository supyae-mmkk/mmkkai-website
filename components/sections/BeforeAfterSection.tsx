'use client'

import { useTranslations } from 'next-intl'
import ComparisonPanel from '@/components/sections/ComparisonPanel'

export default function BeforeAfterSection() {
  const t = useTranslations('beforeAfter')
  const beforeItems = t.raw('beforeItems') as string[]
  const afterItems = t.raw('afterItems') as string[]

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 section-paper">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink">{t('title')}</h2>
        </div>
        <ComparisonPanel leftTitle={t('before')} rightTitle={t('after')} leftItems={beforeItems} rightItems={afterItems} />
      </div>
    </section>
  )
}
