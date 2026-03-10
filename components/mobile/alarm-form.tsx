"use client"

import { useState } from "react"
import { Pencil, ChevronLeft, ChevronRight } from "lucide-react"

interface AlarmFormProps {
  onCancel: () => void
  onConfirm: () => void
  initialText?: string
}

export function AlarmForm({ onCancel, onConfirm, initialText = "" }: AlarmFormProps) {
  const [text, setText] = useState(initialText || "Recordar llamada a Marianna")
  const [hours, setHours] = useState("07")
  const [minutes, setMinutes] = useState("30")
  const [period, setPeriod] = useState<"AM" | "PM">("AM")
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 1, 26))
  const [calendarMonth, setCalendarMonth] = useState(new Date(2026, 1, 1))

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    return `${day} / ${month} /${year}`
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    
    const days: (number | null)[] = []
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }

  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ]

  return (
    <div className="bg-[#F5F0E1] rounded-3xl p-6 mx-4 shadow-lg">
      {/* Text input */}
      <div className="bg-white rounded-2xl p-4 mb-6 relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe eso que no puedes olvidar"
          className="w-full text-lg text-[#2D2D2D] bg-transparent outline-none pr-8"
        />
        <Pencil className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#40E0D0]" />
      </div>

      {/* Time picker */}
      <div className="mb-6">
        <label className="text-[#2D2D2D] text-sm mb-2 block">Recuérdamelo a las</label>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white rounded-xl px-4 py-3">
            <input
              type="text"
              value={hours}
              onChange={(e) => setHours(e.target.value.slice(0, 2))}
              className="w-12 text-4xl font-light text-[#2D2D2D] text-center bg-transparent outline-none"
              maxLength={2}
            />
            <span className="text-4xl font-light text-[#2D2D2D] mx-1">:</span>
            <input
              type="text"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value.slice(0, 2))}
              className="w-12 text-4xl font-light text-[#2D2D2D] text-center bg-transparent outline-none"
              maxLength={2}
            />
          </div>
          <div className="flex flex-col bg-white rounded-xl px-3 py-2">
            <button
              onClick={() => setPeriod("AM")}
              className={`text-sm px-2 py-1 rounded ${period === "AM" ? "text-[#2D2D2D] font-bold" : "text-[#2D2D2D]/50"}`}
            >
              AM
            </button>
            <button
              onClick={() => setPeriod("PM")}
              className={`text-sm px-2 py-1 rounded ${period === "PM" ? "text-[#2D2D2D] font-bold" : "text-[#2D2D2D]/50"}`}
            >
              PM
            </button>
          </div>
        </div>
      </div>

      {/* Date picker */}
      <div className="mb-6">
        <label className="text-[#2D2D2D] text-sm mb-2 block">De día</label>
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-full bg-white rounded-xl px-4 py-3 text-left text-lg text-[#2D2D2D]"
        >
          {formatDate(selectedDate)}
        </button>

        {showCalendar && (
          <div className="bg-white rounded-2xl p-4 mt-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[#2D2D2D]">
                  {monthNames[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
                </span>
                <ChevronRight className="w-4 h-4 text-[#FFD700]" />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft className="w-4 h-4 text-[#2D2D2D]/50" />
                </button>
                <button
                  onClick={() => setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1))}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronRight className="w-4 h-4 text-[#2D2D2D]/50" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs text-[#2D2D2D]/50 mb-2">
              {["SUN", "MON", "WED", "THU", "FRI", "SAT", "SUN"].map((day, i) => (
                <span key={i}>{day}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {getDaysInMonth(calendarMonth).map((day, i) => (
                <button
                  key={i}
                  onClick={() => day && setSelectedDate(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day))}
                  disabled={!day}
                  className={`w-8 h-8 rounded-full text-sm flex items-center justify-center mx-auto ${
                    day === selectedDate.getDate() && 
                    calendarMonth.getMonth() === selectedDate.getMonth() &&
                    calendarMonth.getFullYear() === selectedDate.getFullYear()
                      ? "bg-[#FFE066] text-[#2D2D2D] font-bold"
                      : day === 1
                      ? "text-[#FFD700] font-medium"
                      : day
                      ? "text-[#2D2D2D] hover:bg-[#FFE066]/30"
                      : ""
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Priority dropdown */}
      <div className="mb-8">
        <label className="text-[#2D2D2D] text-sm mb-2 block">Prioridad</label>
        <select className="w-full bg-white rounded-xl px-4 py-3 text-lg text-[#2D2D2D] outline-none appearance-none cursor-pointer">
          <option value="">Prioridad</option>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4">
        <button
          onClick={onCancel}
          className="flex-1 bg-[#FFE066] text-[#2D2D2D] py-3 rounded-full font-medium hover:bg-[#FFD54F] transition-colors"
        >
          Cancelar
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 bg-[#FFD700] text-[#2D2D2D] py-3 rounded-full font-medium hover:bg-[#FFCA00] transition-colors"
        >
          Confirmar
        </button>
      </div>
    </div>
  )
}
