import Image from "next/image"
import { SectionShell } from "@/components/home/shared"
import { BrushUnderline } from "@/components/ui/brush-underline"
import { Button } from "../ui/button"

type Expert = {
  name: string
  role: string
  portrait: string
}

const EXPERTS: Expert[] = [
  {
    name: "Katie Kelton",
    role: "Lead Community Reporter",
    portrait: "/images/expert-katie-composite.png",
  },
  {
    name: "Alex Gailey",
    role: "Data Reporter",
    portrait: "/images/expert-alex-composite.png",
  },
  {
    name: "Linda Bell",
    role: "Home Lending Analyst",
    portrait: "/images/expert-linda-composite.png",
  },
]

export function ExpertTeam() {
  return (
    <SectionShell id="team" className="py-12 md:py-16 lg:py-16">
      <div className="flex flex-col items-center gap-10 border-b border-[#f2f3f7] p-8 md:gap-12 md:p-12 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex w-full max-w-[480px] flex-col gap-4 lg:max-w-[440px] lg:shrink-0 xl:max-w-[480px]">
          <h2 className="font-serif text-[length:var(--text-h2)] font-semibold leading-[1.2] tracking-normal text-[#00143d]">
            The team behind{" "}
            <BrushUnderline href="#mission" textClassName="text-inherit no-underline">
              the mission
            </BrushUnderline>
          </h2>
          <p className="text-lg leading-[1.7] text-[#515260]">
            Our journalists and analysts have spent decades covering this market. They report on
            what&apos;s actually happening &mdash; including the parts banks would rather you
            didn&apos;t know.
          </p>
          <Button
            variant="ghost"
            size="lg"
            arrow
            className="h-12 !px-0 self-center text-sm font-semibold text-blue-600 lg:self-start lg:text-base"
          >
            Meet our journalists
          </Button>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-10 lg:flex-row lg:flex-nowrap lg:items-start lg:justify-end lg:gap-14 xl:gap-16">
          {EXPERTS.map((expert) => (
            <ExpertProfile key={expert.name} expert={expert} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

function ExpertProfile({ expert }: { expert: Expert }) {
  return (
    <div className="flex w-[142px] shrink-0 flex-col items-center gap-4">
      <Image
        src={expert.portrait}
        alt={expert.name}
        width={142}
        height={148}
        className="h-[148px] w-[142px] shrink-0"
        sizes="142px"
      />
      <div className="w-full text-center leading-[1.7]">
        <p className="text-base font-bold text-gray-900">{expert.name}</p>
        <p className="text-sm text-[#515260]">{expert.role}</p>
      </div>
    </div>
  )
}
