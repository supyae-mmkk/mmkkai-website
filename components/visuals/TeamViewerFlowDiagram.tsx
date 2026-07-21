import { Monitor, Wifi, Wrench, ClipboardCheck } from 'lucide-react'
import SystemFlowDiagram from './SystemFlowDiagram'

// Original diagram illustrating a typical remote-support session, used as a
// supporting visual on the TeamViewer solution page.
export default function TeamViewerFlowDiagram() {
  return (
    <SystemFlowDiagram
      nodes={[
        { icon: Monitor, label: 'Device flagged' },
        { icon: Wifi, label: 'Remote session' },
        { icon: Wrench, label: 'Issue resolved' },
        { icon: ClipboardCheck, label: 'Logged' },
      ]}
    />
  )
}
