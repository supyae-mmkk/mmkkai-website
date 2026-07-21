import { Mail, FolderOpen, Video, CalendarDays } from 'lucide-react'
import SystemFlowDiagram from './SystemFlowDiagram'

// Original diagram illustrating how Workspace apps connect a team, used on
// the Google Workspace solution page as a supporting visual alongside the
// admin-console mockup.
export default function GoogleWorkspaceFlowDiagram() {
  return (
    <SystemFlowDiagram
      nodes={[
        { icon: Mail, label: 'Company mail' },
        { icon: FolderOpen, label: 'Shared drive' },
        { icon: Video, label: 'Meet' },
        { icon: CalendarDays, label: 'Shared calendar' },
      ]}
    />
  )
}
