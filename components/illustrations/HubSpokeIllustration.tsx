import type { LucideIcon } from 'lucide-react'
import { useId } from 'react'
import { IsoNodeCube, type Accent } from './shared'

export interface SpokeNode {
  icon: LucideIcon
  label: string
  accent?: Accent
}

// Original "ecosystem" illustration - a central hub node with smaller nodes
// arranged radially around it, connected by gradient spokes. Used wherever
// the brief describes a set of related items without a strict sequence
// (Google Cloud's infrastructure layers, Google Workspace's collaboration
// surfaces, and the Partners page's ecosystem view around "MMKK AI").
// Positions are computed with simple trigonometry - pure SVG, fully
// responsive via viewBox scaling.
export default function HubSpokeIllustration({
  hub,
  spokes,
  size = 320,
}: {
  hub: { icon: LucideIcon; label: string }
  spokes: SpokeNode[]
  size?: number
}) {
  const uid = useId().replace(/:/g, '')
  const radius = 120
  const cx = 160
  const cy = 160
  const positions = spokes.map((_, i) => {
    const angle = (i / spokes.length) * Math.PI * 2 - Math.PI / 2
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) }
  })

  const summary = `${hub.label} connected to ${spokes.map((s) => s.label).join(', ')}`

  return (
    <div className="relative mx-auto" style={{ width: size, height: size, maxWidth: '100%' }} role="img" aria-label={summary}>
      <svg viewBox="0 0 320 320" width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id={`spoke-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C896" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#00C896" stopOpacity={0.08} />
          </linearGradient>
        </defs>
        {positions.map((p, i) => (
          <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={`url(#spoke-${uid})`} strokeWidth={2} />
        ))}
      </svg>

      {/* Hub node, centered */}
      <div className="absolute" style={{ left: `${(cx / 320) * 100}%`, top: `${(cy / 320) * 100}%`, transform: 'translate(-50%, -50%)' }}>
        <IsoNodeCube icon={hub.icon} label={hub.label} accent="primary" size={96} />
      </div>

      {/* Spoke nodes, positioned radially */}
      {positions.map((p, i) => (
        <div
          key={spokes[i].label}
          className="absolute"
          style={{ left: `${(p.x / 320) * 100}%`, top: `${(p.y / 320) * 100}%`, transform: 'translate(-50%, -50%)' }}
        >
          <IsoNodeCube icon={spokes[i].icon} label={spokes[i].label} accent={spokes[i].accent || 'secondary'} size={60} />
        </div>
      ))}
    </div>
  )
}
