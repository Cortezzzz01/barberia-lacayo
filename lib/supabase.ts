import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our reviews table
export interface Review {
  id: string
  user_name: string
  user_email: string
  user_photo: string | null
  rating: number
  comment: string
  is_approved: boolean
  created_at: string
}


