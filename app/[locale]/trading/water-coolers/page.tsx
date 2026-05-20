import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.waterCoolers.meta.title, description: t.waterCoolers.meta.description }
}

const gallery = [
  '/images/projects/trading/features.jpg',
  '/images/projects/trading/image1.jpg',
  '/images/projects/trading/image2.jpg',
  '/images/projects/trading/image3.jpg',
  '/images/projects/trading/image4.jpg',
  '/images/projects/trading/image5.jpg',
]

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
      heroImage="/images/projects/trading/features.jpg"
      scopeHeading={t.waterCoolers.scope.heading}
      scopeItems={t.waterCoolers.scope.items}
      galleryImages={gallery}
      galleryAlt="Water Coolers"
      backHref={`${base}/trading`}
      backLabel={t.trading.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
