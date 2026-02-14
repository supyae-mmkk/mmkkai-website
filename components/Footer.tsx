'use client'

import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/">
              <h3 className="text-2xl font-bold font-display gradient-text mb-3 cursor-pointer">
                MMKK AI
              </h3>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              AI Revenue & Cloud Infrastructure Partner
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:sales@mmkkai.com"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  sales@mmkkai.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href="tel:+13323339868"
                    className="block text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    US: +1 332 333 9868
                  </a>
                  <a
                    href="tel:+66981135613"
                    className="block text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    Thailand: +66 98 113 5613
                  </a>
                  <a
                    href="tel:+9595186635"
                    className="block text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    Myanmar: +95 95186635
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/10 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} MMKK AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
