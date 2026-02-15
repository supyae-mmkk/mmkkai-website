'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
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
                      <a
                        href="tel:+13323339868"
                        className="block text-lg text-gray-300 hover:text-primary transition-colors"
                      >
                        US: +1 332 333 9868
                      </a>
                      <a
                        href="tel:+66981135613"
                        className="block text-lg text-gray-300 hover:text-primary transition-colors"
                      >
                        Thailand: +66 98 113 5613
                      </a>
                      <a
                        href="tel:+9595186635"
                        className="block text-lg text-gray-300 hover:text-primary transition-colors"
                      >
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover-glow"
              >
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

