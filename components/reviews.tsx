"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { ReviewForm } from "./review-form"
import { Button } from "./ui/button"
import type { Review } from "@/lib/supabase"

// Comentarios destacados de Google Maps (estáticos)
const googleReviews = [
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
  const [userReviews, setUserReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)

  // Cargar comentarios de usuarios
  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews')
      const data = await response.json()
      
      if (response.ok) {
        setUserReviews(data.reviews || [])
      }
    } catch (error) {
      console.error('Error fetching reviews:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  // Calcular rating promedio
  const calculateAverageRating = () => {
    const allRatings = [
      ...googleReviews.map(r => r.rating),
      ...userReviews.map(r => r.rating)
    ]
    
    if (allRatings.length === 0) return 0
    
    const sum = allRatings.reduce((acc, rating) => acc + rating, 0)
    return (sum / allRatings.length).toFixed(1)
  }

  const totalReviews = googleReviews.length + userReviews.length
  const averageRating = calculateAverageRating()

  // Formatear fecha relativa
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMs = now.getTime() - date.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
    
    if (diffInDays === 0) return "Hoy"
    if (diffInDays === 1) return "Hace 1 día"
    if (diffInDays < 7) return `Hace ${diffInDays} días`
    if (diffInDays < 30) return `Hace ${Math.floor(diffInDays / 7)} semanas`
    if (diffInDays < 365) return `Hace ${Math.floor(diffInDays / 30)} meses`
    return `Hace ${Math.floor(diffInDays / 365)} años`
  }

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
            <span className="font-serif text-6xl font-bold text-primary">
              {averageRating}
            </span>
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(Number(averageRating))
                        ? "text-primary fill-primary"
                        : "text-primary/50 fill-primary/50"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground/70 text-sm">
                Basado en {totalReviews} opiniones
              </p>
            </div>
          </div>
        </div>

        {/* Comentarios Destacados de Google */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
            Opiniones Destacadas de Google
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {googleReviews.map((review) => (
              <div
                key={review.name}
                className="bg-card border border-border p-8 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-primary fill-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  {`"${review.text}"`}
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {review.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
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
        </div>

        {/* Formulario de Comentarios */}
        <div className="mb-12">
          {!showForm ? (
            <div className="text-center">
              <Button
                onClick={() => setShowForm(true)}
                size="lg"
                className="px-8"
              >
                Dejar un Comentario
              </Button>
            </div>
          ) : (
            <ReviewForm
              onReviewSubmitted={() => {
                fetchReviews()
                setShowForm(false)
              }}
            />
          )}
        </div>

        {/* Comentarios de Usuarios */}
        {userReviews.length > 0 && (
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              Comentarios de Clientes
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {userReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-card border border-border p-8 hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-primary fill-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 mb-6 leading-relaxed italic">
                    {`"${review.comment}"`}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    {review.user_photo ? (
                      <img
                        src={review.user_photo}
                        alt={review.user_name}
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {review.user_name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {review.user_name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {getTimeAgo(review.created_at)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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

// Made with Bob
