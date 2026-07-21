import { PenTool, Eye, CheckCircle2, Send } from 'lucide-react'
import SystemFlowDiagram from './SystemFlowDiagram'

// Original diagram illustrating a typical creative-review workflow, used as
// a supporting visual on the Adobe Business solution page.
export default function AdobeFlowDiagram() {
  return (
    <SystemFlowDiagram
      nodes={[
        { icon: PenTool, label: 'Draft' },
        { icon: Eye, label: 'Review' },
        { icon: CheckCircle2, label: 'Approved' },
        { icon: Send, label: 'Published' },
      ]}
    />
  )
}
