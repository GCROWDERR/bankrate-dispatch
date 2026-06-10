import { DISPATCH_HERO } from "@/lib/editorial-content"
import type { StatSuffix } from "@/components/ui/stat"

/** Site-wide Dispatch page identity — edit here for title, nav, and hero branding. */
export const DISPATCH_PAGE = {
  name: "Bankrate Dispatch",
  headline: "Bankrate News & Research",
  intro:
    "Founded in 1982, the original vision for Bankrate was to hold the financial industry accountable and give people visibility and data. Now over four decades later, we're committed to the same mission.",
  ctaLabel: "Explore our reporting",
  ctaHref: "#stories",
  title: "Bankrate News & Research — Investigative Financial Journalism",
  description:
    "Watchdog reporting and data investigations on how Americans overpay for mortgages and what to do about it.",
} as const

export type DispatchContentTypeId = "all" | "watchdog" | "data" | "insights" | "community"

export const DISPATCH_CONTENT_TYPES: {
  id: DispatchContentTypeId
  label: string
}[] = [
  { id: "all", label: "All" },
  { id: "community", label: "Community" },
  { id: "data", label: "Data reports" },
  { id: "watchdog", label: "Watchdog" },
]

export type DispatchInvestigation = {
  eyebrow: string
  title: string
  description: string
  highlight: string
  href: string
  ctaLabel: string
  stats: {
    value: string
    label: string
  }[]
}

export type DispatchStory = {
  id: string
  contentType: Exclude<DispatchContentTypeId, "all">
  categoryLabel: string
  title: string
  excerpt: string
  author: string
  readMinutes: number
  accent: string
  imageSrc?: string
  href: string
}

export type ResearchDataPoint = {
  value: string
  suffix?: StatSuffix
  label: string
}

/** Key findings from the Hidden Homeownership Tax research paper (update when PDF revisions land). */
export const RESEARCH_DATA_POINTS: ResearchDataPoint[] = [
  {
    value: "$142B",
    label: "Estimated annual cost of mortgage overpayment across U.S. households",
  },
  {
    value: "89",
    suffix: "percent",
    label: "Of 2024 borrowers who paid above the most competitive rate for their profile",
  },
  {
    value: "2.8M",
    label: "Mortgages measured in the Hidden Homeownership Tax analysis",
  },
  {
    value: "$73k",
    label: "Average lifetime overpayment per homebuyer in our national benchmark",
  },
]

/** Lead investigation — Exclusive Data Report module (Hidden Homeownership Tax). */
export const FEATURED_INVESTIGATION: DispatchInvestigation = {
  eyebrow: DISPATCH_HERO.tag,
  title: DISPATCH_HERO.title,
  description: DISPATCH_HERO.body,
  highlight: "$142 billion",
  href: DISPATCH_HERO.href,
  ctaLabel: "Read the full research",
  stats: [
    {
      value: "87%",
      label: "of borrowers failed to secure their best available rate",
    },
    {
      value: "$3,343",
      label: "in annual excess costs for the typical borrower",
    },
    {
      value: "$65B",
      label: "estimated annual overpayment burden across U.S. mortgages originated since 2022",
    },
  ],
}

export type DispatchSeries = {
  id: string
  tentpoleTitle: string
  tentpoleHref: string
  /** Ordered peel stories supporting the tentpole narrative. */
  supportingStoryIds: string[]
}

/** Supporting stories for the current hero investigation. */
export const FEATURED_INVESTIGATION_SERIES: DispatchSeries = {
  id: "hidden-homeownership-tax",
  tentpoleTitle: FEATURED_INVESTIGATION.title,
  tentpoleHref: FEATURED_INVESTIGATION.href,
  supportingStoryIds: [
    "where-borrowers-overpay-most",
    "why-mortgage-rate-higher",
    "refinance-savings-millions",
  ],
}

/** Stories shown per page in the grid. */
export const DISPATCH_STORIES_PAGE_SIZE = 4

const STORY_IMAGES = [
  "/images/money-house.jpg",
  "/images/credit-chain.jpg",
  "/images/sunbelt-housing.jpg",
  "/images/houseing-divide.jpg",
] as const

