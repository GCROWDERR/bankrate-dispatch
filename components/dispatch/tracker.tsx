import { SectionShell, SectionTitle, Eyebrow } from "@/components/home/shared"
import { USMap, type StateDatum } from "@/components/dispatch/us-map"

const BUCKETS: { range: string; color: string }[] = [
  { range: "< $10k", color: "#eaf1ff" },
  { range: "$10–14k", color: "#a7c8ff" },
  { range: "$14–18k", color: "#5994fd" },
  { range: "$18–22k", color: "#0061fe" },
  { range: "> $22k", color: "#13223b" },
]

const BUCKET_COLORS = BUCKETS.map((b) => b.color)

const STATES: StateDatum[] = [
  { postal: "AL", name: "Alabama", bucket: 1, value: 10.9 },
  { postal: "AK", name: "Alaska", bucket: 1, value: 12.7 },
  { postal: "AZ", name: "Arizona", bucket: 2, value: 16.1 },
  { postal: "AR", name: "Arkansas", bucket: 0, value: 9.1 },
  { postal: "CA", name: "California", bucket: 4, value: 28.4 },
  { postal: "CO", name: "Colorado", bucket: 2, value: 17.2 },
  { postal: "CT", name: "Connecticut", bucket: 3, value: 19.8 },
  { postal: "DE", name: "Delaware", bucket: 2, value: 15.1 },
  { postal: "DC", name: "District of Columbia", bucket: 3, value: 20.4 },
  { postal: "FL", name: "Florida", bucket: 3, value: 21.7 },
  { postal: "GA", name: "Georgia", bucket: 2, value: 15.3 },
  { postal: "HI", name: "Hawaii", bucket: 4, value: 26.5 },
  { postal: "ID", name: "Idaho", bucket: 1, value: 11.2 },
  { postal: "IL", name: "Illinois", bucket: 2, value: 15.4 },
  { postal: "IN", name: "Indiana", bucket: 1, value: 11.8 },
  { postal: "IA", name: "Iowa", bucket: 1, value: 10.5 },
  { postal: "KS", name: "Kansas", bucket: 0, value: 9.8 },
  { postal: "KY", name: "Kentucky", bucket: 1, value: 10.8 },
  { postal: "LA", name: "Louisiana", bucket: 1, value: 11.4 },
  { postal: "ME", name: "Maine", bucket: 2, value: 16.2 },
  { postal: "MD", name: "Maryland", bucket: 2, value: 17.9 },
  { postal: "MA", name: "Massachusetts", bucket: 4, value: 23.6 },
  { postal: "MI", name: "Michigan", bucket: 2, value: 14.3 },
  { postal: "MN", name: "Minnesota", bucket: 1, value: 12.9 },
  { postal: "MS", name: "Mississippi", bucket: 0, value: 9.7 },
  { postal: "MO", name: "Missouri", bucket: 1, value: 11.3 },
  { postal: "MT", name: "Montana", bucket: 0, value: 8.7 },
  { postal: "NE", name: "Nebraska", bucket: 0, value: 9.6 },
  { postal: "NV", name: "Nevada", bucket: 2, value: 16.9 },
  { postal: "NH", name: "New Hampshire", bucket: 2, value: 15.7 },
  { postal: "NJ", name: "New Jersey", bucket: 3, value: 21.4 },
  { postal: "NM", name: "New Mexico", bucket: 1, value: 10.2 },
  { postal: "NY", name: "New York", bucket: 4, value: 24.8 },
  { postal: "NC", name: "North Carolina", bucket: 2, value: 15.8 },
  { postal: "ND", name: "North Dakota", bucket: 0, value: 7.4 },
  { postal: "OH", name: "Ohio", bucket: 1, value: 12.2 },
  { postal: "OK", name: "Oklahoma", bucket: 0, value: 8.5 },
  { postal: "OR", name: "Oregon", bucket: 2, value: 17.6 },
  { postal: "PA", name: "Pennsylvania", bucket: 2, value: 16.7 },
  { postal: "RI", name: "Rhode Island", bucket: 2, value: 17.1 },
  { postal: "SC", name: "South Carolina", bucket: 1, value: 13.4 },
  { postal: "SD", name: "South Dakota", bucket: 0, value: 8.1 },
  { postal: "TN", name: "Tennessee", bucket: 1, value: 11.6 },
  { postal: "TX", name: "Texas", bucket: 3, value: 19.4 },
  { postal: "UT", name: "Utah", bucket: 1, value: 13.7 },
  { postal: "VT", name: "Vermont", bucket: 1, value: 12.4 },
  { postal: "VA", name: "Virginia", bucket: 2, value: 16.4 },
  { postal: "WA", name: "Washington", bucket: 3, value: 20.1 },
  { postal: "WV", name: "West Virginia", bucket: 0, value: 9.4 },
  { postal: "WI", name: "Wisconsin", bucket: 1, value: 11.6 },
  { postal: "WY", name: "Wyoming", bucket: 0, value: 8.9 },
]

