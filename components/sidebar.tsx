"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, List, Settings, Menu } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/historial", icon: List, label: "Historial" },
    { href: "#", icon: Settings, label: "Ajustes usuario" },
  ]

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col bg-white border-r border-gray-200">
      {/* Hamburger menu */}
      <div className="flex h-14 items-center justify-center border-b border-gray-200">
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center gap-1 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-lg p-2 text-center transition-colors ${
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <div className={`rounded-lg p-2 ${isActive ? "bg-white shadow-sm" : ""}`}>
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-medium leading-tight">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