const STORY_ACCENTS = [
  "linear-gradient(135deg, #13223b 0%, #14387a 60%, #0061fe 100%)",
  "linear-gradient(135deg, #104bb5 0%, #13223b 100%)",
  "linear-gradient(135deg, #13223b 0%, #104bb5 100%)",
  "linear-gradient(135deg, #14387a 0%, #0061fe 100%)",
] as const

/** Dispatch stories grid — hero tentpole and sidebar peel stories are excluded in the feed. */
export const DISPATCH_STORIES: DispatchStory[] = [
  {
    id: "hidden-homeownership-tax",
    contentType: "data",
    categoryLabel: "Data Report",
    title:
      "The Hidden Homeownership Tax: How Overpaying for Mortgages Costs Americans $70 Billion a Year",
    excerpt:
      "Our national analysis quantifies the spread between the rates borrowers pay and the best available offers in their market.",
    author: "Matt Fellowes",
    readMinutes: 12,
    accent: STORY_ACCENTS[0],
    imageSrc: STORY_IMAGES[0],
    href: "#hidden-homeownership-tax",
  },
  {
    id: "where-borrowers-overpay-most",
    contentType: "data",
    categoryLabel: "Data Report",
    title: "Where Borrowers Are Overpaying the Most",
    excerpt:
      "State-by-state maps show where lifetime mortgage overpayment is widest — and where competition keeps rates closer to fair value.",
    author: "Bankrate Research",
    readMinutes: 9,
    accent: STORY_ACCENTS[1],
    imageSrc: STORY_IMAGES[1],
    href: "#where-borrowers-overpay-most",
  },
  {
    id: "why-mortgage-rate-higher",
    contentType: "watchdog",
    categoryLabel: "Watchdog Reporting",
    title: "Why Your Mortgage Rate Is Higher Than It Should Be, and How Much It's Costing You",
    excerpt:
      "We trace the pricing decisions and broker incentives that push qualified borrowers above the best rate they could qualify for.",
    author: "Matt Fellowes",
    readMinutes: 11,
    accent: STORY_ACCENTS[2],
    imageSrc: STORY_IMAGES[2],
    href: "#why-mortgage-rate-higher",
  },
  {
    id: "loan-officer-close-deals",
    contentType: "watchdog",
    categoryLabel: "Watchdog Reporting",
    title:
      'How Some Mortgage Lenders Incentivize Loan Officers to "Close Deals," Not Get You the Best One',
    excerpt:
      "Compensation structures reward speed and margin — not rate shopping — and borrowers rarely see how that shows up in their Loan Estimate.",
    author: "Matt Fellowes",
    readMinutes: 10,
    accent: STORY_ACCENTS[3],
    imageSrc: STORY_IMAGES[3],
    href: "#loan-officer-close-deals",
  },
  {
    id: "rates-high-still-buying",
    contentType: "community",
    categoryLabel: "Community",
    title: "Rates Are High, but They're Buying Anyway. Why Waiting Isn't an Option",
    excerpt:
      "Homebuyers explain why they're moving now despite elevated rates — and the tradeoffs they're accepting to get keys in hand.",
    author: "Bankrate Editorial",
    readMinutes: 8,
    accent: STORY_ACCENTS[0],
    imageSrc: STORY_IMAGES[0],
    href: "#rates-high-still-buying",
  },
  {
    id: "three-mortgage-traps",
    contentType: "watchdog",
    categoryLabel: "Watchdog Reporting",
    title: "3 Traps the Mortgage Industry Doesn't Want You to Know About — and How to Avoid Them",
    excerpt:
      "From teaser-rate advertising to hidden markups, three common practices that cost borrowers thousands — and what to ask before you sign.",
    author: "Matt Fellowes",
    readMinutes: 9,
    accent: STORY_ACCENTS[1],
    imageSrc: STORY_IMAGES[1],
    href: "#three-mortgage-traps",
  },
  {
    id: "nine-properties-financing-tips",
    contentType: "community",
    categoryLabel: "Community",
    title:
      "This Couple Mortgaged 9 Properties in Under a Decade. Here Are the Financing Tips They Swear By",
    excerpt:
      "Repeat buyers share the rate-shopping habits, lender questions, and timing moves that helped them keep financing costs in check.",
    author: "Bankrate Editorial",
    readMinutes: 7,
    accent: STORY_ACCENTS[2],
    imageSrc: STORY_IMAGES[2],
    href: "#nine-properties-financing-tips",
  },
  {
    id: "best-worst-markets-homebuyers",
    contentType: "data",
    categoryLabel: "Data Report",
    title: "Best and Worst Markets for Homebuyers, Ranked",
    excerpt:
      "We ranked metros on affordability, overpayment risk, and inventory to show where buyers get the most — and least — leverage.",
    author: "Bankrate Research",
    readMinutes: 10,
    accent: STORY_ACCENTS[3],
    imageSrc: STORY_IMAGES[3],
    href: "#best-worst-markets-homebuyers",
  },
  {
    id: "fha-loans-price",
    contentType: "watchdog",
    categoryLabel: "Watchdog Reporting",
    title: "FHA Loans Can Open the Door to Homeownership: But They Come at a Price",
    excerpt:
      "Low down payments help buyers get in the door — but insurance premiums and rate spreads can add up over the life of the loan.",
    author: "Bankrate Editorial",
    readMinutes: 8,
    accent: STORY_ACCENTS[0],
    imageSrc: STORY_IMAGES[0],
    href: "#fha-loans-price",
  },
  {
    id: "buy-now-refi-later",
    contentType: "watchdog",
    categoryLabel: "Watchdog Reporting",
    title:
      'The Dangers of "Buy Now, Refi Later" Mortgage Advertising — and What to Be Wary of Before You Get a Home Loan',
    excerpt:
      "Lenders pitch future refinances as a safety net. We examine when that promise holds up — and when it leaves borrowers stuck paying more.",
    author: "Matt Fellowes",
    readMinutes: 11,
    accent: STORY_ACCENTS[1],
    imageSrc: STORY_IMAGES[1],
    href: "#buy-now-refi-later",
  },
  {
    id: "refinance-savings-millions",
    contentType: "data",
    categoryLabel: "Data Report",
    title: "Nearly 2.7 Million Homeowners Could Save With a Refinance. Are You One of Them?",
    excerpt:
      "Millions of borrowers are still paying above today's market rates. Our model estimates who has the most to gain from shopping again.",
    author: "Bankrate Research",
    readMinutes: 9,
    accent: STORY_ACCENTS[2],
    imageSrc: STORY_IMAGES[2],
    href: "#refinance-savings-millions",
  },
  {
    id: "debunking-30-percent-rule",
    contentType: "data",
    categoryLabel: "Data Report",
    title:
      'Debunking Your Broker\'s "30% Rule" — Americans Need to Set Aside 43% of Their Income for a Home',
    excerpt:
      "The old affordability benchmark no longer matches real housing costs. Updated math shows how much income buyers actually need set aside.",
    author: "Sarah Foster",
    readMinutes: 8,
    accent: STORY_ACCENTS[3],
    imageSrc: STORY_IMAGES[3],
    href: "#debunking-30-percent-rule",
  },
]

