import { ClipboardList, PenTool, Code2, CheckSquare, Rocket, TrendingUp } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: Planning -> Design -> Development -> Testing ->
// Launch -> Optimization. Built per the visual-design brief; not currently
// wired to a page since MMKK AI does not have an evidenced, dedicated
// website-development service page in this codebase (see
// AI_VISIBILITY_REMEDIATION_REPORT.md §11) - available to use if/when one
// is added.
export default function WebsiteDevProcessIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        { nodes: [{ icon: ClipboardList, label: 'Planning' }] },
        { nodes: [{ icon: PenTool, label: 'Design', accent: 'secondary' }] },
        { nodes: [{ icon: Code2, label: 'Development' }] },
        { nodes: [{ icon: CheckSquare, label: 'Testing', accent: 'secondary' }] },
        { nodes: [{ icon: Rocket, label: 'Launch' }] },
        { nodes: [{ icon: TrendingUp, label: 'Optimization', accent: 'secondary' }] },
      ]}
    />
  )
}
