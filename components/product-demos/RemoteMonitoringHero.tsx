import BrowserMockup from '@/components/visuals/BrowserMockup'
import { Monitor, AlertTriangle } from 'lucide-react'

// Original conceptual device-monitoring dashboard mockup - status tiles
// plus a small alert list. Not a screenshot of any real RMM product.
const DEVICES: { name: string; status: 'ok' | 'warning' | 'offline' }[] = [
  { name: 'Branch 1 - PC01', status: 'ok' },
  { name: 'Branch 1 - PC02', status: 'ok' },
  { name: 'Branch 2 - PC01', status: 'warning' },
  { name: 'Branch 2 - PC02', status: 'ok' },
  { name: 'Branch 3 - PC01', status: 'offline' },
  { name: 'Branch 3 - PC02', status: 'ok' },
]

const STATUS_COLOR: Record<string, string> = {
  ok: 'bg-primary',
  warning: 'bg-yellow-400',
  offline: 'bg-red-400',
}

export default function RemoteMonitoringHero() {
  return (
    <BrowserMockup title="Device status overview">
      <div className="p-3 grid grid-cols-3 gap-1.5 text-[9px]">
        {DEVICES.map((d) => (
          <div key={d.name} className="flex flex-col items-center gap-1 bg-surface-2 rounded-lg border border-border py-2.5">
            <div className="relative">
              <Monitor size={16} className="text-gray-400" />
              <span className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${STATUS_COLOR[d.status]}`} aria-hidden="true" />
            </div>
            <span className="text-gray-500 truncate w-full text-center">{d.name}</span>
            <span className="sr-only">{d.status === 'ok' ? 'Status: normal' : d.status === 'warning' ? 'Status: warning' : 'Status: offline'}</span>
          </div>
        ))}
        <div className="col-span-3 mt-1 bg-surface-2 rounded-lg border border-border p-2 flex items-center gap-2">
          <AlertTriangle size={12} className="text-yellow-400 flex-shrink-0" />
          <span className="text-gray-400">Branch 2 - PC01: pending security update</span>
        </div>
      </div>
    </BrowserMockup>
  )
}
