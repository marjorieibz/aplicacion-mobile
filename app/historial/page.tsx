"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { Logo } from "@/components/logo"
import { BackgroundPostits } from "@/components/background-postits"
import { AlarmModal } from "@/components/alarm-modal"
import type { PostItNoteData } from "@/components/post-it-note"
import { mockNotes } from "@/lib/mock-data"

export default function HistorialPage() {
  const [selectedNote, setSelectedNote] = useState<PostItNoteData | null>(null)

  const today = "2026-02-15"
  
  // Pendientes de prioridad alta
  const pendientesAlta = mockNotes.filter(
    (note) => note.date >= today && (note.priority === "critical" || note.priority === "urgent")
  )
  
  // Todos los pendientes
  const pendientes = mockNotes.filter((note) => note.date >= today)
  
  // Historial de cumplimiento (pasados)
  const cumplidos = mockNotes.filter((note) => note.date < today)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5]">
      {/* Background decorations */}
      <BackgroundPostits />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="pl-16">
        {/* Header with logo */}
        <header className="flex justify-end p-4">
          <Logo />
        </header>
        
        <main className="px-8 pb-8 relative z-10">
          {/* Historial de pendientes */}
          <section className="mb-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Historial de pendientes
            </h1>
            
            {/* Pendientes prioridad Alta */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Pendientes prioridad Alta
              </h2>
              
              <ul className="space-y-2">
                {pendientes.map((note) => (
                  <li key={note.id}>
                    <button
                      onClick={() => setSelectedNote(note)}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group"
                    >
                      <span>{note.title}</span>
                      <span className="text-gray-500">{formatDate(note.date)}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          {/* Historial de cumplimiento */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Historial de cumplimiento
            </h2>
            
            <ul className="space-y-2">
              {/* Static items matching the Figma design */}
              <li className="text-gray-700">Focus Group equipo finanzas</li>
              <li className="text-gray-700">Revision proyeccion 2027</li>
              <li className="text-gray-700">Envio de propuesta comercial</li>
              <li className="text-gray-700">Clases UX Mejoramiento</li>
            </ul>
          </section>
        </main>
      </div>
      
      {/* Alarm Detail Modal */}
      <AlarmModal note={selectedNote} onClose={() => setSelectedNote(null)} />
    </div>
  )
}
