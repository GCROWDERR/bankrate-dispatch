import type { Metadata } from "next"
import { Nav } from "@/components/sections/nav"
import { DispatchSubnav } from "@/components/dispatch/dispatch-subnav"
import { NewsyHeroFullBleed } from "@/components/dispatch/newsy-hero-full-bleed"
import { Stories } from "@/components/dispatch/stories"
import { Tracker } from "@/components/dispatch/tracker"
import { Methodology } from "@/components/dispatch/methodology"
import { ExpertTeam } from "@/components/dispatch/expert-team"
import { ContactUs } from "@/components/dispatch/contact-us"
import { Footer } from "@/components/sections/footer"
import { DISPATCH_PAGE } from "@/lib/dispatch-content"

export const metadata: Metadata = {
  title: DISPATCH_PAGE.title,
  description: DISPATCH_PAGE.description,
}

export default function DispatchPage() {
  return (
    <>
      <div>
        <Nav variant="cream" />
        <DispatchSubnav />
        <NewsyHeroFullBleed />
      </div>

      <main>
        <Stories />
        <Tracker />
        <Methodology />
        <ExpertTeam />
        <ContactUs />
      </main>

      <Footer />
    </>
  )
}
