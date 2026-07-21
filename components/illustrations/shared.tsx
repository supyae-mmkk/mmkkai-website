import { useId } from 'react'
import type { LucideIcon } from 'lucide-react'

// ---------------------------------------------------------------------------
// Shared visual primitives for MMKK AI's original illustration system.
// Everything here is pure SVG/CSS - no photographs, no downloaded assets, no
// vendor artwork. Colors are drawn directly from the site's design tokens
// (primary #00C896 green, secondary #3B9DFF blue) so every illustration
// reads as part of the same brand, regardless of which page it's on.
// ---------------------------------------------------------------------------

export type Accent = 'primary' | 'secondary' | 'neutral'

const ACCENT_SHADES: Record<Accent, [string, string, string]> = {
  // [top face, left face, right face] - light to dark for a simple
  // pseudo-3D isometric lighting effect.
  primary: ['#22E6AD', '#00A67D', '#00614A'],
  secondary: ['#6BB8FF', '#2C7ED1', '#153E70'],
  neutral: ['#3A4149', '#242931', '#15181D'],
}

// An isometric-style "cube" node: a top rhombus + two side parallelograms,
// each a different shade of the same accent color, with a lucide icon
// centered on top and an optional label underneath. Pure SVG shape (scales
// with viewBox) plus a normal HTML icon/label overlay - avoids relying on
// <foreignObject> for the icon.
export function IsoNodeCube({
  icon: Icon,
  label,
  size = 88,
  accent = 'primary',
}: {
  icon: LucideIcon
  label?: string
  size?: number
  accent?: Accent
}) {
  const uid = useId().replace(/:/g, '')
  const [top, left, right] = ACCENT_SHADES[accent]
  const r = 40

  return (
    <div className="flex flex-col items-center gap-2 shrink-0" style={{ width: size }}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="-44 -44 88 88" width={size} height={size} aria-hidden="true">
          <defs>
            <linearGradient id={`t-${uid}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={top} stopOpacity={0.95} />
              <stop offset="100%" stopColor={top} stopOpacity={0.75} />
            </linearGradient>
          </defs>
          <polygon points={`0,-40 ${r},-20 0,0 ${-r},-20`} fill={`url(#t-${uid})`} />
          <polygon points={`${-r},-20 0,0 0,40 ${-r},20`} fill={left} />
          <polygon points={`${r},-20 0,0 0,40 ${r},20`} fill={right} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pb-3">
          <Icon size={Math.round(size * 0.26)} className="text-white" strokeWidth={1.6} />
        </div>
      </div>
      {label && <span className="text-[11px] sm:text-xs font-medium text-gray-300 text-center leading-tight max-w-[6.5rem]">{label}</span>}
    </div>
  )
}

// Soft, large blurred gradient circle used as an abstract background element
// (About/Contact illustrations). Purely decorative - aria-hidden.
export function GradientBlob({
  cx,
  cy,
  r,
  accent = 'primary',
  opacity = 0.35,
}: {
  cx: number
  cy: number
  r: number
  accent?: Accent
  opacity?: number
}) {
  const uid = useId().replace(/:/g, '')
  const color = accent === 'primary' ? '#00C896' : accent === 'secondary' ? '#3B9DFF' : '#8892A0'
  return (
    <>
      <defs>
        <radialGradient id={`blob-${uid}`}>
          <stop offset="0%" stopColor={color} stopOpacity={opacity} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill={`url(#blob-${uid})`} />
    </>
  )
}

// Animated gradient connector line between two stages of a flow diagram.
// Respects prefers-reduced-motion via the motion-safe: variant, same
// approach already used by SystemFlowDiagram elsewhere in this codebase.
export function FlowConnector({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${vertical ? 'w-px h-8 mx-auto' : 'h-px w-8 my-auto'}`}
      aria-hidden="true"
    >
      <div className={`absolute bg-border ${vertical ? 'w-px h-full' : 'h-px w-full'}`} />
      <span
        className={
          vertical
            ? 'absolute w-1.5 h-1.5 left-1/2 -translate-x-1/2 rounded-full bg-primary shadow-glowsm motion-safe:animate-[flowmovevertical_2.4s_linear_infinite]'
            : 'absolute w-1.5 h-1.5 top-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glowsm motion-safe:animate-[flowmove_2.4s_linear_infinite]'
        }
      />
    </div>
  )
}
