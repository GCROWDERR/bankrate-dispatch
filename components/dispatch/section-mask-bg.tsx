import { cn } from "@/lib/utils"

/** Masked gray swoosh — shared by Methodology and Stories sections. */
export function SectionMaskBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 -left-[1.5%] -right-[2.5%] bg-gray-100",
        className
      )}
      style={{
        WebkitMaskImage: "url('/images/methodology-section-bg.svg')",
        maskImage: "url('/images/methodology-section-bg.svg')",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    />
  )
}
