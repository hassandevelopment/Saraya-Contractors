import type { Metadata } from 'next'
import { Phone, Mail, MessageSquare, MapPin, Clock } from 'lucide-react'
import { getContent, type Locale } from '@/lib/i18n'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.contact.meta.title, description: t.contact.meta.description }
}

export default function ContactPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)

  const details = [
    { icon: Phone, label: t.contact.details.phone.label, value: t.contact.details.phone.placeholder },
    { icon: Mail, label: t.contact.details.email.label, value: t.contact.details.email.placeholder },
    { icon: MessageSquare, label: t.contact.details.whatsapp.label, value: t.contact.details.whatsapp.placeholder },
    { icon: MapPin, label: t.contact.details.address.label, value: t.contact.details.address.placeholder },
    { icon: Clock, label: t.contact.details.hours.label, value: t.contact.details.hours.value },
  ]

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={t.contact.hero.eyebrow}
        heading={t.contact.hero.heading}
        description={t.contact.hero.description}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact details */}
            <div>
              <div className="space-y-6">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 pb-6 border-b border-sand-100 last:border-0 last:pb-0">
                    <div className="shrink-0 w-10 h-10 bg-terra-500/10 flex items-center justify-center text-terra-500">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-navy-400 mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-navy-700">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video bg-sand-200 flex items-center justify-center border border-sand-300">
                <p className="text-sm text-navy-400">Map — coming soon</p>
              </div>
            </div>

            {/* Form */}
            <ContactForm form={t.contact.form} />
          </div>
        </div>
      </section>
    </>
  )
}
