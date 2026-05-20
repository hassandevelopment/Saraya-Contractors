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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden bg-sand-200 group">
              <Image
                src={src}
                alt={`${alt} — photo ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
