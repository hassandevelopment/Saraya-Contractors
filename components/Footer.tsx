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
            {/* White container so the JPG logo reads on the dark footer */}
            <div className="inline-block bg-white px-3 py-2 mb-5">
              <Image
                src="/images/logo.jpg"
                alt="Saraya Contractors W.L.L."
                width={120}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-sand-300 leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
            <p className="text-xs text-sand-400 mt-4 tracking-wide uppercase">
              {footer.madeIn}
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-sand-400 mb-5">
              {footer.divisions.heading}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`${base}/construction`}
                  className="text-sm text-sand-300 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-terra-400"
                >
                  {footer.divisions.construction}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/trading`}
                  className="text-sm text-sand-300 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-terra-400"
                >
                  {footer.divisions.trading}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/landscaping`}
                  className="text-sm text-sand-300 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-terra-400"
                >
                  {footer.divisions.landscaping}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-sand-400 mb-5">
              {footer.company.heading}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`${base}/about`}
                  className="text-sm text-sand-300 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-terra-400"
                >
                  {footer.company.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/projects`}
                  className="text-sm text-sand-300 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-terra-400"
                >
                  {footer.company.projects}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/contact`}
                  className="text-sm text-sand-300 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-terra-400"
                >
                  {footer.company.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-sand-400">{copyright}</p>
          <div className="h-px w-8 bg-terra-500" aria-hidden="true" />
        </div>
      </div>
    </footer>
  )
}
