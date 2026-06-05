import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"

const FEATURES = [
  {
    bold: "Set rate alerts",
    rest: " and track the numbers you're waiting for",
  },
  {
    bold: null,
    rest: "Compare saved calculator scenarios, tailored to you",
  },
  {
    bold: null,
    rest: "Save your offers and compare without starting over",
  },
]

/** Backed by Bankrate — Figma desktop 337:3096 / mobile 350:3565 */
export function MemberExperience() {
  return (
    <SectionShell className="py-12 lg:py-16">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="relative order-2 w-full shrink-0 overflow-hidden rounded-[32px] bg-[#0061fe] lg:order-1 lg:max-w-[588px] lg:w-[588px]">
          <Image
            src="/images/member-phone-mockup.png"
            alt="Hand holding phone showing Bankrate mortgage rates"
            width={588}
            height={616}
            sizes="(min-width: 1024px) 588px, 100vw"
            className="h-auto w-full object-cover object-center"
          />
        </div>

        <div className="order-1 flex flex-1 flex-col gap-8 lg:order-2 lg:pr-10">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-[1.8px] text-[#676a79]">
              Backed by Bankrate
            </p>
            <h2 className="font-serif text-[32px] font-semibold leading-[1.2] text-[#13223b] lg:text-[36px]">
              Your rate doesn&apos;t have to be a one-time guess
            </h2>
            <p className="text-[18px] leading-[1.4] text-[#13223b]">
              Create a free Bankrate account and your mortgage search stays live. When the market
              moves, we&rsquo;ll let you know.
            </p>
            <ul className="flex flex-col gap-4">
              {FEATURES.map((feature) => (
                <li key={feature.rest} className="flex items-start gap-3 text-base leading-[1.7] text-[#13223b] lg:text-[18px]">
                  <Image
                    src="/images/list-bullet.svg"
                    alt=""
                    width={14}
                    height={13}
                    className="mt-1.5 h-[13px] w-[14px] shrink-0 object-contain lg:mt-2"
                    aria-hidden
                  />
                  <span>
                    {feature.bold ? (
                      <>
                        <strong className="font-bold">{feature.bold}</strong>
                        {feature.rest}
                      </>
                    ) : (
                      feature.rest
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Button
            variant="primary"
            size="default"
            arrow
            className="h-12 w-full px-6 text-[15px] lg:w-fit"
          >
            Create your free account
          </Button>
        </div>
      </div>
    </SectionShell>
  )
}
