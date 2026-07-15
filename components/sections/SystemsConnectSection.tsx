'use client'

import { useTranslations } from 'next-intl'
import ArchitectureDiagram, { type Objective } from '@/components/visuals/ArchitectureDiagram'

interface ObjectiveCopy {
  id: string
  label: string
}

const OBJECTIVE_HIGHLIGHTS: Record<string, string[]> = {
  leads: ['lead-source', 'apollo'],
  sales: ['apollo', 'hubspot'],
  collaboration: ['hubspot', 'workspace'],
  automate: ['hubspot', 'automation', 'workspace'],
  cloud: ['workspace', 'dashboard'],
}

export default function SystemsConnectSection() {
  const t = useTranslations('systemsConnect')
  const objectiveCopy = t.raw('objectives') as ObjectiveCopy[]
  const captions = t.raw('captions') as Record<string, string>

  const objectives: Objective[] = objectiveCopy.map((o) => ({
    id: o.id,
    label: o.label,
    highlight: OBJECTIVE_HIGHLIGHTS[o.id] || [],
  }))

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">{t('title')}</h2>
          <p className="text-gray-400">{t('subtitle')}</p>
        </div>

        <ArchitectureDiagram objectives={objectives} activeCaption={(id) => captions[id]} />
      </div>
    </section>
  )
}
