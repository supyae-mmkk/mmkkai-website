import { ShieldCheck, ShieldAlert, ShieldQuestion } from 'lucide-react'
import type { CredentialStatus } from '@/lib/companyConfig'

// Small, honest status indicator. Deliberately never renders a green
// "verified" checkmark unless status is actually 'verified' - see
// lib/companyConfig.ts for how that flag gets set.
export default function VerificationBadge({ status }: { status: CredentialStatus }) {
  if (status === 'verified') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full px-2.5 py-1">
        <ShieldCheck size={12} /> Verified
      </span>
    )
  }
  if (status === 'in-progress') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/30 rounded-full px-2.5 py-1">
        <ShieldQuestion size={12} /> Verification in progress
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-surface-2 border border-border rounded-full px-2.5 py-1">
      <ShieldAlert size={12} /> Not yet verified
    </span>
  )
}
