"use client"

import { Clock } from "lucide-react"

const schedule = [
  { day: "Lunes", hours: "10:00 AM - 6:00 PM", isOpen: true },
  { day: "Martes", hours: "10:00 AM - 6:00 PM", isOpen: true },
  { day: "Miércoles", hours: "10:00 AM - 6:00 PM", isOpen: true },
  { day: "Jueves", hours: "10:00 AM - 6:00 PM", isOpen: true },
  { day: "Viernes", hours: "10:00 AM - 6:00 PM", isOpen: true },
  { day: "Sábado", hours: "10:00 AM - 6:00 PM", isOpen: true },
  { day: "Domingo", hours: "10:00 AM - 6:00 PM", isOpen: true },
]

const busyHours = [
  { time: "6am", level: 1 },
  { time: "9am", level: 3 },
  { time: "12pm", level: 5 },
  { time: "3pm", level: 4 },
  { time: "6pm", level: 3 },
  { time: "9pm", level: 1 },
]

export function Schedule() {
  const today = new Date().toLocaleDateString("es-ES", { weekday: "long" })
  const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1)

  return (
    <section id="horarios" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Schedule */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Horarios
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-8 text-balance">
              Siempre Listos para Atenderte
            </h2>

            <div className="space-y-0">
              {schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center py-4 border-b border-border ${
                    item.day === capitalizedToday ? "bg-primary/5 -mx-4 px-4" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.day === capitalizedToday && (
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    )}
                    <span className={`text-foreground ${item.day === capitalizedToday ? "font-semibold" : ""}`}>
                      {item.day}
                    </span>
                  </div>
                  <span className={item.isOpen ? "text-foreground/70" : "text-muted-foreground"}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Busy Hours */}
          <div>
            <div className="bg-card border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Información de Atención
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">📋 Sistema de Atención</h4>
                  <p className="text-sm text-foreground/70">
                    Atendemos por <span className="text-primary font-medium">orden de llegada</span> o con <span className="text-primary font-medium">previa cita</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium text-foreground mb-2">📅 Para Agendar Cita</h4>
                  <ul className="text-sm text-foreground/70 space-y-2">
                    <li>• Depositar un día antes mínimo</li>
                    <li>• Enviar foto del baucher</li>
                    <li>• No llamar hasta el día que viene</li>
                    <li className="text-red-600 font-medium">• Avisar que viene NO es agendar</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium text-foreground mb-2">💳 Datos para Depósito</h4>
                  <div className="text-sm text-foreground/70 space-y-1">
                    <p><span className="font-medium">Banco:</span> Banpro</p>
                    <p><span className="font-medium">Cuenta:</span> 100 21 500 45 38 84</p>
                    <p><span className="font-medium">Titular:</span> Carlos Moisés Lacayo</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium text-foreground mb-2">⏰ Puntualidad</h4>
                  <p className="text-sm text-foreground/70">
                    Debe estar <span className="text-primary font-medium">15 minutos antes</span> de su hora agendada
                  </p>
                </div>

                <div className="pt-4 border-t border-border bg-primary/5 -mx-8 -mb-8 px-8 py-4">
                  <p className="text-sm text-foreground/70">
                    <span className="text-primary font-medium">💎 Horario Premium:</span> Después de las 5pm aplican tarifas especiales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
