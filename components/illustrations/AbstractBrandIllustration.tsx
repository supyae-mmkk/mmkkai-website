import type { LucideIcon } from 'lucide-react'
import { GradientBlob, IsoNodeCube, type Accent } from './shared'

export interface FloatingConcept {
  icon: LucideIcon
  label: string
  accent?: Accent
  // Position as a percentage of the container, so the composition scales
  // responsively with the container rather than fixed pixels.
  topPct: number
  leftPct: number
  size?: number
}

// Original abstract brand illustration - soft layered gradient blobs behind
// a small constellation of floating isometric concept nodes, inside a
// glassmorphism frame. Used where the brief asks for a premium abstract
// representation instead of a photograph (About, Contact) - deliberately
// not a literal diagram, since these pages describe values/place rather
// than a process.
export default function AbstractBrandIllustration({
  concepts,
  ariaLabel,
}: {
  concepts: FloatingConcept[]
  ariaLabel: string
}) {
  return (
    <div
      className="relative w-full aspect-[16/10] rounded-xl2 border border-border overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #12151A 0%, #0B0D0F 100%)' }}
      role="img"
      aria-label={ariaLabel}
    >
      <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <GradientBlob cx={80} cy={60} r={110} accent="primary" opacity={0.28} />
        <GradientBlob cx={330} cy={190} r={130} accent="secondary" opacity={0.22} />
        <GradientBlob cx={230} cy={40} r={70} accent="neutral" opacity={0.18} />
      </svg>

      {/* Glassmorphism overlay frame */}
      <div className="absolute inset-4 rounded-xl border border-white/10" style={{ backdropFilter: 'blur(0.5px)' }} />

      {concepts.map((c, i) => (
        <div
          key={c.label}
          className="absolute motion-safe:animate-float"
          style={{ top: `${c.topPct}%`, left: `${c.leftPct}%`, transform: 'translate(-50%, -50%)', animationDelay: `${(i % 4) * 0.5}s` }}
        >
          <IsoNodeCube icon={c.icon} label={c.label} accent={c.accent} size={c.size || 56} />
        </div>
      ))}
    </div>
  )
}
