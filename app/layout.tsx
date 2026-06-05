import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Barbería Lacayo | Masaya, Nicaragua',
  description: 'Barbería tradicional en Masaya, Nicaragua. Cortes clásicos, afeitado con navaja y estilismo profesional. De los semáforos de la Inca 2c al Norte.',
  keywords: ['barbería', 'Masaya', 'Nicaragua', 'corte de cabello', 'afeitado', 'barbershop'],
  openGraph: {
    title: 'Barbería Lacayo | Masaya, Nicaragua',
    description: 'Barbería tradicional con los mejores servicios de corte y afeitado',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#1a1814',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
