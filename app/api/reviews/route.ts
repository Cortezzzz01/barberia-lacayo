import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Obtener todos los comentarios aprobados
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching reviews:', error)
      return NextResponse.json(
        { error: 'Error al obtener comentarios' },
        { status: 500 }
      )
    }

    return NextResponse.json({ reviews: data })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Error inesperado' },
      { status: 500 }
    )
  }
}

// POST - Crear un nuevo comentario
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { user_name, user_email, user_photo, rating, comment } = body

    // Validación básica
    if (!user_name || !user_email || !rating || !comment) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'La calificación debe estar entre 1 y 5' },
        { status: 400 }
      )
    }

    if (comment.length < 10) {
      return NextResponse.json(
        { error: 'El comentario debe tener al menos 10 caracteres' },
        { status: 400 }
      )
    }

    // Insertar en la base de datos
    const { data, error } = await supabase
      .from('reviews')
      .insert([
        {
          user_name,
          user_email,
          user_photo,
          rating,
          comment,
          is_approved: true, // Auto-aprobar por ahora
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Error creating review:', error)
      return NextResponse.json(
        { error: 'Error al crear el comentario' },
        { status: 500 }
      )
    }

    return NextResponse.json({ review: data }, { status: 201 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Error inesperado' },
      { status: 500 }
    )
  }
}


