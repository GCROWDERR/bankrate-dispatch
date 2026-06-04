import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionShell } from "@/components/home/shared"

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
    <SectionShell className="py-12 md:py-16 lg:py-16">
      <div className="flex flex-col items-center gap-10 border-b border-[#f2f3f7] p-8 md:gap-12 md:p-12 lg:flex-row lg:items-start lg:gap-10">
        <div className="flex w-full max-w-[520px] flex-col gap-4 lg:shrink-0">
          <h2 className="font-serif text-[36px] font-semibold leading-[1.2] tracking-normal text-[#00143d]">
            The team behind the mission
          </h2>
          <p className="text-lg leading-[1.7] text-[#515260]">
            Our journalists and analysts have spent decades covering this market. They report on
            what&apos;s actually happening &mdash; including the parts banks would rather you
            didn&apos;t know.
          </p>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-xl py-2 text-base font-semibold tracking-tight text-blue-600 transition-colors hover:text-blue-800"
          >
            Get the latest from our Newsroom
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="flex w-full flex-wrap items-start justify-center gap-10 md:gap-16 lg:gap-20">
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
    <div className="flex w-[142px] flex-col items-center gap-4">
      <Image
        src={expert.portrait}
        alt={expert.name}
        width={142}
        height={148}
        className="h-[148px] w-[142px] shrink-0"
        sizes="142px"
      />
      <div className="min-w-[171px] text-center leading-[1.7]">
        <p className="text-base font-bold text-gray-900">{expert.name}</p>
        <p className="whitespace-nowrap text-sm text-[#515260]">{expert.role}</p>
      </div>
    </div>
  )
}
