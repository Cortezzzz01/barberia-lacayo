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
            <div className="flex gap-4">
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
                Lun - Vie: 8AM - 7PM<br />
                Sábado: 8AM - 5PM
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
