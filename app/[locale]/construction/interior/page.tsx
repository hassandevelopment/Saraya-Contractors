import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.interior.meta.title, description: t.interior.meta.description }
}

const gallery = Array.from({ length: 8 }, (_, i) => `/images/projects/construction/interior/${i + 1}.jpg`)

export default function InteriorPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.interior.hero.eyebrow}
      heading={t.interior.hero.heading}
      description={t.interior.hero.description}
      heroImage="/images/projects/construction/interior/1.jpg"
      scopeHeading={t.interior.scope.heading}
      scopeItems={t.interior.scope.items}
      galleryImages={gallery}
      galleryAlt="Interior Fit-out"
      backHref={`${base}/construction`}
      backLabel={t.construction.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
