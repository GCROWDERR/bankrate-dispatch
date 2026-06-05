import { Button } from "@/components/ui/button"
import {
  contentWellMobileBleedClass,
  dispatchFeatureCardLightClass,
  Eyebrow,
} from "@/components/home/shared"
import { InvestigationStatCards } from "@/components/dispatch/investigation-stat-cards"
import { FEATURED_INVESTIGATION } from "@/lib/dispatch-content"

export function FeaturedInvestigation() {
  const { eyebrow, title, description, highlight, href, ctaLabel, stats } = FEATURED_INVESTIGATION

  const descriptionParts = description.split(highlight)

  return (
    <section aria-labelledby="featured-investigation-title" className={contentWellMobileBleedClass}>
      <article className={dispatchFeatureCardLightClass}>
        <div className="flex w-full flex-col gap-8 lg:max-w-[640px] lg:flex-1">
          <Eyebrow className="text-blue-600">{eyebrow}</Eyebrow>

          <h2
            id="featured-investigation-title"
            className="font-serif text-[length:var(--text-h2)] font-semibold leading-[1.15] tracking-tight text-[#0f1b2f]"
          >
            {title}
          </h2>

          <p className="max-w-[600px] text-[17px] leading-[1.4] text-[#0f1b2f] lg:text-[18px]">
            {descriptionParts[0]}
            <strong className="font-semibold text-[#0f1b2f]">{highlight}</strong>
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

        <InvestigationStatCards
          stats={stats}
          className="flex w-full flex-col gap-3 lg:max-w-[400px] lg:shrink-0"
        />
      </article>
    </section>
  )
}
