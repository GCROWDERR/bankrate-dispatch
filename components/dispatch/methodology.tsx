import Image from "next/image"
import { contentWellClass, SectionTitle, Eyebrow, PrimaryCta } from "@/components/home/shared"
import { SectionMaskBackground } from "@/components/dispatch/section-mask-bg"
import { Stat } from "@/components/ui/stat"
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

const statCardClassName = "min-w-0 flex-1 border border-gray-200 p-[11px] lg:min-h-0"

export function Methodology() {
  return (
    <section id="methodology" className="relative isolate overflow-hidden py-16 lg:py-24">
      <SectionMaskBackground />

      <div className={cn("relative", contentWellClass)}>
        <div className="flex w-full flex-col gap-10 lg:gap-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-center">
            <Eyebrow>METHODOLOGY</Eyebrow>
            <SectionTitle>
              Trust earned through <CircledText>transparency</CircledText>
            </SectionTitle>
            <p className="text-sm leading-[1.7] text-gray-700">
              We don&rsquo;t take undisclosed payments from lenders. Every Newsroom story is annotated
              with its data source, sample size, and the people we spoke to. Our standards are
              public, our corrections are public, and so is the spreadsheet.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-stretch">
            {PROOF_POINTS.map((point) => (
              <Stat
                key={point.label}
                value={point.value}
                label={point.label}
                valueSize="lg"
                className={statCardClassName}
              />
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
