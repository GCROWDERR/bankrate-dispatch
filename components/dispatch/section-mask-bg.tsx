import { cn } from "@/lib/utils"

const maskImageStyle = {
  WebkitMaskImage: "url('/images/methodology-section-bg.svg')",
  maskImage: "url('/images/methodology-section-bg.svg')",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
} as const

/** Pull a masked section up into the section above so the brush stroke overlaps cleanly. */
export const maskedSectionOverlap = {
  /** Brush overlap zone on the section above — not extra visible cream by itself. */
  precedingSectionPadding: "pb-10 md:pb-12 lg:pb-14",
  sectionPullUp: "-mt-10 md:-mt-12 lg:-mt-14",
  sectionPaddingTop: "pt-12 md:pt-14 lg:pt-16",
  /** Visible cream space below the hero card (outside the brush overlap). */
  heroTrailingSpace: "pb-16 md:pb-20 lg:pb-24",
  /** Visible cream space below a masked section (margin, not padding — bg won't fill it). */
  sectionTrailingSpace: "mb-16 md:mb-20 lg:mb-24",
} as const

/** Even cream gutter above/below inset feature modules (e.g. franchise hub). */
export const featureModuleGutter = "py-16 md:py-20 lg:py-24" as const

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
