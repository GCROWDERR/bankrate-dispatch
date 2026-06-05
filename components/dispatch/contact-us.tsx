import { Button } from "@/components/ui/button"
import {
  contentWellMobileBleedClass,
  SectionShell,
  SectionTitle,
  Eyebrow,
} from "@/components/home/shared"

const CONTACT_HREF = "https://www.bankrate.com/contact/"

export function ContactUs() {
  return (
    <SectionShell id="contact" className="py-16 lg:py-24">
      <div className={contentWellMobileBleedClass}>
        <article className="relative isolate overflow-hidden rounded-[48px] bg-inverse px-6 py-12 text-center text-white [container-type:inline-size] lg:rounded-[56px] lg:px-16 lg:py-20">
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
              Questions for our reporting team?
            </SectionTitle>

            <div className="mt-6">
              <Button variant="primary" size="lg" arrow className="h-12 px-6" asChild>
                <a href={CONTACT_HREF}>Get in touch</a>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </SectionShell>
  )
}
