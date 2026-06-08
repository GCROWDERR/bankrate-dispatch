import Image from "next/image"
import { EditorialSidebarCard } from "@/components/dispatch/story-card"
import {
  contentWellMobileBleedClass,
  dispatchFeatureCardClass,
  Eyebrow,
} from "@/components/home/shared"
import {
  FEATURED_INVESTIGATION,
  FEATURED_INVESTIGATION_SERIES,
  supportingStoriesForSeries,
} from "@/lib/dispatch-content"
import { DISPATCH_HERO } from "@/lib/editorial-content"
import { cn } from "@/lib/utils"

export function NewsyHeroContained() {
  const { eyebrow, title, description, highlight, href } = FEATURED_INVESTIGATION
  const tentpoleStories = supportingStoriesForSeries(FEATURED_INVESTIGATION_SERIES)
  const descriptionParts = description.split(highlight)
  const readMinutes = DISPATCH_HERO.readMinutes ?? 12

  return (
    <section aria-labelledby="dispatch-hero-heading" className={contentWellMobileBleedClass}>
      <article
        className={cn(
          dispatchFeatureCardClass,
          "py-6 lg:flex-col lg:items-stretch lg:gap-0 lg:py-16"
        )}
      >
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,1fr)] lg:items-stretch lg:gap-8 xl:gap-10">
          <MainArticle
            eyebrow={eyebrow}
            title={title}
            descriptionParts={descriptionParts}
            highlight={highlight}
            href={href}
            readMinutes={readMinutes}
            imageSrc={DISPATCH_HERO.imageSrc}
            imageAlt={DISPATCH_HERO.imageAlt ?? title}
          />

          <aside
            className="flex h-full flex-col gap-5 border-t border-white/15 pt-6 lg:justify-between lg:gap-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-12"
            aria-labelledby="hero-top-stories-heading"
          >
            <p
              id="hero-top-stories-heading"
              className="text-sm font-bold uppercase leading-[1.7] tracking-[2.5px] text-blue-300 lg:text-[15px]"
            >
              Top stories
            </p>
            <div className="flex flex-col gap-5 lg:flex-1 lg:justify-between lg:gap-5">
              {tentpoleStories.map((story) => (
                <EditorialSidebarCard key={story.id} story={story} inverse size="lg" />
              ))}
            </div>
          </aside>
        </div>
      </article>
    </section>
  )
}

function MainArticle({
  eyebrow,
  title,
  descriptionParts,
  highlight,
  href,
  readMinutes,
  imageSrc,
  imageAlt,
}: {
  eyebrow: string
  title: string
  descriptionParts: string[]
  highlight: string
  href: string
  readMinutes: number
  imageSrc?: string
  imageAlt: string
}) {
  return (
    <article className="flex h-full min-h-0 flex-col">
      {imageSrc ? (
        <a
          href={href}
          className="relative block aspect-video w-full shrink-0 overflow-hidden rounded-3xl"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-opacity hover:opacity-95"
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority
          />
        </a>
      ) : null}

      <div className="flex flex-col gap-2.5 pt-4 lg:gap-3 lg:pt-5">
        <Eyebrow className="text-blue-300">{eyebrow}</Eyebrow>

        <h1
          id="dispatch-hero-heading"
          className="font-serif text-[length:var(--text-h2)] font-semibold leading-[1.1] tracking-tight text-white lg:text-[length:var(--text-h1)] lg:leading-[1.08]"
        >
          <a href={href} className="hover:underline">
            {title}
          </a>
        </h1>

        <p className="line-clamp-3 max-w-[640px] text-base leading-[1.6] text-[var(--color-body-inverse)] lg:line-clamp-2 lg:text-[17px]">
          {descriptionParts[0]}
          <strong className="font-semibold text-white">{highlight}</strong>
          {descriptionParts[1]}
        </p>

        <p className="text-sm leading-[1.7] tracking-tight text-blue-300">{readMinutes} min read</p>
      </div>
    </article>
  )
}
