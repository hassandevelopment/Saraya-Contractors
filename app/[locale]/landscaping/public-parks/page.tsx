import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.publicParks.meta.title, description: t.publicParks.meta.description }
}

const gallery = Array.from({ length: 6 }, (_, i) => `/images/projects/landscaping/publicparks/${i + 1}.jpg`)

export default function PublicParksPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.publicParks.hero.eyebrow}
      heading={t.publicParks.hero.heading}
      description={t.publicParks.hero.description}
      heroImage="/images/projects/landscaping/publicparks/1.jpg"
      scopeHeading={t.publicParks.scope.heading}
      scopeItems={t.publicParks.scope.items}
      galleryImages={gallery}
      galleryAlt="Public Parks"
      backHref={`${base}/landscaping`}
      backLabel={t.landscaping.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
