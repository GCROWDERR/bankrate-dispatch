import { SectionShell, SectionTitle, Eyebrow, PrimaryCta } from "@/components/home/shared"

const PRINCIPLES = [
  { label: "Sourced", text: "Every claim ties to a primary document or named expert." },
  { label: "Reproducible", text: "Data, methodology, and code are published with every report." },
  { label: "Corrected", text: "Corrections are timestamped and never silently revised." },
]

export function Methodology() {
  return (
    <SectionShell id="methodology" className="py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <Eyebrow>METHODOLOGY</Eyebrow>
          <SectionTitle className="text-left">
            Trust earned through transparency.
          </SectionTitle>
          <p className="text-base text-gray-700">
            We don&rsquo;t take undisclosed payments from lenders. Every Dispatch story is annotated
            with its data source, sample size, and the people we spoke to. Our standards are
            public, our corrections are public, and so is the spreadsheet.
          </p>

          <ul className="flex flex-col gap-3 pt-2">
            {PRINCIPLES.map((p) => (
              <li key={p.label} className="flex gap-4 rounded-xl bg-white p-4 ring-1 ring-gray-200">
                <span className="mt-0.5 inline-flex h-6 shrink-0 items-center rounded-full bg-blue-700 px-2.5 text-[10px] font-semibold uppercase tracking-[1.2px] text-white">
                  {p.label}
                </span>
                <p className="text-sm text-gray-700">{p.text}</p>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <PrimaryCta>Read our standards</PrimaryCta>
          </div>
        </div>

        <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-inverse lg:rounded-[40px]">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 30%, rgba(91,148,253,0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(0,97,254,0.3), transparent 55%), linear-gradient(135deg, #13223b 0%, #14387a 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-25 mix-blend-soft-light"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 24px)",
            }}
          />
          <div className="relative flex h-full flex-col justify-end gap-3 p-8 text-white lg:p-10">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[1.5px] text-white/70">
              <span className="size-1.5 rounded-full bg-white" />
              Newsroom · Charlotte, NC
            </div>
            <p className="max-w-xs font-serif text-2xl leading-tight lg:text-[28px]">
              &ldquo;We publish what we&rsquo;d need to defend in front of a regulator.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
