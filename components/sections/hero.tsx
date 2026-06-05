import { Button } from "@/components/ui/button"
import { HeroRateCards } from "@/components/sections/hero-rate-cards"

/**
 * Hero — Figma desktop 448:3280 / mobile 350:3471.
 */
export function Hero() {
  return (
    <section
      className="flex items-center justify-center bg-[#f5f2eb] px-6 pb-6 pt-6 lg:px-12 lg:pb-10 lg:pt-6"
      aria-label="Hero"
    >
      <div className="relative flex w-full max-w-[1312px] flex-col gap-8 overflow-hidden rounded-2xl bg-inverse px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:rounded-[56px] lg:px-16 lg:py-12">
        <div className="relative z-10 flex w-full flex-col gap-10 lg:max-w-[653px] lg:flex-1 lg:pb-6">
          <div className="relative flex flex-col gap-8 text-white">
            <h1 className="font-serif text-[36px] font-semibold leading-[1.2] tracking-normal lg:text-[48px]">
              9 out of 10 homebuyers overpay for their mortgage{" "}
              <span className="relative inline">
                Don&rsquo;t be one of them
                <span className="pointer-events-none absolute -bottom-1 left-0 hidden w-[127px] lg:block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-headline-underline.svg"
                    alt=""
                    width={127}
                    height={4}
                    className="h-auto w-full"
                    aria-hidden
                  />
                </span>
                <span className="pointer-events-none absolute -bottom-1 left-[42%] w-[127px] max-w-[55%] lg:hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-headline-underline.svg"
                    alt=""
                    width={127}
                    height={4}
                    className="h-auto w-full"
                    aria-hidden
                  />
                </span>
              </span>
            </h1>
            <p className="max-w-[630px] text-[18px] leading-[1.4] text-[var(--color-body-inverse)]">
              Every year, American homeowners pay an average of{" "}
              <strong className="font-bold">$3,890</strong> more than they need to. Most people
              take the first rate they&rsquo;re given. We built the platform that makes lenders
              compete for yours.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
            <Button
              variant="primary"
              size="default"
              className="h-[42px] w-full max-w-[240px] rounded-lg px-5 text-sm font-semibold lg:h-11 lg:max-w-none lg:rounded-xl lg:px-6 lg:text-base lg:font-bold"
            >
              Unlock my personal dashboard
            </Button>
            <Button
              variant="outline"
              size="default"
              className="hidden h-11 rounded-xl border-2 border-white bg-transparent px-6 text-base font-bold text-white hover:bg-white/10 lg:inline-flex [&]:text-white"
            >
              Just show me today&rsquo;s rates
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[327px] shrink-0 lg:mx-0 lg:max-w-[548px] lg:w-[548px]">
          <HeroRateCards className="mx-auto lg:mx-0" />
          <span className="sr-only">
            Mortgage rate comparison showing national averages of 6.85% and 6.12% APR, with
            Bankrate&apos;s top offer at 5.99% APR.
          </span>
        </div>
      </div>
    </section>
  )
}
