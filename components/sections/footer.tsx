import Image from "next/image"
import { cn } from "@/lib/utils"

const BANKRATE_BASE = "https://www.bankrate.com"
const NMLS_ACCESS = "https://www.nmlsconsumeraccess.org/"

const BROWSE_LINKS = [
  { label: "Mortgages", href: `${BANKRATE_BASE}/mortgages/` },
  { label: "Banking", href: `${BANKRATE_BASE}/banking/` },
  { label: "Credit cards", href: `${BANKRATE_BASE}/credit-cards/` },
  { label: "Loans", href: `${BANKRATE_BASE}/loans/` },
  { label: "Bankrate's Data Center", href: `${BANKRATE_BASE}/data-center/` },
] as const

const HELP_LINKS = [
  { label: "About us", href: `${BANKRATE_BASE}/about/` },
  { label: "How we're paid", href: `${BANKRATE_BASE}/about/how-we-make-money/` },
  { label: "Site map", href: `${BANKRATE_BASE}/sitemap/` },
  { label: "Careers", href: `${BANKRATE_BASE}/careers/` },
  { label: "Contact us", href: `${BANKRATE_BASE}/contact/` },
  { label: "Advertise with us", href: `${BANKRATE_BASE}/advertise/` },
] as const

const LEGAL_LINKS = [
  { label: "Legal", href: `${BANKRATE_BASE}/legal/` },
  { label: "Privacy policy", href: `${BANKRATE_BASE}/privacy/` },
  { label: "Cookie settings", href: `${BANKRATE_BASE}/cookie-settings/` },
  {
    label: "Do Not Sell or Share My Personal Information",
    href: `${BANKRATE_BASE}/privacy/ccpa-privacy-policy/`,
  },
  { label: "Terms of use", href: `${BANKRATE_BASE}/terms-of-use/` },
  { label: "GLBA annual notice", href: `${BANKRATE_BASE}/glba-annual-notice/` },
  {
    label: "California Consumer Financial Privacy Notice",
    href: `${BANKRATE_BASE}/privacy/california-consumer-privacy-notice/`,
  },
] as const

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/Bankrate", icon: FacebookIcon },
  { label: "X (Twitter)", href: "https://twitter.com/Bankrate", icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/bankrate/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bankrate", icon: LinkedInIcon },
  { label: "YouTube", href: "https://www.youtube.com/user/bankrate", icon: YouTubeIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@bankrate", icon: TikTokIcon },
] as const

const FOOTER_COLUMNS = [
  { title: "Browse", links: BROWSE_LINKS },
  { title: "Help", links: HELP_LINKS },
  { title: "Legal", links: LEGAL_LINKS },
] as const

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-5 py-12 md:px-16 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-20 lg:py-12">
        <div className="flex min-w-0 flex-col gap-6">
          <a href="/" className="inline-block shrink-0" aria-label="Bankrate home">
            <Image
              src="/images/logo.svg"
              alt="Bankrate"
              width={321}
              height={48}
              className="h-10 w-auto md:h-12"
            />
          </a>

          <div className="space-y-1 text-xs leading-[1.7] text-white">
            <NmlsLine id="Bankrate, LLC NMLS ID# 1427381" />
            <NmlsLine id="BR Tech Services, Inc. NMLS ID #1743443" />
          </div>

          <div className="flex flex-col gap-3">
            <ul className="flex flex-wrap items-center gap-4" role="list">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white transition-opacity hover:opacity-80"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-[1.7] text-white">
              © {new Date().getFullYear()} Bankrate, LLC. A Red Ventures company. All Rights
              Reserved.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-10 sm:flex-row sm:gap-12">
          {FOOTER_COLUMNS.map((column) => (
            <FooterLinkColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>
      </div>
    </footer>
  )
}

function NmlsLine({ id }: { id: string }) {
  return (
    <p>
      {id}{" "}
      <span className="text-white/20" aria-hidden>
        |
      </span>{" "}
      <a
        href={NMLS_ACCESS}
        className="text-white underline-offset-2 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        NMLS Consumer Access
      </a>
    </p>
  )
}

function FooterLinkColumn({
  title,
  links,
  className,
}: {
  title: string
  links: ReadonlyArray<{ label: string; href: string }>
  className?: string
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <h3 className="py-2 text-base font-bold leading-[1.7] text-white">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm leading-[1.7] text-[#f9f9fc] transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  )
}
