import Image from "next/image"
import { SectionShell, SectionTitle, Eyebrow, PrimaryCta } from "@/components/home/shared"
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
    <SectionShell id="methodology" className="py-16 lg:py-24">
      <div className="flex flex-col gap-10 lg:gap-12">
        <div className="flex max-w-3xl flex-col gap-4">
          <Eyebrow>METHODOLOGY</Eyebrow>
          <SectionTitle className="text-left">
            Trust earned through transparency.
          </SectionTitle>
          <p className="text-base text-gray-700">
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

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-stretch lg:gap-10">
          <div className="flex flex-col gap-6">
            <ul className="list-disc space-y-3 pl-5 text-base leading-[1.7] text-gray-700 marker:text-blue-700">
              {PRINCIPLES.map((principle) => (
                <li key={principle.label}>
                  <span className="font-semibold text-gray-900">{principle.label}.</span>{" "}
                  {principle.text}
                </li>
              ))}
            </ul>

            <PrimaryCta>Read our standards</PrimaryCta>
          </div>

          <MethodologyArtifact />
        </div>
      </div>
    </SectionShell>
  )
}

function MethodologyArtifact() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#00143d] p-4 lg:p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(91,148,253,0.45), transparent 55%), radial-gradient(circle at 80% 80%, rgba(0,97,254,0.35), transparent 50%)",
        }}
      />

      <div className="relative overflow-hidden rounded-[20px]">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/credit-chain.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
          <div className="absolute inset-0 bg-[#00143d]/55" aria-hidden />
        </div>

        <div className="absolute inset-4 flex flex-col justify-end gap-3 lg:inset-5">
          <div className="rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">
            <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-gray-600">
              Dispatch annotation
            </p>
            <p className="mt-2 font-serif text-lg font-semibold leading-snug text-[#00143d]">
              Hidden Homeownership Tax
            </p>
            <dl className="mt-3 grid gap-2 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-2">
                <dt className="text-gray-600">Primary source</dt>
                <dd className="text-right font-semibold text-gray-900">HMDA + FOIA filings</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-gray-200 pb-2">
                <dt className="text-gray-600">Sample size</dt>
                <dd className="text-right font-semibold text-gray-900">n = 2,847,391</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-gray-600">Last corrected</dt>
                <dd className="text-right font-semibold text-gray-900">Mar 12, 2026 · 2:14 PM</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-700/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.2px] text-white">
              Spreadsheet published
            </span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.2px] text-white">
              Code on GitHub
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
