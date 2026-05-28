import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

/** Our Mission — Figma desktop 448:3102 / mobile 416:2093 */
export function IdentityStatement() {
  return (
    <SectionShell className="py-12 lg:py-16">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-8">
        <div className="flex w-full flex-col gap-8 lg:max-w-[576px] lg:flex-1">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#676a79]">
              Our Mission
            </p>
            <h2 className="max-w-[287px] font-serif text-[32px] font-semibold leading-[1.2] tracking-normal text-[#13223b] lg:max-w-none lg:text-[36px]">
              We connect people to trusted ways to save, borrow and thrive.
            </h2>
            <div className="space-y-4 text-[18px] leading-[1.4] text-[#13223b] lg:max-w-none">
              <p>
                Your bank is a lender. It has a rate to protect and no reason to beat it. Bankrate
                isn&apos;t a bank, isn&apos;t a lender, and doesn&apos;t make money on the rate you
                choose.
              </p>
              <p>
                We&apos;re an independent platform where lenders have to compete openly for your
                business — and because we have no stake in which one wins, neither do our
                recommendations. The better rate exists. It just requires a place where lenders
                can&apos;t avoid offering it.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            size="default"
            arrow
            className="h-12 w-fit px-5 text-[15px]"
            asChild
          >
            <a href="#how-were-paid">How we make money</a>
          </Button>
        </div>

        <div className="relative w-full shrink-0 lg:max-w-[568px] lg:w-[568px]">
          <Image
            src="/images/mission-katie-visual.png"
            alt="Katie Kelton, Lead Community Reporter, with mortgage calculator UI"
            width={568}
            height={498}
            sizes="(min-width: 1024px) 568px, 100vw"
            className="hidden h-auto w-full lg:block"
          />
          <Image
            src="/images/mission-katie-visual.png"
            alt=""
            width={327}
            height={282}
            sizes="100vw"
            className="h-auto w-full rounded-2xl lg:hidden"
          />
        </div>
      </div>
    </SectionShell>
  )
}
