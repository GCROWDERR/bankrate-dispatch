"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionShell, SectionTitle, Eyebrow } from "@/components/home/shared"

export function Newsletter() {
  return (
    <SectionShell id="newsletter" className="py-16 lg:py-24">
      <div className="relative mx-auto overflow-hidden rounded-3xl bg-inverse px-6 py-14 text-center text-white lg:rounded-[40px] lg:px-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(91,148,253,0.5), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,97,254,0.4), transparent 55%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[45rem] flex-col items-center gap-4">
          <Eyebrow>
            <span className="text-blue-300">BANKRATE DISPATCH</span>
          </Eyebrow>
          <SectionTitle className="text-center text-white">
            Investigative findings that other outlets miss.
          </SectionTitle>
          <p className="mt-2 text-base text-white/80 lg:text-lg">
            One newsletter, sent Tuesday mornings. No sponsorships, no affiliate links.
          </p>

          <form
            className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              className="h-12 border-white/20 bg-white/95 text-gray-900 placeholder:text-gray-500"
            />
            <Button type="submit" variant="primary" size="lg" arrow className="h-12 px-6">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-white/60">
            Unsubscribe in one click. Read by 38,200 industry pros.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}
