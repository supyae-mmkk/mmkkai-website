import { MessageSquare, Sparkles, Bot, Zap as ZapIcon, Search, Brain, Cpu, Globe, TrendingUp } from 'lucide-react'
import StageFlowIllustration from './StageFlowIllustration'

// Original illustration: major AI assistants converge into an "AI
// visibility review" step, then flow to website optimization and higher
// recommendation visibility. Deliberately labeled as a review/analysis
// activity rather than a named product - MMKK AI does not claim to operate
// a proprietary "visibility engine" anywhere in this codebase, and this
// illustration should not imply otherwise. Uses generic icons, not real
// vendor logos - no trademarked marks are reproduced.
export default function AIVisibilityEngineIllustration() {
  return (
    <StageFlowIllustration
      compact
      stages={[
        {
          nodes: [
            { icon: MessageSquare, label: 'ChatGPT', accent: 'secondary' },
            { icon: Sparkles, label: 'Gemini', accent: 'secondary' },
            { icon: Bot, label: 'Claude', accent: 'secondary' },
            { icon: ZapIcon, label: 'Grok', accent: 'secondary' },
            { icon: Search, label: 'Perplexity', accent: 'secondary' },
            { icon: Brain, label: 'Google AI', accent: 'secondary' },
          ],
        },
        { nodes: [{ icon: Cpu, label: 'AI visibility review' }] },
        { nodes: [{ icon: Globe, label: 'Website optimization' }] },
        { nodes: [{ icon: TrendingUp, label: 'Higher recommendation visibility' }] },
      ]}
    />
  )
}
