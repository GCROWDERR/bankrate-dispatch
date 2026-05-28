import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"
import { cn } from "@/lib/utils"

const BULLETS = [
  {
    label: "Qualified Reach:",
    body: "Access over 25 million high-intent monthly users.",
    icon: "/images/b2b-bullet-1.svg",
  },
  {
    label: "Data-Driven Matchmaking:",
    body: "Use our 50 years of market intelligence to find the right customers for your specific products.",
    icon: "/images/b2b-bullet-2.svg",
  },
  {
    label: "Trusted Integration:",
    body: "Join a marketplace cited by the Federal Reserve and top-tier financial media.",
    icon: "/images/b2b-bullet-3.svg",
  },
] as const

const STATS = [
  { value: "500+", label: "Lender Partners" },
  { value: "25M+", label: "Monthly Active Users" },
] as const

/** B2B endcap — Figma desktop 506:14111 / mobile 473:10596 */
export function B2BEndcap() {
  return (
    <SectionShell className="py-12 lg:py-20">
      <div className="overflow-hidden rounded-[48px] bg-inverse lg:rounded-[56px]">
        <div className="flex flex-col lg:grid lg:min-h-[674px] lg:grid-cols-[minmax(0,580px)_1fr]">
          <div className="flex flex-col gap-8 px-6 pb-10 pt-20 lg:justify-center lg:gap-8 lg:px-[70px] lg:py-[140px]">
            <div className="flex flex-col gap-4">
              <h2 className="relative max-w-[599px] font-serif text-[36px] font-semibold leading-[1.2] text-white">
                Partner with the{" "}
                <span className="relative inline">
                  marketplace
                  <span className="pointer-events-none absolute -bottom-2 left-[-21px] h-[59px] w-[235px] lg:hidden">
                    <Image
                      src="/images/b2b-mobile-underline.svg"
                      alt=""
                      width={235}
                      height={59}
                      className="h-full w-full"
                      aria-hidden
                    />
                  </span>
                </span>{" "}
                that{" "}
                <span className="relative inline">
                  powers
                  <span className="pointer-events-none absolute -bottom-1 left-0 hidden h-[3px] w-[121px] lg:block">
                    <Image
                      src="/images/b2b-headline-underline.svg"
                      alt=""
                      width={121}
                      height={3}
                      className="h-full w-full"
                      aria-hidden
                    />
                  </span>
                </span>{" "}
                homeownership.
              </h2>
              <p className="max-w-[599px] text-lg leading-[1.7] tracking-[-0.25px] text-white">
                We don&apos;t just connect people to rates; we connect them to the right
                institutions.
              </p>
            </div>

            <ul className="flex max-w-[604px] flex-col gap-4">
              {BULLETS.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <Image
                    src={item.icon}
                    alt=""
                    width={16}
                    height={15}
                    className="mt-1.5 h-[14px] w-4 shrink-0"
                    aria-hidden
                  />
                  <p className="text-lg leading-[1.4] text-white">
                    <strong className="font-bold">{item.label}</strong> {item.body}
                  </p>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="default"
              className="h-auto w-full max-w-[240px] rounded-lg px-5 py-4 text-[15px] font-semibold tracking-[-0.15px]"
            >
              Become a Bankrate Partner
            </Button>
          </div>

          <B2BVisual />
        </div>
      </div>
    </SectionShell>
  )
}

function B2BVisual() {
  return (
    <div className="relative w-full lg:min-h-[674px]">
      {/* Mobile — Figma 473:10614 */}
      <div className="relative h-[500px] w-full lg:hidden">
        <Image
          src="/images/b2b-blue-scribble.svg"
          alt=""
          width={326}
          height={320}
          className="pointer-events-none absolute left-1/2 top-[97px] z-0 h-auto w-[326px] -translate-x-1/2"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 top-5 z-10">
          <div className="relative h-[480px] w-full overflow-hidden">
            <Image
              src="/images/b2b-partner-photo-mobile.png"
              alt="Bankrate partner professional holding a laptop"
              width={2120}
              height={1414}
              className="absolute top-0 max-w-none h-full w-[184.53%] -left-[66.61%]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-inverse/0 from-[60%] to-inverse"
              aria-hidden
            />
          </div>
        </div>

        <B2BStatCard
          value={STATS[0].value}
          label={STATS[0].label}
          className="absolute left-6 top-[60px] z-20"
        />
        <B2BStatCard
          value={STATS[1].value}
          label={STATS[1].label}
          className="absolute bottom-[120px] right-6 z-20 w-[177px] p-[18px]"
        />
      </div>

      {/* Desktop — Figma 506:14129 */}
      <div className="relative hidden min-h-[674px] w-full lg:block">
        <Image
          src="/images/b2b-blue-scribble.svg"
          alt=""
          width={496}
          height={487}
          className="pointer-events-none absolute right-[10%] top-[83px] z-0 h-auto w-[min(496px,42vw)]"
          aria-hidden
        />

        <div className="absolute inset-y-0 right-0 z-10 w-[min(646px,52vw)]">
          <div className="relative h-full min-h-[674px] w-full">
            <Image
              src="/images/b2b-partner-photo.png"
              alt="Bankrate partner professional holding a laptop"
              width={2120}
              height={1414}
              className="absolute max-w-none h-[126.68%] w-[205.21%] -left-[81.59%] -top-[5.3%]"
            />
            <Image
              src="/images/b2b-sparkle.svg"
              alt=""
              width={60}
              height={72}
              className="pointer-events-none absolute left-[24%] top-[13%] z-20 w-[60px]"
              aria-hidden
            />
          </div>
        </div>

        <B2BStatCard
          value={STATS[0].value}
          label={STATS[0].label}
          className="absolute left-[6%] top-[19%] z-30 lg:left-[8%]"
        />
        <B2BStatCard
          value={STATS[1].value}
          label={STATS[1].label}
          className="absolute bottom-[12%] right-[4%] z-30 w-[177px] p-[18px]"
        />
      </div>
    </div>
  )
}

function B2BStatCard({
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
        "flex flex-col items-center justify-center gap-1.5 rounded-[21px] bg-white px-8 py-7 text-center shadow-[0_4px_24px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      <p className="font-serif text-[36px] font-semibold leading-[1.2] text-gray-900">
        {value}
      </p>
      <p className="text-xs font-semibold leading-[1.4] text-gray-500">{label}</p>
    </div>
  )
}
