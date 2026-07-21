import { MapPin, Building2, Cpu, MessageCircle, LifeBuoy } from 'lucide-react'
import AbstractBrandIllustration from './AbstractBrandIllustration'

// Original abstract composition for the Contact page - distinct icon set
// and layout from the About page illustration.
export default function ContactAbstractIllustration() {
  return (
    <AbstractBrandIllustration
      ariaLabel="Abstract illustration representing Thailand, business, technology, communication, and support"
      concepts={[
        { icon: MapPin, label: 'Thailand', topPct: 24, leftPct: 26, size: 68, accent: 'primary' },
        { icon: Building2, label: 'Business', topPct: 70, leftPct: 20, accent: 'secondary' },
        { icon: Cpu, label: 'Technology', topPct: 20, leftPct: 68, accent: 'secondary' },
        { icon: MessageCircle, label: 'Communication', topPct: 55, leftPct: 78, accent: 'primary' },
        { icon: LifeBuoy, label: 'Support', topPct: 84, leftPct: 62, accent: 'secondary' },
      ]}
    />
  )
}
