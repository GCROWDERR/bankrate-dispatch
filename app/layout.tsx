import type { Metadata } from "next"
import { Instrument_Sans } from "next/font/google"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bankrate Dispatch — Investigative Financial Journalism",
  description:
    "Watchdog reporting and data investigations on how Americans overpay for mortgages and what to do about it.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className="bg-[var(--surface-cream)] font-sans text-pretty text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
