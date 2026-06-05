import { Button } from "@/components/ui/button"
import {
  contentWellMobileBleedClass,
  dispatchFeatureCardClass,
  Eyebrow,
} from "@/components/home/shared"
import { InvestigationStatCards } from "@/components/dispatch/investigation-stat-cards"
import { cn } from "@/lib/utils"
import { FEATURED_INVESTIGATION } from "@/lib/dispatch-content"

export function FeaturedInvestigation() {
  const { eyebrow, title, description, highlight, href, ctaLabel, stats } = FEATURED_INVESTIGATION

  const descriptionParts = description.split(highlight)

  return (
    <section aria-labelledby="dispatch-hero-heading" className={contentWellMobileBleedClass}>
      <article className={cn(dispatchFeatureCardClass, "relative isolate")}>
        {/* Figma 11:567 — house photo mask behind stat cards */}
        <div
          className="pointer-events-none absolute -right-8 top-1/2 z-0 hidden h-[min(801px,140%)] w-[min(653px,58%)] -translate-y-[42%] opacity-100 lg:block"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-investigation-union.png"
            alt=""
            className="h-full w-full object-contain object-right"
          />
        </div>

        <div className="relative z-10 flex w-full flex-col gap-8 lg:max-w-[640px] lg:flex-1">
          <Eyebrow className="text-blue-300">{eyebrow}</Eyebrow>

          <h1
            id="dispatch-hero-heading"
            className="font-serif text-[length:var(--text-h1)] font-semibold leading-[1.15] tracking-tight text-white"
          >
            {title}
          </h1>

          <p className="max-w-[600px] text-[17px] leading-[1.5] text-[var(--color-body-inverse)] lg:text-[18px]">
            {descriptionParts[0]}
            <strong className="font-semibold text-white">{highlight}</strong>
            {descriptionParts[1]}
          </p>

          <div>
            <Button
              variant="primary"
              arrow
              size="lg"
              className="h-12 px-6 text-sm font-semibold lg:text-base"
              asChild
            >
              <a href={href}>{ctaLabel}</a>
            </Button>
          </div>
        </div>

        <div className="relative z-10 w-full lg:max-w-[400px] lg:shrink-0">
          <InvestigationStatCards stats={stats} className="flex w-full flex-col gap-3" />
        </div>
      </article>
    </section>
  )
}
