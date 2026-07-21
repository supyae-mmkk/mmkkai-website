import { Hexagon, Cloud, Layers, Bot, Zap, Gauge, ShieldCheck } from 'lucide-react'
import HubSpokeIllustration from './HubSpokeIllustration'

// Original illustration showing the categories of technology MMKK AI works
// across, arranged around the company. Purely a category map - does not
// imply an official partnership with any vendor (see /partners for the
// evidence-based partner/platform distinction).
export default function PartnersEcosystemIllustration() {
  return (
    <HubSpokeIllustration
      hub={{ icon: Hexagon, label: 'MMKK AI' }}
      spokes={[
        { icon: Cloud, label: 'Cloud' },
        { icon: Layers, label: 'CRM' },
        { icon: Bot, label: 'AI' },
        { icon: Zap, label: 'Automation' },
        { icon: Gauge, label: 'Productivity' },
        { icon: ShieldCheck, label: 'Cybersecurity' },
      ]}
    />
  )
}
