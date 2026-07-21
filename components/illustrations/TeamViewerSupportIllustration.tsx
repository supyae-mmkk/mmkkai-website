import { Monitor, UserCog, Activity, AlertTriangle, LifeBuoy } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: Computer -> Remote Engineer -> Monitoring -> Alerts -> Support.
export default function TeamViewerSupportIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        { nodes: [{ icon: Monitor, label: 'Computer' }] },
        { nodes: [{ icon: UserCog, label: 'Remote Engineer', accent: 'secondary' }] },
        { nodes: [{ icon: Activity, label: 'Monitoring' }] },
        { nodes: [{ icon: AlertTriangle, label: 'Alerts', accent: 'secondary' }] },
        { nodes: [{ icon: LifeBuoy, label: 'Support' }] },
      ]}
    />
  )
}
