import Image from "next/image"

const services = [
  {
    name: "Corte Clásico",
    description: "Corte de cabello tradicional con técnicas de barbería clásica, incluyendo degradado y acabado con navaja.",
    price: "C$ 150",
    image: "/images/service-corte.png",
  },
  {
    name: "Afeitado con Navaja",
    description: "Experiencia de afeitado tradicional con toalla caliente, preparación de la piel y acabado suave.",
    price: "C$ 120",
    image: "/images/service-barba.png",
  },
  {
    name: "Corte + Barba",
    description: "Servicio completo que incluye corte de cabello y perfilado o afeitado de barba profesional.",
    price: "C$ 250",
    image: "/images/service-estilo.png",
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
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Diseño de Cejas", price: "C$ 50" },
            { name: "Tinte de Barba", price: "C$ 80" },
            { name: "Mascarilla Facial", price: "C$ 100" },
            { name: "Corte Infantil", price: "C$ 100" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center p-4 border border-border hover:border-primary/50 transition-colors duration-200"
            >
              <span className="text-foreground">{item.name}</span>
              <span className="text-primary font-medium">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
