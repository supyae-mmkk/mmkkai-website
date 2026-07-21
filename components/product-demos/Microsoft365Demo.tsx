import BrowserMockup from '@/components/visuals/BrowserMockup'
import { Mail, Users2, FileStack, UserCog } from 'lucide-react'

export default function Microsoft365Demo() {
  return (
    <BrowserMockup title="Admin console overview">
      <div className="grid grid-cols-4 gap-px bg-border text-xs">
        {[
          { icon: Mail, label: 'Outlook' },
          { icon: Users2, label: 'Teams' },
          { icon: FileStack, label: 'SharePoint' },
          { icon: UserCog, label: 'Admin' },
        ].map((app) => (
          <div key={app.label} className="bg-surface p-3 flex flex-col items-center gap-1.5 text-center">
            <app.icon size={16} className="text-secondary" />
            <span className="text-[10px] text-gray-400">{app.label}</span>
          </div>
        ))}
        <div className="col-span-4 bg-surface-2 p-3">
          <div className="flex items-center justify-between text-[10px] text-gray-500 mb-2">
            <span>Active users</span><span>128 / 150 licenses</span>
          </div>
          <div className="h-1.5 rounded-full bg-border overflow-hidden">
            <div className="h-full bg-secondary" style={{ width: '85%' }} />
          </div>
        </div>
      </div>
    </BrowserMockup>
  )
}
