import { UserPlus, Megaphone, TrendingUp, Users2, RefreshCw } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: Lead -> Marketing -> Sales -> Customer -> Retention.
export default function HubSpotPipelineIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        { nodes: [{ icon: UserPlus, label: 'Lead' }] },
        { nodes: [{ icon: Megaphone, label: 'Marketing', accent: 'secondary' }] },
        { nodes: [{ icon: TrendingUp, label: 'Sales' }] },
        { nodes: [{ icon: Users2, label: 'Customer', accent: 'secondary' }] },
        { nodes: [{ icon: RefreshCw, label: 'Retention' }] },
      ]}
    />
  )
}
