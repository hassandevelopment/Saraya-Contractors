import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.schoolPlayAreas.meta.title, description: t.schoolPlayAreas.meta.description }
}

const gallery = Array.from({ length: 10 }, (_, i) => `/images/projects/landscaping/school/${i + 1}.jpg`)

export default function SchoolPlayAreasPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.schoolPlayAreas.hero.eyebrow}
      heading={t.schoolPlayAreas.hero.heading}
      description={t.schoolPlayAreas.hero.description}
      heroImage="/images/projects/landscaping/school/1.jpg"
      scopeHeading={t.schoolPlayAreas.scope.heading}
      scopeItems={t.schoolPlayAreas.scope.items}
      galleryImages={gallery}
      galleryAlt="School Play Areas"
      backHref={`${base}/landscaping`}
      backLabel={t.landscaping.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
