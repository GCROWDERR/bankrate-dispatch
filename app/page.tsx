import type { Metadata } from "next"
import { Nav } from "@/components/sections/nav"
import { DispatchSubnav } from "@/components/dispatch/dispatch-subnav"
import { ContentWell } from "@/components/home/shared"
import { NewsyHero } from "@/components/dispatch/newsy-hero"
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
        <ContentWell className="py-8 md:py-9 lg:py-10">
          <NewsyHero />
        </ContentWell>
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
