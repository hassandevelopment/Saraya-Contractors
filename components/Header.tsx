'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
          ? 'bg-white/97 backdrop-blur-sm border-b border-sand-200 shadow-[0_1px_12px_rgba(5,11,63,0.08)]'
          : 'bg-navy-900/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — white container so JPG logo reads on both dark and light header states */}
          <Link
            href={base}
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 focus-visible:ring-offset-2 rounded-sm"
            aria-label="Saraya Contractors — Home"
          >
            <div className="bg-white px-2.5 py-1.5">
              <Image
                src="/images/logo.jpg"
                alt="Saraya Contractors W.L.L."
                width={120}
                height={44}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 focus-visible:ring-offset-2 rounded-sm px-1 py-0.5
                  after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-terra-500 after:transition-all after:duration-200 hover:after:w-full
                  ${scrolled ? 'text-navy-700 hover:text-terra-500' : 'text-white/90 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: locale + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LocaleSwitcher locale={locale} scrolled={scrolled} />
            <Link
              href={`${base}/contact`}
              className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 active:scale-[0.97] text-white text-sm font-semibold px-4 py-2.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 focus-visible:ring-offset-2"
            >
              {nav.getQuote}
            </Link>
          </div>

          {/* Mobile: locale + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <LocaleSwitcher locale={locale} scrolled={scrolled} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? nav.mobileMenuClose : nav.mobileMenuOpen}
              aria-expanded={mobileOpen}
              className={`p-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 rounded-sm
                ${scrolled ? 'text-navy-800 hover:text-terra-500' : 'text-white hover:text-terra-400'}`}
            >
              <span className={`block transition-all duration-200 ${mobileOpen ? 'rotate-90' : 'rotate-0'}`}>
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-sand-200 shadow-lg">
          <nav className="max-w-content mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-medium text-navy-800 hover:text-terra-500 border-b border-sand-100 last:border-0 transition-colors duration-150 focus-visible:outline-none focus-visible:text-terra-500"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`${base}/contact`}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center bg-terra-500 hover:bg-terra-600 active:scale-[0.98] text-white font-semibold py-3 transition-all duration-150"
            >
              {nav.getQuote}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
