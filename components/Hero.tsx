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
        {/* Subtle background texture — very faint grid lines */}
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px'}} aria-hidden="true" />

        <div className="relative max-w-content mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-terra-400 mb-5 animate-[fadeUp_0.5s_ease-out_0.1s_both]">
                {eyebrow}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-5 animate-[fadeUp_0.55s_ease-out_0.2s_both]">
                {heading}
              </h1>
              {subheading && (
                <p className="text-sm font-semibold tracking-widest uppercase text-terra-400 mb-5 animate-[fadeUp_0.55s_ease-out_0.25s_both]">
                  {subheading}
                </p>
              )}
              <p className="text-lg text-sand-300 leading-relaxed max-w-lg mb-10 animate-[fadeUp_0.6s_ease-out_0.3s_both]">
                {description}
              </p>
              {(ctaPrimary || ctaSecondary) && (
                <div className="flex flex-wrap gap-3 animate-[fadeUp_0.6s_ease-out_0.4s_both]">
                  {ctaPrimary && (
                    <Link
                      href={ctaPrimary.href}
                      className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 active:scale-[0.97] text-white font-semibold px-6 py-3.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                    >
                      {ctaPrimary.label}
                    </Link>
                  )}
                  {ctaSecondary && (
                    <Link
                      href={ctaSecondary.href}
                      className="inline-flex items-center gap-2 border border-white/30 hover:border-white hover:bg-white/10 active:scale-[0.97] text-white font-semibold px-6 py-3.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                    >
                      {ctaSecondary.label}
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Right — logo */}
            <div className="hidden lg:flex items-center justify-center animate-[fadeIn_0.8s_ease-out_0.5s_both]">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-8 border border-white/5 rounded-none" aria-hidden="true" />
                <div className="absolute -inset-16 border border-white/[0.03] rounded-none" aria-hidden="true" />
                {/* Logo container */}
                <div className="bg-white p-10">
                  <Image
                    src="/images/logo.jpg"
                    alt="Saraya Contractors W.L.L."
                    width={280}
                    height={104}
                    className="w-64 h-auto object-contain"
                    priority
                  />
                </div>
                {/* Gold accent corner */}
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-terra-500" aria-hidden="true" />
                <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-terra-500/60" aria-hidden="true" />
              </div>
            </div>

          </div>
        </div>

        {/* Gold accent bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-terra-500 via-terra-400 to-transparent" />
      </section>
    )
  }

  return (
    <section className="relative bg-navy-900 pt-24 pb-14 lg:pt-32 lg:pb-16 overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.2 }}
          aria-hidden="true"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/50 pointer-events-none" />
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
      <div className="absolute bottom-0 left-0 w-24 h-[3px] bg-terra-500" />
    </section>
  )
}
