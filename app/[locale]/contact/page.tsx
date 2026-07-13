'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { submitLead } from '@/lib/submitLead'

export const dynamic = 'force-static'

export default function ContactPage() {
  const t = useTranslations('contact')
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    const result = await submitLead({ ...formData, locale, source: 'contact_page' })
    if (result.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } else {
      setStatus('error')
      setErrorMessage(result.error || '')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-400">
              {t('subtitle')}
            </p>
          </div>

          <div className="mb-16">
            <div className="glass rounded-2xl p-8 neon-border">
              <h2 className="text-2xl font-bold mb-8">{t('getInTouch')}</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{t('email')}</p>
                    <a
                      href="mailto:sales@mmkkai.com"
                      className="text-lg text-gray-300 hover:text-primary transition-colors"
                    >
                      sales@mmkkai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">{t('phoneNumbers')}</p>
                    <div className="space-y-2">
                      <a href="tel:+13323339868" className="block text-lg text-gray-300 hover:text-primary transition-colors">
                        US: +1 332 333 9868
                      </a>
                      <a href="tel:+66981135613" className="block text-lg text-gray-300 hover:text-primary transition-colors">
                        Thailand: +66 98 113 5613
                      </a>
                      <a href="tel:+9595186635" className="block text-lg text-gray-300 hover:text-primary transition-colors">
                        Myanmar: +95 95186635
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-8">{t('requestConsultation')}</h2>

            {status === 'success' ? (
              <div className="flex items-start gap-4 p-6 rounded-lg bg-primary/10 border border-primary/30">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">{t('successTitle')}</p>
                  <p className="text-gray-400 text-sm">{t('successMessage')}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-300">{errorMessage || t('errorMessage')}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    {t('name')} <span className="text-primary">{t('required')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white"
                    placeholder={t('namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    {t('email')} <span className="text-primary">{t('required')}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    {t('company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white"
                    placeholder={t('companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    {t('message')} <span className="text-primary">{t('required')}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? t('submitting') : t('submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
