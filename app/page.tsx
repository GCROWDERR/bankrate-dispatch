import type { Metadata } from "next"
import { Nav } from "@/components/sections/nav"
import { ContentWell } from "@/components/home/shared"
import { Hero } from "@/components/dispatch/hero"
import { PageIntro } from "@/components/dispatch/page-intro"
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
        <ContentWell className="py-6 lg:pb-10 lg:pt-6">
          <PageIntro />
          <Hero />
          <ResearchHighlights />
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
