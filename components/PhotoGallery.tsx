import Image from 'next/image'

interface PhotoGalleryProps {
  images: string[]
  alt: string
}

export default function PhotoGallery({ images, alt }: PhotoGalleryProps) {
  if (!images.length) return null
  return (
    <section className="py-16 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.map((src, i) => (
            <div
              key={src}
              className="relative overflow-hidden bg-sand-200 group cursor-zoom-in"
              style={{ aspectRatio: i === 0 ? '16/10' : '1/1', gridColumn: i === 0 ? 'span 2' : undefined }}
            >
              <Image
                src={src}
                alt={`${alt} — photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
