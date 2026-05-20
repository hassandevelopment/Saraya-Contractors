import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.schoolPlayAreas.meta.title, description: t.schoolPlayAreas.meta.description }
}

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
      scopeHeading={t.schoolPlayAreas.scope.heading}
      scopeItems={t.schoolPlayAreas.scope.items}
      backHref={`${base}/landscaping`}
      backLabel={t.landscaping.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
