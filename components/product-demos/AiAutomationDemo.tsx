import BrowserMockup from '@/components/visuals/BrowserMockup'
import { Zap, Bot, CheckCircle2, PlayCircle, FileBarChart } from 'lucide-react'

const STEPS = [
  { icon: PlayCircle, label: 'Trigger' },
  { icon: Bot, label: 'AI processing' },
  { icon: CheckCircle2, label: 'Approval' },
  { icon: Zap, label: 'Action' },
  { icon: FileBarChart, label: 'Report' },
]

export default function AiAutomationDemo() {
  return (
    <BrowserMockup title="Automation workflow">
      <div className="p-4">
        <div className="flex items-center justify-between">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <div className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center">
                  <step.icon size={15} className="text-primary" />
                </div>
                <span className="text-[9px] text-gray-500 whitespace-nowrap">{step.label}</span>
              </div>
              {i < STEPS.length - 1 && <span className="flex-1 h-px bg-border mx-1" />}
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  )
}
