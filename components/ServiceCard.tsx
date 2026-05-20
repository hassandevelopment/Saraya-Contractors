import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  href: string
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex items-start justify-between gap-4 py-6 border-b border-sand-200 last:border-0 hover:bg-sand-50/60 px-1 -mx-1 transition-colors duration-150"
    >
      <div>
        <h3 className="text-base font-semibold text-charcoal-900 mb-1 group-hover:text-terra-500 transition-colors duration-150">
          {title}
        </h3>
        <p className="text-sm text-charcoal-500 leading-relaxed">{description}</p>
      </div>
      <span className="shrink-0 mt-0.5 text-charcoal-400 group-hover:text-terra-500 group-hover:translate-x-1 transition-all duration-200">
        <ArrowRight size={18} strokeWidth={1.5} />
      </span>
    </Link>
  )
}
