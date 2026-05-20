'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import LocaleSwitcher from './LocaleSwitcher'
import { type Locale } from '@/lib/i18n'

interface NavItem {
  label: string
  href: string
}

interface HeaderProps {
  locale: Locale
  nav: {
    home: string
    about: string
    construction: string
    trading: string
    landscaping: string
    projects: string
    contact: string
    getQuote: string
    mobileMenuOpen: string
    mobileMenuClose: string
  }
}

export default function Header({ locale, nav }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const base = `/${locale}`

  const navItems: NavItem[] = [
    { label: nav.about, href: `${base}/about` },
    { label: nav.construction, href: `${base}/construction` },
    { label: nav.trading, href: `${base}/trading` },
    { label: nav.landscaping, href: `${base}/landscaping` },
    { label: nav.projects, href: `${base}/projects` },
    { label: nav.contact, href: `${base}/contact` },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-sand-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href={base}
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Saraya Contractors — Home"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="32" height="32" fill="#BF6030" />
              <rect x="6" y="18" width="4" height="8" fill="white" />
              <rect x="14" y="10" width="4" height="16" fill="white" />
              <rect x="22" y="14" width="4" height="12" fill="white" />
              <rect x="6" y="14" width="20" height="2" fill="white" opacity="0.4" />
            </svg>
            <span className="font-bold text-charcoal-900 tracking-tight text-lg leading-none">
              SARAYA
              <span className="block text-[10px] font-normal text-charcoal-500 tracking-widest uppercase leading-none mt-0.5">
                Contractors
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal-700 hover:text-terra-500 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: locale + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LocaleSwitcher locale={locale} />
            <Link
              href={`${base}/contact`}
              className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-white text-sm font-semibold px-4 py-2 transition-colors duration-150"
            >
              {nav.getQuote}
            </Link>
          </div>

          {/* Mobile: locale + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <LocaleSwitcher locale={locale} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? nav.mobileMenuClose : nav.mobileMenuOpen}
              aria-expanded={mobileOpen}
              className="p-2 text-charcoal-800 hover:text-terra-500 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-sand-200">
          <nav className="max-w-content mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-charcoal-800 hover:text-terra-500 border-b border-sand-100 last:border-0 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`${base}/contact`}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-terra-500 hover:bg-terra-600 text-white font-semibold py-3 transition-colors duration-150"
            >
              {nav.getQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
