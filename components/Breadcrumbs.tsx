import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  name: string
  href: string // relative, e.g. '/solutions' or '' for current page (non-link)
}

// Visible breadcrumb trail matching the BreadcrumbList JSON-LD emitted
// alongside it (lib/schema.ts breadcrumbSchema) - previously breadcrumb
// schema existed but nothing rendered it visibly for users.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-0 mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-gray-600" />}
              {isLast || !item.href ? (
                <span className="text-gray-400">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
