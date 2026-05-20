import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getContent, type Locale } from '@/lib/i18n'
import Hero from '@/components/Hero'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.about.meta.title, description: t.about.meta.description }
}

export default function AboutPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={t.about.hero.eyebrow}
        heading={t.about.hero.heading}
        description={t.about.hero.description}
      />

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-terra-500 mb-4">
                {t.about.story.heading}
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-5">
              {t.about.story.body.map((para, i) => (
                <p key={i} className="text-navy-700 leading-relaxed text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 tracking-tight">
            {t.about.divisions.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.divisions.items.map((div) => (
              <div key={div.title} className="bg-white border border-sand-200 p-6">
                <div className="w-8 h-1 bg-terra-500 mb-4" />
                <h3 className="font-bold text-navy-900 mb-2">{div.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{div.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-terra-500">
                {t.about.leadership.heading}
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-navy-500 italic">{t.about.leadership.placeholder}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications placeholder */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-terra-500">
                {t.about.certifications.heading}
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-navy-500 italic">{t.about.certifications.placeholder}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-content mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{t.common.getQuote}</h2>
            <p className="text-sand-300 text-sm">{t.home.cta.description}</p>
          </div>
          <Link
            href={`${base}/contact`}
            className="shrink-0 inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-white font-semibold px-6 py-3.5 transition-colors duration-150"
          >
            {t.common.contactUs}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
