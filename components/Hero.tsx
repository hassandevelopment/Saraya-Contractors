import Link from 'next/link'
import { type Locale } from '@/lib/i18n'

interface HeroProps {
  locale: Locale
  eyebrow: string
  heading: string
  subheading?: string
  description: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  variant?: 'home' | 'page'
}

export default function Hero({
  locale,
  eyebrow,
  heading,
  subheading,
  description,
  ctaPrimary,
  ctaSecondary,
  variant = 'page',
}: HeroProps) {
  if (variant === 'home') {
    return (
      <section className="relative min-h-[100dvh] bg-sand-100 flex items-center overflow-hidden">
        {/* Geometric background accent */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-sand-200/40" />
          <div className="absolute bottom-0 right-0 w-[45%] h-[70%] bg-terra-500/8" />
          <div className="absolute top-[15%] right-[8%] w-72 h-72 border border-terra-500/20" />
          <div className="absolute top-[22%] right-[12%] w-56 h-56 border border-terra-500/10" />
        </div>

        <div className="relative max-w-content mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text side */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-terra-500 mb-6">
                {eyebrow}
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 tracking-tight leading-[0.95] mb-4">
                {heading}
              </h1>

              {subheading && (
                <p className="text-sm font-semibold tracking-widest uppercase text-charcoal-500 mb-6">
                  {subheading}
                </p>
              )}

              <p className="text-lg text-charcoal-600 leading-relaxed max-w-lg mb-10">
                {description}
              </p>

              {(ctaPrimary || ctaSecondary) && (
                <div className="flex flex-wrap gap-3">
                  {ctaPrimary && (
                    <Link
                      href={ctaPrimary.href}
                      className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 active:scale-[0.98] text-white font-semibold px-6 py-3.5 transition-all duration-150"
                    >
                      {ctaPrimary.label}
                    </Link>
                  )}
                  {ctaSecondary && (
                    <Link
                      href={ctaSecondary.href}
                      className="inline-flex items-center gap-2 border border-charcoal-700/30 hover:border-charcoal-900 text-charcoal-800 hover:text-charcoal-900 font-semibold px-6 py-3.5 transition-all duration-150"
                    >
                      {ctaSecondary.label}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Visual side */}
            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="relative aspect-[4/5] bg-charcoal-800 overflow-hidden">
                {/* Placeholder image representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700 to-charcoal-900 flex items-end p-8">
                  <div className="w-full">
                    <div className="h-1 w-16 bg-terra-500 mb-4" />
                    <div className="text-sand-300 text-sm tracking-wide">
                      Project photography
                    </div>
                    <div className="text-sand-400 text-xs mt-1">
                      Coming soon
                    </div>
                  </div>
                </div>
                {/* Geometric overlay */}
                <div className="absolute top-6 right-6 w-20 h-20 border border-terra-500/30" />
                <div className="absolute top-9 right-9 w-12 h-12 bg-terra-500/20" />
              </div>
              {/* Offset accent block */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-terra-500" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-charcoal-900 pt-24 pb-14 lg:pt-32 lg:pb-16">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-terra-400 mb-4">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mb-6">
          {heading}
        </h1>
        <p className="text-lg text-sand-300 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  )
}
