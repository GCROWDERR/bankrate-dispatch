import Image from "next/image"
import { SectionShell } from "@/components/home/shared"
import { cn } from "@/lib/utils"

type JourneyCard = {
  title: string
  href: string
  ctaDesktop: string
  ctaMobile: string
  bodyDesktop: string
  bodyMobile: string
}

const JOURNEY_CARDS: JourneyCard[] = [
  {
    title: "Buying a home",
    ctaDesktop: "Get a Better Rate Now",
    ctaMobile: "Compare mortgage rates",
    href: "#buying",
    bodyDesktop:
      "Purchase borrowers face the highest overpayment risk — under contract pressure, most take the first rate they're offered. Don't.",
    bodyMobile:
      "The lender your agent recommended is one option. There are hundreds more. 89% of purchase borrowers never compare them — and pay an average of $4,167 a year for it.",
  },
  {
    title: "Saving for a home",
    ctaDesktop: "Find the best savings rates",
    ctaMobile: "Find the best savings rates",
    href: "#saving",
    bodyDesktop:
      "The lender your agent recommended is one option. There are hundreds more. 89% of purchase borrowers never compare them — and pay an average of $4,167 a year for it.",
    bodyMobile:
      "The lender your agent recommended is one option. There are hundreds more. 89% of purchase borrowers never compare them — and pay an average of $4,167 a year for it.",
  },
  {
    title: "Refinancing a home",
    ctaDesktop: "Check If You're Overpaying",
    ctaMobile: "See refinance rates",
    href: "#refinancing",
    bodyDesktop:
      "Even refinancers — with no deadline and full time to shop — overpay 82.8% of the time. You may be sitting on thousands in savings right now.",
    bodyMobile:
      "Even refinancers — with no deadline and full time to shop — overpay 82.8% of the time. You may be sitting on thousands in savings right now.",
  },
  {
    title: "Managing what you've built",
    ctaDesktop: "Explore all products",
    ctaMobile: "Explore all products",
    href: "#managing",
    bodyDesktop:
      "The lender your agent recommended is one option. There are hundreds more. 89% of purchase borrowers never compare them — and pay an average of $4,167 a year for it.",
    bodyMobile:
      "The lender your agent recommended is one option. There are hundreds more. 89% of purchase borrowers never compare them — and pay an average of $4,167 a year for it.",
  },
]

const CARD_SHADOW =
  "shadow-[0px_0px_1.5px_rgba(21,21,21,0.1),0px_8px_8px_rgba(21,21,21,0.2)]"

/** Audience pathing — Figma desktop 274:774 / mobile 416:1927 */
export function AudiencePathing() {
  return (
    <SectionShell className="py-12 lg:py-16">
      <div className="overflow-visible rounded-[48px] bg-blue-200 px-6 py-12 lg:px-16">
        <div className="mb-10">
          <h2 className="relative max-w-[1184px] font-serif text-[28px] font-bold leading-[1.2] text-inverse lg:text-[36px]">
            Where are you in your{" "}
            <span className="relative inline-block">
              journey?
              <span className="pointer-events-none absolute -bottom-2 left-0 h-[41px] w-[127px] lg:-bottom-4 lg:h-[66px] lg:w-[189px]">
                <Image
                  src="/images/journey-scribble-mobile.svg"
                  alt=""
                  width={127}
                  height={41}
                  className="h-full w-full lg:hidden"
                  aria-hidden
                />
                <Image
                  src="/images/journey-scribble.svg"
                  alt=""
                  width={189}
                  height={66}
                  className="hidden h-full w-full lg:block"
                  aria-hidden
                />
              </span>
            </span>
          </h2>
          <p className="mt-6 text-base leading-[1.7] tracking-[-0.25px] text-gray-800 lg:hidden">
            No spam calls. Your information is never sold to lenders. You reach out when
            you&apos;re ready — not the other way around.
          </p>
          <p className="mt-6 hidden max-w-[1184px] text-base leading-[1.7] tracking-[-0.25px] text-gray-800 lg:block">
            Whether you&apos;re buying or already have a mortgage, chances are you&apos;re
            overpaying. Let&apos;s fix that.
          </p>
        </div>

        <div className="flex flex-col gap-5 overflow-visible lg:grid lg:grid-cols-2 lg:items-start lg:gap-5">
          {JOURNEY_CARDS.map((card) => (
            <JourneyTile key={card.title} card={card} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

function JourneyTile({ card }: { card: JourneyCard }) {
  return (
    <article
      className={cn(
        "group flex w-full flex-col gap-6 self-start rounded-[24px] bg-white p-8",
        "transition-[box-shadow,gap] duration-700 ease-in-out",
        CARD_SHADOW,
        "lg:gap-0 lg:shadow-none",
        "lg:hover:gap-6 lg:hover:shadow-[0px_0px_1.5px_rgba(21,21,21,0.1),0px_8px_8px_rgba(21,21,21,0.2)]"
      )}
    >
        {/* Title + CTA stay in one row on desktop; body reveals below on hover */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <h3 className="font-serif text-[28px] font-semibold leading-[1.2] tracking-[-1px] text-inverse lg:min-w-0 lg:flex-1">
            {card.title}
          </h3>
          <a
            href={card.href}
            className="inline-flex w-fit shrink-0 items-center gap-2 text-base font-semibold leading-[1.7] text-primary hover:underline"
          >
            <span className="lg:hidden">{card.ctaMobile}</span>
            <span className="hidden whitespace-nowrap lg:inline">{card.ctaDesktop}</span>
            <Image
              src="/images/chevron-right-blue.svg"
              alt=""
              width={15}
              height={15}
              className="size-[15px] shrink-0"
              aria-hidden
            />
          </a>
        </div>

        <p className="text-base leading-[1.7] tracking-[-0.25px] text-gray-800 lg:hidden">
          {card.bodyMobile}
        </p>

        <p
          className={cn(
            "hidden text-base leading-[1.7] tracking-[-0.25px] text-gray-800 lg:block",
            "max-h-0 overflow-hidden opacity-0 transition-[max-height,opacity] duration-700 ease-in-out",
            "group-hover:max-h-48 group-hover:opacity-100"
          )}
        >
          {card.bodyDesktop}
        </p>
    </article>
  )
}
