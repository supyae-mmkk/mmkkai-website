import BrowserMockup from '@/components/visuals/BrowserMockup'
import { Palette, FileText, Users } from 'lucide-react'

export default function AdobeDemo() {
  return (
    <BrowserMockup title="Creative Cloud admin console">
      <div className="p-3 grid grid-cols-2 gap-2 text-[10px]">
        <div className="bg-surface-2 rounded-lg border border-border p-2.5 flex items-center gap-2">
          <Palette size={14} className="text-primary" />
          <span className="text-gray-400">Creative Cloud - 12 seats</span>
        </div>
        <div className="bg-surface-2 rounded-lg border border-border p-2.5 flex items-center gap-2">
          <FileText size={14} className="text-secondary" />
          <span className="text-gray-400">Acrobat - 8 seats</span>
        </div>
        <div className="col-span-2 bg-surface-2 rounded-lg border border-border p-2.5">
          <div className="flex items-center gap-1.5 text-gray-500 mb-2">
            <Users size={12} /> Seat assignment
          </div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <span className="w-4 h-4 rounded-full bg-primary/20 flex-shrink-0" />
              <span className="h-1 rounded-full bg-white/10 flex-1" style={{ maxWidth: `${70 - i * 10}%` }} />
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  )
}