function formatValue(v: number) {
  return `$${v.toFixed(1)}k`
}

export function Tracker() {
  const highest = STATES.reduce((a, b) => (a.value > b.value ? a : b))
  const lowest = STATES.reduce((a, b) => (a.value < b.value ? a : b))

  return (
    <SectionShell id="tracker" className="bg-[var(--surface-cream)] py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="flex flex-col gap-5">
          <Eyebrow>Interactive Data</Eyebrow>
          <SectionTitle>Overpayment Rate Tracker</SectionTitle>
          <p className="text-base text-gray-700">
            Lifetime mortgage overpayment by state, recalculated monthly from 4.3M loan estimates
            reviewed since 2019. Hover any state for the local benchmark.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200">
              <p className="text-[11px] uppercase tracking-[1.5px] text-gray-600">National avg</p>
              <p className="mt-1 font-serif text-[32px] font-semibold leading-none text-blue-700">$73k</p>
              <p className="mt-1 text-xs text-gray-700">per homebuyer, lifetime</p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200">
              <p className="text-[11px] uppercase tracking-[1.5px] text-gray-600">Highest</p>
              <p className="mt-1 font-serif text-[32px] font-semibold leading-none text-blue-900">
                {highest.postal}
              </p>
              <p className="mt-1 text-xs text-gray-700">{formatValue(highest.value)} above benchmark</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 ring-1 ring-gray-200">
            <p className="text-[11px] uppercase tracking-[1.5px] text-gray-600">Lowest overpayment</p>
            <p className="mt-1 font-serif text-xl text-gray-900">
              {lowest.name} — {formatValue(lowest.value)}
            </p>
            <p className="mt-1 text-xs text-gray-700">
              Best-priced lending environment in the country, driven by stronger broker competition.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 ring-1 ring-gray-200 lg:p-8">
          <div className="flex items-baseline justify-between gap-4 pb-5">
            <h3 className="font-serif text-lg text-gray-900">Avg. lifetime overpayment by state</h3>
            <span className="text-[11px] uppercase tracking-[1.5px] text-gray-500">Q1 2026</span>
          </div>

          <USMap data={STATES} bucketColors={BUCKET_COLORS} />

          <div className="mt-6 flex items-center justify-between gap-3">
            <span className="text-[11px] uppercase tracking-[1.5px] text-gray-500">Less ←</span>
            <div className="flex flex-1 items-center gap-1.5">
              {BUCKETS.map((b) => (
                <div key={b.range} className="flex flex-1 flex-col items-center gap-1">
                  <span className="h-3 w-full rounded-sm" style={{ backgroundColor: b.color }} />
                  <span className="text-[10px] text-gray-600">{b.range}</span>
                </div>
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-[1.5px] text-gray-500">→ More</span>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
