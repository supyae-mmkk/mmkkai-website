import { Cloud, Server, Database, ShieldCheck, Network, AppWindow } from 'lucide-react'
import HubSpokeIllustration from './HubSpokeIllustration'

// Original illustration - not a copy of Google's cloud console or brand
// artwork. Shows the infrastructure layers a typical engagement touches.
export default function GoogleCloudInfraIllustration() {
  return (
    <HubSpokeIllustration
      hub={{ icon: Cloud, label: 'Cloud Infrastructure' }}
      spokes={[
        { icon: Server, label: 'Servers' },
        { icon: Database, label: 'Storage' },
        { icon: ShieldCheck, label: 'Security' },
        { icon: Database, label: 'Database' },
        { icon: Network, label: 'Networking' },
        { icon: AppWindow, label: 'Business Applications' },
      ]}
    />
  )
}
