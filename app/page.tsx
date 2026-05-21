import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { ProofBanner } from "@/components/sections/proof-banner"
import { IdentityStatement } from "@/components/sections/identity-statement"
import { AudiencePathing } from "@/components/sections/audience-pathing"
import { MemberExperience } from "@/components/sections/member-experience"
import { RatesAndCalculator } from "@/components/sections/rates-calculator"
import { EditorialResearch } from "@/components/sections/editorial-research"
import { ExpertTeam } from "@/components/sections/expert-team"
import { Products } from "@/components/sections/products"
import { B2BEndcap } from "@/components/sections/b2b-endcap"
import { Footer } from "@/components/sections/footer"

export default function HomePage() {
  return (
    <>
      <div className="bg-[#f5f2eb]">
        <Nav variant="cream" />
        <Hero />
      </div>

      <main className="bg-[var(--surface-cream)]">
        <ProofBanner />
        <IdentityStatement />
        <AudiencePathing />
        <MemberExperience />
        <RatesAndCalculator />
        <EditorialResearch />
        <ExpertTeam />
        <Products />
        <B2BEndcap />
      </main>

      <Footer />
    </>
  )
}
