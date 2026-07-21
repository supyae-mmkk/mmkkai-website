import { LayoutGrid, Mail, Video, FileText, FolderOpen, CalendarDays, Users2 } from 'lucide-react'
import HubSpokeIllustration from './HubSpokeIllustration'

// Original illustration - not a copy of Google's official product design.
export default function GoogleWorkspaceCollabIllustration() {
  return (
    <HubSpokeIllustration
      hub={{ icon: LayoutGrid, label: 'Workspace' }}
      spokes={[
        { icon: Mail, label: 'Email' },
        { icon: Video, label: 'Meetings' },
        { icon: FileText, label: 'Documents' },
        { icon: FolderOpen, label: 'Drive' },
        { icon: CalendarDays, label: 'Calendar' },
        { icon: Users2, label: 'Team collaboration' },
      ]}
    />
  )
}
