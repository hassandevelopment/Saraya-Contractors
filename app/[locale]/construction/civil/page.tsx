import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.civil.meta.title, description: t.civil.meta.description }
}

const gallery = Array.from({ length: 8 }, (_, i) => `/images/projects/construction/civil/${i + 1}.jpg`)

export default function CivilPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.civil.hero.eyebrow}
      heading={t.civil.hero.heading}
      description={t.civil.hero.description}
      heroImage="/images/projects/construction/civil/1.jpg"
      scopeHeading={t.civil.scope.heading}
      scopeItems={t.civil.scope.items}
      galleryImages={gallery}
      galleryAlt="Civil Construction"
      backHref={`${base}/construction`}
      backLabel={t.construction.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
