import { Star } from "lucide-react"

const reviews = [
  {
    name: "Luis Eduardo Navarrete",
    rating: 5,
    timeAgo: "Hace 4 años",
    text: "Excelente servicio y atención. Los mejores cortes de Granada sin duda. Muy recomendado.",
    isLocalGuide: true,
  },
  {
    name: "Ton Usaga",
    rating: 5,
    timeAgo: "Hace 4 años",
    text: "Gran ambiente y profesionalismo. Siempre salgo satisfecho con mi corte. Precios justos.",
    isLocalGuide: true,
  },
  {
    name: "Lenin de Jesús Putoy Galán",
    rating: 4,
    timeAgo: "Hace 4 años",
    text: "Buena barbería con estilo clásico. El servicio de afeitado es de primera calidad.",
    isLocalGuide: true,
  },
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
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="font-serif text-6xl font-bold text-primary">4.7</span>
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "text-primary fill-primary" : "text-primary/50 fill-primary/50"}`}
                  />
                ))}
              </div>
              <p className="text-foreground/70 text-sm">Basado en 3 opiniones de Google</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-card border border-border p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                {`"${review.text}"`}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {review.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {review.isLocalGuide && "Local Guide · "}{review.timeAgo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Barberia+Lacayo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm uppercase tracking-widest"
          >
            Ver todas las opiniones en Google
          </a>
        </div>
      </div>
    </section>
  )
}
