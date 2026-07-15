// Distinct, original CSS/SVG "editorial artwork" per guide topic - no
// repeated gradient graphic, no stock imagery. Each variant uses a small,
// topic-specific icon composition rendered as inline SVG shapes.
const VARIANTS = {
  migration: { from: '#00C896', to: '#0B0D0F', accent: '#3B9DFF' },
  adoption: { from: '#3B9DFF', to: '#0B0D0F', accent: '#00C896' },
  crm: { from: '#00C896', to: '#12151A', accent: '#F7F8F7' },
  automation: { from: '#0B0D0F', to: '#181C22', accent: '#00C896' },
} as const

export type ThumbnailVariant = keyof typeof VARIANTS

export default function ResourceThumbnail({ variant }: { variant: ThumbnailVariant }) {
  const c = VARIANTS[variant]
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id={`grad-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c.from} stopOpacity="0.35" />
          <stop offset="100%" stopColor={c.to} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill={`url(#grad-${variant})`} />
      {variant === 'migration' && (
        <>
          <rect x="30" y="60" width="70" height="46" rx="8" fill="none" stroke={c.accent} strokeWidth="2" opacity="0.6" />
          <rect x="220" y="60" width="70" height="46" rx="8" fill="none" stroke={c.accent} strokeWidth="2" />
          <path d="M105 83 L215 83" stroke={c.accent} strokeWidth="2" strokeDasharray="6 5" />
          <path d="M205 76 L217 83 L205 90" fill="none" stroke={c.accent} strokeWidth="2" />
        </>
      )}
      {variant === 'adoption' && (
        <>
          <circle cx="110" cy="80" r="30" fill="none" stroke={c.accent} strokeWidth="2" opacity="0.5" />
          <circle cx="210" cy="80" r="30" fill="none" stroke={c.accent} strokeWidth="2" />
          <path d="M132 80 L188 80" stroke={c.accent} strokeWidth="2" />
        </>
      )}
      {variant === 'crm' && (
        <>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={40 + i * 65} y={50 + (i % 2) * 15} width="50" height="60" rx="6" fill="none" stroke={c.accent} strokeWidth="2" opacity={0.4 + i * 0.15} />
          ))}
        </>
      )}
      {variant === 'automation' && (
        <>
          <rect x="35" y="70" width="34" height="24" rx="5" fill="none" stroke={c.accent} strokeWidth="2" />
          <path d="M69 82 L130 82" stroke={c.accent} strokeWidth="2" strokeDasharray="5 4" />
          <circle cx="160" cy="82" r="22" fill="none" stroke={c.accent} strokeWidth="2" />
          <path d="M182 82 L245 82" stroke={c.accent} strokeWidth="2" strokeDasharray="5 4" />
          <rect x="245" y="70" width="34" height="24" rx="5" fill="none" stroke={c.accent} strokeWidth="2" />
        </>
      )}
    </svg>
  )
}
