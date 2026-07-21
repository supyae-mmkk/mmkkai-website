import type { PartnerEntry } from '@/lib/companyConfig'
import VerificationBadge from './VerificationBadge'

// Platforms MMKK AI implements for clients. Explicitly NOT presented as a
// partnership - relationshipType is always 'implementation-service' or
// 'product-supply' here. A logo or "we work with X" is not partnership
// evidence (see lib/companyConfig.ts), so this card never uses partner-tier
// language even if the entry is later marked 'verified'.
export default function PlatformCard({ entry }: { entry: PartnerEntry }) {
  const relLabel = entry.relationshipType === 'product-supply' ? 'Product / license supply' : 'Implementation service'
  return (
    <div className="rounded-xl2 border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-bold text-white">{entry.name}</h3>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500 bg-surface-2 border border-border rounded-full px-2 py-0.5 whitespace-nowrap">
          {relLabel}
        </span>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{entry.description}</p>
    </div>
  )
}
