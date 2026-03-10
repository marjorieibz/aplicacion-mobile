"use client"

import { MobileHeader } from "@/components/mobile/mobile-header"
import { useRouter } from "next/navigation"
import { Bell, Moon, Volume2, Vibrate, ChevronRight } from "lucide-react"

export default function AjustesPage() {
  const router = useRouter()

  return (
    <div>
      <MobileHeader onAddClick={() => router.push("/mobile/crear")} />
      
      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">Ajustes</h2>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Notificaciones */}
          <div className="flex items-center justify-between p-4 border-b border-[#F5F0E1]">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#FFD700]" />
              <span className="text-[#2D2D2D]">Notificaciones</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFD700]"></div>
            </label>
          </div>

          {/* Modo oscuro */}
          <div className="flex items-center justify-between p-4 border-b border-[#F5F0E1]">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-[#FFD700]" />
              <span className="text-[#2D2D2D]">Modo oscuro</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFD700]"></div>
            </label>
          </div>

          {/* Sonido */}
          <div className="flex items-center justify-between p-4 border-b border-[#F5F0E1]">
            <div className="flex items-center gap-3">
              <Volume2 className="w-5 h-5 text-[#FFD700]" />
              <span className="text-[#2D2D2D]">Sonido de alarma</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#2D2D2D]/30" />
          </div>

          {/* Vibración */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Vibrate className="w-5 h-5 text-[#FFD700]" />
              <span className="text-[#2D2D2D]">Vibración</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FFD700]"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
