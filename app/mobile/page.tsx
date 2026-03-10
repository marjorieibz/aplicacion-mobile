"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MobileHeader } from "@/components/mobile/mobile-header"
import { Pencil } from "lucide-react"

export default function MobileHomePage() {
  const router = useRouter()
  const [inputText, setInputText] = useState("")

  const handleAddClick = () => {
    router.push("/mobile/crear")
  }

  const handleInputFocus = () => {
    router.push("/mobile/crear")
  }

  return (
    <div>
      <MobileHeader onAddClick={handleAddClick} />
      
      {/* Quick input */}
      <div className="px-4 mt-4">
        <div 
          onClick={handleInputFocus}
          className="bg-white rounded-2xl p-4 flex items-center justify-between cursor-pointer shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="text-[#2D2D2D]/50">Recuérdalo aquí</span>
          <Pencil className="w-5 h-5 text-[#2D2D2D]" />
        </div>
      </div>
    </div>
  )
}
