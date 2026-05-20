import Link from 'next/link'
import Image from 'next/image'
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
    <footer className="bg-navy-900 text-sand-200">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Saraya Contractors W.L.L."
                width={140}
                height={52}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-sand-300 leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <p className="text-xs text-navy-500 mt-4 tracking-wide uppercase">
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

        <div className="border-t border-navy-700 mt-12 pt-6">
          <p className="text-xs text-navy-500">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
