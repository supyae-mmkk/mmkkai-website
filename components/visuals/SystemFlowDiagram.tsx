import { Users, Layers, Zap, Cloud, BarChart3, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface FlowNode {
  icon: LucideIcon
  label: string
}

const DEFAULT_NODES: FlowNode[] = [
  { icon: Users, label: 'Leads' },
  { icon: Layers, label: 'CRM' },
  { icon: Zap, label: 'Automation' },
  { icon: Cloud, label: 'Cloud Workspace' },
  { icon: BarChart3, label: 'Reporting' },
  { icon: TrendingUp, label: 'Growth' },
]

// Original, lightweight "connected business system" diagram - pure HTML/CSS/
// SVG, no imagery, no heavy animation library needed beyond a CSS keyframe.
// Renders as a horizontal flow on wider screens and a vertical flow on
// mobile, with an animated dot signalling data movement between stages.
// Fully respects prefers-reduced-motion (the moving dot and connector
// shimmer are wrapped in motion-safe: so they simply don't render/animate
// for users who've asked for reduced motion).
export default function SystemFlowDiagram({ nodes = DEFAULT_NODES, compact = false }: { nodes?: FlowNode[]; compact?: boolean }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-stretch md:items-center gap-0 ${compact ? 'md:gap-0' : ''}`}
      role="img"
      aria-label={`Connected business system: ${nodes.map((n) => n.label).join(' leads to ')}`}
    >
      {nodes.map((node, i) => {
        const Icon = node.icon
        const isLast = i === nodes.length - 1
        return (
          <div key={node.label} className="flex flex-col md:flex-row items-center md:flex-1 min-w-0">
            <div className="flex flex-col items-center gap-2.5 shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface border border-border flex items-center justify-center shadow-card relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <Icon size={22} className="text-primary relative z-10" strokeWidth={1.75} />
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-gray-300 whitespace-nowrap">{node.label}</span>
            </div>

            {!isLast && (
              <div className="relative flex items-center justify-center w-px h-8 md:w-full md:h-px my-1 md:my-0 md:mx-2 shrink-0 md:flex-1">
                <div className="absolute inset-0 md:inset-y-auto md:top-1/2 bg-border md:h-px w-px md:w-auto" />
                <span
                  className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-glowsm motion-safe:animate-[flowmove_2.4s_linear_infinite]"
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
