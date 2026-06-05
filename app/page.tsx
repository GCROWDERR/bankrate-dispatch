import type { Metadata } from "next"
import { Nav } from "@/components/sections/nav"
import { ContentWell } from "@/components/home/shared"
import { FeaturedInvestigation } from "@/components/dispatch/featured-investigation"
import { Hero } from "@/components/dispatch/hero"
import { ResearchHighlights } from "@/components/dispatch/research-highlights"
import { Stories } from "@/components/dispatch/stories"
import { Tracker } from "@/components/dispatch/tracker"
import { Methodology } from "@/components/dispatch/methodology"
import { ExpertTeam } from "@/components/dispatch/expert-team"
import { Newsletter } from "@/components/dispatch/newsletter"
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
        <Nav variant="cream" showMediaLogin />
        <ContentWell className="flex flex-col gap-8 py-6 lg:gap-10 lg:pb-10 lg:pt-6">
          <Hero />
          <ResearchHighlights />
          <FeaturedInvestigation />
        </ContentWell>
      </div>

      <main>
        <Stories />
        <Tracker />
        <Methodology />
        <ExpertTeam />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
