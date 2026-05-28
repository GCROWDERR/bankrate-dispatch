import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/home/shared"
import { cn } from "@/lib/utils"

type CardOverlay = {
  src: string
  width: number
  height: number
  className: string
}

type ExpertCardConfig = {
  src: string
  bg: string
  scribble: string
  imageClassName?: string
  imageRounded?: string
  objectFit?: "cover" | "bottom"
  overlay?: CardOverlay
}

/** Left column — Figma 256:1343 / 448:2956. */
const LEFT_CARDS: ExpertCardConfig[] = [
  {
    src: "/images/expert-card-1.png",
    bg: "#a8a8e8",
    scribble: "/images/expert-scribble-1.svg",
    imageRounded: "rounded-bl-[5px] rounded-br-[5px] lg:rounded-bl-lg lg:rounded-br-lg",
    objectFit: "bottom",
  },
  {
    src: "/images/expert-card-2.png",
    bg: "#80abff",
    scribble: "/images/expert-scribble-2.svg",
    imageClassName: "left-[-39%] w-[178%] max-w-none h-full",
    imageRounded: "rounded-[8px] lg:rounded-[13px]",
    overlay: {
      src: "/images/expert-overlay-scribble-blue.svg",
      width: 35,
      height: 61,
      className: "left-[6.4%] top-[5.4%] z-20 w-[23%]",
    },
  },
  {
    src: "/images/expert-card-3.png",
    bg: "#fbd772",
    scribble: "/images/expert-scribble-yellow.svg",
    imageRounded: "rounded-[20px] lg:rounded-[33px]",
  },
]

/** Right column — desktop Figma 256:1390. */
const RIGHT_CARDS_DESKTOP: ExpertCardConfig[] = [
  {
    src: "/images/expert-card-4.png",
    bg: "#7ad595",
    scribble: "/images/expert-scribble-4.svg",
    imageRounded: "rounded-[13px]",
  },
  {
    src: "/images/expert-card-5.png",
    bg: "#7ad595",
    scribble: "/images/expert-scribble-5.svg",
    imageRounded: "rounded-lg",
    objectFit: "bottom",
    overlay: {
      src: "/images/expert-overlay-scribble-green.svg",
      width: 35,
      height: 61,
      className: "left-[6.4%] top-[5.4%] z-20 w-[23%]",
    },
  },
  {
    src: "/images/expert-card-6.png",
    bg: "#f19186",
    scribble: "/images/expert-scribble-6.svg",
    imageRounded: "rounded-[33px]",
    objectFit: "bottom",
    overlay: {
      src: "/images/expert-sparkle-card.svg",
      width: 69,
      height: 82,
      className: "right-[6%] top-[12.6%] z-20 w-[26%]",
    },
  },
  {
    src: "/images/expert-card-4.png",
    bg: "#7ad595",
    scribble: "/images/expert-scribble-7.svg",
    imageRounded: "rounded-[13px]",
  },
]

/** Right column — mobile Figma 448:3016. */
const RIGHT_CARDS_MOBILE: ExpertCardConfig[] = [
  {
    src: "/images/expert-card-4.png",
    bg: "#fbd772",
    scribble: "/images/expert-scribble-5.svg",
    imageRounded: "rounded-[8px]",
  },
  {
    src: "/images/expert-card-5.png",
    bg: "#7ad595",
    scribble: "/images/expert-scribble-5.svg",
    imageRounded: "rounded-[8px]",
    objectFit: "bottom",
    overlay: {
      src: "/images/expert-overlay-scribble-green.svg",
      width: 35,
      height: 61,
      className: "left-[6.4%] top-[5.4%] z-20 w-[23%]",
    },
  },
  {
    src: "/images/expert-card-6.png",
    bg: "#f19186",
    scribble: "/images/expert-scribble-6.svg",
    imageRounded: "rounded-[19px]",
    objectFit: "bottom",
    overlay: {
      src: "/images/expert-sparkle-card.svg",
      width: 69,
      height: 82,
      className: "right-[6%] top-[12.6%] z-20 w-[26%]",
    },
  },
  {
    src: "/images/expert-card-7.png",
    bg: "#7ad595",
    scribble: "/images/expert-scribble-7.svg",
    imageRounded: "rounded-[8px]",
  },
]

