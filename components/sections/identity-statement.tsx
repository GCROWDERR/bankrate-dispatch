import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

export function IdentityStatement() {
  return (
    <SectionShell className="py-20">
      <div className="relative overflow-hidden rounded-[48px] bg-[#8ad7a7] px-6 py-12 md:px-16 md:py-20 lg:px-20">
        {/* Decorative brush strokes — positioned per Figma node 277:82777 */}
        <div
          className="pointer-events-none absolute left-[-101%] top-[-237%] h-[480%] w-[269%]"
          aria-hidden
        >
          <div className="size-full -rotate-[105deg] scale-y-[-1]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/identity-statement-bg.svg"
              alt=""
              className="block size-full max-w-none"
            />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[736px] flex-col items-center gap-8">
          <div className="flex w-full flex-col items-center gap-6">
            <h2 className="text-center font-serif text-[32px] font-semibold leading-[1.2] tracking-[-2px] text-[#00143d] md:text-[48px]">
              Why Bankrate can{" "}
              <span className="relative inline-block">
                offer
                <span className="pointer-events-none absolute -bottom-1 left-1/2 w-[168px] max-w-full -translate-x-1/2">
                  <Image
                    src="/images/identity-statement-underline.svg"
                    alt=""
                    width={168}
                    height={6}
                    className="h-auto w-full"
                    aria-hidden
                  />
                </span>
              </span>{" "}
              what your bank won&apos;t
            </h2>
            <p className="max-w-[626px] text-center text-[18px] leading-[1.4] text-[#3b3b44]">
              Your bank is a lender. It has a rate to protect and no reason to beat it. Bankrate
              isn&apos;t a bank, isn&apos;t a lender, and doesn&apos;t make money on the rate you
              choose. We&apos;re an independent platform where lenders have to compete openly for
              your business — and because we have no stake in which one wins, neither do our
              recommendations. The better rate exists. It just requires a place where lenders
              can&apos;t avoid offering it.
            </p>
          </div>

          <Button
            variant="primary"
            size="default"
            arrow
            className="h-12 px-5 text-[15px]"
            asChild
          >
            <a href="#how-were-paid">How we&apos;re paid — and why that matters</a>
          </Button>
        </div>
      </div>
    </SectionShell>
  )
}
