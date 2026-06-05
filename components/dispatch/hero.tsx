import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { contentWellMobileBleedClass, dispatchFeatureCardClass } from "@/components/home/shared"
import { cn } from "@/lib/utils"
import { DISPATCH_PAGE } from "@/lib/dispatch-content"

export function Hero({
  children,
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <section
      aria-labelledby="dispatch-hero-heading"
      className={cn(contentWellMobileBleedClass, className)}
    >
      <article className={dispatchFeatureCardClass}>
        <div className="flex w-full flex-col gap-8 text-white lg:max-w-[640px] lg:flex-1">
          <h1
            id="dispatch-hero-heading"
            className="font-serif text-[length:var(--text-h1)] font-semibold leading-[1.15] tracking-tight"
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
