'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold font-display gradient-text mb-4">
              MMKK AI
            </h3>
            <p className="text-gray-400 text-sm">
              Revenue Infrastructure for the AI Era
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#architecture" className="hover:text-primary transition-colors">Architecture</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#chat-commerce" className="hover:text-primary transition-colors">Chat-Commerce</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} MMKK AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

