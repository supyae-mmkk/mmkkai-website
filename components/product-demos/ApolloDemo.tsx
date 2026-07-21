import BrowserMockup from '@/components/visuals/BrowserMockup'
import { Search, Filter, Mail, Sparkles } from 'lucide-react'

export default function ApolloDemo() {
  return (
    <BrowserMockup title="Prospect list overview">
      <div className="p-3 text-xs space-y-2.5">
        <div className="flex items-center gap-2 bg-surface-2 border border-border rounded-md px-2.5 py-1.5">
          <Search size={12} className="text-gray-500" />
          <span className="text-gray-500 text-[11px]">Operations Manager, 50-200 employees</span>
        </div>
        <div className="flex gap-1.5">
          {['Industry', 'Location', 'Seniority'].map((f) => (
            <span key={f} className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-surface border border-border text-gray-500">
              <Filter size={9} /> {f}
            </span>
          ))}
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between bg-surface-2 rounded-md px-2.5 py-1.5 border border-border">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-secondary/20 flex-shrink-0" />
              <span className="h-1.5 rounded-full bg-white/10" style={{ width: `${60 - i * 8}px` }} />
            </div>
            <Mail size={11} className="text-primary" />
          </div>
        ))}
        <div className="flex items-center gap-1.5 text-[10px] text-primary pt-1">
          <Sparkles size={11} /> Sequence: 3-step outreach active
        </div>
      </div>
    </BrowserMockup>
  )
}
