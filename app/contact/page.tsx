'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
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
          {/* Section 1: Title and Subtitle */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Contact MMKK AI
            </h1>
            <p className="text-lg text-gray-400">
              Speak directly with our cloud & AI infrastructure team.
            </p>
          </div>

          {/* Section 2: Contact Details */}
          <div className="mb-16">
            <div className="glass rounded-2xl p-8 neon-border">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:sales@mmkkai.com"
                      className="text-lg text-gray-300 hover:text-primary transition-colors"
                    >
                      sales@mmkkai.com
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Phone Numbers</p>
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

          {/* Section 3: Contact Form */}
          <div className="glass rounded-2xl p-8 neon-border">
            <h2 className="text-2xl font-bold mb-8">Request Consultation</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white"
                  placeholder="Your company name"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white resize-none"
                  placeholder="Tell us about your infrastructure needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all hover-glow"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
