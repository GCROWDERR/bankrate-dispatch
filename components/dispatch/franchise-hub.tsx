import Image from "next/image"
import { EditorialSidebarCard } from "@/components/dispatch/story-card"
import {
  contentWellClass,
  contentWellMobileBleedClass,
  dispatchFeatureCardLightClass,
  Eyebrow,
} from "@/components/home/shared"
import {
  featuredFranchiseInstallment,
  franchiseInstallmentAsStory,
  HOMEBUYING_IN_AMERICA_FRANCHISE,
  sidebarFranchiseInstallments,
  type DispatchFranchiseInstallment,
} from "@/lib/dispatch-content"
import { cn } from "@/lib/utils"

function InstallmentThumbnail({
  installment,
  className,
}: {
  installment: DispatchFranchiseInstallment
  className?: string
}) {
  return (
    <div
      className={cn("relative shrink-0 overflow-hidden rounded-2xl bg-white/60", className)}
      style={
        installment.imageSrc
          ? undefined
          : { background: installment.accent ?? "linear-gradient(135deg, #13223b 0%, #104bb5 100%)" }
      }
    >
      {installment.imageSrc ? (
        <Image
          src={installment.imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 640px"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"
          aria-hidden
        />
      )}
    </div>
  )
}

function FeaturedInstallment({ installment }: { installment: DispatchFranchiseInstallment }) {
  return (
    <a href={installment.href} className="group flex flex-col gap-4 lg:gap-5">
      <Eyebrow className="text-blue-800">
        Latest installment · {installment.installment}
      </Eyebrow>
      <div className="flex items-start justify-between gap-4">
        <h3 className="min-w-0 font-serif text-xl font-semibold leading-[1.2] tracking-tight text-blue-900 group-hover:underline sm:text-2xl">
          {installment.title}
        </h3>
        {installment.publishedDate ? (
          <time
            dateTime={installment.publishedDate}
            className="shrink-0 pt-0.5 text-sm leading-[1.7] text-blue-900/70"
          >
            {installment.publishedDate}
          </time>
        ) : null}
      </div>

      <InstallmentThumbnail installment={installment} className="aspect-video w-full" />

      <p className="text-base leading-[1.7] text-blue-900/80">{installment.excerpt}</p>
    </a>
  )
}

export function FranchiseHub() {
  const franchise = HOMEBUYING_IN_AMERICA_FRANCHISE
  const featured = featuredFranchiseInstallment(franchise)

  if (!featured) {
    return null
  }

  const sidebarInstallments = sidebarFranchiseInstallments(franchise, featured.id)

  return (
    <section
      id={franchise.id}
      aria-label={franchise.title}
      className={cn("pt-8 md:pt-10", "pb-16 md:pb-20 lg:pb-24")}
    >
      <div className={contentWellClass}>
        <div className={contentWellMobileBleedClass}>
          <article
            className={cn(
              dispatchFeatureCardLightClass,
              "gap-8 py-10 lg:flex-col lg:items-stretch lg:gap-10 lg:py-14"
            )}
          >
            <header className="flex flex-col gap-3 border-b border-blue-900/10 pb-5 md:pb-6">
              <Eyebrow className="text-blue-800">Series</Eyebrow>
              <h2 className="font-serif text-[length:var(--text-h2)] font-semibold leading-[1.2] tracking-[-2px] text-blue-900">
                {franchise.title}
              </h2>
              <p className="max-w-2xl text-base leading-[1.7] text-blue-900/80">
                {franchise.description}
              </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
              <FeaturedInstallment installment={featured} />

              <aside
                className="flex flex-col lg:border-l lg:border-blue-900/10 lg:pl-10 xl:pl-12"
                aria-labelledby="franchise-series-heading"
              >
                <p
                  id="franchise-series-heading"
                  className="mb-5 text-sm font-bold uppercase leading-[1.7] tracking-[2.5px] text-blue-800"
                >
                  More in this series
                </p>
                <div className="flex flex-col gap-5 lg:flex-1 lg:justify-between lg:gap-5">
                  {sidebarInstallments.map((installment) => (
                    <EditorialSidebarCard
                      key={installment.id}
                      story={franchiseInstallmentAsStory(installment)}
                      size="lg"
                      interactive={installment.status === "published" && Boolean(installment.href)}
                      className={installment.status === "scheduled" ? "opacity-80" : undefined}
                    />
                  ))}
                </div>
              </aside>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
