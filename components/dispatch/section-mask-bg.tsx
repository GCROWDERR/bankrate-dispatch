import { cn } from "@/lib/utils"

const maskImageStyle = {
  WebkitMaskImage: "url('/images/methodology-section-bg.svg')",
  maskImage: "url('/images/methodology-section-bg.svg')",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
} as const

/** Pull a masked section up into the section above so the brush stroke overlaps cleanly. */
export const maskedSectionOverlap = {
  precedingSectionPadding: "pb-10 md:pb-12 lg:pb-14",
  sectionPullUp: "-mt-10 md:-mt-12 lg:-mt-14",
  sectionPaddingTop: "pt-12 md:pt-14 lg:pt-16",
} as const

/** Masked gray swoosh — shared by Methodology, Stories, and franchise sections. */
export function SectionMaskBackground({
  className,
  maskPosition = "center",
}: {
  className?: string
  maskPosition?: "center" | "top center"
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute bottom-0 top-0 -left-[1.5%] -right-[2.5%] z-0 bg-gray-100",
        className
      )}
      style={{
        ...maskImageStyle,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskPosition: maskPosition,
        maskPosition,
      }}
    />
  )
}
