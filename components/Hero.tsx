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
      <section className="relative min-h-[100dvh] bg-navy-900 flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        {heroImage && (
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover object-center opacity-35"
            priority
            aria-hidden="true"
          />
        )}
        {/* Gradient: strong at bottom, lighter at top so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/20 pointer-events-none" />

        <div className="relative max-w-content mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-terra-400 mb-6">
              {eyebrow}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-6">
              {heading}
            </h1>
            {subheading && (
              <p className="text-sm font-semibold tracking-widest uppercase text-sand-400 mb-6">
                {subheading}
              </p>
            )}
            <p className="text-lg text-sand-300 leading-relaxed max-w-xl mb-10">
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
                    className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-6 py-3.5 transition-all duration-150"
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Gold accent bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-terra-500" />
      </section>
    )
  }

  return (
    <section
      className="relative bg-navy-900 pt-24 pb-14 lg:pt-32 lg:pb-16 overflow-hidden"
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
