import { Clock } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-2xl font-bold">
        <span className="text-gray-800">Post-it</span>
      </span>
      <div className="relative">
        <div className="bg-[#FFD93D] rounded-md px-2 py-1 shadow-md transform rotate-2">
          <span className="text-gray-800 font-bold text-lg flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Clock
          </span>
        </div>
      </div>
    </div>
  )
}