export function storiesForContentType(contentType: DispatchContentTypeId) {
  if (contentType === "all") return DISPATCH_STORIES
  return DISPATCH_STORIES.filter((story) => story.contentType === contentType)
}

/** Stories for the paginated grid — excludes hero tentpole and sidebar peel stories. */
export function storiesForStoriesSection(contentType: DispatchContentTypeId) {
  const excludedIds = new Set([
    ...FEATURED_INVESTIGATION_SERIES.supportingStoryIds,
    "hidden-homeownership-tax",
  ])
  return storiesForContentType(contentType).filter((story) => !excludedIds.has(story.id))
}

export function storiesByIds(ids: string[]) {
  const storiesById = new Map(DISPATCH_STORIES.map((story) => [story.id, story]))
  return ids.flatMap((id) => {
    const story = storiesById.get(id)
    return story ? [story] : []
  })
}

export function supportingStoriesForSeries(series: DispatchSeries) {
  return storiesByIds(series.supportingStoryIds)
}

export type FranchiseInstallmentStatus = "published" | "scheduled"

export type DispatchFranchiseInstallment = {
  id: string
  installment: number
  title: string
  excerpt: string
  status: FranchiseInstallmentStatus
  /** Release window for this episode. */
  calendarLabel: string
  /** Display date for the featured header row. */
  publishedDate?: string
  href?: string
  readMinutes?: number
  author?: string
  imageSrc?: string
  accent?: string
}

