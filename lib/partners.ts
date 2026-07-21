// Groups lib/companyConfig.ts's partnerRegistry into the five categories the
// AI-visibility audit and Phase 5 spec require to be kept visually and
// structurally separate: verified partnerships, platforms implemented,
// products supplied, certifications, and memberships. Using a platform does
// not automatically mean MMKK AI is an official partner of it - see
// companyConfig.ts for the full rationale.
import { partnerRegistry, type PartnerEntry } from './companyConfig'

export function getVerifiedPartnerships(): PartnerEntry[] {
  return partnerRegistry.filter((e) => e.relationshipType === 'verified-partner' && e.publicVisibility)
}

export function getImplementedPlatforms(): PartnerEntry[] {
  return partnerRegistry.filter((e) => e.relationshipType === 'implementation-service' && e.publicVisibility)
}

export function getSuppliedProducts(): PartnerEntry[] {
  return partnerRegistry.filter((e) => e.relationshipType === 'product-supply' && e.publicVisibility)
}

export function getCertifications(): PartnerEntry[] {
  return partnerRegistry.filter((e) => e.relationshipType === 'certification' && e.publicVisibility)
}

export function getMemberships(): PartnerEntry[] {
  return partnerRegistry.filter((e) => e.relationshipType === 'membership' && e.publicVisibility)
}
