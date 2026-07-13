'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/')
    segments[1] = locale
    router.push(segments.join('/'))
    router.refresh()
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-lg ${
          pathname.startsWith('/en')
            ? 'bg-primary/20 text-primary border border-primary/50'
            : 'text-gray-300 hover:text-primary border border-gray-700 hover:border-primary/50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('th')}
        className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-lg ${
          pathname.startsWith('/th')
            ? 'bg-primary/20 text-primary border border-primary/50'
            : 'text-gray-300 hover:text-primary border border-gray-700 hover:border-primary/50'
        }`}
      >
        TH
      </button>
      <button
        onClick={() => changeLanguage('mm')}
        className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-lg ${
          pathname.startsWith('/mm')
            ? 'bg-primary/20 text-primary border border-primary/50'
            : 'text-gray-300 hover:text-primary border border-gray-700 hover:border-primary/50'
        }`}
      >
        MM
      </button>
    </div>
  )
}
