import { Globe, Users, Filter, FileText, Layers, Trophy } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: Traffic -> Prospects -> Qualification -> Proposal -> CRM -> Deal Won.
export default function SalesWorkflowPipelineIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        { nodes: [{ icon: Globe, label: 'Traffic' }] },
        { nodes: [{ icon: Users, label: 'Prospects', accent: 'secondary' }] },
        { nodes: [{ icon: Filter, label: 'Qualification' }] },
        { nodes: [{ icon: FileText, label: 'Proposal', accent: 'secondary' }] },
        { nodes: [{ icon: Layers, label: 'CRM' }] },
        { nodes: [{ icon: Trophy, label: 'Deal Won', accent: 'secondary' }] },
      ]}
    />
  )
}
