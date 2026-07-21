'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { Mail, Phone, CheckCircle, AlertCircle, MapPin, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { submitLead } from '@/lib/submitLead'
import { socialProfiles } from '@/lib/companyConfig'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, contactPageSchema } from '@/lib/schema'

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
    website: '', // honeypot - left blank by real users
  })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      setStatus('error')
      setErrorMessage(t('consentRequired'))
      return
    }
    setStatus('submitting')
    const result = await submitLead({
      ...formData,
      locale,
      source: 'contact_page',
      consent: true,
      consentTimestamp: new Date().toISOString(),
    })
    if (result.ok) {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '', website: '' })
      setConsent(false)
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

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'
  const contactUrl = `${BASE_URL}/${locale}/contact`

  return (
    <main className="min-h-screen">
      <JsonLd
        data={[
          contactPageSchema({ url: contactUrl }),
          breadcrumbSchema([
            { name: 'Home', url: `${BASE_URL}/${locale}` },
            { name: 'Contact', url: contactUrl },
          ]),
        ]}
      />
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Home', href: `/${locale}` }, { name: 'Contact', href: '' }]} />
          <div className="mb-14 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-400">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="rounded-xl2 border border-border bg-surface p-6 md:p-8">
              <h2 className="text-lg font-bold text-primary mb-5">{t('afterContactTitle')}</h2>
              <ol className="space-y-4">
                {(t.raw('afterContactSteps') as string[]).map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-300 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl2 border border-border bg-surface p-6 md:p-8">
              <h2 className="text-lg font-bold text-primary mb-4">{t('supportedAreasTitle')}</h2>
              <div className="flex flex-wrap gap-2">
                {(t.raw('supportedAreas') as string[]).map((area) => (
                  <span key={area} className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-surface-2 border border-border rounded-full px-3 py-1.5">
                    <MapPin size={11} className="text-primary" /> {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl2 border border-border bg-surface p-6 md:p-8">
              <h2 className="text-lg font-bold mb-6">{t('getInTouch')}</h2>

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

                {socialProfiles.length > 0 && (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">{t('socialProfiles')}</p>
                      <div className="flex items-center gap-3">
                        {socialProfiles.map((s) => {
                          const Icon = s.platform === 'facebook' ? Facebook : s.platform === 'linkedin' ? Linkedin : MessageCircle
                          return (
                            <a
                              key={s.platform}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={s.label}
                              className="p-2 rounded-lg border border-primary/20 text-gray-300 hover:text-primary hover:border-primary/40 transition-colors"
                            >
                              <Icon className="w-5 h-5" />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 neon-border lg:sticky lg:top-28">
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
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-300">{errorMessage || t('errorMessage')}</p>
                  </div>
                )}

                {/* Honeypot - visually hidden from real users, left in the tab
                    order off-screen rather than display:none so simple bots
                    that only check computed visibility still fill it in. */}
                <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

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

                <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 text-primary rounded border-primary/30 focus:ring-primary"
                    required
                  />
                  <span>
                    {t('consentText')}{' '}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      {t('consentPrivacyLink')}
                    </Link>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === 'submitting' || !consent}
                  className="w-full px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? t('submitting') : t('submit')}
                </button>
              </form>
            )}
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}
