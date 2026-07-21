import type { LucideIcon } from 'lucide-react'
import { IsoNodeCube, FlowConnector, type Accent } from './shared'

export interface FlowStage {
  nodes: { icon: LucideIcon; label: string; accent?: Accent }[]
}

// Original vertical stage-flow illustration - the shared engine behind most
// of the "A leads to B leads to C" diagrams requested across the site
// (homepage hero, Apollo, HubSpot, TeamViewer, Adobe, Remote Monitoring,
// Sales Workflow, AI Visibility, AI SEO). A stage can hold more than one
// node so the same component naturally handles converging inputs (several
// nodes feeding into the next stage) as well as a simple single-file chain.
// Pure SVG/CSS isometric nodes - no photographs, no vendor artwork.
export default function StageFlowIllustration({
  stages,
  compact = false,
}: {
  stages: FlowStage[]
  compact?: boolean
}) {
  const summary = stages.map((s) => s.nodes.map((n) => n.label).join(' + ')).join(' -> ')

  return (
    <div
      className={`flex flex-col items-center ${compact ? 'gap-1' : 'gap-2'}`}
      role="img"
      aria-label={`Process flow: ${summary}`}
    >
      {stages.map((stage, i) => (
        <div key={i} className="flex flex-col items-center w-full">
          <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6">
            {stage.nodes.map((node) => (
              <IsoNodeCube
                key={node.label}
                icon={node.icon}
                label={node.label}
                accent={node.accent}
                size={compact ? 64 : stage.nodes.length > 1 ? 64 : 84}
              />
            ))}
          </div>
          {i < stages.length - 1 && <FlowConnector vertical />}
        </div>
      ))}
    </div>
  )
}
