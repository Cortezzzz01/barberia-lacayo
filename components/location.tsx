import { MapPin, Navigation } from "lucide-react"

export function Location() {
  return (
    <section id="ubicacion" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div className="relative h-[400px] lg:h-[500px] bg-card border border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.0!2d-86.09!3d12.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAzJzAwLjAiTiA4NsKwMDUnMjQuMCJX!5e0!3m2!1ses!2sni!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Barbería Lacayo"
              className="grayscale contrast-125"
            />
            <div className="absolute inset-0 pointer-events-none border border-primary/20" />
          </div>

          {/* Location Info */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Ubicación
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-8 text-balance">
              Encuéntranos en Masaya
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                  <p className="text-foreground/70">
                    De los semáforos de la Inca<br />
                    2 cuadras al Norte<br />
                    Masaya, Nicaragua
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Cómo Llegar</h3>
                  <p className="text-foreground/70">
                    Desde los semáforos de la Inca, caminá 2 cuadras al Norte. Estacionamiento disponible.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Barberia+Lacayo+Masaya+Nicaragua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                <Navigation className="w-4 h-4" />
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
