import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.electrical.meta.title, description: t.electrical.meta.description }
}

const gallery = Array.from({ length: 8 }, (_, i) => `/images/projects/construction/electrical/${i + 1}.jpg`)

export default function ElectricalPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.electrical.hero.eyebrow}
      heading={t.electrical.hero.heading}
      description={t.electrical.hero.description}
      heroImage="/images/projects/construction/electrical/1.jpg"
      scopeHeading={t.electrical.scope.heading}
      scopeItems={t.electrical.scope.items}
      galleryImages={gallery}
      galleryAlt="Electrical Works"
      backHref={`${base}/construction`}
      backLabel={t.construction.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
