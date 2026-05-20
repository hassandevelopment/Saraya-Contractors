import type { Metadata } from 'next'
import { getContent, type Locale } from '@/lib/i18n'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'

interface PageProps { params: { locale: Locale } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = getContent(params.locale)
  return { title: t.projects.meta.title, description: t.projects.meta.description }
}

const allProjects = [
  { title: 'Civil Works — Manama', division: 'Construction', year: '2023', location: 'Manama', imageSrc: '/images/projects/construction/civil/1.jpg' },
  { title: 'Electrical Works — Riffa', division: 'Construction', year: '2022', location: 'Riffa', imageSrc: '/images/projects/construction/electrical/1.jpg' },
  { title: 'Mechanical Systems — Seef', division: 'Construction', year: '2023', location: 'Seef', imageSrc: '/images/projects/construction/mechanical/1.jpg' },
  { title: 'Interior Fit-out — Manama', division: 'Construction', year: '2022', location: 'Manama', imageSrc: '/images/projects/construction/interior/1.jpg' },
  { title: 'Public Park — Riffa', division: 'Landscaping', year: '2022', location: 'Riffa', imageSrc: '/images/projects/landscaping/publicparks/1.jpg' },
  { title: 'School Play Area — Muharraq', division: 'Landscaping', year: '2023', location: 'Muharraq', imageSrc: '/images/projects/landscaping/school/1.jpg' },
  { title: 'Amusement Park — Isa Town', division: 'Landscaping', year: '2021', location: 'Isa Town', imageSrc: '/images/projects/landscaping/amusement/1.jpg' },
  { title: 'Wave Pool — Bahrain', division: 'Landscaping', year: '2021', location: 'Bahrain', imageSrc: '/images/projects/landscaping/wavepools/1.jpg' },
  { title: 'Water Theme Park', division: 'Landscaping', year: '2020', location: 'Bahrain', imageSrc: '/images/projects/landscaping/waterparks/1.jpg' },
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
            {allProjects.map((p) => (
              <ProjectCard
                key={p.imageSrc}
                title={p.title}
                division={p.division}
                year={p.year}
                location={p.location}
                imageSrc={p.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
