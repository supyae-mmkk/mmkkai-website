import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MMKK AI | Revenue Infrastructure for the AI Era',
  description: 'Cloud. AI. Automation. Built for Growth-Focused Enterprises.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-white">{children}</body>
    </html>
  )
}

