import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.amusementParks.meta.title, description: t.amusementParks.meta.description }
}

const gallery = Array.from({ length: 8 }, (_, i) => `/images/projects/landscaping/amusement/${i + 1}.jpg`)

export default function AmusementParksPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.amusementParks.hero.eyebrow}
      heading={t.amusementParks.hero.heading}
      description={t.amusementParks.hero.description}
      heroImage="/images/projects/landscaping/amusement/1.jpg"
      scopeHeading={t.amusementParks.scope.heading}
      scopeItems={t.amusementParks.scope.items}
      galleryImages={gallery}
      galleryAlt="Amusement Parks"
      backHref={`${base}/landscaping`}
      backLabel={t.landscaping.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
