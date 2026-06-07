"use client"

import { useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "./ui/button"

export function Reviews() {
  useEffect(() => {
    // Cargar el script de Google Places
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Testimonios
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-serif text-6xl font-bold text-primary">
              4.7
            </span>
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? "text-primary fill-primary"
                        : "text-primary/50 fill-primary/50"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground/70 text-sm">
                Opiniones en Google
              </p>
            </div>
          </div>
        </div>

        {/* Widget de Google Reviews */}
        <div className="mb-12">
          <div className="bg-card border border-border p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              Opiniones de Google
            </h3>
            
            {/* Contenedor del widget de Google */}
            <div className="flex justify-center">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=place_id:ChIJQawSpT0JdI8RG3vAntjHgi4&zoom=15`}
                width="100%"
                height="450"
                style={{ border: 0, maxWidth: '800px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA para dejar reseña */}
        <div className="text-center">
          <div className="bg-primary/5 border-2 border-primary/20 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              ¿Ya nos visitaste?
            </h3>
            <p className="text-foreground/70 mb-6">
              Comparte tu experiencia y ayuda a otros clientes a conocer nuestro servicio
            </p>
            <a
              href={`https://search.google.com/local/writereview?placeid=ChIJQawSpT0JdI8RG3vAntjHgi4`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="px-8"
              >
                Dejar una Reseña en Google
              </Button>
            </a>
          </div>
        </div>

        {/* Link a todas las opiniones */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJQawSpT0JdI8RG3vAntjHgi4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm uppercase tracking-widest"
          >
            Ver todas las opiniones en Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
