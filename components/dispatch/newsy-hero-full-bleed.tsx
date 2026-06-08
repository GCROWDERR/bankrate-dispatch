import Image from "next/image"
import { EditorialSidebarCard } from "@/components/dispatch/story-card"
import { contentWellClass, Eyebrow } from "@/components/home/shared"
import {
  FEATURED_INVESTIGATION,
  FEATURED_INVESTIGATION_SERIES,
  supportingStoriesForSeries,
} from "@/lib/dispatch-content"
import { DISPATCH_HERO } from "@/lib/editorial-content"
import { cn } from "@/lib/utils"

const heroShellClass = cn(contentWellClass, "py-10 lg:py-12")

export function NewsyHeroFullBleed() {
  const { eyebrow, title, description, highlight, href } = FEATURED_INVESTIGATION
  const tentpoleStories = supportingStoriesForSeries(FEATURED_INVESTIGATION_SERIES)
  const descriptionParts = description.split(highlight)
  const readMinutes = DISPATCH_HERO.readMinutes ?? 12

  return (
    <section aria-labelledby="dispatch-hero-heading" className="w-full bg-[#00143d]">
      <div className={heroShellClass}>
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-stretch lg:gap-10 xl:gap-12">
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
            className="flex h-full flex-col gap-5 lg:justify-between lg:gap-4"
            aria-label="Related investigation stories"
          >
            {tentpoleStories.map((story) => (
              <EditorialSidebarCard key={story.id} story={story} inverse />
            ))}
          </aside>
        </div>
      </div>
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
          className="relative block h-[200px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[220px] lg:h-[240px]"
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
