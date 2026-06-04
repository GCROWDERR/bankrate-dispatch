import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/home/shared"
import { FEATURED_INVESTIGATION } from "@/lib/dispatch-content"

export function Hero() {
  const { eyebrow, title, description, highlight, href, dataHref, stats } =
    FEATURED_INVESTIGATION

  const descriptionParts = description.split(highlight)

  return (
    <section
      className="flex w-full justify-center bg-[#f9f9fc] py-6 lg:bg-[#f5f2eb] lg:px-12 lg:pb-10 lg:pt-6"
      aria-label="Featured Dispatch investigation"
    >
      <article className="flex w-full flex-col gap-10 overflow-hidden rounded-[48px] bg-[#00143d] px-6 py-12 lg:max-w-[1312px] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:rounded-[56px] lg:px-16 lg:py-20">
        <div className="flex w-full flex-col gap-8 text-white lg:max-w-[640px] lg:flex-1">
          <Eyebrow className="text-blue-300">{eyebrow}</Eyebrow>

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

        <div className="hidden w-full max-w-[400px] flex-col gap-3 lg:flex" aria-label="Investigation highlights">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index === 0
                  ? "rounded-2xl bg-white/95 p-5 shadow-lg"
                  : "rounded-2xl bg-blue-700/30 p-5 ring-1 ring-white/15 backdrop-blur"
              }
            >
              <p
                className={
                  index === 0
                    ? "text-[11px] uppercase tracking-[1.5px] text-gray-600"
                    : "text-[11px] uppercase tracking-[1.5px] text-white/70"
                }
              >
                {stat.label}
              </p>
              <p
                className={
                  index === 0
                    ? "mt-1 font-serif text-[40px] font-semibold leading-none tracking-tight text-blue-700"
                    : "mt-1 font-serif text-[28px] font-semibold leading-none text-white"
                }
              >
                {stat.value}
              </p>
              {stat.detail ? (
                <p className="mt-2 text-xs text-gray-700">{stat.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
