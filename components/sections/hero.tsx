import Image from "next/image"
import { Button } from "@/components/ui/button"

const RATES = [
  { term: "30-yr fixed", apy: "6.85%" },
  { term: "15-yr fixed", apy: "6.12%" },
  { term: "Best offer", apy: "5.99%", highlight: true },
] as const

/**
 * Hero — left column from Figma 192:1278, right rate panel from Figma 212:2597.
 */
export function Hero() {
  return (
    <section
      className="flex min-h-[min(810px,100dvh)] items-center justify-center bg-[#f5f2eb] px-6 pb-10 pt-6 md:px-12 lg:px-12"
      aria-label="Hero"
    >
      <div className="relative flex w-full max-w-[1312px] flex-col gap-10 overflow-hidden rounded-[32px] bg-[#13223b] p-8 lg:min-h-[626px] lg:flex-row lg:items-center lg:gap-16 lg:rounded-[56px] lg:px-16 lg:py-[72px]">
        <div className="relative z-10 flex max-w-[777px] flex-col gap-8 pb-6 lg:flex-1 lg:pb-0">
          <div className="flex flex-col gap-6 text-[#f5f2eb] lg:gap-8">
            <h1 className="font-serif text-[36px] font-semibold leading-[1.05] tracking-[-2px] md:text-[52px] lg:text-[length:var(--text-display)] lg:tracking-[-2px]">
              9 out of 10 homebuyers overpay for their mortgage.{" "}
              <span className="text-blue-300">Are you one of them?</span>
            </h1>
            <p className="max-w-[540px] text-[16px] leading-[1.55] text-white/80 lg:text-[18px]">
              Every year, American homeowners pay an average of{" "}
              <span className="font-semibold text-white">$3,890 more</span> than they need to. Not
              because better rates don&apos;t exist — but because their bank has no reason to offer
              them. Bankrate runs the auction that produces your most competitive rate — and it&apos;s
              free to use.
            </p>
          </div>
          <Button
            variant="primary"
            size="default"
            arrow
            className="h-12 w-full max-w-[240px] px-5 text-[15px]"
          >
            Personalize my rate
          </Button>
        </div>

        <RatePanel />
      </div>
    </section>
  )
}

function RatePanel() {
  return (
    <div className="relative z-10 w-full shrink-0 lg:w-[440px]">
      <div className="relative aspect-[526/527]">
        <Image
          src="/images/hero-rate-bg.svg"
          alt=""
          fill
          sizes="(min-width: 1024px) 440px, 100vw"
          className="pointer-events-none object-contain"
          aria-hidden
          priority
        />
        <Image
          src="/images/hero-rate-sparkle.svg"
          alt=""
          width={47}
          height={81}
          className="pointer-events-none absolute left-[6%] top-[6%] z-20 w-[10%] rotate-[-140.55deg]"
          aria-hidden
        />
        <div className="absolute inset-x-[10%] top-[10%] flex flex-col gap-2">
          {RATES.map((rate) => (
            <RateRow key={rate.term} {...rate} />
          ))}
        </div>
      </div>
    </div>
  )
}

function RateRow({
  term,
  apy,
  highlight = false,
}: {
  term: string
  apy: string
  highlight?: boolean
}) {
  return (
    <div className="relative flex items-center justify-between rounded-[24px] bg-white px-7 py-6 shadow-[0_10px_24px_-12px_rgba(15,27,47,0.4)]">
      <div className="flex flex-col gap-2">
        <p className="text-[14px] leading-none tracking-[-0.7px] text-[#3b3b44]">Term</p>
        <p className="text-[20px] font-bold leading-none text-[#00143d]">{term}</p>
      </div>
      <div className="relative flex flex-col items-start gap-2">
        <p className="text-[14px] leading-none tracking-[-0.7px] text-[#3b3b44]">APY</p>
        <p className="relative text-[36px] font-bold leading-none text-[#13223b]">
          {apy}
          {highlight && (
            <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90">
              <Image
                src="/images/hero-rate-circle.svg"
                alt=""
                width={60}
                height={160}
                className="block"
                aria-hidden
              />
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
