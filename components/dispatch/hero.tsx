import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { DISPATCH_PAGE } from "@/lib/dispatch-content"

export function Hero({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <section aria-labelledby="dispatch-hero-heading" className={className}>
      <article className="flex w-full flex-col gap-10 overflow-hidden rounded-[48px] bg-[#00143d] px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:rounded-[56px] lg:px-16 lg:py-20">
        <div className="flex w-full flex-col gap-8 text-white lg:max-w-[640px] lg:flex-1">
          <h1
            id="dispatch-hero-heading"
            className="font-serif text-[36px] font-semibold leading-[1.15] tracking-tight lg:text-[48px]"
          >
            {DISPATCH_PAGE.headline}
          </h1>

          <p className="max-w-[600px] text-[17px] leading-[1.5] text-[var(--color-body-inverse)] lg:text-[18px]">
            {DISPATCH_PAGE.intro}
          </p>

          <div>
            <Button
              variant="primary"
              size="lg"
              arrow
              className="h-12 px-6 text-sm font-semibold lg:text-base"
              asChild
            >
              <a href={DISPATCH_PAGE.ctaHref}>{DISPATCH_PAGE.ctaLabel}</a>
            </Button>
          </div>
        </div>

        {children ? (
          <div className="relative w-full shrink-0 lg:max-w-[480px] lg:flex-1">{children}</div>
        ) : null}
      </article>
    </section>
  )
}
