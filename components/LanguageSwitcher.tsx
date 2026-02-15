'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'th', label: 'TH' },
  { code: 'mm', label: 'MM' },
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('locale')
    if (stored && stored !== locale && pathname.startsWith(`/${locale}`)) {
      const newPath = pathname.replace(`/${locale}`, `/${stored}`)
      router.push(newPath)
    }
  }, [locale, pathname, router])

  const handleLanguageChange = (newLocale: string) => {
    localStorage.setItem('locale', newLocale)
    
    if (pathname.startsWith(`/${locale}`)) {
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
      router.push(newPath)
    } else {
      router.push(`/${newLocale}`)
    }
    
    setIsOpen(false)
  }

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-primary transition-colors border border-gray-700 rounded-lg hover:border-primary/50"
      >
        {currentLanguage.label}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50 min-w-[80px]"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-2 text-sm text-left transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    locale === lang.code
                      ? 'bg-primary/20 text-primary'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-primary'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

