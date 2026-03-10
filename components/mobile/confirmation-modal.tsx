"use client"

import { AlarmClock } from "lucide-react"

interface ConfirmationModalProps {
  isOpen: boolean
  onConfirm: () => void
  type?: "created" | "edited" | "cancelled"
}

export function ConfirmationModal({ isOpen, onConfirm, type = "created" }: ConfirmationModalProps) {
  if (!isOpen) return null

  const messages = {
    created: "¡Alarma Creada!",
    edited: "¡Alarma Editada!",
    cancelled: "¡Alarma Cancelada!",
  }

  const isCancel = type === "cancelled"

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 px-8">
      <div className="bg-[#F5F0E1] rounded-3xl p-8 w-full max-w-sm shadow-xl border-l-4 border-[#40E0D0]">
        <div className="flex flex-col items-center text-center">
          <div className={`mb-4 ${isCancel ? "text-[#F08080]" : "text-[#40E0D0]"}`}>
            <AlarmClock className="w-16 h-16" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-2xl font-medium text-[#2D2D2D] mb-6">
            {messages[type].split(" ")[0]} <span className="font-bold">{messages[type].split(" ")[1]}</span>
          </h2>
          
          <button
            onClick={onConfirm}
            className={`px-10 py-3 rounded-full font-medium transition-colors ${
              isCancel
                ? "bg-[#F08080] text-white hover:bg-[#E07070]"
                : "bg-[#40E0D0] text-white hover:bg-[#35C9BA]"
            }`}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}
