"use client"

import { Clock } from "lucide-react"

const schedule = [
  { day: "Lunes", hours: "8:00 AM - 7:00 PM", isOpen: true },
  { day: "Martes", hours: "8:00 AM - 7:00 PM", isOpen: true },
  { day: "Miércoles", hours: "8:00 AM - 7:00 PM", isOpen: true },
  { day: "Jueves", hours: "8:00 AM - 7:00 PM", isOpen: true },
  { day: "Viernes", hours: "8:00 AM - 7:00 PM", isOpen: true },
  { day: "Sábado", hours: "8:00 AM - 5:00 PM", isOpen: true },
  { day: "Domingo", hours: "Cerrado", isOpen: false },
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
                  Horas de Mayor Afluencia
                </h3>
              </div>
              
              <p className="text-foreground/70 mb-8">
                Te recomendamos visitar en las mañanas temprano o después de las 4pm para menor tiempo de espera.
              </p>

              {/* Bar Chart */}
              <div className="flex items-end justify-between gap-2 h-32 mb-4">
                {busyHours.map((hour) => (
                  <div key={hour.time} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-primary/20 rounded-sm transition-all duration-300 hover:bg-primary/40"
                      style={{ height: `${hour.level * 20}%` }}
                    >
                      <div
                        className="w-full bg-primary rounded-sm"
                        style={{ height: `${hour.level * 15}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                {busyHours.map((hour) => (
                  <span key={hour.time}>{hour.time}</span>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-foreground/70">
                  <span className="text-primary font-medium">Consejo:</span> Los martes y miércoles son los días con menos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
