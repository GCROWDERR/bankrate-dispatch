import { SectionShell, SectionTitle, Eyebrow } from "@/components/home/shared"
import { USMap } from "@/components/dispatch/us-map"
import {
  HMDA_OVERPAYMENT_MAP_STATES,
  hmdaExtremeOverpayRate,
  hmdaNationalAverageOverpayRate,
} from "@/lib/hmda-overpayment-by-state"

const BUCKETS: { range: string; color: string }[] = [
  { range: "< 85%", color: "#eaf1ff" },
  { range: "85–87%", color: "#a7c8ff" },
  { range: "87–89%", color: "#5994fd" },
  { range: "89–90%", color: "#0061fe" },
  { range: "≥ 90%", color: "#13223b" },
]

const BUCKET_COLORS = BUCKETS.map((b) => b.color)

function formatRate(rate: number) {
  return `${rate.toFixed(1)}%`
}

function formatAnnual(value: number) {
  return `$${value.toFixed(1)}k`
}

export function Tracker() {
  const states = HMDA_OVERPAYMENT_MAP_STATES
  const nationalAvg = hmdaNationalAverageOverpayRate(states)
  const highest = hmdaExtremeOverpayRate(states, "highest")
  const lowest = hmdaExtremeOverpayRate(states, "lowest")

  return (
    <SectionShell id="tracker" className="pt-16 pb-0 lg:pt-24 lg:pb-0">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="flex flex-col gap-5">
          <Eyebrow>Live Data</Eyebrow>
          <SectionTitle>Overpayment Rate Tracker</SectionTitle>
          <p className="text-base text-gray-700">
            Share of borrowers overpaying on their mortgage, by state — based on Bankrate HMDA
            analysis.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200">
              <p className="text-[11px] uppercase tracking-[1.5px] text-gray-600">National avg</p>
              <p className="mt-1 font-serif text-[32px] font-semibold leading-none text-blue-700">
                {formatRate(nationalAvg)}
              </p>
              <p className="mt-1 text-xs text-gray-700">overpay rate</p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200">
              <p className="text-[11px] uppercase tracking-[1.5px] text-gray-600">Highest</p>
              <p className="mt-1 font-serif text-[32px] font-semibold leading-none text-blue-900">
                {highest.postal}
              </p>
              <p className="mt-1 text-xs text-gray-700">{formatRate(highest.overpayRate)} overpay rate</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200">
            <p className="text-[11px] uppercase tracking-[1.5px] text-gray-600">Lowest overpay rate</p>
            <p className="mt-1 font-serif text-xl text-gray-900">
              {lowest.name} — {formatRate(lowest.overpayRate)}
            </p>
            <p className="mt-1 text-xs text-gray-700">
              {formatAnnual(lowest.annualOverpayment)} avg annual overpayment
            </p>
          </div>
        </div>

        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-sparkle-r.svg"
            alt=""
            aria-hidden
            width={60}
            height={71}
            className="pointer-events-none absolute right-0 top-0 z-20 w-12 translate-x-1/3 -translate-y-1/2 lg:w-[3.75rem]"
          />
          <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200 lg:p-8">
            <div className="flex items-baseline justify-between gap-4 pb-5">
              <h3 className="font-serif text-lg text-gray-900">Overpay rate by state</h3>
              <span className="text-[11px] uppercase tracking-[1.5px] text-gray-500">HMDA 2026</span>
            </div>

            <USMap data={states} bucketColors={BUCKET_COLORS} />

            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="text-[11px] uppercase tracking-[1.5px] text-gray-500">Lower ←</span>
              <div className="flex flex-1 items-center gap-1.5">
                {BUCKETS.map((b) => (
                  <div key={b.range} className="flex flex-1 flex-col items-center gap-1">
                    <span className="h-3 w-full rounded-sm" style={{ backgroundColor: b.color }} />
                    <span className="text-[10px] text-gray-600">{b.range}</span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-[1.5px] text-gray-500">→ Higher</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
