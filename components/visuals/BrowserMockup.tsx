// Lightweight, dependency-free "browser/dashboard window" chrome used to
// frame original product-interface mockups (components/product-demos/*).
// Pure HTML/CSS - no screenshots, no vendor assets, no external images.
export default function BrowserMockup({
  title,
  tone = 'dark',
  children,
}: {
  title?: string
  tone?: 'dark' | 'light'
  children: React.ReactNode
}) {
  const isDark = tone === 'dark'
  return (
    <div
      className={`rounded-xl2 border overflow-hidden shadow-card ${
        isDark ? 'bg-surface border-border' : 'bg-white border-black/10'
      }`}
    >
      <div
        className={`flex items-center gap-2 px-4 py-2.5 border-b ${
          isDark ? 'border-border bg-surface-2' : 'border-black/10 bg-black/[0.02]'
        }`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
        {title && (
          <span className={`ml-3 text-xs font-medium truncate ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {title}
          </span>
        )}
      </div>
      <div className={isDark ? 'text-gray-200' : 'text-ink'}>{children}</div>
      <div
        className={`px-3 py-1.5 text-[10px] border-t ${
          isDark ? 'border-border bg-surface-2 text-gray-500' : 'border-black/10 bg-black/[0.02] text-gray-500'
        }`}
      >
        Conceptual illustration - not an actual product screenshot
      </div>
    </div>
  )
}
