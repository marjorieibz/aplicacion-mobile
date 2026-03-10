"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MobileHeader } from "@/components/mobile/mobile-header"
import { AlarmForm } from "@/components/mobile/alarm-form"
import { ConfirmationModal } from "@/components/mobile/confirmation-modal"

export default function CrearAlarmaPage() {
  const router = useRouter()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [confirmationType, setConfirmationType] = useState<"created" | "cancelled">("created")

  const handleCancel = () => {
    setConfirmationType("cancelled")
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    setConfirmationType("created")
    setShowConfirmation(true)
  }

  const handleModalConfirm = () => {
    setShowConfirmation(false)
    router.push("/mobile")
  }

  return (
    <div>
      <MobileHeader onAddClick={() => {}} />
      
      <div className="mt-6">
        <AlarmForm 
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      </div>

      <ConfirmationModal 
        isOpen={showConfirmation}
        onConfirm={handleModalConfirm}
        type={confirmationType}
      />
    </div>
  )
}
