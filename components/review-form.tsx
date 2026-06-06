"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

interface ReviewFormProps {
  onReviewSubmitted: () => void
}

export function ReviewForm({ onReviewSubmitted }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Verificar si el usuario está autenticado
  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  // Iniciar sesión con Google
  const signInWithGoogle = async () => {
    setIsLoading(true)
    setError("")
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        },
      })

      if (error) {
        setError("Error al iniciar sesión con Google")
        console.error(error)
      }
    } catch (err) {
      setError("Error inesperado al iniciar sesión")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  // Cerrar sesión
  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setRating(0)
    setComment("")
  }

  // Enviar comentario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      setError("Debes iniciar sesión para dejar un comentario")
      return
    }

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
          user_name: user.user_metadata.full_name || user.email,
          user_email: user.email,
          user_photo: user.user_metadata.avatar_url || null,
          rating,
          comment: comment.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el comentario')
      }

      // Limpiar formulario
      setRating(0)
      setComment("")
      onReviewSubmitted()
      
      // Mostrar mensaje de éxito
      alert("¡Gracias por tu comentario! Se ha publicado exitosamente.")
    } catch (err: any) {
      setError(err.message || "Error al enviar el comentario")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Verificar usuario al cargar
  useState(() => {
    checkUser()
    
    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  })

  return (
    <div className="bg-card border border-border p-8 max-w-2xl mx-auto">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
        Deja tu Comentario
      </h3>

      {!user ? (
        <div className="text-center py-8">
          <p className="text-foreground/70 mb-6">
            Inicia sesión con tu cuenta de Google para dejar un comentario
          </p>
          <Button
            onClick={signInWithGoogle}
            disabled={isLoading}
            className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
          >
            {isLoading ? (
              "Cargando..."
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Iniciar sesión con Google
              </>
            )}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Usuario info */}
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              {user.user_metadata.avatar_url ? (
                <img
                  src={user.user_metadata.avatar_url}
                  alt={user.user_metadata.full_name}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {user.user_metadata.full_name?.[0] || user.email[0].toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <p className="font-medium text-foreground text-sm">
                  {user.user_metadata.full_name || user.email}
                </p>
                <p className="text-muted-foreground text-xs">{user.email}</p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={signOut}
            >
              Cerrar sesión
            </Button>
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
              className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
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
            disabled={isSubmitting || rating === 0 || comment.trim().length < 10}
            className="w-full"
          >
            {isSubmitting ? "Enviando..." : "Publicar Comentario"}
          </Button>
        </form>
      )}
    </div>
  )
}
