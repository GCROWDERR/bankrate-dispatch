import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/home/shared"
import { InvestigationStatCards } from "@/components/dispatch/investigation-stat-cards"
import { FEATURED_INVESTIGATION } from "@/lib/dispatch-content"

export function FeaturedInvestigation() {
  const { eyebrow, title, description, highlight, href, ctaLabel, stats } = FEATURED_INVESTIGATION

  const descriptionParts = description.split(highlight)

  return (
    <section aria-labelledby="featured-investigation-title">
      <article className="flex w-full flex-col gap-10 overflow-hidden rounded-[48px] bg-[#00143d] px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:rounded-[56px] lg:px-16 lg:py-20">
        <div className="flex w-full flex-col gap-8 text-white lg:max-w-[640px] lg:flex-1">
          <Eyebrow className="text-blue-300">{eyebrow}</Eyebrow>

          <h2
            id="featured-investigation-title"
            className="font-serif text-[36px] font-semibold leading-[1.15] tracking-tight lg:text-[56px]"
          >
            {title}
          </h2>

          <p className="max-w-[600px] text-[17px] leading-[1.5] text-[var(--color-body-inverse)] lg:text-[18px]">
            {descriptionParts[0]}
            <strong className="font-semibold text-white">{highlight}</strong>
            {descriptionParts[1]}
          </p>

          <div>
            <Button
              variant="primary"
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
          className="flex w-full max-w-[400px] flex-col gap-3 lg:shrink-0"
        />
      </article>
    </section>
  )
}
