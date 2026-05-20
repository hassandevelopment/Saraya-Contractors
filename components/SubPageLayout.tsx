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
            className="inline-flex items-center gap-2 text-sm text-navy-500 hover:text-terra-500 mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            {backLabel}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScopeList heading={scopeHeading} items={scopeItems} />
            </div>
            <div>
              <div className="bg-navy-900 p-6">
                <h3 className="text-sm font-semibold text-sand-300 mb-3">{enquireLabel}</h3>
                <Link
                  href={contactHref}
                  className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-white text-sm font-semibold px-5 py-3 transition-colors duration-150 w-full justify-center"
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
