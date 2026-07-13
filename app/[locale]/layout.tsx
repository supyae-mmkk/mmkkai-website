import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'
import type { Metadata } from 'next'
import '../globals.css'
import Footer from '@/components/Footer'
import { VisitorTracking } from '@/components/VisitorTracking'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export const dynamic = 'force-static'
export const revalidate = 3600

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'mm' },
    { locale: 'th' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const messages = await getMessages({ locale })
  const metadata = messages.metadata as { title: string; description: string }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'
  
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'th': `${baseUrl}/th`,
        'my-MM': `${baseUrl}/mm`,
      }
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      locale: locale === 'mm' ? 'my_MM' : locale,
      alternateLocale: ['en', 'th', 'my_MM'],
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params
  
  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  return (
    <html lang={locale === 'mm' ? 'my' : locale} className="dark">
      <head>
        {locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc === 'mm' ? 'my-MM' : loc}
            href={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'}/${loc}`}
          />
        ))}
      </head>
      <body className="bg-background text-white">
        <NextIntlClientProvider messages={messages}>
          <VisitorTracking />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
