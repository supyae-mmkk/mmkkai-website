import { ExternalLink } from 'lucide-react'

// Renders a link to the public evidence for a claim (vendor directory
// listing, certificate reference). Renders nothing if no URL is set - never
// a fake or placeholder link.
export default function EvidenceLink({ url, label }: { url: string | null; label: string }) {
  if (!url) return null
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
    >
      {label} <ExternalLink size={11} />
    </a>
  )
}
