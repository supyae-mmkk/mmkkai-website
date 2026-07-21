import { Lightbulb, Cpu, MapPin, Building2, Sparkles, Cloud, Briefcase } from 'lucide-react'
import AbstractBrandIllustration from './AbstractBrandIllustration'

// Original abstract composition for the About page - represents the
// company's themes without a photograph or fabricated staff/office imagery.
export default function AboutAbstractIllustration() {
  return (
    <AbstractBrandIllustration
      ariaLabel="Abstract illustration representing innovation, technology, Thailand, business, AI, cloud, and enterprise"
      concepts={[
        { icon: Lightbulb, label: 'Innovation', topPct: 18, leftPct: 22, accent: 'primary' },
        { icon: Cpu, label: 'Technology', topPct: 62, leftPct: 16, accent: 'secondary' },
        { icon: MapPin, label: 'Thailand', topPct: 30, leftPct: 50, size: 68, accent: 'primary' },
        { icon: Building2, label: 'Business', topPct: 78, leftPct: 46, accent: 'secondary' },
        { icon: Sparkles, label: 'AI', topPct: 20, leftPct: 78, accent: 'primary' },
        { icon: Cloud, label: 'Cloud', topPct: 60, leftPct: 82, accent: 'secondary' },
        { icon: Briefcase, label: 'Enterprise', topPct: 88, leftPct: 74, accent: 'primary' },
      ]}
    />
  )
}
