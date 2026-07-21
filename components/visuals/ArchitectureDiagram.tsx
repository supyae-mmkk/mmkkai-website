'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Search, Layers, Bot, Cloud, LayoutDashboard } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface NodeDef {
  id: string
  icon: LucideIcon
  label: string
}

const NODES: NodeDef[] = [
  { id: 'lead-source', icon: Users, label: 'Lead Source' },
  { id: 'apollo', icon: Search, label: 'Apollo' },
  { id: 'hubspot', icon: Layers, label: 'HubSpot CRM' },
  { id: 'automation', icon: Bot, label: 'AI Automation' },
  { id: 'workspace', icon: Cloud, label: 'Workspace / M365' },
  { id: 'dashboard', icon: LayoutDashboard, label: 'Management Dashboard' },
]

export interface Objective {
  id: string
  label: string
  highlight: string[] // node ids relevant to this objective
}

export default function ArchitectureDiagram({
  objectives,
  activeCaption,
}: {
  objectives: Objective[]
  activeCaption?: (objectiveId: string) => string
}) {
  const [active, setActive] = useState(objectives[0]?.id)
  const activeObjective = objectives.find((o) => o.id === active) || objectives[0]
  const highlighted = new Set(activeObjective?.highlight || [])

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {objectives.map((o) => (
          <button
            key={o.id}
            onClick={() => setActive(o.id)}
            className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors ${
              active === o.id
                ? 'bg-primary text-black border-primary'
                : 'bg-surface text-gray-400 border-border hover:border-primary/40 hover:text-gray-200'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="rounded-xl2 border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-0">
          {NODES.map((node, i) => {
            const isLast = i === NODES.length - 1
            const isActive = highlighted.has(node.id)
            const Icon = node.icon
            return (
              <div key={node.id} className="flex flex-col md:flex-row items-center md:flex-1 min-w-0">
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      borderColor: isActive ? 'rgba(0,200,150,0.6)' : 'rgba(36,41,49,1)',
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border flex items-center justify-center relative ${
                      isActive ? 'bg-primary/10 shadow-glowsm' : 'bg-surface-2'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-primary' : 'text-gray-500'} strokeWidth={1.75} />
                  </motion.div>
                  <span className={`text-[11px] text-center sm:text-xs font-medium whitespace-nowrap ${isActive ? 'text-gray-100' : 'text-gray-500'}`}>
                    {node.label}
                  </span>
                </div>
                {!isLast && (
                  <div className="relative w-px h-6 md:w-full md:h-px my-1 md:my-0 md:mx-2 shrink-0 md:flex-1 bg-border overflow-hidden">
                    {highlighted.has(node.id) && highlighted.has(NODES[i + 1].id) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-primary/60"
                      />
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {activeCaption && activeObjective && (
        <p className="mt-4 text-sm text-gray-400 text-center md:text-left">{activeCaption(activeObjective.id)}</p>
      )}
    </div>
  )
}
