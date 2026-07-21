import { Globe, UserSearch, Target, Filter, Layers, Users2, Trophy } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: Website Visitors -> Prospects -> Apollo ->
// Qualified Leads -> CRM -> Sales Team -> Customers.
export default function ApolloFunnelIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        { nodes: [{ icon: Globe, label: 'Website Visitors' }] },
        { nodes: [{ icon: UserSearch, label: 'Prospects', accent: 'secondary' }] },
        { nodes: [{ icon: Target, label: 'Apollo' }] },
        { nodes: [{ icon: Filter, label: 'Qualified Leads', accent: 'secondary' }] },
        { nodes: [{ icon: Layers, label: 'CRM' }] },
        { nodes: [{ icon: Users2, label: 'Sales Team', accent: 'secondary' }] },
        { nodes: [{ icon: Trophy, label: 'Customers' }] },
      ]}
    />
  )
}
