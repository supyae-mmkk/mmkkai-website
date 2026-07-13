'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

interface ConsultationPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationPanel({ isOpen, onClose }: ConsultationPanelProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const interests = [
    'Google Workspace',
    'Google Cloud',
    'Azure',
    'AI Automation',
    'Chat-Commerce',
  ]

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md glass border-l border-primary/20 z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Let&apos;s Design Your Infrastructure</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Interest Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Choose interest:</label>
                <div className="space-y-2">
                  {interests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center gap-3 p-3 rounded-lg border border-primary/20 hover:border-primary/40 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(interest)}
                        onChange={() => toggleInterest(interest)}
                        className="w-4 h-4 text-primary rounded border-primary/30 focus:ring-primary"
                      />
                      <span className="text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Submit
                </button>
              </form>

              {/* Contact Info */}
              <div className="border-t border-primary/20 pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <a href="mailto:sales@mmkkai.com" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    sales@mmkkai.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <div className="text-sm text-gray-300 space-y-1">
                    <div>🇺🇸 +1 332 333 9868</div>
                    <div>🇹🇭 +66 98 113 5613</div>
                    <div>🇲🇲 +95 95186635</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

