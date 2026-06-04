import { SectionShell, SectionTitle, Eyebrow, PrimaryCta } from "@/components/home/shared"

const PRINCIPLES = [
  { label: "Sourced", text: "Every claim ties to a primary document or named expert." },
  { label: "Reproducible", text: "Data, methodology, and code are published with every report." },
  { label: "Corrected", text: "Corrections are timestamped and never silently revised." },
]

export function Methodology() {
  return (
    <SectionShell id="methodology" className="py-16 lg:py-24">
      <div className="flex flex-col gap-6">
        <Eyebrow>METHODOLOGY</Eyebrow>
        <SectionTitle className="text-left">
          Trust earned through transparency.
        </SectionTitle>
        <p className="max-w-3xl text-base text-gray-700">
          We don&rsquo;t take undisclosed payments from lenders. Every Dispatch story is annotated
          with its data source, sample size, and the people we spoke to. Our standards are
          public, our corrections are public, and so is the spreadsheet.
        </p>

        <ul className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <li
              key={p.label}
              className="flex flex-col gap-3 rounded-xl bg-white p-4 ring-1 ring-gray-200"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-blue-700 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[1.2px] text-white">
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
    </SectionShell>
  )
}
