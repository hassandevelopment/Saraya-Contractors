import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import SubPageLayout from '@/components/SubPageLayout'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.mechanical.meta.title, description: t.mechanical.meta.description }
}

const gallery = Array.from({ length: 8 }, (_, i) => `/images/projects/construction/mechanical/${i + 1}.jpg`)

export default function MechanicalPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const base = `/${locale}`
  return (
    <SubPageLayout
      locale={locale}
      eyebrow={t.mechanical.hero.eyebrow}
      heading={t.mechanical.hero.heading}
      description={t.mechanical.hero.description}
      heroImage="/images/projects/construction/mechanical/1.jpg"
      scopeHeading={t.mechanical.scope.heading}
      scopeItems={t.mechanical.scope.items}
      galleryImages={gallery}
      galleryAlt="Mechanical Works"
      backHref={`${base}/construction`}
      backLabel={t.construction.hero.heading}
      contactLabel={t.common.getQuote}
      contactHref={`${base}/contact`}
      enquireLabel={t.common.enquire}
    />
  )
}
