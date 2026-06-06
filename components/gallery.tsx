"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const hairDesigns = [
  {
    id: 1,
    title: "Diseño Artístico Profesional",
    description: "Diseño personalizado realizado en Barbería Lacayo",
    image: "/images/designs/design-1.jpeg",
  },
  {
    id: 2,
    title: "Diseño Artístico Profesional",
    description: "Diseño personalizado realizado en Barbería Lacayo",
    image: "/images/designs/design-2.jpeg",
  },
  {
    id: 3,
    title: "Diseño Artístico Profesional",
    description: "Diseño personalizado realizado en Barbería Lacayo",
    image: "/images/designs/design-3.jpeg",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="galeria" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Galería
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
            Diseños Realizados
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Algunos de los diseños artísticos que hemos realizado en Barbería Lacayo.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hairDesigns.map((design, index) => (
            <div
              key={design.id}
              className="group relative aspect-square overflow-hidden bg-card border border-border cursor-pointer hover:border-primary/50 transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={design.image}
                alt={design.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-semibold text-white mb-2">
                    {design.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {design.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-card border border-border p-8">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
            ¿Te Gustó Algún Estilo?
          </h3>
          <p className="text-foreground/70 mb-6">
            Contáctanos por WhatsApp y muéstranos el diseño que te interesa. Nuestro barbero lo recreará para ti.
          </p>
          <a
            href="https://wa.me/+50582771968?text=Hola,%20me%20interesa%20un%20diseño%20que%20vi%20en%20la%20galería"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Solicitar Diseño por WhatsApp
          </a>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative max-w-4xl w-full aspect-square">
              <Image
                src={hairDesigns[selectedImage].image}
                alt={hairDesigns[selectedImage].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="font-serif text-2xl font-semibold mb-2">
                {hairDesigns[selectedImage].title}
              </h3>
              <p className="text-white/80">
                {hairDesigns[selectedImage].description}
              </p>
            </div>

            {/* Navigation */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
              {selectedImage > 0 && (
                <button
                  className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white p-3 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage - 1)
                  }}
                >
                  ←
                </button>
              )}
              {selectedImage < hairDesigns.length - 1 && (
                <button
                  className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white p-3 ml-auto transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(selectedImage + 1)
                  }}
                >
                  →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Made with Bob
