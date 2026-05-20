'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Locale } from '@/lib/i18n'

interface LocaleSwitcherProps {
  locale: Locale
}

export default function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
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
      className="text-sm font-medium text-charcoal-700 hover:text-terra-500 transition-colors duration-150 border border-charcoal-700/20 hover:border-terra-500/40 px-3 py-1.5 rounded-sm"
    >
      {label}
    </Link>
  )
}
