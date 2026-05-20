import Image from 'next/image'

interface ProjectCardProps {
  title: string
  division: string
  year?: string
  location?: string
  imageSrc: string
}

export default function ProjectCard({ title, division, year, location, imageSrc }: ProjectCardProps) {
  return (
    <div className="group bg-white border border-sand-200 overflow-hidden hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-all duration-200">
      <div className="relative aspect-[16/10] bg-sand-200 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase bg-terra-500 text-white px-2.5 py-1">
          {division}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy-900 mb-2 text-sm leading-snug">{title}</h3>
        {(year || location) && (
          <div className="flex gap-3 text-xs text-navy-400">
            {location && <span>{location}</span>}
            {year && <span>{year}</span>}
          </div>
        )}
      </div>
    </div>
  )
}
