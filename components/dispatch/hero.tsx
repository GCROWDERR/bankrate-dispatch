import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/home/shared"
import { DISPATCH_PAGE, FEATURED_INVESTIGATION } from "@/lib/dispatch-content"

export function Hero() {
  const { eyebrow, title, description, highlight, href, dataHref, imageSrc, imageAlt } =
    FEATURED_INVESTIGATION

  const descriptionParts = description.split(highlight)

  return (
    <section className="min-w-0 flex-1" aria-label="Featured Dispatch investigation">
      <article className="flex w-full flex-col gap-10 overflow-hidden rounded-[48px] bg-[#00143d] px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:rounded-[56px] lg:px-16 lg:py-20">
        <div className="flex w-full flex-col gap-8 text-white lg:max-w-[640px] lg:flex-1">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-[-0.25px] text-white/90">
              {DISPATCH_PAGE.name}
            </p>
            <Eyebrow className="text-blue-300">{eyebrow}</Eyebrow>
          </div>

          <h1 className="font-serif text-[36px] font-semibold leading-[1.15] tracking-tight lg:text-[56px]">
            {title}
          </h1>

          <p className="max-w-[600px] text-[17px] leading-[1.5] text-[var(--color-body-inverse)] lg:text-[18px]">
            {descriptionParts[0]}
            <strong className="font-semibold text-white">{highlight}</strong>
            {descriptionParts[1]}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="lg"
              className="h-12 px-6 text-sm font-semibold lg:text-base"
              asChild
            >
              <a href={href}>Read Investigation</a>
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="h-12 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 lg:text-base"
              asChild
            >
              <a href={dataHref}>Download the data</a>
            </Button>
          </div>
        </div>

        <div className="relative w-full shrink-0 lg:max-w-[480px] lg:flex-1">
          <div className="relative aspect-[523/294] w-full overflow-hidden rounded-[24px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </article>
    </section>
  )
}
