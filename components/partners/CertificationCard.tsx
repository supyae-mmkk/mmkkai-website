import type { PartnerEntry } from '@/lib/companyConfig'
import VerificationBadge from './VerificationBadge'
import EvidenceLink from './EvidenceLink'
import LastVerifiedDate from './LastVerifiedDate'

export default function CertificationCard({ entry }: { entry: PartnerEntry }) {
  return (
    <div className="rounded-xl2 border border-border bg-surface p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-bold text-white">{entry.name}</h3>
        <VerificationBadge status={entry.status} />
      </div>
      <p className="text-sm text-gray-400 leading-relaxed mb-3">{entry.description}</p>
      <div className="flex flex-wrap items-center gap-3">
        {entry.certificateId && <span className="text-xs text-gray-500">Certificate: {entry.certificateId}</span>}
        <LastVerifiedDate date={entry.dateVerified} />
        <EvidenceLink url={entry.evidenceUrl} label="Certificate reference" />
      </div>
    </div>
  )
}
