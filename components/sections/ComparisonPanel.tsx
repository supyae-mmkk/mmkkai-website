import { X, Check } from 'lucide-react'

// Split before/after (or "without MMKK AI" / "with MMKK AI") visual
// comparison. Deliberately icon + short-phrase driven rather than
// paragraph-driven, and never carries invented percentage/time claims.
export default function ComparisonPanel({
  leftTitle,
  rightTitle,
  leftItems,
  rightItems,
}: {
  leftTitle: string
  rightTitle: string
  leftItems: string[]
  rightItems: string[]
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-0 md:rounded-xl2 md:overflow-hidden md:border md:border-border">
      <div className="rounded-xl2 md:rounded-none border border-border md:border-0 md:border-r bg-surface p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-5">{leftTitle}</p>
        <ul className="space-y-3.5">
          {leftItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <X size={11} className="text-gray-500" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl2 md:rounded-none border border-primary/30 md:border-0 bg-gradient-to-br from-primary/[0.07] to-transparent p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-5">{rightTitle}</p>
        <ul className="space-y-3.5">
          {rightItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-200">
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Check size={11} className="text-primary" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
