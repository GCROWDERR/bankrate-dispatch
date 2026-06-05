import type { Metadata } from "next"
import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/dispatch/hero"
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
        <div className="mx-auto w-full max-w-[1312px] px-6 py-6 lg:px-12 lg:pb-10 lg:pt-6">
          <Hero />
        </div>
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
