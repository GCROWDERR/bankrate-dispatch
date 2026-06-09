import Image from "next/image"
import { Button } from "@/components/ui/button"
import { contentWellClass, Eyebrow, SectionTitle } from "@/components/home/shared"
import {
  HOMEBUYING_IN_AMERICA_FRANCHISE,
  type DispatchFranchiseInstallment,
} from "@/lib/dispatch-content"
import { cn } from "@/lib/utils"

function InstallmentStatusBadge({ status }: { status: DispatchFranchiseInstallment["status"] }) {
  const isPublished = status === "published"

  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-xs font-semibold tracking-[-0.12px]",
        isPublished ? "bg-blue-100 text-blue-800" : "bg-gray-200 text-gray-700"
      )}
    >
      {isPublished ? "Published" : "Coming soon"}
    </span>
  )
}

function InstallmentCard({ installment }: { installment: DispatchFranchiseInstallment }) {
  const isPublished = installment.status === "published"
  const Tag = isPublished && installment.href ? "a" : "div"

  return (
    <Tag
      href={isPublished ? installment.href : undefined}
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-colors",
        isPublished && installment.href && "hover:border-gray-300"
      )}
    >
      <div
        className="relative aspect-[16/9] w-full overflow-hidden"
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
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"
            aria-hidden
          />
        )}
        <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold uppercase tracking-[1.5px] text-blue-900">
          Installment {installment.installment}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <InstallmentStatusBadge status={installment.status} />
          <span className="text-xs font-semibold tracking-[-0.12px] text-gray-600">
            {installment.calendarLabel}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <h3 className="font-serif text-xl leading-[1.2] tracking-tight text-blue-900">
            {installment.title}
          </h3>
          <p className="text-sm leading-[1.7] text-gray-700">{installment.excerpt}</p>
        </div>

        {isPublished && installment.readMinutes && installment.author ? (
          <p className="text-sm leading-[1.7] text-gray-700">
            <span className="font-bold text-blue-900">{installment.author}</span>
            <span className="mx-2 text-gray-400" aria-hidden>
              ·
            </span>
            {installment.readMinutes} min read
          </p>
        ) : null}
      </div>
    </Tag>
  )
}

export function FranchiseHub() {
  const franchise = HOMEBUYING_IN_AMERICA_FRANCHISE

  return (
    <section
      id={franchise.id}
      aria-label={franchise.title}
      className="border-y border-gray-200 bg-gray-50 py-12 md:py-16 lg:py-20"
    >
      <div className={contentWellClass}>
        <div className="flex flex-col gap-10 lg:gap-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center">
            <Eyebrow>{franchise.eyebrow}</Eyebrow>
            <SectionTitle>{franchise.title}</SectionTitle>
            <p className="text-base leading-[1.7] text-gray-700">{franchise.description}</p>
            <Button variant="primary" size="default" arrow className="h-12 px-6" asChild>
              <a href={franchise.hubHref}>{franchise.hubCtaLabel}</a>
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <Eyebrow className="text-center">{franchise.installmentsLabel}</Eyebrow>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {franchise.installments.map((installment) => (
                <InstallmentCard key={installment.id} installment={installment} />
              ))}
            </div>
            <p className="text-center text-sm leading-[1.7] text-gray-600">{franchise.calendarNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
