"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { contentWellClass } from "@/components/home/shared"
import { MediaLoginModal } from "@/components/dispatch/media-login-modal"
import { DISPATCH_PAGE } from "@/lib/dispatch-content"
import { cn } from "@/lib/utils"

export function DispatchSubnav({ className }: { className?: string }) {
  const [mediaLoginOpen, setMediaLoginOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mediaLoginOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mediaLoginOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMediaLoginOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <div className={cn("border-b border-gray-200 bg-gray-100", className)}>
        <div className={cn(contentWellClass, "flex h-10 items-center justify-between md:h-11")}>
          <p className="text-sm font-semibold tracking-[-0.25px] text-gray-900">
            {DISPATCH_PAGE.headline}
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 text-sm font-semibold tracking-[-0.25px] text-blue-600"
            onClick={() => setMediaLoginOpen(true)}
          >
            Media login
          </Button>
        </div>
      </div>

      <MediaLoginModal open={mediaLoginOpen} onClose={() => setMediaLoginOpen(false)} />
    </>
  )
}
