import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.sculpturesMurals.meta.title, description: t.sculpturesMurals.meta.description }
}

export default function SculpturesMuralsPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.sculpturesMurals.hero.eyebrow}
      heading={t.sculpturesMurals.hero.heading}
      description={t.sculpturesMurals.hero.description}
      scopeHeading={t.sculpturesMurals.scope.heading}
      scopeItems={t.sculpturesMurals.scope.items}
      backHref={`${base}/landscaping`}
      backLabel={t.landscaping.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
