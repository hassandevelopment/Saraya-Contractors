import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getContent, type Locale } from '@/lib/i18n'
import Hero from '@/components/Hero'
import DivisionCard from '@/components/DivisionCard'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Saraya Contractors W.L.L. — Building Bahrain Since 2001',
  description:
    'Bahrain-based contractor delivering construction, trading, and landscaping services since 2001. Trusted by government and private sector clients.',
}

interface PageProps {
  params: { locale: Locale }
}

const placeholderProjects = [
  { title: 'Commercial Complex — Manama', division: 'Construction', year: '2023', location: 'Manama', seed: 10 },
  { title: 'Public Park — Riffa', division: 'Landscaping', year: '2022', location: 'Riffa', seed: 20 },
  { title: 'School Play Area — Muharraq', division: 'Landscaping', year: '2023', location: 'Muharraq', seed: 30 },
]

export default function HomePage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`

  return (
    <>
      {/* Hero */}
      <Hero
        locale={locale}
        variant="home"
        eyebrow={t.home.hero.eyebrow}
        heading={t.home.hero.heading}
        subheading={t.home.hero.subheading}
        description={t.home.hero.description}
        ctaPrimary={{ label: t.home.hero.ctaPrimary, href: `${base}/contact` }}
        ctaSecondary={{ label: t.home.hero.ctaSecondary, href: `${base}/projects` }}
      />

      {/* Divisions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight mb-4">
              {t.home.divisions.heading}
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              {t.home.divisions.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.home.divisions.items.map((division, i) => (
              <DivisionCard
                key={division.id}
                locale={locale}
                id={division.id}
                title={division.title}
                description={division.description}
                href={`${base}${division.href}`}
                cta={division.cta}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="py-16 lg:py-20 bg-charcoal-900">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-terra-400 mb-10 text-center">
            {t.home.stats.heading}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-charcoal-700">
            {t.home.stats.items.map((stat) => (
              <div key={stat.label} className="text-center md:px-8">
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-sand-300 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20 lg:py-28 bg-sand-50">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight mb-3">
                {t.home.projects.heading}
              </h2>
              <p className="text-charcoal-600">{t.home.projects.subheading}</p>
            </div>
            <Link
              href={`${base}/projects`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-terra-500 hover:text-terra-600 transition-colors shrink-0"
            >
              {t.home.projects.cta}
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProjects.map((p) => (
              <ProjectCard
                key={p.seed}
                title={p.title}
                division={p.division}
                year={p.year}
                location={p.location}
                imageSeed={p.seed}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-terra-500 mb-4">
                {t.home.about.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-900 tracking-tight leading-snug mb-6 whitespace-pre-line">
                {t.home.about.heading}
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-8">
                {t.home.about.description}
              </p>
              <Link
                href={`${base}/about`}
                className="inline-flex items-center gap-2 border border-charcoal-700/30 hover:border-charcoal-900 text-charcoal-800 font-semibold px-6 py-3 transition-all duration-150"
              >
                {t.home.about.cta}
                <ArrowRight size={15} />
              </Link>
            </div>
            {/* Visual block */}
            <div className="relative" aria-hidden="true">
              <div className="aspect-[4/3] bg-sand-200 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-terra-500/20 border border-terra-500/40 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-terra-500">س</span>
                    </div>
                    <p className="text-xs text-charcoal-400 tracking-wide">Saraya Contractors</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-terra-500/20 border border-terra-500/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-terra-500">
        <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {t.home.cta.heading}
          </h2>
          <p className="text-terra-400/90 text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {t.home.cta.description}
          </p>
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center gap-2 bg-white hover:bg-sand-100 text-terra-500 font-semibold px-8 py-4 transition-colors duration-150"
          >
            {t.home.cta.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
