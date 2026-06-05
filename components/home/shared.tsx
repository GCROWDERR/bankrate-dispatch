import type { ReactNode } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/** Shared horizontal rhythm for page hero + section content wells. */
export const contentWellClass = "mx-auto w-full max-w-[1312px] px-6 md:px-16"

export function ContentWell({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string
  children: ReactNode
  as?: "div" | "section" | "header"
}) {
  return <Tag className={cn(contentWellClass, className)}>{children}</Tag>
}

export function SectionShell({
  className,
  children,
  id,
}: {
  className?: string
  children: ReactNode
  id?: string
}) {
  return (
    <section id={id} className={cn(contentWellClass, className)}>
      {children}
    </section>
  )
}

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-serif text-[48px] font-semibold leading-[1.2] tracking-[-2px] text-gray-900",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function ReadMoreLink({
  href = "#",
  className,
  children = "Read More",
}: {
  href?: string
  className?: string
  children?: ReactNode
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[-0.12px] text-gray-900 underline underline-offset-2",
        className
      )}
    >
      {children}
      <Image src="/images/arrow.svg" alt="" width={12} height={12} className="rotate-180" aria-hidden />
    </a>
  )
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "text-sm font-bold uppercase leading-[1.7] tracking-[2.5px] text-gray-600",
        className
      )}
    >
      {children}
    </p>
  )
}

export function PrimaryCta({
  children,
  arrow = true,
  className,
}: {
  children: ReactNode
  arrow?: boolean
  className?: string
}) {
  return (
    <Button variant="primary" size="default" arrow={arrow} className={cn("h-12 px-5", className)}>
      {children}
    </Button>
  )
}

export function OutlineCta({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <Button
      variant="outline"
      size="default"
      arrow
      className={cn(
        "h-12 border-primary bg-transparent px-5 text-white hover:bg-primary/10",
        className
      )}
    >
      {children}
    </Button>
  )
}
