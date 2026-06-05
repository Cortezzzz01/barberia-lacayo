import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/barbershop-hero.png"
          alt="Interior de Barbería Lacayo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-6 font-medium">
          Est. Masaya, Nicaragua
        </p>
        
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 tracking-tight text-balance">
          Barbería Lacayo
        </h1>
        
        <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Donde la tradición se encuentra con el estilo moderno. Más de una década perfeccionando el arte del corte y afeitado clásico.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#contacto"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Reservar Cita
          </Link>
          <Link
            href="#servicios"
            className="border border-foreground/30 text-foreground px-8 py-4 text-sm uppercase tracking-widest font-medium hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Ver Servicios
          </Link>
        </div>

        {/* Rating Badge */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < 4 ? "text-primary" : "text-primary/50"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-foreground/70 text-sm">4.7 estrellas en Google</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
