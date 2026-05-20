import Link from 'next/link'
import { type Locale } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
  footer: {
    tagline: string
    divisions: { heading: string; construction: string; trading: string; landscaping: string }
    company: { heading: string; about: string; projects: string; contact: string }
    copyright: string
    madeIn: string
  }
}

export default function Footer({ locale, footer }: FooterProps) {
  const base = `/${locale}`
  const year = new Date().getFullYear()
  const copyright = footer.copyright.replace('{year}', String(year))

  return (
    <footer className="bg-charcoal-900 text-sand-200">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="32" height="32" fill="#BF6030" />
                <rect x="6" y="18" width="4" height="8" fill="white" />
                <rect x="14" y="10" width="4" height="16" fill="white" />
                <rect x="22" y="14" width="4" height="12" fill="white" />
                <rect x="6" y="14" width="20" height="2" fill="white" opacity="0.4" />
              </svg>
              <span className="font-bold text-white tracking-tight text-base leading-none">
                SARAYA
                <span className="block text-[9px] font-normal text-sand-300 tracking-widest uppercase leading-none mt-0.5">
                  Contractors
                </span>
              </span>
            </div>
            <p className="text-sm text-sand-300 leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <p className="text-xs text-charcoal-500 mt-4 tracking-wide uppercase">
              {footer.madeIn}
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-sand-400 mb-4">
              {footer.divisions.heading}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={`${base}/construction`} className="text-sm text-sand-300 hover:text-white transition-colors duration-150">
                  {footer.divisions.construction}
                </Link>
              </li>
              <li>
                <Link href={`${base}/trading`} className="text-sm text-sand-300 hover:text-white transition-colors duration-150">
                  {footer.divisions.trading}
                </Link>
              </li>
              <li>
                <Link href={`${base}/landscaping`} className="text-sm text-sand-300 hover:text-white transition-colors duration-150">
                  {footer.divisions.landscaping}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-sand-400 mb-4">
              {footer.company.heading}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={`${base}/about`} className="text-sm text-sand-300 hover:text-white transition-colors duration-150">
                  {footer.company.about}
                </Link>
              </li>
              <li>
                <Link href={`${base}/projects`} className="text-sm text-sand-300 hover:text-white transition-colors duration-150">
                  {footer.company.projects}
                </Link>
              </li>
              <li>
                <Link href={`${base}/contact`} className="text-sm text-sand-300 hover:text-white transition-colors duration-150">
                  {footer.company.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-700 mt-12 pt-6">
          <p className="text-xs text-charcoal-500">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
