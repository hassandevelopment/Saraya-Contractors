import Link from 'next/link'
import Image from 'next/image'
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
  heroImage?: string
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
  heroImage,
}: HeroProps) {
  if (variant === 'home') {
    return (
      <section className="relative min-h-[100dvh] bg-sand-100 flex items-center overflow-hidden">
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

            {/* Visual side — real project photo */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                {heroImage ? (
                  <Image
                    src={heroImage}
                    alt="Saraya Contractors — project"
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-charcoal-800 flex items-end p-8">
                    <div>
                      <div className="h-1 w-16 bg-terra-500 mb-4" />
                      <div className="text-sand-300 text-sm">Project photography coming soon</div>
                    </div>
                  </div>
                )}
                {/* Terracotta accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-terra-500" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative bg-charcoal-900 pt-24 pb-14 lg:pt-32 lg:pb-16 overflow-hidden"
    >
      {heroImage && (
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover opacity-25"
          aria-hidden="true"
          priority
        />
      )}
      <div className="relative max-w-content mx-auto px-6 lg:px-8">
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
