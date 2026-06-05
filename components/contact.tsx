"use client"

import { Phone, MessageCircle, Clock, MapPin } from "lucide-react"

export function Contact() {
  const phoneNumber = "+50582771968"
  const whatsappMessage = encodeURIComponent("Hola, me gustaría reservar una cita en Barbería Lacayo")

  return (
    <section id="contacto" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Contacto
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
              Reserva Tu Cita
            </h2>
            <p className="text-foreground/70 text-lg mb-10">
              Contáctanos por teléfono o WhatsApp para agendar tu cita. Sin esperas, directo al sillón.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Teléfono</p>
                  <p className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    +505 8277 1968
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                  <p className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    Enviar mensaje
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Horario</p>
                  <p className="text-foreground">
                    Lun - Vie: 8AM - 7PM<br />
                    Sábado: 8AM - 5PM
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Dirección</p>
                  <p className="text-foreground">
                    De los semáforos de la Inca<br />
                    2c al Norte, Masaya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <div className="w-full bg-card border border-border p-10 text-center">
              <div className="w-20 h-20 bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Reservación Rápida por WhatsApp
              </h3>
              
              <p className="text-foreground/70 mb-8">
                Envíanos un mensaje con tu nombre, fecha y hora preferida. Te confirmaremos en minutos.
              </p>

              <a
                href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>

              <p className="text-muted-foreground text-sm mt-6">
                Respuesta típica: menos de 30 minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
