import { MobileNav } from "@/components/mobile/mobile-nav"
import { MobileBackground } from "@/components/mobile/mobile-background"

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#FFF9E6] relative max-w-md mx-auto">
      <MobileBackground />
      <div className="relative z-10 pb-24">
        {children}
      </div>
      <MobileNav />
    </div>
  )
}
