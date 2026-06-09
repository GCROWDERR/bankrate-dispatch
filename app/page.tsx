import type { Metadata } from "next"
import { Nav } from "@/components/sections/nav"
import { DispatchSubnav } from "@/components/dispatch/dispatch-subnav"
import { ContentWell } from "@/components/home/shared"
import { maskedSectionOverlap } from "@/components/dispatch/section-mask-bg"
import { NewsyHeroContained } from "@/components/dispatch/newsy-hero-contained"
import { FranchiseHub } from "@/components/dispatch/franchise-hub"
import { Stories } from "@/components/dispatch/stories"
import { Tracker } from "@/components/dispatch/tracker"
import { Methodology } from "@/components/dispatch/methodology"
import { ExpertTeam } from "@/components/dispatch/expert-team"
import { ContactUs } from "@/components/dispatch/contact-us"
import { Footer } from "@/components/sections/footer"
import { DISPATCH_PAGE } from "@/lib/dispatch-content"
import { cn } from "@/lib/utils"

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
        <ContentWell
          className={cn("pt-8 md:pt-9 lg:pt-10", maskedSectionOverlap.precedingSectionPadding)}
        >
          <NewsyHeroContained />
        </ContentWell>
      </div>

      <main>
        <FranchiseHub />
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
