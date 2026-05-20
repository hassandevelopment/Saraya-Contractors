import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.projects.meta.title, description: t.projects.meta.description }
}

const placeholderProjects = [
  { title: 'Commercial Complex — Manama', division: 'Construction', year: '2023', location: 'Manama', seed: 10 },
  { title: 'Public Park Development — Riffa', division: 'Landscaping', year: '2022', location: 'Riffa', seed: 20 },
  { title: 'School Play Area — Muharraq', division: 'Landscaping', year: '2023', location: 'Muharraq', seed: 30 },
  { title: 'Residential Fit-out — Seef District', division: 'Construction', year: '2023', location: 'Seef', seed: 40 },
  { title: 'Amusement Park Feature — Isa Town', division: 'Landscaping', year: '2021', location: 'Isa Town', seed: 50 },
  { title: 'Office Block — Diplomatic Area', division: 'Construction', year: '2022', location: 'Manama', seed: 60 },
]

export default function ProjectsPage({ params }: PageProps) {
  const { locale } = params
  const t = getContent(locale)
  const filters = t.projects.filters

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={t.projects.hero.eyebrow}
        heading={t.projects.hero.heading}
        description={t.projects.hero.description}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          {/* Placeholder notice */}
          <div className="mb-12 p-5 bg-sand-50 border border-sand-200 border-l-4 border-l-terra-500">
            <p className="text-sm text-charcoal-600">{t.projects.placeholder}</p>
          </div>

          {/* Filter tabs (static — JS filtering can be added later) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[filters.all, filters.construction, filters.landscaping].map((f) => (
              <span
                key={f}
                className="text-sm font-medium px-4 py-2 border border-sand-200 text-charcoal-600 cursor-default"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProjects.map((p) => (
              <ProjectCard
                key={p.seed}
                title={p.title}
                division={p.division}
                year={p.year}
                location={p.location}
                imageSeed={p.seed}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
