import { Building2, Eye, Search, Layers, Zap, Cloud, TrendingUp } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: Business -> AI Visibility -> Lead Generation ->
// CRM -> Automation -> Cloud -> Business Growth.
export default function HomepageHeroIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        { nodes: [{ icon: Building2, label: 'Business' }] },
        { nodes: [{ icon: Eye, label: 'AI Visibility', accent: 'secondary' }] },
        { nodes: [{ icon: Search, label: 'Lead Generation' }] },
        { nodes: [{ icon: Layers, label: 'CRM', accent: 'secondary' }] },
        { nodes: [{ icon: Zap, label: 'Automation' }] },
        { nodes: [{ icon: Cloud, label: 'Cloud', accent: 'secondary' }] },
        { nodes: [{ icon: TrendingUp, label: 'Business Growth' }] },
      ]}
    />
  )
}
