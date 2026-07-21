import { MapPin, ArrowLeftRight } from 'lucide-react'

export interface RegionColumn {
  title: string
  cities: string[]
}

// Original "coverage" diagram - two labelled region nodes connected by a
// cross-border support indicator. Deliberately NOT a literal geographic map
// (avoids inaccurate cartography) and NOT flag imagery - just a clean,
// accessible representation of where MMKK AI operates, matching the
// existing design system (surface cards, primary accent, motion-safe
// connector consistent with SystemFlowDiagram).
export default function RegionalCoverageMap({ regions }: { regions: [RegionColumn, RegionColumn] }) {
  return (
    <div
      className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0"
      role="img"
      aria-label={`Regional service coverage: ${regions[0].title} and ${regions[1].title}, connected by cross-border support`}
    >
      {regions.map((region, i) => (
        <div key={region.title} className="flex flex-1 items-stretch">
          <div className="flex-1 rounded-xl2 border border-border bg-surface p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-primary flex-shrink-0" />
              <p className="font-semibold text-white text-sm">{region.title}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {region.cities.map((city) => (
                <span key={city} className="text-[11px] text-gray-400 bg-surface-2 border border-border rounded-full px-2.5 py-1">
                  {city}
                </span>
              ))}
            </div>
          </div>
          {i === 0 && (
            <div className="hidden sm:flex flex-col items-center justify-center w-12 flex-shrink-0 relative">
              <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-border" />
              <div className="relative z-10 w-7 h-7 rounded-full bg-background border border-primary/40 flex items-center justify-center motion-safe:animate-pulse">
                <ArrowLeftRight size={12} className="text-primary" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
