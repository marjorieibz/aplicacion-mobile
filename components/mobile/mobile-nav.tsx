"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Clock, Settings } from "lucide-react"

const navItems = [
  { href: "/mobile", label: "Inicio", icon: User },
  { href: "/mobile/pendientes", label: "Pendientes", icon: Clock },
  { href: "/mobile/ajustes", label: "Ajustes", icon: Settings },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#F5F0E1] rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-6 py-3 z-50">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href === "/mobile" && pathname.startsWith("/mobile/crear"))
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-full transition-all ${
                isActive 
                  ? "bg-[#FFE066]" 
                  : "hover:bg-[#FFE066]/30"
              }`}
            >
              <Icon className="w-5 h-5 text-[#2D2D2D]" />
              <span className="text-xs font-medium text-[#2D2D2D]">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
