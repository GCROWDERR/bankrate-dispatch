import Image from "next/image"
import { SectionShell, SectionTitle, Eyebrow } from "@/components/home/shared"
import { authorAvatar } from "@/lib/author-avatars"

type Testimonial = {
  quote: string
  reader: string
  location: string
  amount: string
  cadence: string
  /** Author whose investigation moved the reader to act */
  attributedTo: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The closing-cost line items Bankrate flagged were exactly the fees my lender was padding. I walked into renegotiation knowing the answer.",
    reader: "Maya R.",
    location: "Charlotte, NC",
    amount: "$47,000",
    cadence: "saved on a 30-yr fixed",
    attributedTo: "Matt Fellowes",
  },
  {
    quote:
      "I was three days from closing. Sarah&rsquo;s state-by-state tracker flagged that my rate was a half-point above benchmark. I asked, my lender matched.",
    reader: "Daniel K.",
    location: "Austin, TX",
    amount: "$32,500",
    cadence: "saved on a refi",
    attributedTo: "Sarah Foster",
  },
  {
    quote:
      "Greg&rsquo;s Hunker-Down piece is the only finance article I&rsquo;ve ever printed and handed to my mortgage broker. He didn&rsquo;t push back.",
    reader: "Linda P.",
    location: "Sacramento, CA",
    amount: "$380",
    cadence: "saved every month",
    attributedTo: "Greg McBride",
  },
]

export function Testimonials() {
  return (
    <SectionShell className="py-16 lg:py-24">
      <div className="mb-10 max-w-2xl">
        <Eyebrow>READER OUTCOMES</Eyebrow>
        <SectionTitle className="mt-3 text-left">Reporting that pays for itself.</SectionTitle>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.reader}
            className="flex h-full flex-col gap-5 rounded-2xl bg-white p-6 ring-1 ring-gray-200"
          >
            <blockquote className="text-base leading-relaxed text-gray-900">
              &ldquo;<span dangerouslySetInnerHTML={{ __html: t.quote }} />&rdquo;
            </blockquote>

            <div className="mt-auto rounded-xl bg-blue-50 p-4">
              <div className="font-serif text-2xl font-semibold text-blue-700">{t.amount}</div>
              <div className="text-xs text-gray-700">{t.cadence}</div>
            </div>

            <figcaption className="flex items-center justify-between border-t border-gray-100 pt-4">
              <div>
                <div className="text-sm font-semibold text-gray-900">{t.reader}</div>
                <div className="text-xs text-gray-600">{t.location}</div>
              </div>
              <div className="flex items-center gap-2 text-right">
                <div className="text-[10px] uppercase tracking-[1.2px] text-gray-500">
                  Reporting by
                </div>
                <Image
                  src={authorAvatar(t.attributedTo)}
                  alt={t.attributedTo}
                  width={32}
                  height={32}
                  className="size-8 rounded-full object-cover"
                />
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  )
}
