const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // No 'output: export' - this allows dynamic [locale] routes to work on Vercel
  // Dynamic routes require server-side rendering, not static export
}

module.exports = withNextIntl(nextConfig)

