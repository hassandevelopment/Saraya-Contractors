import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type Locale } from '@/lib/i18n'

interface DivisionCardProps {
  locale: Locale
  id: string
  title: string
  description: string
  href: string
  cta: string
  index: number
}

const divisionIcons: Record<string, React.ReactNode> = {
  construction: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <rect x="9" y="9" width="2" height="2" />
      <rect x="13" y="9" width="2" height="2" />
    </svg>
  ),
  trading: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  landscaping: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <path d="M8 8a4 4 0 0 1 8 0" />
      <path d="M12 8V2" />
    </svg>
  ),
}

export default function DivisionCard({ id, title, description, href, cta, index }: DivisionCardProps) {
  return (
    <div
      className="group relative bg-white border border-sand-200 p-8 hover:border-terra-500/40 transition-all duration-200 hover:shadow-[0_8px_24px_-8px_rgba(191,96,48,0.15)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Index number — subtle background decoration */}
      <span
        className="absolute top-6 right-7 text-7xl font-bold text-sand-200 select-none leading-none"
        aria-hidden="true"
      >
        0{index + 1}
      </span>

      {/* Icon */}
      <div className="relative w-12 h-12 bg-terra-500/10 flex items-center justify-center text-terra-500 mb-6">
        {divisionIcons[id] ?? divisionIcons.construction}
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-navy-900 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="relative text-sm text-navy-600 leading-relaxed mb-8">
        {description}
      </p>

      <Link
        href={href}
        className="relative inline-flex items-center gap-2 text-sm font-semibold text-terra-500 hover:text-terra-600 group-hover:gap-3 transition-all duration-200"
      >
        {cta}
        <ArrowRight size={15} strokeWidth={2} />
      </Link>
    </div>
  )
}
