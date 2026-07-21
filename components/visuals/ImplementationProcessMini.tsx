import { Search, Compass, Wrench, LifeBuoy } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

const ICONS = [Search, Compass, Wrench, LifeBuoy]

interface Step {
  n: string
  title: string
  body: string
}

// Compact version of the same 4-step process shown on the homepage
// (ProcessSection), reused here inside each solution page's Implementation
// tab so every page communicates "how we work" consistently without
// duplicating the copy in lib/solutions.ts.
export default async function ImplementationProcessMini() {
  const t = await getTranslations('process')
  const steps = t.raw('steps') as Step[]

  return (
    <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4" role="img" aria-label={`Implementation process: ${steps.map((s) => s.title).join(', then ')}`}>
      <div className="hidden sm:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-border" />
      {steps.map((step, i) => {
        const Icon = ICONS[i % ICONS.length]
        return (
          <div key={step.n} className="relative flex flex-col items-center text-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center relative z-10">
              <Icon size={16} className="text-primary" strokeWidth={1.75} />
            </div>
            <span className="text-[11px] font-medium text-gray-400 leading-tight">{step.title}</span>
          </div>
        )
      })}
    </div>
  )
}
