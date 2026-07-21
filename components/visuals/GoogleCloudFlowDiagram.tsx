import { Cpu, Database, Network, ShieldCheck } from 'lucide-react'
import SystemFlowDiagram from './SystemFlowDiagram'

// Original diagram illustrating the core infrastructure layers covered by a
// typical Google Cloud engagement, used as a supporting visual on the
// Google Cloud solution page.
export default function GoogleCloudFlowDiagram() {
  return (
    <SystemFlowDiagram
      nodes={[
        { icon: Cpu, label: 'Compute' },
        { icon: Database, label: 'Storage' },
        { icon: Network, label: 'Networking' },
        { icon: ShieldCheck, label: 'Security & monitoring' },
      ]}
    />
  )
}
