'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { submitLead } from '@/lib/submitLead'
import { solutions } from '@/lib/solutions'

interface ConsultationPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationPanel({ isOpen, onClose }: ConsultationPanelProps) {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '', // honeypot
  })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const interests = solutions.map((s) => s.name)

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      setStatus('error')
      setErrorMessage('Please confirm you agree to the privacy policy before submitting.')
      return
    }
    setStatus('submitting')
    const result = await submitLead({
      ...formData,
      interests: selectedInterests,
      locale,
      source: 'consultation_panel',
      consent: true,
      consentTimestamp: new Date().toISOString(),
    })
    if (result.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '', website: '' })
      setSelectedInterests([])
      setConsent(false)
    } else {
      setStatus('error')
      setErrorMessage(result.error || '')
    }
  }

  const handleClose = () => {
    setStatus('idle')
    onClose()
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
            onClick={handleClose}
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
                <h2 className="text-2xl font-bold">Book a Free Setup Consultation</h2>
                <button onClick={handleClose} className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                  <X size={24} />
                </button>
              </div>

              {status === 'success' ? (
                <div className="flex items-start gap-4 p-6 rounded-lg bg-primary/10 border border-primary/30">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white mb-1">Thanks &mdash; we&apos;ve got it.</p>
                    <p className="text-gray-400 text-sm">A member of our team will reach out within one business day.</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Interest Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-3">Which solutions are you interested in?</label>
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
                  <form onSubmit={handleSubmit} className="space-y-4 mb-6" noValidate>
                    {status === 'error' && (
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-300">
                          {errorMessage || 'Something went wrong sending your message.'}
                        </p>
                      </div>
                    )}

                    {/* Honeypot */}
                    <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="cp-website">Website</label>
                      <input
                        type="text"
                        id="cp-website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-sm resize-none"
                      />
                    </div>

                    <label className="flex items-start gap-3 text-xs text-gray-400 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 w-4 h-4 text-primary rounded border-primary/30 focus:ring-primary"
                        required
                      />
                      <span>
                        I agree to MMKK AI contacting me about this enquiry, per the{' '}
                        <Link href="/privacy-policy" className="text-primary hover:underline" onClick={handleClose}>
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={status === 'submitting' || !consent}
                      className="w-full px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Submit'}
                    </button>
                  </form>
                </>
              )}

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
                    <div>US: +1 332 333 9868</div>
                    <div>Thailand: +66 98 113 5613</div>
                    <div>Myanmar: +95 95186635</div>
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
