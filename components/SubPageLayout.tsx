import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'
import ScopeList from '@/components/ScopeList'
import PhotoGallery from '@/components/PhotoGallery'
import { type Locale } from '@/lib/i18n'

interface SubPageLayoutProps {
  locale: Locale
  eyebrow: string
  heading: string
  description: string
  heroImage?: string
  scopeHeading: string
  scopeItems: string[]
  galleryImages?: string[]
  galleryAlt?: string
  backHref: string
  backLabel: string
  contactLabel: string
  contactHref: string
  enquireLabel: string
}

export default function SubPageLayout({
  locale,
  eyebrow,
  heading,
  description,
  heroImage,
  scopeHeading,
  scopeItems,
  galleryImages,
  galleryAlt,
  backHref,
  backLabel,
  contactLabel,
  contactHref,
  enquireLabel,
}: SubPageLayoutProps) {
  return (
    <>
      <Hero
        locale={locale}
        eyebrow={eyebrow}
        heading={heading}
        description={description}
        heroImage={heroImage}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-navy-500 hover:text-terra-500 mb-10 transition-colors duration-150 focus-visible:outline-none focus-visible:text-terra-500 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-150 group-hover:-translate-x-0.5" />
            {backLabel}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScopeList heading={scopeHeading} items={scopeItems} />
            </div>
            <div>
              <div className="bg-navy-900 p-6 sticky top-28">
                <p className="text-xs font-semibold tracking-widest uppercase text-terra-400 mb-1">{enquireLabel}</p>
                <p className="text-sm text-sand-300 mb-5 leading-relaxed">Tell us about your project and we'll be in touch within 24 hours.</p>
                <Link
                  href={contactHref}
                  className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 active:scale-[0.97] text-white text-sm font-semibold px-5 py-3 transition-all duration-150 w-full justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                >
                  {contactLabel}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {galleryImages && galleryImages.length > 0 && (
        <PhotoGallery images={galleryImages} alt={galleryAlt ?? heading} />
      )}
    </>
  )
}
