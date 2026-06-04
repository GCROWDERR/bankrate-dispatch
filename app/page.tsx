import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/dispatch/hero"
import { Stories } from "@/components/dispatch/stories"
import { Tracker } from "@/components/dispatch/tracker"
import { Methodology } from "@/components/dispatch/methodology"
import { Testimonials } from "@/components/dispatch/testimonials"
import { ExpertTeam } from "@/components/dispatch/expert-team"
import { Newsletter } from "@/components/dispatch/newsletter"
import { Footer } from "@/components/sections/footer"

export default function DispatchPage() {
  return (
    <>
      <div className="bg-[#f5f2eb]">
        <Nav variant="cream" />
        <Hero />
      </div>

      <main className="bg-[var(--surface-cream)]">
        <Stories />
        <Tracker />
        <Methodology />
        <Testimonials />
        <ExpertTeam />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}
