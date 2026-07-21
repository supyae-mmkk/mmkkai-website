import type { PartnerEntry } from '@/lib/companyConfig'
import VerificationBadge from './VerificationBadge'
import EvidenceLink from './EvidenceLink'
import LastVerifiedDate from './LastVerifiedDate'

// Used only for the 'verified-partner' and 'membership' categories, kept
// strictly separate from PlatformCard so implementing a platform is never
// visually conflated with an official partnership. Only entries with
// status === 'verified' AND publicVisibility should ever reach this
// component from a page that renders it in a "Verified Partnerships"
// section - see app/[locale]/partners/page.tsx.
export default function PartnerCard({ entry }: { entry: PartnerEntry }) {
  return (
    <div className="rounded-xl2 border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-bold text-white">{entry.name}</h3>
        <VerificationBadge status={entry.status} />
      </div>
      <p className="text-sm text-gray-400 leading-relaxed mb-3">{entry.description}</p>
      <div className="flex flex-wrap items-center gap-3">
        <LastVerifiedDate date={entry.dateVerified} />
        <EvidenceLink url={entry.verificationUrl} label="Verification source" />
        <EvidenceLink url={entry.evidenceUrl} label="Evidence" />
      </div>
    </div>
  )
}
