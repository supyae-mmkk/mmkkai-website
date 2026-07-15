import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mmkkai.com'

// Remediation note: the previous version gave each named AI crawler its own
// group with ONLY "Allow: /" and no Disallow. Per the robots.txt spec, a
// user-agent-specific group entirely REPLACES the wildcard ('*') group for
// any crawler that matches it — so those bots were never actually blocked
// from /admin or /api the way the wildcard rule intended. Every group below
// now repeats the full Allow/Disallow set so protected routes stay protected
// regardless of which crawler is reading the file.
const DISALLOW = ['/admin/', '/api/', '/_next/', '/private/']

const USER_AGENTS = [
  '*',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'Googlebot',
  'Bingbot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: '/',
      disallow: DISALLOW,
    })),
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
