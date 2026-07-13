// This layout is only for non-locale routes (like /admin)
// Locale routes use app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

