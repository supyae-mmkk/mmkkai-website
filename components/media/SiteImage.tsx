import Image from 'next/image'
import type { ReactNode } from 'react'
import { getImage, isRenderable } from '@/lib/imageConfig'

// The only place a real photograph is ever rendered on this site. Reads a
// single slot from lib/imageConfig.ts and only renders an <Image> when that
// slot is fully approved, public, and has a real file path - otherwise it
// renders `fallback` (the current designed original-SVG/typography state)
// or nothing at all, never a broken image or a placeholder-service URL.
export default function SiteImage({
  id,
  className,
  sizes,
  fallback,
}: {
  id: string
  className?: string
  sizes?: string
  fallback?: ReactNode
}) {
  const img = getImage(id)
  if (!isRenderable(img)) {
    return fallback ? <>{fallback}</> : null
  }
  return (
    <Image
      src={img.srcPath}
      alt={img.alt}
      width={img.width}
      height={img.height}
      priority={img.priority}
      sizes={sizes || '(max-width: 768px) 100vw, 50vw'}
      className={className}
    />
  )
}
