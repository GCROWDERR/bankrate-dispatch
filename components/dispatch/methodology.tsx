import Image from "next/image"
import { contentWellClass, SectionTitle, Eyebrow, PrimaryCta } from "@/components/home/shared"
import { SectionMaskBackground } from "@/components/dispatch/section-mask-bg"
import { Stat } from "@/components/ui/stat"
import { BrushUnderline } from "@/components/ui/brush-underline"
import { cn } from "@/lib/utils"

const PRINCIPLES = [
  {
    label: "We show our work",
    text: "Every claim ties to reporting and research that follows the highest journalistic standards.",
  },
  {
    label: "Nothing hidden",
    text: "The data and methodology behind every report are public.",
  },
  {
    label: "Built to act on",
    text: "Our findings are designed to help you make better decisions, not just understand the problem.",
  },
] as const

const PROOF_POINTS = [
  {
    value: "14",
    label: "Investigations active",
  },
  {
    value: "94",
    label: "Industry insiders interviewed",
  },
  {
    value: "40",
    label: "Real Americans who shared their story",
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
    <section
      id="methodology"
      className="relative isolate overflow-hidden pb-16 lg:pb-24"
    >
      <SectionMaskBackground maskPosition="top center" />

      <div className={cn("relative z-10 pt-8 md:pt-10 lg:pt-12", contentWellClass)}>
        <div className="flex w-full flex-col gap-10 lg:gap-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-center">
            <Eyebrow>METHODOLOGY</Eyebrow>
            <SectionTitle>
              Journalism that answers to{" "}
              <BrushUnderline textClassName="text-inherit">you</BrushUnderline>, not lenders
            </SectionTitle>
            <p className="text-sm leading-[1.7] text-gray-700">
              Bankrate&rsquo;s editorial team exists for one reason: To give you the information the
              consumer finance industry would rather keep complicated. Every story we publish is built
              on that premise.
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
