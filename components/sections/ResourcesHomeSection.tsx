import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { ArrowRight, Clock } from 'lucide-react'
import { guides } from '@/lib/guides'
import ResourceThumbnail, { type ThumbnailVariant } from '@/components/visuals/ResourceThumbnail'

const THUMBNAILS: Record<string, ThumbnailVariant> = {
  'google-workspace-vs-microsoft-365': 'adoption',
  'what-is-apollo': 'automation',
  'hubspot-crm-guide': 'crm',
  'google-workspace-migration-guide': 'migration',
}

function readingTime(guide: (typeof guides)[number]) {
  const words = [guide.intro, ...guide.sections.map((s) => s.heading + ' ' + s.body)].join(' ').split(/\s+/).length
  return Math.max(4, Math.round(words / 200))
}

// Server component - reads translations directly rather than via a hook,
// so it can stay a plain server component (no client-side state needed).
export default async function ResourcesHomeSection() {
  const t = await getTranslations('resourcesHome')

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 section-paper">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{t('eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-ink">{t('title')}</h2>
          </div>
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-primary transition-colors">
            {t('viewAll')} <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/resources/${guide.slug}`} className="group block rounded-xl overflow-hidden border border-black/10 bg-white hover:shadow-card-light transition-all card-lift">
              <div className="aspect-[2/1] overflow-hidden">
                <ResourceThumbnail variant={THUMBNAILS[guide.slug] || 'adoption'} />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-2">
                  <Clock size={11} /> {readingTime(guide)} {t('readTime')}
                </div>
                <h3 className="font-semibold text-sm text-ink leading-snug mb-1.5 group-hover:text-primary transition-colors">{guide.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{guide.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
