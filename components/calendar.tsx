"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { PostItNoteData } from "@/components/post-it-note"
import { getNotesByDate } from "@/lib/mock-data"

interface CalendarProps {
  onNoteClick: (note: PostItNoteData) => void
}

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

// Color mapping for events
const colorStyles: Record<string, string> = {
  yellow: "bg-[#FFD93D]",
  pink: "bg-[#FF9EAA]",
  blue: "bg-[#7DD3E8]",
  green: "bg-[#7DD3A8]",
}

export function Calendar({ onNoteClick }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)) // February 2026
  const [viewMode, setViewMode] = useState<"Month" | "Week" | "Day" | "List">("Month")
  
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  
  // Calculate days from previous month to show
  const prevMonthDays = getDaysInMonth(year, month - 1)
  const daysFromPrevMonth = firstDay
  
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }
  
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }
  
  const formatDate = (day: number) => {
    const m = (month + 1).toString().padStart(2, "0")
    const d = day.toString().padStart(2, "0")
    return `${year}-${m}-${d}`
  }

  // Calculate total cells needed (6 rows x 7 days = 42)
  const totalCells = 42
  const daysFromNextMonth = totalCells - daysFromPrevMonth - daysInMonth

  return (
    <div className="w-full">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button 
            onClick={prevMonth}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <h2 className="text-2xl font-bold text-gray-800">
            {MONTHS[month]} {year}
          </h2>
          <button 
            onClick={nextMonth}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        {/* View Mode Toggle */}
        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          {(["Month", "Week", "Day", "List"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                viewMode === mode
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Days Header */}
        <div className="grid grid-cols-7 bg-[#FFE066]">
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-gray-700 py-3 border-r border-[#F5D04A] last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {/* Days from previous month */}
          {Array.from({ length: daysFromPrevMonth }).map((_, i) => {
            const day = prevMonthDays - daysFromPrevMonth + i + 1
            return (
              <div
                key={`prev-${i}`}
                className="min-h-24 p-2 border-r border-b border-gray-200 bg-gray-50/50"
              >
                <span className="text-sm text-gray-400">{day}</span>
              </div>
            )
          })}
          
          {/* Days of current month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const dateStr = formatDate(day)
            const notes = getNotesByDate(dateStr)
            
            return (
              <div
                key={day}
                className="min-h-24 p-2 border-r border-b border-gray-200 last:border-r-0 bg-white"
              >
                <span className="text-sm font-medium text-gray-700">{day}</span>
                
                {/* Events for this day */}
                <div className="mt-1 space-y-1">
                  {notes.slice(0, 3).map((note) => (
                    <button
                      key={note.id}
                      onClick={() => onNoteClick(note)}
                      className={`w-full text-left px-2 py-1 rounded text-xs font-medium text-gray-800 truncate ${colorStyles[note.color]} hover:opacity-80 transition-opacity`}
                    >
                      {note.time} ({note.title.length > 10 ? "info here" : note.title})
                    </button>
                  ))}
                  {notes.length > 3 && (
                    <span className="text-xs text-gray-500 pl-2">
                      +{notes.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )
          })}
          
          {/* Days from next month */}
          {Array.from({ length: daysFromNextMonth }).map((_, i) => (
            <div
              key={`next-${i}`}
              className="min-h-24 p-2 border-r border-b border-gray-200 bg-gray-50/50"
            >
              <span className="text-sm text-gray-400">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