/**
 * ExpertTeam — Figma desktop 256:1333 / mobile 350:3838.
 */
export function ExpertTeam() {
  return (
    <SectionShell className="py-10 lg:py-20">
      <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-b from-inverse to-[#0f1b2f] px-6 py-12 lg:px-20 lg:py-16">
        <div className="relative flex flex-col gap-[112px] lg:flex-row lg:items-center lg:gap-28">
          {/* Copy + CTA — mobile 350:3840 / desktop 256:1335 */}
          <div className="relative z-10 flex w-full shrink-0 flex-col gap-8 text-white lg:max-w-[492px]">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-[28px] font-semibold leading-[1.2] tracking-normal lg:text-[36px]">
                The people behind
                <br />
                the data
              </h2>
              <p className="text-[18px] leading-[1.4] text-white">
                Our journalists and analysts have spent decades covering this market. They report on
                what&apos;s actually happening &mdash; including the parts banks would rather you
                didn&apos;t know.
              </p>
            </div>

            <div className="relative w-fit">
              <Button
                variant="primary"
                size="default"
                arrow
                className="h-12 rounded-[10px] px-5 text-[15px] font-semibold tracking-[-0.15px]"
              >
                Meet our editorial team
              </Button>

              <Image
                src="/images/expert-arrow-curve.svg"
                alt=""
                width={179}
                height={63}
                className="pointer-events-none absolute left-full top-1/2 ml-4 hidden w-[140px] -translate-y-1/2 lg:block xl:w-[179px]"
                aria-hidden
              />
            </div>
          </div>

          {/* Portrait grid — mobile 448:2954 / desktop 256:1342 */}
          <div className="relative mx-auto w-full max-w-[327px] lg:mx-0 lg:max-w-[548px] lg:flex-1">
            <div className="relative h-[569px] overflow-hidden lg:h-[665px]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[52px] bg-gradient-to-b from-[#101c31] to-transparent lg:h-[42px] lg:from-inverse/80 lg:to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[138px] bg-gradient-to-t from-[#101c31] to-transparent lg:h-9 lg:from-[#0f1b2f] lg:to-transparent"
              />

              <div className="absolute inset-x-0 top-[25px] grid grid-cols-2 gap-[8px] lg:static lg:top-auto lg:gap-[14px]">
                <div className="flex flex-col gap-[8px] pt-[58px] lg:gap-[14px] lg:pt-[8%]">
                  {LEFT_CARDS.map((card, index) => (
                    <ExpertCard key={`left-${index}`} {...card} />
                  ))}
                </div>

                <div className="-mt-[65px] flex flex-col gap-[8px] lg:-mt-[20%] lg:gap-[14px]">
                  <div className="flex flex-col gap-[8px] lg:hidden">
                    {RIGHT_CARDS_MOBILE.map((card, index) => (
                      <ExpertCard key={`right-m-${index}`} {...card} />
                    ))}
                  </div>
                  <div className="hidden flex-col gap-[14px] lg:flex">
                    {RIGHT_CARDS_DESKTOP.map((card, index) => (
                      <ExpertCard key={`right-d-${index}`} {...card} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function ExpertCard({
  src,
  bg,
  scribble,
  imageClassName,
  imageRounded = "rounded-[13px]",
  objectFit = "cover",
  overlay,
}: ExpertCardConfig) {
  return (
    <div
      className="relative aspect-[160/185] w-full overflow-hidden rounded-[10px] lg:aspect-[268/310] lg:rounded-[17px]"
      style={{ backgroundColor: bg }}
    >
      <Image
        src={scribble}
        alt=""
        width={557}
        height={607}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[260%] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[165deg]"
        aria-hidden
      />

      {imageClassName ? (
        <div className={cn("absolute inset-0 z-10 overflow-hidden", imageRounded)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className={cn(
              "absolute top-0 h-full object-cover",
              imageClassName,
              objectFit === "bottom" && "object-bottom"
            )}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 268px, 160px"
          className={cn(
            "z-10",
            imageRounded,
            objectFit === "bottom" ? "object-bottom" : "object-cover"
          )}
        />
      )}

      {overlay ? (
        <Image
          src={overlay.src}
          alt=""
          width={overlay.width}
          height={overlay.height}
          className={cn("pointer-events-none absolute", overlay.className)}
          aria-hidden
        />
      ) : null}
    </div>
  )
}
