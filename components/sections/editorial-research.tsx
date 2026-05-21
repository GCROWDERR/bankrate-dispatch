import Image from "next/image"
import { ReadMoreLink, SectionShell } from "@/components/home/shared"
import { authorAvatar } from "@/lib/author-avatars"

const LEAD = {
  tag: "BANKRATE RESEARCH · 2026",
  title: "The hidden homeownership tax",
  body:
    "89% of borrowers in 2024 paid more than the most competitive rate available for their profile. We measured 2.8 million mortgages to find out why — and what it costs.",
  author: "Matt Fellowes, CEO",
  href: "#research-paper",
}

const SECONDARIES = [
  {
    tag: "DATA DROP",
    title: "The borrowers most likely to overpay aren't who you'd think.",
    body:
      "Upper-income households carry the highest mortgage overpayment rate of any income group — 93%. Better credit makes it worse, not better.",
    author: "Sarah Foster",
    avatar: authorAvatar("Sarah Foster"),
    href: "#data-drop",
  },
  {
    tag: "MARKET SURVEY",
    title: "600+ banks, surveyed this week. Here's where mortgage rates actually moved.",
    body: "",
    author: "Alex Gailey",
    avatar: authorAvatar("Alex Gailey"),
    href: "#weekly-rate-survey",
  },
  {
    tag: "RATE WATCH",
    title: "Your savings account is probably paying you less than 1%.",
    body: "Here's what the market is actually offering right now.",
    author: "Greg McBride",
    avatar: authorAvatar("Greg McBride"),
    href: "#best-savings-rates",
  },
]

const EDITORIAL_CARD_SURFACE = "overflow-hidden rounded-[34px] bg-white"

/** Lead editorial card — Figma Homepage redesign node 156:1453 */
function LeadArticleCard() {
  return (
    <article
      className={`flex w-full flex-col items-center gap-[27px] px-4 pb-4 pt-8 ${EDITORIAL_CARD_SURFACE}`}
    >
      <div className="flex w-full flex-col gap-4 px-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
          {LEAD.tag}
        </p>

        <h3 className="font-serif text-[22px] font-semibold leading-[1.3] tracking-[-0.66px] text-[#13223b]">
          {LEAD.title}
        </h3>

        <p className="text-[15px] leading-[1.5] text-gray-900/80">{LEAD.body}</p>

        <p className="text-[14px] text-gray-900/60">{LEAD.author}</p>

        <ReadMoreLink href={LEAD.href} className="w-fit text-[#13223b]">
          Read the full research
        </ReadMoreLink>
      </div>

      <div className="relative w-full">
        <div className="relative aspect-[523/294] w-full overflow-hidden rounded-[24px]">
          <Image
            src="/images/homeownership-tax.png"
            alt={`${LEAD.author} — ${LEAD.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        </div>
      </div>
    </article>
  )
}

export function EditorialResearch() {
  return (
    <SectionShell className="py-20">
      <h2 className="max-w-[860px] font-serif text-[length:var(--text-heading-lg)] font-semibold leading-[1.15] tracking-[-2px] text-gray-900">
        What the market looks like when someone&apos;s actually been watching it.
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <LeadArticleCard />

        <div className="flex flex-col gap-5">
          {SECONDARIES.map((card) => (
            <article
              key={card.title}
              className={`flex flex-col gap-3 p-7 ${EDITORIAL_CARD_SURFACE}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {card.tag}
              </p>
              <h4 className="font-serif text-[20px] font-semibold leading-[1.25] tracking-[-0.5px] text-gray-900">
                {card.title}
              </h4>
              {card.body && (
                <p className="text-[14px] leading-[1.5] text-gray-900/70">{card.body}</p>
              )}
              <div className="mt-1 flex items-center gap-3">
                <Image
                  src={card.avatar}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-full object-cover"
                />
                <span className="text-[13px] font-semibold text-gray-900">{card.author}</span>
                <ReadMoreLink href={card.href} className="ml-auto shrink-0">
                  Read More
                </ReadMoreLink>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <ReadMoreLink href="#editorial-hub">See all expert insights</ReadMoreLink>
      </div>
    </SectionShell>
  )
}
