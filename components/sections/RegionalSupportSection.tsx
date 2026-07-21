'use client'

import { Check, ArrowLeftRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import RegionalCoverageMap from '@/components/visuals/RegionalCoverageMap'
import { countries } from '@/lib/countries'
import SiteImage from '@/components/media/SiteImage'

// Subtle regional visual - two labelled abstract map "pins" rather than
// flags or stereotypical imagery - representing MMKK AI's two markets.
function RegionMarker({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25">
      <span className="relative flex h-2 w-2">
        <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className="text-xs font-semibold text-primary">{label}</span>
    </div>
  )
}

export default function RegionalSupportSection() {
  const t = useTranslations('regional')
  const myanmarItems = t.raw('myanmarItems') as string[]
  const thailandItems = t.raw('thailandItems') as string[]

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">{t('title')}</h2>
        </div>

        <div className="mb-6">
          <RegionalCoverageMap
            regions={[
              { title: countries.myanmar.name, cities: countries.myanmar.cities },
              { title: countries.thailand.name, cities: countries.thailand.cities },
            ]}
          />
        </div>

        {/* Real-photo slot - renders nothing until a licensed Thailand/SEA
            business photo is approved in lib/imageConfig.ts (id:
            home-regional-thailand). No layout shift while empty. */}
        <SiteImage
          id="home-regional-thailand"
          className="w-full rounded-xl2 border border-border object-cover mb-6 max-h-72"
        />

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl2 border border-border bg-surface p-6">
            <RegionMarker label={t('myanmarTitle')} />
            <ul className="mt-5 space-y-2.5">
              {myanmarItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <Check size={15} className="text-primary flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl2 border border-border bg-surface p-6">
            <RegionMarker label={t('thailandTitle')} />
            <ul className="mt-5 space-y-2.5">
              {thailandItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <Check size={15} className="text-primary flex-shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-5 py-4">
          <ArrowLeftRight size={18} className="text-primary flex-shrink-0" />
          <p className="text-sm text-gray-300">{t('crossBorder')}</p>
        </div>
      </div>
    </section>
  )
}
