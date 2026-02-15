import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const locales = ['en', 'th', 'mm'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = requestLocale ?? 'en'
  
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  }
})

