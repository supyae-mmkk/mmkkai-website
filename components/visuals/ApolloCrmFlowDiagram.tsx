import { Search, Mail, Layers, CheckCircle2 } from 'lucide-react'
import SystemFlowDiagram from './SystemFlowDiagram'

// Original diagram illustrating the Apollo-to-CRM handoff, used on the
// Apollo Lead Generation and Sales Workflow Design solution pages.
export default function ApolloCrmFlowDiagram() {
  return (
    <SystemFlowDiagram
      nodes={[
        { icon: Search, label: 'Apollo prospecting' },
        { icon: Mail, label: 'Outbound sequence' },
        { icon: Layers, label: 'CRM deal created' },
        { icon: CheckCircle2, label: 'Tracked to close' },
      ]}
    />
  )
}
