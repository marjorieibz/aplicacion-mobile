"use client"

import { MobileHeader } from "@/components/mobile/mobile-header"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

const pendientes = [
  { id: 1, title: "Envío de reporte mensual finanzas", date: "30/01/2026" },
  { id: 2, title: "Reunión VP Comercial", date: "02/02/2026" },
  { id: 3, title: "Envío formato de vacaciones", date: "12/02/2026" },
  { id: 4, title: "Programar cita medica", date: "19/02/2026" },
]

export default function PendientesPage() {
  const router = useRouter()

  return (
    <div>
      <MobileHeader onAddClick={() => router.push("/mobile/crear")} />
      
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">Pendientes prioridad Alta</h2>
        
        <div className="space-y-3">
          {pendientes.map((item) => (
            <button
              key={item.id}
              className="w-full bg-white rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div>
                <span className="text-[#2D2D2D]">{item.title}</span>
                <span className="text-[#2D2D2D]/50 ml-2">{item.date}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#2D2D2D]/30" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
