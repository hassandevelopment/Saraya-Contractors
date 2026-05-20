import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.wasteManagement.meta.title, description: t.wasteManagement.meta.description }
}

const gallery = Array.from({ length: 8 }, (_, i) => `/images/projects/construction/waste/${i + 1}.jpg`)

export default function WasteManagementPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.wasteManagement.hero.eyebrow}
      heading={t.wasteManagement.hero.heading}
      description={t.wasteManagement.hero.description}
      heroImage="/images/projects/construction/waste/1.jpg"
      scopeHeading={t.wasteManagement.scope.heading}
      scopeItems={t.wasteManagement.scope.items}
      galleryImages={gallery}
      galleryAlt="Waste Management"
      backHref={`${base}/construction`}
      backLabel={t.construction.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
