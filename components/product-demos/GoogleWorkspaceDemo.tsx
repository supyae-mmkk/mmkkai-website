import BrowserMockup from '@/components/visuals/BrowserMockup'
import { Inbox, FolderOpen, Video, ShieldCheck, ArrowRightLeft } from 'lucide-react'

// Original illustrative mockup - not a screenshot of any vendor product.
export default function GoogleWorkspaceDemo() {
  return (
    <BrowserMockup title="mail.yourcompany.com">
      <div className="grid grid-cols-3 gap-px bg-border text-xs">
        <div className="col-span-1 bg-surface p-3 space-y-2">
          <div className="flex items-center gap-2 text-primary font-medium">
            <Inbox size={14} /> Inbox
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FolderOpen size={14} /> Shared Drive
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Video size={14} /> Meet
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <ShieldCheck size={14} /> Admin console
          </div>
        </div>
        <div className="col-span-2 bg-surface-2 p-3 space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 rounded-md bg-surface border border-border flex items-center px-2.5 gap-2">
              <span className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0" />
              <span className="h-1.5 rounded-full bg-white/10 flex-1" style={{ maxWidth: `${70 - i * 12}%` }} />
            </div>
          ))}
          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-primary">
            <ArrowRightLeft size={11} /> Migration in progress - 2 of 3 accounts moved
          </div>
        </div>
      </div>
    </BrowserMockup>
  )
}
