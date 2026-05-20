import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.gardens.meta.title, description: t.gardens.meta.description }
}

const gallery = Array.from({ length: 3 }, (_, i) => `/images/projects/landscaping/gardens/${i + 1}.jpg`)

export default function GardensPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.gardens.hero.eyebrow}
      heading={t.gardens.hero.heading}
      description={t.gardens.hero.description}
      heroImage="/images/projects/landscaping/gardens/1.jpg"
      scopeHeading={t.gardens.scope.heading}
      scopeItems={t.gardens.scope.items}
      galleryImages={gallery}
      galleryAlt="Gardens"
      backHref={`${base}/landscaping`}
      backLabel={t.landscaping.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
