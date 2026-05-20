import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getContent, type Locale } from '@/lib/i18n'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.trading.meta.title, description: t.trading.meta.description }
}

export default function TradingPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={t.trading.hero.eyebrow}
        heading={t.trading.hero.heading}
        description={t.trading.hero.description}
        heroImage="/images/hero/trading.jpg"
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-terra-500 mb-4">
                {t.common.scope}
              </h2>
              <Link
                href={`${base}/contact`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-terra-500 mt-2 transition-colors"
              >
                {t.common.enquire} <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-2">
              {t.trading.products.map((product) => (
                <ServiceCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  href={`${base}${product.href}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
