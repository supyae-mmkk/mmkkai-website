import { FileText, FileJson2, ShieldCheck, Tag, Link2, Bot, ThumbsUp } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: Content/Schema/Authority/Entities/Citations
// converge into AI Engines, then flow to Recommendations.
export default function AISEOVisualization() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        {
          nodes: [
            { icon: FileText, label: 'Content' },
            { icon: FileJson2, label: 'Schema' },
            { icon: ShieldCheck, label: 'Authority' },
            { icon: Tag, label: 'Entities' },
            { icon: Link2, label: 'Citations' },
          ],
        },
        { nodes: [{ icon: Bot, label: 'AI Engines', accent: 'secondary' }] },
        { nodes: [{ icon: ThumbsUp, label: 'Recommendations' }] },
      ]}
    />
  )
}
