import BrowserMockup from '@/components/visuals/BrowserMockup'

const STAGES = [
  { name: 'New Lead', count: 12 },
  { name: 'Qualified', count: 8 },
  { name: 'Proposal', count: 5 },
  { name: 'Closed Won', count: 3 },
]

export default function HubSpotDemo() {
  return (
    <BrowserMockup title="app.hubspot.com/contacts">
      <div className="p-3 grid grid-cols-4 gap-2 text-xs">
        {STAGES.map((stage, i) => (
          <div key={stage.name} className="bg-surface-2 rounded-lg border border-border p-2 space-y-2">
            <p className="text-[10px] font-semibold text-gray-400 truncate">{stage.name}</p>
            <p className="text-[10px] text-gray-600">{stage.count} deals</p>
            {[...Array(Math.min(2, i + 1))].map((_, j) => (
              <div key={j} className="h-6 rounded bg-surface border border-border flex items-center px-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-primary/25 flex-shrink-0 mr-1.5" />
                <span className="h-1 rounded-full bg-white/10 flex-1" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </BrowserMockup>
  )
}
