import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.waterCoolers.meta.title, description: t.waterCoolers.meta.description }
}

export default function WaterCoolersPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.waterCoolers.hero.eyebrow}
      heading={t.waterCoolers.hero.heading}
      description={t.waterCoolers.hero.description}
      scopeHeading={t.waterCoolers.scope.heading}
      scopeItems={t.waterCoolers.scope.items}
      backHref={`${base}/trading`}
      backLabel={t.trading.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
