import { PenTool, FileText, CheckCircle2, Edit3, Archive } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: Design -> PDF -> Approval -> Signature -> Archive.
export default function AdobeDocWorkflowIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        { nodes: [{ icon: PenTool, label: 'Design' }] },
        { nodes: [{ icon: FileText, label: 'PDF', accent: 'secondary' }] },
        { nodes: [{ icon: CheckCircle2, label: 'Approval' }] },
        { nodes: [{ icon: Edit3, label: 'Signature', accent: 'secondary' }] },
        { nodes: [{ icon: Archive, label: 'Archive' }] },
      ]}
    />
  )
}
