import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.waterThemeParks.meta.title, description: t.waterThemeParks.meta.description }
}

export default function WaterThemeParksPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.waterThemeParks.hero.eyebrow}
      heading={t.waterThemeParks.hero.heading}
      description={t.waterThemeParks.hero.description}
      scopeHeading={t.waterThemeParks.scope.heading}
      scopeItems={t.waterThemeParks.scope.items}
      backHref={`${base}/landscaping`}
      backLabel={t.landscaping.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
