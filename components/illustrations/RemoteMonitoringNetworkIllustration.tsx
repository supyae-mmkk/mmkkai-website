import { Monitor, Activity, AlertTriangle, Wrench, ShieldCheck } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: multiple devices converge into monitoring, then
// alerts, maintenance, and security.
export default function RemoteMonitoringNetworkIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        {
          nodes: [
            { icon: Monitor, label: 'Device 1' },
            { icon: Monitor, label: 'Device 2' },
            { icon: Monitor, label: 'Device 3' },
          ],
        },
        { nodes: [{ icon: Activity, label: 'Monitoring', accent: 'secondary' }] },
        { nodes: [{ icon: AlertTriangle, label: 'Alerts' }] },
        { nodes: [{ icon: Wrench, label: 'Maintenance', accent: 'secondary' }] },
        { nodes: [{ icon: ShieldCheck, label: 'Security' }] },
      ]}
    />
  )
}
