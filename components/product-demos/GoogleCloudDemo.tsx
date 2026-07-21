import BrowserMockup from '@/components/visuals/BrowserMockup'
import { AppWindow, Cpu, Database, Activity, Lock } from 'lucide-react'

export default function GoogleCloudDemo() {
  return (
    <BrowserMockup title="Cloud console overview">
      <div className="p-3 grid grid-cols-5 gap-1.5 text-[9px]">
        {[
          { icon: AppWindow, label: 'Apps' },
          { icon: Cpu, label: 'Compute' },
          { icon: Database, label: 'Database' },
          { icon: Activity, label: 'Monitoring' },
          { icon: Lock, label: 'Security' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1 bg-surface-2 rounded-lg border border-border py-2.5">
            <item.icon size={14} className="text-secondary" />
            <span className="text-gray-500">{item.label}</span>
          </div>
        ))}
        <div className="col-span-5 mt-1 bg-surface-2 rounded-lg border border-border p-2 flex items-end gap-1 h-10">
          {[40, 65, 50, 80, 60, 90, 55].map((h, i) => (
            <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary/20" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </BrowserMockup>
  )
}
