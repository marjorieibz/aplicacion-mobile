import type { PostItNoteData } from "@/components/post-it-note"

export const mockNotes: PostItNoteData[] = [
  // Events for February 2026 matching the Figma design
  {
    id: "1",
    title: "Recordatorio llamada Marianna",
    content: "Llamar a Marianna para coordinar reunion",
    time: "13:00",
    date: "2026-01-30",
    color: "blue",
    priority: "normal",
  },
  {
    id: "2",
    title: "Envio reporte mensual finanzas",
    content: "Enviar reporte mensual al equipo de finanzas",
    time: "13:00",
    date: "2026-01-30",
    color: "yellow",
    priority: "urgent",
  },
  {
    id: "3",
    title: "Reunion VP Comercial",
    content: "Reunion con VP Comercial para revisar estrategia",
    time: "7:30",
    date: "2026-02-02",
    color: "blue",
    priority: "urgent",
  },
  {
    id: "4",
    title: "Info importante",
    content: "Recordatorio de tarea pendiente",
    time: "13:00",
    date: "2026-02-11",
    color: "yellow",
    priority: "normal",
  },
  {
    id: "5",
    title: "Info adicional",
    content: "Segunda tarea del dia",
    time: "13:00",
    date: "2026-02-11",
    color: "yellow",
    priority: "normal",
  },
  {
    id: "6",
    title: "Envio formato vacaciones",
    content: "Enviar formato de vacaciones a RRHH",
    time: "21:00",
    date: "2026-02-12",
    color: "pink",
    priority: "urgent",
  },
  {
    id: "7",
    title: "Programar cita medica",
    content: "Agendar cita con el medico",
    time: "13:00",
    date: "2026-02-19",
    color: "blue",
    priority: "urgent",
  },
  {
    id: "8",
    title: "Tarea importante",
    content: "Tarea programada para el dia 21",
    time: "13:00",
    date: "2026-02-21",
    color: "blue",
    priority: "normal",
  },
  {
    id: "9",
    title: "Segunda tarea",
    content: "Segunda tarea del dia 21",
    time: "13:00",
    date: "2026-02-21",
    color: "yellow",
    priority: "normal",
  },
  {
    id: "10",
    title: "Reunion equipo",
    content: "Reunion con el equipo de trabajo",
    time: "13:00",
    date: "2026-02-24",
    color: "blue",
    priority: "normal",
  },
]

export function getNotesByDate(date: string): PostItNoteData[] {
  return mockNotes.filter((note) => note.date === date)
}

export function getNoteById(id: string): PostItNoteData | undefined {
  return mockNotes.find((note) => note.id === id)
}

export function getPendingNotes(): PostItNoteData[] {
  const today = new Date().toISOString().split("T")[0]
  return mockNotes.filter((note) => note.date >= today)
}

export function getCriticalNotes(): PostItNoteData[] {
  return mockNotes.filter((note) => note.priority === "critical" || note.priority === "urgent")
}
