import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.wavePools.meta.title, description: t.wavePools.meta.description }
}

const gallery = Array.from({ length: 3 }, (_, i) => `/images/projects/landscaping/wavepools/${i + 1}.jpg`)

export default function WavePoolsPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.wavePools.hero.eyebrow}
      heading={t.wavePools.hero.heading}
      description={t.wavePools.hero.description}
      heroImage="/images/projects/landscaping/wavepools/1.jpg"
      scopeHeading={t.wavePools.scope.heading}
      scopeItems={t.wavePools.scope.items}
      galleryImages={gallery}
      galleryAlt="Wave Pools"
      backHref={`${base}/landscaping`}
      backLabel={t.landscaping.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
