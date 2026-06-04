import { authorAvatar } from "@/lib/author-avatars"

export type EditorialArticle = {
  tag: string
  title: string
  body: string
  author: string
  href: string
  imageSrc?: string
  imageAlt?: string
  avatar?: string
}

/** Dispatch hero — not repeated as the editorial lead card. */
export const DISPATCH_HERO: EditorialArticle = {
  tag: "Exclusive Data Report",
  title: "The Hidden Homeownership Tax",
  body:
    "How overpaying for mortgages costs Americans $142 billion a year — and the lending practices that make it routine.",
  author: "Matt Fellowes, CEO",
  href: "#research-paper",
  imageSrc: "/images/homeownership-tax.png",
  imageAlt: "Matt Fellowes — The Hidden Homeownership Tax",
}

/** Large lead card in the editorial section. */
export const EDITORIAL_LEAD: EditorialArticle = {
  tag: "Watchdog Reporting",
  title: "How a single closing-cost line item became a $2,400 payday for the lender",
  body:
    "An undercover review of 1,400 loan estimates exposes a fee that even mortgage brokers can't explain — and who profits when borrowers never ask.",
  author: "Matt Fellowes",
  href: "#watchdog-closing-costs",
  imageSrc: "/images/money-house.jpg",
  imageAlt: "Matt Fellowes — closing-cost investigation",
}

export const EDITORIAL_SECONDARIES: EditorialArticle[] = [
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
