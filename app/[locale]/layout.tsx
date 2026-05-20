import type { Metadata } from 'next'
import { IBM_Plex_Sans, Tajawal } from 'next/font/google'
import { getContent, getDirection, isRTL, locales, type Locale } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm',
  display: 'swap',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = getContent(params.locale)
  return {
    title: {
      default: 'Saraya Contractors W.L.L.',
      template: '%s — Saraya Contractors W.L.L.',
    },
    description:
      'Bahrain-based contractor offering construction, trading, and landscaping services since 2001.',
    metadataBase: new URL('https://hassandevelopment.github.io/Saraya-Contractors'),
    alternates: {
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
    openGraph: {
      siteName: 'Saraya Contractors W.L.L.',
      locale: params.locale === 'ar' ? 'ar_BH' : 'en_BH',
    },
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const { locale } = params
  const t = getContent(locale)
  const dir = getDirection(locale)
  const rtl = isRTL(locale)

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${ibmPlexSans.variable} ${tajawal.variable}`}
    >
      <body className={`min-h-screen flex flex-col ${rtl ? 'font-arabic' : 'font-sans'}`}>
        <Header locale={locale} nav={t.nav} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} footer={t.footer} />
      </body>
    </html>
  )
}
