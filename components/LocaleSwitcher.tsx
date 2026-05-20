'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Locale } from '@/lib/i18n'

interface LocaleSwitcherProps {
  locale: Locale
  scrolled?: boolean
}

export default function LocaleSwitcher({ locale, scrolled = true }: LocaleSwitcherProps) {
  const pathname = usePathname()

  const getOppositeLocale = (): { locale: Locale; label: string; href: string } => {
    const opposite: Locale = locale === 'en' ? 'ar' : 'en'
    const label = locale === 'en' ? 'العربية' : 'English'
    const href = pathname.replace(`/${locale}`, `/${opposite}`)
    return { locale: opposite, label, href }
  }

  const { label, href } = getOppositeLocale()

  return (
    <Link
      href={href}
      lang={locale === 'en' ? 'ar' : 'en'}
      className={`text-sm font-medium transition-all duration-150 px-3 py-1.5 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 focus-visible:ring-offset-2 rounded-sm
        ${scrolled
          ? 'text-navy-700 hover:text-terra-500 border-navy-700/20 hover:border-terra-500/50'
          : 'text-white/80 hover:text-white border-white/30 hover:border-white/60'
        }`}
    >
      {label}
    </Link>
  )
}
