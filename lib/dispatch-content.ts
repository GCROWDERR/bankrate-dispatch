import { DISPATCH_HERO } from "@/lib/editorial-content"

/** Site-wide Dispatch page identity — edit here for title, nav, and hero branding. */
export const DISPATCH_PAGE = {
  name: "Bankrate Dispatch",
  title: "Bankrate Dispatch — Investigative Financial Journalism",
  description:
    "Watchdog reporting and data investigations on how Americans overpay for mortgages and what to do about it.",
} as const

export type DispatchInvestigation = {
  eyebrow: string
  title: string
  description: string
  highlight: string
  href: string
  dataHref: string
  imageSrc: string
  imageAlt: string
}

export type DispatchStory = {
  id: string
  categoryLabel: string
  title: string
  excerpt: string
  author: string
  readMinutes: number
  accent: string
  imageSrc?: string
  href: string
}

/** Lead investigation — Dispatch hero (Hidden Homeownership Tax). */
export const FEATURED_INVESTIGATION: DispatchInvestigation = {
  eyebrow: DISPATCH_HERO.tag,
  title: DISPATCH_HERO.title,
  description: DISPATCH_HERO.body,
  highlight: "$142 billion",
  href: DISPATCH_HERO.href,
  dataHref: "#homeownership-tax-data",
  imageSrc: DISPATCH_HERO.imageSrc ?? "/images/homeownership-tax.png",
  imageAlt: DISPATCH_HERO.imageAlt ?? DISPATCH_HERO.title,
}

/** Dispatch stories grid — first item is the large featured card; hero topic is excluded. */
export const DISPATCH_STORIES: DispatchStory[] = [
  {
    id: "closing-costs",
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
    id: "sunbelt",
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
]
