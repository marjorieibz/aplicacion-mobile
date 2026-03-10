// Type definitions for post-it notes

export type Priority = "normal" | "urgent" | "critical"
export type PostItColor = "yellow" | "pink" | "blue" | "green"

export interface PostItNoteData {
  id: string
  title: string
  content: string
  time: string
  date: string
  color: PostItColor
  priority: Priority
}
