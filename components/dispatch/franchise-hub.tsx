import Image from "next/image"
import { contentWellClass } from "@/components/home/shared"
import {
  featuredFranchiseInstallment,
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
      className={cn("relative shrink-0 overflow-hidden rounded-lg bg-gray-200", className)}
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
          sizes="112px"
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
      <div className="flex items-start justify-between gap-4">
        <h3 className="min-w-0 font-serif text-xl font-semibold leading-[1.2] tracking-tight text-blue-900 group-hover:underline sm:text-2xl">
          {installment.title}
        </h3>
        {installment.publishedDate ? (
          <time
            dateTime={installment.publishedDate}
            className="shrink-0 pt-0.5 text-sm leading-[1.7] text-gray-600"
          >
            {installment.publishedDate}
          </time>
        ) : null}
      </div>

      <InstallmentThumbnail
        installment={installment}
        className="aspect-video w-full rounded-2xl"
      />

      <p className="text-base leading-[1.7] text-gray-700">{installment.excerpt}</p>
    </a>
  )
}

function SidebarInstallment({ installment }: { installment: DispatchFranchiseInstallment }) {
  const isPublished = installment.status === "published" && installment.href
  const Tag = isPublished ? "a" : "div"

  return (
    <Tag
      href={isPublished ? installment.href : undefined}
      className={cn(
        "group flex gap-4 py-5 first:pt-0",
        isPublished ? "hover:[&_h4]:underline" : "opacity-80"
      )}
    >
      <InstallmentThumbnail installment={installment} className="h-16 w-28 sm:h-[72px] sm:w-32" />
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <h4 className="line-clamp-3 font-serif text-base font-semibold leading-[1.25] tracking-tight text-blue-900">
          {installment.title}
        </h4>
        {installment.status === "scheduled" ? (
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-gray-600">
            Coming soon · {installment.calendarLabel}
          </p>
        ) : null}
      </div>
    </Tag>
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
      className="border-y border-gray-200 bg-white py-12 md:py-16 lg:py-20"
    >
      <div className={contentWellClass}>
        <div className="border-b border-gray-200 pb-4 md:pb-5">
          <h2 className="font-serif text-[length:var(--text-h2)] font-semibold leading-[1.2] tracking-[-2px] text-gray-900">
            {franchise.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-gray-700">{franchise.description}</p>
        </div>

        <div className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:gap-10 xl:gap-12">
          <FeaturedInstallment installment={featured} />

          <aside className="flex flex-col lg:border-l lg:border-gray-200 lg:pl-10 xl:pl-12">
            <div className="divide-y divide-gray-200">
              {sidebarInstallments.map((installment) => (
                <SidebarInstallment key={installment.id} installment={installment} />
              ))}
            </div>

            <a
              href={franchise.seeAllHref}
              className="mt-2 inline-flex items-center gap-1.5 self-start pt-4 text-sm font-bold uppercase tracking-[1.5px] text-blue-600 hover:underline"
            >
              {franchise.seeAllLabel}
              <Image
                src="/images/chevron-right-blue.svg"
                alt=""
                width={12}
                height={12}
                aria-hidden
              />
            </a>

            <p className="mt-4 text-xs leading-[1.7] text-gray-600">{franchise.calendarNote}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
