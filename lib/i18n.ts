import enContent from '@/content/en.json'
import arContent from '@/content/ar.json'

export type Locale = 'en' | 'ar'
export const locales: Locale[] = ['en', 'ar']
export const defaultLocale: Locale = 'en'

export function getContent(locale: Locale) {
  return locale === 'ar' ? arContent : enContent
}

export function isRTL(locale: Locale): boolean {
  return locale === 'ar'
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr'
}
