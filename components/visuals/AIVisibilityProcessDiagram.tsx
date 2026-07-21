import { Globe, FileJson2, Bot, MessageSquareText } from 'lucide-react'
import SystemFlowDiagram from './SystemFlowDiagram'

// Original diagram illustrating how a business's own site content becomes
// something an AI system can find and cite - used on the AI Visibility
// resource guides. Reuses the existing SystemFlowDiagram primitive rather
// than introducing a new visual language.
export default function AIVisibilityProcessDiagram() {
  return (
    <SystemFlowDiagram
      nodes={[
        { icon: Globe, label: 'Website content' },
        { icon: FileJson2, label: 'Structured data' },
        { icon: Bot, label: 'AI system crawl' },
        { icon: MessageSquareText, label: 'Cited in answer' },
      ]}
    />
  )
}
