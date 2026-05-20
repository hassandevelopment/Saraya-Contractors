interface ProjectCardProps {
  title: string
  division: string
  year?: string
  location?: string
  imageSeed?: number
}

export default function ProjectCard({ title, division, year, location, imageSeed = 1 }: ProjectCardProps) {
  return (
    <div className="group bg-white border border-sand-200 overflow-hidden hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-all duration-200">
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] bg-charcoal-800 overflow-hidden">
        <img
          src={`https://picsum.photos/seed/saraya${imageSeed}/800/500`}
          alt={title}
          width={800}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-300"
        />
        {/* Division badge */}
        <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase bg-terra-500 text-white px-2.5 py-1">
          {division}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-semibold text-charcoal-900 mb-2 text-sm leading-snug">{title}</h3>
        {(year || location) && (
          <div className="flex gap-3 text-xs text-charcoal-400">
            {location && <span>{location}</span>}
            {year && <span>{year}</span>}
          </div>
        )}
      </div>
    </div>
  )
}
