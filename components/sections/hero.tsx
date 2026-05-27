import Image from "next/image"
import { Button } from "@/components/ui/button"

/**
 * Hero — Figma Homepage redesign node 270:814 (phone mockup variant).
 */
export function Hero() {
  return (
    <section
      className="flex items-center justify-center bg-[#f5f2eb] px-6 pb-10 pt-6 md:px-12 lg:px-12"
      aria-label="Hero"
    >
      <div className="relative flex w-full max-w-[1312px] flex-col gap-10 rounded-[32px] bg-[#13223b] px-8 pt-8 pb-0 lg:flex-row lg:items-end lg:gap-16 lg:rounded-[56px] lg:px-16 lg:pb-0 lg:pt-[72px]">
        <div className="relative z-10 flex max-w-[640px] flex-col gap-10 lg:flex-1 lg:justify-center lg:pb-[72px]">
          <div className="flex flex-col gap-8 text-white">
            <h1 className="font-serif text-[36px] font-semibold leading-[1.1] tracking-[-2px] md:text-[52px] lg:text-[65px] lg:tracking-[-3px]">
              9 out of 10 homebuyers overpay for their mortgage.{" "}
              <span className="text-blue-300">Are you one of them?</span>
            </h1>
            <p className="max-w-[534px] text-[16px] leading-[1.4] text-[#f9f9fc] lg:text-[18px]">
              The market moves fast&mdash;don&rsquo;t get left behind. Join 25 million people who
              use Bankrate&rsquo;s 50 years of data to outsmart the big banks and find the loan they
              actually deserve.
            </p>
          </div>
          <Button
            variant="primary"
            size="default"
            className="h-14 w-full max-w-[240px] rounded-lg px-5 text-[14px] font-semibold"
          >
            Unlock my personal dashboard
          </Button>
        </div>

        <PhoneMockup />
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[530px] shrink-0 self-end lg:mx-0 lg:w-[530px]">
      <Image
        src="/images/hand-holding-phone.png"
        alt=""
        width={555}
        height={646}
        sizes="(min-width: 1024px) 530px, 100vw"
        className="block h-auto w-full"
        priority
      />
    </div>
  )
}
