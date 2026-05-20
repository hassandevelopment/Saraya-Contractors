import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getContent, type Locale } from '@/lib/i18n'
import Hero from '@/components/Hero'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.xRay.meta.title, description: t.xRay.meta.description }
}

export default function XRayPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <>
      <Hero
        locale={locale}
        eyebrow={t.xRay.hero.eyebrow}
        heading={t.xRay.hero.heading}
        description={t.xRay.hero.description}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <Link
            href={`${base}/trading`}
            className="inline-flex items-center gap-2 text-sm text-navy-500 hover:text-terra-500 mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            {t.trading.hero.heading}
          </Link>

          {/* Availability note */}
          <div className="mb-8 p-5 bg-sand-50 border border-sand-200 border-l-4 border-l-terra-500">
            <p className="text-sm text-navy-600">{t.xRay.note}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-terra-500 mb-4">
                {t.xRay.scope.heading}
              </h2>
              <p className="text-navy-700 leading-relaxed">{t.xRay.scope.body}</p>
            </div>
            <div>
              <div className="bg-navy-900 p-6">
                <h3 className="text-sm font-semibold text-sand-300 mb-3">{t.common.enquire}</h3>
                <Link
                  href={`${base}/contact`}
                  className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-white text-sm font-semibold px-5 py-3 transition-colors duration-150 w-full justify-center"
                >
                  {t.common.getQuote}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
