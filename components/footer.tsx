import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#inicio" className="inline-block mb-6">
              <span className="font-serif text-3xl font-semibold text-primary tracking-wide">
                LACAYO
              </span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Barbería tradicional en Masaya, Nicaragua. Donde cada corte es una obra de arte y cada cliente es familia.
            </p>
            <div className="mb-4">
              <p className="text-sm font-medium text-foreground mb-3">Síguenos en Redes Sociales</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/1BNbJagNdg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/lacayohondoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@carlos.moises.lac?_r=1&_t=ZS-96yRrqpDm1E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+50582771968"
                className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                aria-label="Llamar por teléfono"
              >
                <Phone className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Barberia+Lacayo+Masaya+Nicaragua"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                aria-label="Ver ubicación en Google Maps"
              >
                <MapPin className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-6">
              Enlaces
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Galería", href: "#galeria" },
                { name: "Horarios", href: "#horarios" },
                { name: "Ubicación", href: "#ubicacion" },
                { name: "Contacto", href: "#contacto" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm mb-6">
              Contacto
            </h4>
            <div className="space-y-3 text-foreground/70">
              <p>+505 8277 1968</p>
              <p>
                De los semáforos de la Inca<br />
                2c al Norte, Masaya
              </p>
              <p>
                Todos los días<br />
                10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Barbería Lacayo. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Masaya, Nicaragua
          </p>
        </div>
      </div>
    </footer>
  )
}
