import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

export const CIRCLED_TEXT_RING_SRC = "/images/hero-rate-circle.svg"

/** Figma Ellipse 41 proportions — 66px ring height at 48px title size. */
export const CIRCLED_TEXT_RING_HEIGHT = "1.375em"
export const CIRCLED_TEXT_RING_BLEED = "1.5em"

export type CircledTextProps = {
  children: ReactNode
  className?: string
  textClassName?: string
  ringClassName?: string
  ringSrc?: string
  /** Total horizontal bleed beyond the word, e.g. `1.5em`. */
  ringBleed?: string
  /** Ring thickness after rotation, e.g. `1.375em`. */
  ringHeight?: string
}

export function CircledText({
  children,
  className,
  textClassName,
  ringClassName,
  ringSrc = CIRCLED_TEXT_RING_SRC,
  ringBleed = CIRCLED_TEXT_RING_BLEED,
  ringHeight = CIRCLED_TEXT_RING_HEIGHT,
}: CircledTextProps) {
  return (
    <span
      className={cn("relative inline-block whitespace-nowrap", className)}
      style={
        {
          "--circled-text-bleed": ringBleed,
          "--circled-text-height": ringHeight,
        } as CSSProperties
      }
    >
      <span className={cn("relative z-[1]", textClassName)}>{children}</span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 h-[var(--circled-text-height)] w-[calc(100%+var(--circled-text-bleed))] -translate-x-1/2 -translate-y-1/2 [container-type:inline-size]",
          ringClassName
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ringSrc}
          alt=""
          className="absolute left-1/2 top-1/2 block h-[100cqw] w-[var(--circled-text-height)] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90"
        />
      </span>
    </span>
  )
}
