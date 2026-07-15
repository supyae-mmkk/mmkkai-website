import BrowserMockup from '@/components/visuals/BrowserMockup'
import { Monitor, Smartphone, Laptop, ShieldCheck } from 'lucide-react'

export default function TeamViewerDemo() {
  return (
    <BrowserMockup title="Device management console">
      <div className="p-3 grid grid-cols-3 gap-2 text-[10px]">
        {[
          { icon: Monitor, label: 'Branch A - Desktop', status: true },
          { icon: Laptop, label: 'Branch B - Laptop', status: true },
          { icon: Smartphone, label: 'Branch C - Mobile', status: false },
        ].map((d) => (
          <div key={d.label} className="bg-surface-2 rounded-lg border border-border p-2.5 flex flex-col items-center gap-1.5">
            <d.icon size={16} className={d.status ? 'text-primary' : 'text-gray-600'} />
            <span className="text-gray-500 text-center leading-tight">{d.label}</span>
            <span className={`w-1.5 h-1.5 rounded-full ${d.status ? 'bg-primary' : 'bg-gray-600'}`} />
          </div>
        ))}
        <div className="col-span-3 flex items-center gap-1.5 text-primary pt-1">
          <ShieldCheck size={12} /> Session logging active
        </div>
      </div>
    </BrowserMockup>
  )
}