/** Homebuying in America — serial franchise hub within News & Research. */
export const HOMEBUYING_IN_AMERICA_FRANCHISE = {
  id: "homebuying-in-america",
  title: "Homebuying in America",
  description:
    "A recurring editorial franchise — each installment follows one homebuying thread across reporting, data, and community voices.",
  installments: [
    {
      id: "hia-affordability-line",
      installment: 1,
      title: "The affordability line: who can still buy in 2026",
      excerpt:
        "We mapped income, rates, and inventory to show where the typical household can still qualify — and where the math breaks.",
      status: "published",
      calendarLabel: "January 2026",
      publishedDate: "Jan. 14, 2026",
      href: "#hia-affordability-line",
      readMinutes: 11,
      author: "Sarah Foster",
      imageSrc: "/images/money-house.jpg",
    },
    {
      id: "hia-housing-divide",
      installment: 2,
      title: "Best and Worst Markets for Homebuyers, Ranked",
      excerpt:
        "The second installment ranks metros on affordability, overpayment risk, and inventory — and where buyers have the most leverage.",
      status: "published",
      calendarLabel: "February 2026",
      publishedDate: "Feb. 11, 2026",
      href: "#best-worst-markets-homebuyers",
      readMinutes: 10,
      author: "Bankrate Research",
      imageSrc: "/images/houseing-divide.jpg",
    },
    {
      id: "hia-first-time-premium",
      installment: 3,
      title: "Rates Are High, but They're Buying Anyway. Why Waiting Isn't an Option",
      excerpt:
        "Installment three follows buyers moving now despite elevated rates — and the tradeoffs they're accepting to get keys in hand.",
      status: "published",
      calendarLabel: "March 2026",
      publishedDate: "March 4, 2026",
      href: "#rates-high-still-buying",
      readMinutes: 8,
      author: "Bankrate Editorial",
      imageSrc: "/images/credit-chain.jpg",
    },
    {
      id: "hia-starter-inventory",
      installment: 4,
      title: "The starter-home inventory crunch, mapped by metro",
      excerpt:
        "Next in the series: where entry-level supply is recovering, stalling, or disappearing — and what it means for monthly payment math.",
      status: "scheduled",
      calendarLabel: "Q2 2026",
      accent: "linear-gradient(135deg, #13223b 0%, #104bb5 100%)",
    },
  ] satisfies DispatchFranchiseInstallment[],
} as const

export function featuredFranchiseInstallment(
  franchise: typeof HOMEBUYING_IN_AMERICA_FRANCHISE
) {
  return [...franchise.installments]
    .filter((installment) => installment.status === "published")
    .sort((a, b) => b.installment - a.installment)[0]
}

export function sidebarFranchiseInstallments(
  franchise: typeof HOMEBUYING_IN_AMERICA_FRANCHISE,
  featuredId: string
) {
  return franchise.installments.filter((installment) => installment.id !== featuredId)
}

export function franchiseInstallmentAsStory(
  installment: DispatchFranchiseInstallment
): DispatchStory {
  const linked = installment.href
    ? DISPATCH_STORIES.find((story) => story.href === installment.href)
    : undefined

  if (linked) {
    return linked
  }

  return {
    id: installment.id,
    contentType: "data",
    categoryLabel:
      installment.status === "scheduled" ? "Coming soon" : "Franchise",
    title: installment.title,
    excerpt: installment.excerpt,
    author: installment.author ?? "Bankrate Editorial",
    readMinutes: installment.readMinutes ?? 0,
    accent: installment.accent ?? STORY_ACCENTS[0],
    imageSrc: installment.imageSrc,
    href: installment.href ?? "#",
  }
}
