import Image from "next/image"

const services = [
  {
    name: "Corte Adulto",
    description: "Corte de cabello profesional con técnicas modernas y clásicas. Incluye degradado y acabado con navaja.",
    price: "C$ 250",
    image: "/images/service-corte.jpg",
    note: "Estilos especiales tienen costo extra"
  },
  {
    name: "Barba Profesional",
    description: "Perfilado y arreglo de barba con técnicas profesionales. Incluye toalla caliente y acabado impecable.",
    price: "C$ 200",
    image: "/images/service-barba.jpg",
  },
  {
    name: "Corte + Barba",
    description: "Servicio completo que incluye corte de cabello y perfilado profesional de barba. La mejor experiencia.",
    price: "C$ 380",
    image: "/images/service-estilo.jpg",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 text-balance">
            Artesanía en Cada Corte
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Cada servicio es una experiencia única, combinando técnicas tradicionales con atención personalizada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                  {service.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {service.name}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-2">
                  {service.description}
                </p>
                {'note' in service && (
                  <p className="text-xs text-muted-foreground italic">
                    * {service.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Corte Niño Varonil", price: "C$ 150", note: "Estilos tienen costo extra" },
            { name: "Servicio a Domicilio", price: "C$ 25", note: "Adicional al servicio" },
            { name: "Corte Premium (después 5pm)", price: "C$ 300", note: "Horario especial" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex flex-col p-4 border border-border hover:border-primary/50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-foreground font-medium">{item.name}</span>
                <span className="text-primary font-bold text-lg">{item.price}</span>
              </div>
              <span className="text-xs text-muted-foreground italic">{item.note}</span>
            </div>
          ))}
        </div>

        {/* Corte + Barba Premium */}
        <div className="mt-8 bg-primary/5 border-2 border-primary/20 p-6 text-center">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
            💎 Servicio Premium (después de las 5pm)
          </h3>
          <div className="flex items-center justify-center gap-8 mt-4">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Corte Premium</p>
              <p className="text-primary font-bold text-3xl">C$ 300</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">Corte + Barba Premium</p>
              <p className="text-primary font-bold text-3xl">C$ 500</p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 bg-card border border-border p-8">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-6 text-center">
            📋 Información Importante
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">⏰</span>
                <div>
                  <p className="font-medium text-foreground">Horario de Atención</p>
                  <p className="text-sm text-foreground/70">10:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">📅</span>
                <div>
                  <p className="font-medium text-foreground">Sistema de Atención</p>
                  <p className="text-sm text-foreground/70">Por orden de llegada o previa cita</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">⌛</span>
                <div>
                  <p className="font-medium text-foreground">Puntualidad</p>
                  <p className="text-sm text-foreground/70">Debe estar 15 minutos antes de su cita</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">💳</span>
                <div>
                  <p className="font-medium text-foreground">Para Agendar Cita</p>
                  <p className="text-sm text-foreground/70">Depositar un día antes mínimo</p>
                  <p className="text-xs text-muted-foreground mt-1">Banpro: 100 21 500 45 38 84</p>
                  <p className="text-xs text-muted-foreground">Carlos Moisés Lacayo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">❌</span>
                <div>
                  <p className="font-medium text-foreground">Importante</p>
                  <p className="text-sm text-foreground/70">No llamar hasta el día que viene</p>
                  <p className="text-xs text-muted-foreground mt-1">Avisar que viene NO es agendar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">📈</span>
                <div>
                  <p className="font-medium text-foreground">Agendar después de las 5pm</p>
                  <p className="text-sm text-foreground/70">Aplican tarifas premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
