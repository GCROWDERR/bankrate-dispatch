import Image from "next/image"
import { contentWellClass, SectionTitle, Eyebrow, PrimaryCta } from "@/components/home/shared"
import { CircledText } from "@/components/ui/circled-text"
import { cn } from "@/lib/utils"

const PRINCIPLES = [
  {
    label: "Sourced",
    text: "Every claim ties to a primary document or named expert.",
  },
  {
    label: "Reproducible",
    text: "Data, methodology, and code are published with every report.",
  },
  {
    label: "Corrected",
    text: "Corrections are timestamped and never silently revised.",
  },
] as const

const PROOF_POINTS = [
  {
    value: "4.3M",
    label: "Loan estimates reviewed across Dispatch investigations since 2019",
  },
  {
    value: "100%",
    label: "Of methods and source documents published with every report",
  },
  {
    value: "0",
    label: "Undisclosed payments accepted from lenders on any story",
  },
] as const

function PrincipleItem({ label, text }: { label: string; text: string }) {
  return (
    <li className="flex items-start gap-4">
      <Image
        src="/images/list-bullet.svg"
        alt=""
        width={14}
        height={13}
        className="mt-1.5 h-[13px] w-[14px] shrink-0 object-contain"
        aria-hidden
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.15px] text-blue-900">
          {label}
        </p>
        <p className="text-sm leading-[1.7] text-gray-700">{text}</p>
      </div>
    </li>
  )
}

function StatCard({
  value,
  label,
  className,
}: {
  value: string
  label: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-1 items-center gap-[18px] rounded-[24px] border border-gray-200 bg-white p-[11px]",
        className
      )}
    >
      <div className="flex h-[84px] w-[126px] shrink-0 items-center justify-center rounded-[14px] bg-accent">
        <p className="font-serif text-[40px] font-semibold leading-none tracking-[-2.36px] text-blue-600">
          {value}
        </p>
      </div>
      <p className="min-w-0 flex-1 text-base font-bold leading-[1.4] tracking-[-0.25px] text-blue-900">
        {label}
      </p>
    </div>
  )
}

export function Methodology() {
  return (
    <section id="methodology" className="relative isolate overflow-hidden py-16 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-[1.5%] -right-[2.5%] bg-gray-100"
        style={{
          WebkitMaskImage: "url('/images/methodology-section-bg.svg')",
          maskImage: "url('/images/methodology-section-bg.svg')",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />

      <div className={cn("relative", contentWellClass)}>
        <div className="flex w-full flex-col gap-10 lg:gap-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-center">
            <Eyebrow>METHODOLOGY</Eyebrow>
            <SectionTitle>
              Trust earned through <CircledText>transparency</CircledText>
            </SectionTitle>
            <p className="text-sm leading-[1.7] text-gray-700">
              We don&rsquo;t take undisclosed payments from lenders. Every Dispatch story is annotated
              with its data source, sample size, and the people we spoke to. Our standards are
              public, our corrections are public, and so is the spreadsheet.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-stretch">
            {PROOF_POINTS.map((point) => (
              <StatCard key={point.label} value={point.value} label={point.label} />
            ))}
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-12">
            <ul className="mx-auto flex w-fit max-w-xl flex-col gap-8">
              {PRINCIPLES.map((principle) => (
                <PrincipleItem key={principle.label} label={principle.label} text={principle.text} />
              ))}
            </ul>

            <PrimaryCta className="h-10 w-fit self-center px-6 text-sm">Read our standards</PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  )
}
