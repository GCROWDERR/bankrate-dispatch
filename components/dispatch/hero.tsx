import { Button } from "@/components/ui/button"

const STATS = [
  { value: "30+", label: "Interviews" },
  { value: "6 wks", label: "Undercover" },
  { value: "40+", label: "Outlets cited" },
]

export function Hero() {
  return (
    <section
      className="flex items-center justify-center bg-[#f5f2eb] px-6 pb-6 pt-6 lg:px-12 lg:pb-10"
      aria-label="Dispatch hero"
    >
      <div className="relative flex w-full max-w-[1312px] flex-col gap-10 overflow-hidden rounded-2xl bg-inverse px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:rounded-[56px] lg:px-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(91,148,253,0.4), transparent 55%), radial-gradient(circle at 80% 70%, rgba(0,97,254,0.25), transparent 50%)",
          }}
        />

        <div className="relative z-10 flex w-full flex-col gap-8 text-white lg:max-w-[640px] lg:flex-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[1.5px] text-white/90">
            <span className="size-1.5 rounded-full bg-white" />
            Bankrate Dispatch · Investigation
          </span>

          <h1 className="font-serif text-[36px] font-semibold leading-[1.15] tracking-tight lg:text-[56px]">
            The Hidden Homeownership Tax
          </h1>

          <p className="max-w-[600px] text-[17px] leading-[1.5] text-[var(--color-body-inverse)] lg:text-[18px]">
            How overpaying for mortgages costs Americans{" "}
            <strong className="font-semibold text-white">$142 billion</strong> a year — and the
            lending practices that make it routine.
          </p>

          <dl className="grid grid-cols-3 gap-6 border-y border-white/15 py-5 lg:gap-12 lg:py-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] uppercase tracking-[1.5px] text-white/60">{s.label}</dt>
                <dd className="mt-1 font-serif text-[22px] font-semibold text-white lg:text-[28px]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary" size="lg" arrow className="h-12 px-6 text-sm font-semibold lg:text-base">
              Read Investigation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 lg:text-base"
            >
              Download the data
            </Button>
          </div>
        </div>

        <div className="relative z-10 hidden w-full max-w-[400px] flex-col gap-3 lg:flex">
          <div className="rounded-2xl bg-white/95 p-5 shadow-lg">
            <p className="text-[11px] uppercase tracking-[1.5px] text-gray-600">National Average</p>
            <p className="mt-1 font-serif text-[40px] font-semibold leading-none tracking-tight text-blue-700">
              $73k
            </p>
            <p className="mt-2 text-xs text-gray-700">overpaid per homebuyer, lifetime of loan</p>
          </div>
          <div className="rounded-2xl bg-blue-700/30 p-5 ring-1 ring-white/15 backdrop-blur">
            <p className="text-[11px] uppercase tracking-[1.5px] text-white/70">Markets Reviewed</p>
            <p className="mt-1 font-serif text-[28px] font-semibold leading-none text-white">
              50 states · 412 MSAs
            </p>
          </div>
          <div className="rounded-2xl bg-blue-700/30 p-5 ring-1 ring-white/15 backdrop-blur">
            <p className="text-[11px] uppercase tracking-[1.5px] text-white/70">Loan Estimates</p>
            <p className="mt-1 font-serif text-[28px] font-semibold leading-none text-white">
              4.3M reviewed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
