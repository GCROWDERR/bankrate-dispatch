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
  { id: "watchdog", label: "Watchdog" },
  { id: "data", label: "Data reports" },
  { id: "insights", label: "Market insights" },
  { id: "community", label: "Community" },
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

/** Stories shown per page in the grid. */
export const DISPATCH_STORIES_PAGE_SIZE = 4

/** Dispatch stories grid — hero topic is excluded. */
export const DISPATCH_STORIES: DispatchStory[] = [
  {
    id: "closing-costs",
    contentType: "watchdog",
    categoryLabel: "Watchdog Reporting",
    title: "How a single closing-cost line item became a $2,400 payday for the lender",
    excerpt:
      "An undercover review of 1,400 loan estimates exposes a fee that even mortgage brokers can't explain.",
    author: "Matt Fellowes",
    readMinutes: 12,
    accent: "linear-gradient(135deg, #13223b 0%, #14387a 60%, #0061fe 100%)",
    imageSrc: "/images/money-house.jpg",
    href: "#watchdog-closing-costs",
  },
  {
    id: "overpayment-paradox",
    contentType: "data",
    categoryLabel: "Data Report",
    title: "The borrowers most likely to overpay aren't who you'd think",
    excerpt:
      "Upper-income households carry the highest mortgage overpayment rate of any income group — 93%. Better credit makes it worse, not better.",
    author: "Sarah Foster",
    readMinutes: 10,
    accent: "linear-gradient(135deg, #104bb5 0%, #13223b 100%)",
    imageSrc: "/images/credit-chain.jpg",
    href: "#data-drop",
  },
  {
    id: "sunbelt",
    contentType: "insights",
    categoryLabel: "Mortgage Insights",
    title: "Sun Belt Slowdown",
    excerpt:
      "Once the country's hottest markets, Phoenix and Austin now lead the nation in price corrections.",
    author: "Bankrate Editorial",
    readMinutes: 6,
    accent: "linear-gradient(135deg, #13223b 0%, #104bb5 100%)",
    imageSrc: "/images/sunbelt-housing.jpg",
    href: "#",
  },
  {
    id: "hunker-down",
    contentType: "data",
    categoryLabel: "Data Report",
    title: "The Hunker-Down Economy",
    excerpt:
      "Refinance volume just hit a 27-year low. We mapped which metros are paying the price.",
    author: "Bankrate Research",
    readMinutes: 8,
    accent: "linear-gradient(135deg, #104bb5 0%, #13223b 100%)",
    imageSrc: "/images/credit-chain.jpg",
    href: "#",
  },
  {
    id: "housing-divide",
    contentType: "community",
    categoryLabel: "Community",
    title: "The Housing Divide",
    excerpt:
      "Two zip codes, identical credit scores, $84,000 difference in lifetime mortgage cost.",
    author: "Bankrate Editorial",
    readMinutes: 14,
    accent: "linear-gradient(135deg, #14387a 0%, #0061fe 100%)",
    imageSrc: "/images/houseing-divide.jpg",
    href: "#",
  },
  {
    id: "rate-survey",
    contentType: "insights",
    categoryLabel: "Market Survey",
    title: "600+ banks, surveyed this week — Here's where mortgage rates actually moved",
    excerpt:
      "Our weekly lender survey cuts through headline rate chatter with what institutions are quoting right now.",
    author: "Alex Gailey",
    readMinutes: 5,
    accent: "linear-gradient(135deg, #13223b 0%, #0061fe 100%)",
    imageSrc: "/images/sunbelt-housing.jpg",
    href: "#weekly-rate-survey",
  },
  {
    id: "savings-gap",
    contentType: "insights",
    categoryLabel: "Rate Watch",
    title: "Your savings account is probably paying you less than 1%",
    excerpt: "Here's what the market is actually offering right now — and how far behind the average account sits.",
    author: "Greg McBride",
    readMinutes: 4,
    accent: "linear-gradient(135deg, #104bb5 0%, #14387a 100%)",
    imageSrc: "/images/money-house.jpg",
    href: "#best-savings-rates",
  },
  {
    id: "broker-markup",
    contentType: "watchdog",
    categoryLabel: "Watchdog Reporting",
    title: "The broker markup borrowers never see on their closing disclosure",
    excerpt:
      "We matched 920 Loan Estimates to final disclosures and found a recurring fee with no documented service behind it.",
    author: "Matt Fellowes",
    readMinutes: 11,
    accent: "linear-gradient(135deg, #14387a 0%, #0061fe 100%)",
    imageSrc: "/images/money-house.jpg",
    href: "#broker-markup",
  },
  {
    id: "refi-trap",
    contentType: "data",
    categoryLabel: "Data Report",
    title: "The refinance trap: who keeps paying after rates fall",
    excerpt:
      "Borrowers who missed the 2020–2021 window are still paying above-market rates — we mapped how many by state.",
    author: "Bankrate Research",
    readMinutes: 9,
    accent: "linear-gradient(135deg, #104bb5 0%, #13223b 100%)",
    imageSrc: "/images/credit-chain.jpg",
    href: "#refi-trap",
  },
  {
    id: "first-time-buyers",
    contentType: "community",
    categoryLabel: "Community",
    title: "First-time buyers are paying the highest overpayment premium in a decade",
    excerpt:
      "New homeowners without rate-shopping experience overpaid by an average of $9,400 in our 2024 sample.",
    author: "Bankrate Editorial",
    readMinutes: 7,
    accent: "linear-gradient(135deg, #13223b 0%, #104bb5 100%)",
    imageSrc: "/images/houseing-divide.jpg",
    href: "#first-time-buyers",
  },
  {
    id: "credit-score-myth",
    contentType: "data",
    categoryLabel: "Data Report",
    title: "Why a 780 credit score doesn't guarantee a competitive mortgage rate",
    excerpt:
      "Rate dispersion among prime borrowers is wider than at any point since we started tracking Loan Estimates in 2019.",
    author: "Sarah Foster",
    readMinutes: 8,
    accent: "linear-gradient(135deg, #14387a 0%, #0061fe 100%)",
    imageSrc: "/images/credit-chain.jpg",
    href: "#credit-score-myth",
  },
  {
    id: "rural-lending",
    contentType: "community",
    categoryLabel: "Community",
    title: "Rural borrowers face a wider rate gap — and fewer lenders to shop",
    excerpt:
      "Counties with a single dominant lender show overpayment rates 18 points higher than competitive markets.",
    author: "Bankrate Editorial",
    readMinutes: 13,
    accent: "linear-gradient(135deg, #104bb5 0%, #13223b 100%)",
    imageSrc: "/images/sunbelt-housing.jpg",
    href: "#rural-lending",
  },
]

export function storiesForContentType(contentType: DispatchContentTypeId) {
  if (contentType === "all") return DISPATCH_STORIES
  return DISPATCH_STORIES.filter((story) => story.contentType === contentType)
}
