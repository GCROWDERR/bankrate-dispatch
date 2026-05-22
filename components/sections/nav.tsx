"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MegaMenu, type MegaMenuData } from "@/components/sections/mega-menu"
import { cn } from "@/lib/utils"

const MORTGAGES_MENU: MegaMenuData = {
  rail: [{ label: "Apply now" }],
  primary: {
    title: "Mortgages",
    columns: [
      [
        { label: "Today's mortgage rates" },
        { label: "Refinance rates" },
        { label: "Mortgage calculator" },
      ],
      [
        { label: "FHA loans" },
        { label: "VA loans" },
        { label: "Jumbo loans" },
      ],
    ],
  },
  secondary: {
    title: "Tools & guides",
    links: [
      { label: "First-time homebuyer guide" },
      { label: "Affordability calculator" },
      { label: "Closing costs" },
      { label: "Mortgage glossary" },
    ],
  },
  features: [
    { title: "Best mortgage lenders of 2026", subtitle: "Subtitle text or read time" },
    { title: "How to get pre-approved", subtitle: "Subtitle text or read time" },
  ],
}

const BANKING_MENU: MegaMenuData = {
  rail: [{ label: "Open an account" }],
  primary: {
    title: "Accounts",
    columns: [
      [
        { label: "Checking accounts" },
        { label: "Savings accounts" },
        { label: "Money market" },
      ],
      [
        { label: "CDs" },
        { label: "High-yield savings" },
        { label: "Business banking" },
      ],
    ],
  },
  secondary: {
    title: "Tools",
    links: [
      { label: "Compare rates" },
      { label: "Savings calculator" },
      { label: "CD calculator" },
      { label: "Bank reviews" },
    ],
  },
  features: [
    { title: "Best high-yield savings of 2026", subtitle: "Subtitle text or read time" },
    { title: "How to choose a bank", subtitle: "Subtitle text or read time" },
  ],
}

const CREDIT_CARDS_MENU: MegaMenuData = {
  rail: [{ label: "Compare cards" }],
  primary: {
    title: "Cards by category",
    columns: [
      [
        { label: "Cash back" },
        { label: "Travel rewards" },
        { label: "Balance transfer" },
      ],
      [
        { label: "0% intro APR" },
        { label: "Business cards" },
        { label: "Student cards" },
      ],
    ],
  },
  secondary: {
    title: "Tools & guides",
    links: [
      { label: "Card matcher" },
      { label: "Pre-qualify offers" },
      { label: "Credit card calculator" },
      { label: "Building credit" },
    ],
  },
  features: [
    { title: "Best credit cards of 2026", subtitle: "Subtitle text or read time" },
    { title: "How to pick a card", subtitle: "Subtitle text or read time" },
  ],
}

const LOANS_MENU: MegaMenuData = {
  rail: [{ label: "Apply now" }],
  primary: {
    title: "Loan types",
    columns: [
      [
        { label: "Personal loans" },
        { label: "Student loans" },
        { label: "Auto loans" },
      ],
      [
        { label: "Home equity" },
        { label: "Debt consolidation" },
        { label: "Business loans" },
      ],
    ],
  },
  secondary: {
    title: "Calculators & tools",
    links: [
      { label: "Loan calculator" },
      { label: "Refinance calculator" },
      { label: "Payment estimator" },
      { label: "Check your credit score" },
    ],
  },
  features: [
    { title: "Best personal loans of 2026", subtitle: "Subtitle text or read time" },
    { title: "How to get approved", subtitle: "Subtitle text or read time" },
  ],
}

const OUR_COMPANY_MENU: MegaMenuData = {
  rail: [{ label: "Who we are" }],
  primary: {
    title: "Our company",
    columns: [
      [
        { label: "About Bankrate" },
        { label: "Our founder" },
        { label: "Leadership" },
      ],
      [
        { label: "Contact us" },
        { label: "AI policy" },
        { label: "Legal" },
      ],
    ],
  },
  secondary: {
    title: "Our journalism",
    links: [
      { label: "Newsroom" },
      { label: "Bankrate Data Center" },
      { label: "Bankrate's editorial team" },
      { label: "Editorial standards" },
    ],
  },
  features: [
    { title: "Hidden Homeownership Tax", subtitle: "Subtitle text or read time" },
    { title: "Featured Title", subtitle: "Subtitle text or read time" },
  ],
}

