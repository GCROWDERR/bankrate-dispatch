"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  contentWellMobileBleedClass,
  SectionShell,
  SectionTitle,
  Eyebrow,
} from "@/components/home/shared"

export function Newsletter() {
  return (
    <SectionShell id="newsletter" className="py-16 lg:py-24">
      <div className={contentWellMobileBleedClass}>
        <article className="relative isolate overflow-hidden rounded-[48px] bg-inverse px-6 py-12 text-center text-white [container-type:inline-size] lg:rounded-[56px] lg:px-16 lg:py-20">
          {/* Figma 1052:10173 — bottom-anchored so shorter cards keep the same edge crop */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute flex items-center justify-center"
              style={{
                left: "calc(-602 / 1312 * 100cqw)",
                bottom: "calc(-1872.332 / 1312 * 100cqw)",
                width: "calc(3293.283 / 1312 * 100cqw)",
                height: "calc(3453.822 / 1312 * 100cqw)",
              }}
            >
              <div className="flex-none rotate-[164deg]">
                <div
                  className="relative"
                  style={{
                    width: "calc(2611.512 / 1312 * 100cqw)",
                    height: "calc(2845.379 / 1312 * 100cqw)",
                  }}
                >
                  <div className="absolute inset-[-4.15%_-8.2%_-7.53%_-7.27%]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/newsletter-section-bg.svg"
                      alt=""
                      className="block size-full max-w-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto flex max-w-[45rem] flex-col items-center gap-4">
            <Eyebrow>
              <span className="text-blue-300">Bankrate News & Research</span>
            </Eyebrow>
            <SectionTitle className="text-center text-white">
              Get the findings others{" "}
              <span className="relative inline-block whitespace-nowrap">
                miss
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-5 -top-1.5 inline-flex sm:-right-6 lg:-right-7 lg:-top-1"
                >
                  <span className="-rotate-45">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/newsletter-sparkle.svg"
                      alt=""
                      width={35}
                      height={61}
                      className="h-[34px] w-[20px] max-w-none sm:h-[42px] sm:w-[24px] lg:h-[48px] lg:w-[28px]"
                    />
                  </span>
                </span>
              </span>
            </SectionTitle>
            <p className="mt-2 text-[17px] leading-[1.5] text-white/80 lg:text-lg">
            Unvarnished data and investigative reporting direct to your inbox — once a week. No fluff, no advertorial content.
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
            <p className="text-xs text-white/60">No spam. Unsubscribe any time.</p>
          </div>
        </article>
      </div>
    </SectionShell>
  )
}
