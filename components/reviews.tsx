"use client"

import { Star } from "lucide-react"
import { Button } from "./ui/button"

// Reseñas destacadas de Google Maps
const featuredReviews = [
  {
    name: "Carlos Mendoza",
    rating: 5,
    text: "Excelente servicio, muy profesionales y el ambiente es increíble. Totalmente recomendado!",
    date: "Hace 2 semanas"
  },
  {
    name: "Roberto García",
    rating: 5,
    text: "La mejor barbería de la zona. Siempre salgo satisfecho con mi corte. Los barberos son muy talentosos.",
    date: "Hace 1 mes"
  },
  {
    name: "Miguel Ángel",
    rating: 5,
    text: "Atención de primera, muy buen ambiente y precios justos. Sin duda volveré!",
    date: "Hace 3 semanas"
  }
]

export function Reviews() {
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

        {/* Reseñas destacadas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-primary fill-primary"
                  />
                ))}
              </div>
              
              {/* Comentario */}
              <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                "{review.text}"
              </p>
              
              {/* Autor y fecha */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <p className="font-medium text-foreground text-sm">
                  {review.name}
                </p>
                <p className="text-foreground/50 text-xs">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
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
