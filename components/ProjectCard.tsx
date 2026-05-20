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
    <div className="group bg-white border border-sand-200 overflow-hidden
      hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(5,11,63,0.14)] hover:border-sand-300
      focus-within:ring-2 focus-within:ring-terra-500 focus-within:ring-offset-2
      transition-all duration-200">
      <div className="relative aspect-[16/10] bg-sand-200 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors duration-300" />
        <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase bg-terra-500 text-white px-2.5 py-1">
          {division}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy-900 mb-2 text-sm leading-snug group-hover:text-terra-500 transition-colors duration-150">
          {title}
        </h3>
        {(year || location) && (
          <div className="flex gap-3 text-xs text-navy-400">
            {location && <span>{location}</span>}
            {year && (
              <>
                {location && <span className="text-sand-300" aria-hidden="true">·</span>}
                <span>{year}</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
