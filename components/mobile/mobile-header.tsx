"use client"

import Link from "next/link"
import { Plus } from "lucide-react"

interface MobileHeaderProps {
  onAddClick?: () => void
}

export function MobileHeader({ onAddClick }: MobileHeaderProps) {
  return (
    <header className="bg-[#FFE066] px-4 py-4 pb-6 rounded-b-3xl">
      {/* Logo */}
      <div className="flex items-start justify-between">
        <Link href="/mobile" className="flex flex-col">
          <div className="relative">
            <span className="text-2xl font-bold text-[#2D2D2D]">
              Post-it
              <span className="text-[#FFD700] text-sm align-top ml-0.5">
                <svg className="inline-block w-5 h-5 -mt-1" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="14" height="14" rx="1" fill="#FFE066" stroke="#E5C84C" strokeWidth="1.5" transform="rotate(-6 4 4)"/>
                  <rect x="6" y="6" width="14" height="14" rx="1" fill="#FFF59D" stroke="#E5C84C" strokeWidth="1.5" transform="rotate(-3 6 6)"/>
                </svg>
              </span>
            </span>
            <span className="block text-xl font-bold text-[#2D2D2D] -mt-1">
              <span className="text-[#FFB800]">O'</span>Clock
            </span>
          </div>
        </Link>
        
        <button
          onClick={onAddClick}
          className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center shadow-md hover:bg-[#FFCA00] transition-colors"
        >
          <Plus className="w-6 h-6 text-[#2D2D2D]" strokeWidth={3} />
        </button>
      </div>

      {/* Greeting */}
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-[#2D2D2D]">Hola, Lina</h1>
        <p className="text-[#2D2D2D]/70 text-sm">¿Qué no puedes olvidar hoy?</p>
      </div>
    </header>
  )
}
