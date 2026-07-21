import { UserPlus, Layers, TrendingUp, Trophy } from 'lucide-react'
import SystemFlowDiagram from './SystemFlowDiagram'

// Original diagram illustrating deal progression through a CRM pipeline,
// used as a supporting visual on the HubSpot CRM solution page.
export default function HubSpotFlowDiagram() {
  return (
    <SystemFlowDiagram
      nodes={[
        { icon: UserPlus, label: 'New contact' },
        { icon: Layers, label: 'Deal created' },
        { icon: TrendingUp, label: 'Pipeline stage' },
        { icon: Trophy, label: 'Won' },
      ]}
    />
  )
}
