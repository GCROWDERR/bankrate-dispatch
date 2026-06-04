import Image from "next/image"
import { ReadMoreLink, SectionShell } from "@/components/home/shared"
import {
  EDITORIAL_LEAD,
  EDITORIAL_SECONDARIES,
  type EditorialArticle,
} from "@/lib/editorial-content"

const EDITORIAL_CARD_SURFACE = "overflow-hidden rounded-[34px] bg-white"

/** Lead editorial card — Figma Homepage redesign node 156:1453 */
function LeadArticleCard({ article }: { article: EditorialArticle }) {
  return (
    <article
      className={`flex w-full flex-col items-center gap-[27px] px-4 pb-4 pt-8 ${EDITORIAL_CARD_SURFACE}`}
    >
      <div className="flex w-full flex-col gap-4 px-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
          {article.tag}
        </p>

        <h3 className="font-serif text-[22px] font-semibold leading-[1.3] tracking-[-0.66px] text-[#13223b]">
          {article.title}
        </h3>

        <p className="text-[15px] leading-[1.5] text-gray-900/80">{article.body}</p>

        <p className="text-[14px] text-gray-900/60">{article.author}</p>

        <ReadMoreLink href={article.href} className="w-fit text-[#13223b]">
          Read the full research
        </ReadMoreLink>
      </div>

      {article.imageSrc ? (
        <div className="relative w-full">
          <div className="relative aspect-[523/294] w-full overflow-hidden rounded-[24px]">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt ?? article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </article>
  )
}

function SecondaryArticleCard({ article }: { article: EditorialArticle }) {
  return (
    <article className={`flex flex-col gap-3 p-7 ${EDITORIAL_CARD_SURFACE}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
        {article.tag}
      </p>
      <h4 className="font-serif text-[20px] font-semibold leading-[1.25] tracking-[-0.5px] text-gray-900">
        {article.title}
      </h4>
      {article.body ? (
        <p className="text-[14px] leading-[1.5] text-gray-900/70">{article.body}</p>
      ) : null}
      <div className="mt-1 flex items-center gap-3">
        {article.avatar ? (
          <Image
            src={article.avatar}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full object-cover"
          />
        ) : null}
        <span className="text-[13px] font-semibold text-gray-900">{article.author}</span>
        <ReadMoreLink href={article.href} className="ml-auto shrink-0">
          Read More
        </ReadMoreLink>
      </div>
    </article>
  )
}

export function EditorialResearch() {
  return (
    <SectionShell id="editorial" className="py-20">
      <h2 className="max-w-[860px] font-serif text-[length:var(--text-heading-lg)] font-semibold leading-[1.15] tracking-[-2px] text-gray-900">
        What the market looks like when someone&apos;s actually been watching it.
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <LeadArticleCard article={EDITORIAL_LEAD} />

        <div className="flex flex-col gap-5">
          {EDITORIAL_SECONDARIES.map((card) => (
            <SecondaryArticleCard key={card.href} article={card} />
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <ReadMoreLink href="#editorial-hub">See all expert insights</ReadMoreLink>
      </div>
    </SectionShell>
  )
}
