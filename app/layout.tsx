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
  title: {
    default: "Bankrate",
    template: "%s",
  },
  description: "Compare mortgage, savings, and credit card rates from hundreds of lenders.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className="bg-gray-50 font-sans text-pretty text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
