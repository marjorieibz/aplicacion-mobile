"use client"

import { ArrowLeft, Calendar, Clock, RotateCcw, Trash2, Pencil } from "lucide-react"
import type { PostItNoteData } from "@/components/post-it-note"

interface AlarmModalProps {
  note: PostItNoteData | null
  onClose: () => void
}

export function AlarmModal({ note, onClose }: AlarmModalProps) {
  if (!note) return null

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-in fade-in zoom-in duration-200">
        <div className="bg-[#F5F5F0] rounded-2xl shadow-xl overflow-hidden flex">
          {/* Cyan left border */}
          <div className="w-1.5 bg-[#4DD4E8]" />
          
          {/* Content */}
          <div className="flex-1 p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h2 className="text-lg font-bold text-gray-800">
                Editor de Alarma
              </h2>
            </div>
            
            {/* Title with edit icon */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-gray-800">{note.title}</h3>
              <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <Pencil className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            
            {/* Details */}
            <div className="space-y-4 mb-6">
              {/* Date */}
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">Fecha: {formatDate(note.date)}</span>
                <button className="ml-auto">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
              </div>
              
              {/* Time */}
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">Hora: {note.time}</span>
                <button className="ml-auto">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
              </div>
              
              {/* Repeat */}
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">Repeticion en serie</span>
              </div>
              
              {/* Delete */}
              <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition-colors">
                <Trash2 className="h-5 w-5" />
                <span className="underline">Eliminar alarma</span>
              </button>
            </div>
            
            {/* Footer Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-2.5 border-2 border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-6 py-2.5 bg-[#FFD93D] rounded-full text-gray-800 font-medium hover:bg-[#F5C800] transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}