type NavLink = { label: string; megaMenu?: MegaMenuData }

const NAV_LINKS: NavLink[] = [
  { label: "Mortgages", megaMenu: MORTGAGES_MENU },
  { label: "Banking", megaMenu: BANKING_MENU },
  { label: "Credit cards", megaMenu: CREDIT_CARDS_MENU },
  { label: "Loans", megaMenu: LOANS_MENU },
  { label: "Our company", megaMenu: OUR_COMPANY_MENU },
]

const POPULAR_SEARCHES = ["Mortgage rates", "Balance transfer credit cards", "Car insurance quotes"]
const TOOLS = ["Mortgage calculator", "Loan calculator", "CD calculator"]

type NavVariant = "dark" | "cream"

export function Nav({ variant = "dark" }: { variant?: NavVariant }) {
  const isCream = variant === "cream"
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<number | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = (i: number) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setActiveMenu(i)
  }

  const scheduleClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null)
      closeTimeout.current = null
    }, 150)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen, searchOpen])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setSearchOpen(false)
        setActiveMenu(null)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const activeMenuData =
    activeMenu !== null ? NAV_LINKS[activeMenu]?.megaMenu : null

  return (
    <nav
      className={cn(
        "relative w-full",
        isCream ? "bg-[#f5f2eb]" : "border-b border-blue-800 bg-blue-900"
      )}
    >
      {/* Desktop */}
      <div className="mx-auto hidden h-[72px] max-w-[1312px] items-center gap-4 px-5 md:px-6 lg:flex">
        <a href="/" className="block shrink-0" aria-label="Bankrate home">
          <Image
            src={isCream ? "/images/logo-navy.svg" : "/images/logo.svg"}
            alt="Bankrate"
            width={176}
            height={28}
            className="h-[30px] w-auto"
            priority
          />
        </a>

        <div className="flex h-full min-w-0 flex-1 items-stretch justify-between">
          <ul className="flex h-full items-stretch" role="list">
            {NAV_LINKS.map((link, i) => {
              const hasMenu = !!link.megaMenu
              return (
                <li
                  key={link.label}
                  className="flex"
                  onMouseEnter={hasMenu ? () => openMenu(i) : undefined}
                  onMouseLeave={hasMenu ? scheduleClose : undefined}
                >
                  <a
                    href="#"
                    aria-haspopup={hasMenu || undefined}
                    aria-expanded={hasMenu ? activeMenu === i : undefined}
                    className={cn(
                      "flex items-center px-6 text-sm font-semibold tracking-[-0.25px]",
                      isCream ? "text-blue-900" : "text-white"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex h-full items-stretch">
            <div className="flex items-center" aria-hidden>
              <span
                className={cn(
                  "h-10 w-px",
                  isCream ? "bg-gray-300" : "bg-blue-800"
                )}
              />
            </div>
            <a
              href="#"
              className={cn(
                "flex items-center px-6 text-sm font-semibold tracking-[-0.25px]",
                isCream ? "text-blue-900" : "text-white"
              )}
            >
              How we&rsquo;re paid
            </a>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-6">
          <Button
            variant="primary"
            size="default"
            className="rounded px-4 py-3 text-sm font-bold tracking-[-0.25px]"
          >
            Log in or sign up
          </Button>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex size-6 items-center justify-center"
            aria-label="Search"
          >
            <Image
              src="/images/search.svg"
              alt=""
              width={24}
              height={24}
              className={cn(isCream && "brightness-0")}
              aria-hidden
            />
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 top-[72px] z-30 hidden bg-blue-900/40 transition-opacity duration-500 lg:block",
          activeMenu !== null ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setActiveMenu(null)}
        aria-hidden
      />
      {activeMenuData && (
        <div className="absolute inset-x-0 top-full z-40 hidden justify-center px-5 pt-2 lg:flex">
          <MegaMenu
            data={activeMenuData}
            onMouseEnter={() => activeMenu !== null && openMenu(activeMenu)}
            onMouseLeave={scheduleClose}
          />
        </div>
      )}

      {/* Mobile */}
      <div className="flex h-[72px] items-center justify-between px-5 lg:hidden">
        <a href="/" className="block shrink-0" aria-label="Bankrate home">
          <Image
            src={isCream ? "/images/logo-navy.svg" : "/images/logo.svg"}
            alt="Bankrate"
            width={176}
            height={28}
            className="h-[25px] w-auto"
            priority
          />
        </a>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex size-10 items-center justify-center"
            aria-label="Search"
          >
            <Image
              src="/images/search.svg"
              alt=""
              width={20}
              height={20}
              className={cn(isCream && "brightness-0")}
              aria-hidden
            />
          </button>
          <MobileMenuButton
            open={menuOpen}
            light={isCream}
            onClick={() => setMenuOpen((open) => !open)}
          />
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 z-40 flex flex-col bg-gray-50 py-6 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
        >
          <div className="flex justify-end px-6 pb-4">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex size-6 items-center justify-center text-gray-900"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className="flex flex-col" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className="flex items-center justify-between px-6 py-4 font-serif text-[20px] font-bold leading-[1.2] tracking-[-0.15px] text-gray-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  <TrianglePlay className="text-primary" />
                </a>
              </li>
            ))}
          </ul>

          <hr className="mx-6 my-6 border-gray-200" />

          <a
            href="#"
            className="px-6 py-4 text-[16px] font-semibold tracking-[-0.25px] text-blue-900"
            onClick={() => setMenuOpen(false)}
          >
            How we&rsquo;re paid
          </a>

          <div className="flex-1" />

          <div className="px-6 pb-4">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                setSearchOpen(true)
              }}
              className="flex w-full items-center gap-2 rounded border border-gray-500 bg-white px-3 py-2.5 text-left"
              aria-label="Open search"
            >
              <Image
                src="/images/search.svg"
                alt=""
                width={16}
                height={16}
                className="brightness-0"
                aria-hidden
              />
              <span className="text-[16px] tracking-[-0.25px] text-gray-500">Search...</span>
            </button>
          </div>

          <div className="flex items-center justify-between px-6">
            <Image
              src="/images/logo-navy.svg"
              alt="Bankrate"
              width={120}
              height={20}
              className="h-[22px] w-auto"
            />
            <Button
              variant="primary"
              size="default"
              className="rounded px-4 py-3 text-sm font-bold tracking-[-0.25px]"
              onClick={() => setMenuOpen(false)}
            >
              Log in or sign up
            </Button>
          </div>
        </div>
      )}
      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-blue-900/40 pt-[72px] px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-[760px] overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input */}
            <div className="flex items-center gap-3 border-b border-gray-200 px-6 py-4">
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search..."
                className="flex-1 text-[18px] text-gray-900 placeholder:text-gray-400 outline-none"
              />
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-primary">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Popular searches */}
            <div className="px-6 py-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-gray-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 12h4l3-9 4 18 3-9h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Popular searches
              </p>
              <ul>
                {POPULAR_SEARCHES.map((item) => (
                  <li key={item}>
                    <a href="#" className="block py-2.5 text-[16px] font-semibold text-gray-900 hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="border-t border-gray-100 px-6 py-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-semibold text-gray-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
                  <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
                  <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
                  <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8"/>
                </svg>
                Tools
              </p>
              <ul>
                {TOOLS.map((item) => (
                  <li key={item}>
                    <a href="#" className="block py-2.5 text-[16px] font-semibold text-gray-900 hover:text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function MobileMenuButton({
  open,
  light,
  onClick,
}: {
  open: boolean
  light?: boolean
  onClick: () => void
}) {
  const barColor = light ? "bg-[#13223b]" : "bg-white"
  return (
    <button
      type="button"
      className="flex size-10 items-center justify-center"
      aria-expanded={open}
      aria-controls="mobile-nav-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span className="flex w-5 flex-col gap-1">
        <span
          className={cn(
            "h-0.5 w-5 transition-transform duration-200",
            barColor,
            open && "translate-y-[6px] rotate-45"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-5 transition-transform duration-200",
            barColor,
            open && "-translate-y-[6px] -rotate-45"
          )}
        />
      </span>
    </button>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden className={cn("text-primary", className)}>
      <path d="M1.5 2.5L4 5L6.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function TrianglePlay({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden className={className}>
      <path d="M3 2 L9.5 6 L3 10 Z" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden className={className}>
      <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
