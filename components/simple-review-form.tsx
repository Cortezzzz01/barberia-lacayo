"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SimpleReviewFormProps {
  onReviewSubmitted: () => void
}

export function SimpleReviewForm({ onReviewSubmitted }: SimpleReviewFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (rating === 0) {
      setError("Por favor selecciona una calificación")
      return
    }

    if (comment.trim().length < 10) {
      setError("El comentario debe tener al menos 10 caracteres")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: name.trim(),
          user_email: email.trim(),
          user_photo: null,
          rating,
          comment: comment.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el comentario')
      }

      // Limpiar formulario
      setName("")
      setEmail("")
      setRating(0)
      setComment("")
      setSuccess(true)
      onReviewSubmitted()
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => setSuccess(false), 5000)
    } catch (err: any) {
      setError(err.message || "Error al enviar el comentario")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
        Deja tu Comentario
      </h3>

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          ¡Gracias por tu comentario! Se ha publicado exitosamente.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Nombre *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre completo"
            className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            required
            minLength={2}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
            required
          />
          <p className="text-xs text-muted-foreground mt-1">
            No compartiremos tu email con nadie
          </p>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Calificación *
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || rating)
                      ? "text-primary fill-primary"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Comentario *
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comparte tu experiencia en Barbería Lacayo..."
            rows={4}
            className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
            required
            minLength={10}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Mínimo 10 caracteres ({comment.length}/10)
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Submit button */}
        <Button
          type="submit"
          disabled={isSubmitting || rating === 0 || comment.trim().length < 10 || !name.trim() || !email.trim()}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? "Enviando..." : "Publicar Comentario"}
        </Button>
      </form>
    </div>
  )
}

// Made with Bob
