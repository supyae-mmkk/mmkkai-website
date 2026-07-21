import BrowserMockup from '@/components/visuals/BrowserMockup'
import { User } from 'lucide-react'

// Original conceptual pipeline mockup - a small kanban board illustrating
// staged deal movement. Not a screenshot of any real CRM interface.
const COLUMNS: { label: string; deals: string[] }[] = [
  { label: 'New Lead', deals: ['Acme Co.', 'Northwind'] },
  { label: 'Qualified', deals: ['Riverside Ltd.'] },
  { label: 'Proposal', deals: ['Delta Retail'] },
  { label: 'Closed', deals: ['Summit Group'] },
]

export default function SalesWorkflowHero() {
  return (
    <BrowserMockup title="Pipeline stage overview">
      <div className="p-3 grid grid-cols-4 gap-1.5 text-[9px]">
        {COLUMNS.map((col) => (
          <div key={col.label} className="flex flex-col gap-1.5">
            <p className="text-gray-500 font-semibold uppercase tracking-wide text-center truncate">{col.label}</p>
            {col.deals.map((deal) => (
              <div key={deal} className="bg-surface-2 rounded-lg border border-border px-1.5 py-2 flex items-center gap-1">
                <User size={10} className="text-primary flex-shrink-0" />
                <span className="text-gray-400 truncate">{deal}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </BrowserMockup>
  )
}
