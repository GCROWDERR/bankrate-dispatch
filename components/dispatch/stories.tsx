import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Eyebrow, SectionShell, SectionTitle } from "@/components/home/shared"
import { cn } from "@/lib/utils"

type Story = {
  id: string
  categoryLabel: string
  title: string
  excerpt: string
  author: string
  readMinutes: number
  accent: string
  imageSrc?: string
}

const STORIES: Story[] = [
  {
    id: "1",
    categoryLabel: "Watchdog Reporting",
    title: "How a single closing-cost line item became a $2,400 payday for the lender",
    excerpt:
      "An undercover review of 1,400 loan estimates exposes a fee that even mortgage brokers can't explain.",
    author: "Matt Fellowes",
    readMinutes: 12,
    accent: "linear-gradient(135deg, #13223b 0%, #14387a 60%, #0061fe 100%)",
    imageSrc: "/images/money-house.jpg",
  },
  {
    id: "2",
    categoryLabel: "Data Report",
    title: "The Hunker-Down Economy",
    excerpt:
      "Refinance volume just hit a 27-year low. We mapped which metros are paying the price.",
    author: "Bankrate Research",
    readMinutes: 8,
    accent: "linear-gradient(135deg, #104bb5 0%, #13223b 100%)",
    imageSrc: "/images/credit-chain.jpg",
  },
  {
    id: "3",
    categoryLabel: "Community",
    title: "The Housing Divide",
    excerpt:
      "Two zip codes, identical credit scores, $84,000 difference in lifetime mortgage cost.",
    author: "Bankrate Editorial",
    readMinutes: 14,
    accent: "linear-gradient(135deg, #14387a 0%, #0061fe 100%)",
    imageSrc: "/images/houseing-divide.jpg",
  },
  {
    id: "4",
    categoryLabel: "Mortgage Insights",
    title: "Sun Belt Slowdown",
    excerpt:
      "Once the country's hottest markets, Phoenix and Austin now lead the nation in price corrections.",
    author: "Bankrate Editorial",
    readMinutes: 6,
    accent: "linear-gradient(135deg, #13223b 0%, #104bb5 100%)",
    imageSrc: "/images/sunbelt-housing.jpg",
  },
]

const [FEATURED, ...REST] = STORIES

export function Stories() {
  return (
    <SectionShell id="stories" className="py-12 md:py-16 lg:py-16">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle className="text-center text-[36px] tracking-normal">
          Stories the rest of personal finance won&rsquo;t run.
        </SectionTitle>

        <div className="flex w-full flex-col gap-6 lg:min-h-[480px] lg:flex-row lg:gap-6">
          <FeaturedStoryCard story={FEATURED} className="lg:flex-1" />

          <div className="flex flex-1 flex-col gap-4">
            {REST.map((story) => (
              <HorizontalStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold tracking-tight text-blue-600 transition-colors hover:text-blue-800"
        >
          See all our reporting
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </SectionShell>
  )
}

function StoryImage({
  story,
  className,
  sizes,
  priority,
}: {
  story: Story
  className?: string
  sizes: string
  priority?: boolean
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-2xl", className)}
      style={story.imageSrc ? undefined : { background: story.accent }}
    >
      {story.imageSrc ? (
        <Image
          src={story.imageSrc}
          alt={story.title}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" aria-hidden />
      )}
    </div>
  )
}

function StoryByline({ author, readMinutes }: { author: string; readMinutes: number }) {
  return (
    <p className="flex flex-wrap items-center gap-2 text-base leading-[1.7] tracking-tight text-gray-700">
      <span>
        <span className="text-gray-700">By </span>
        <span className="font-bold text-blue-900">{author}</span>
      </span>
      <span className="size-0.5 rounded-full bg-gray-400" aria-hidden />
      <span>{readMinutes} min read</span>
    </p>
  )
}

function FeaturedStoryCard({ story, className }: { story: Story; className?: string }) {
  return (
    <article
      className={cn(
        "flex h-full min-h-0 flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-3",
        className
      )}
    >
      <StoryImage
        story={story}
        className="min-h-[200px] flex-1 lg:min-h-[240px]"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      <div className="flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-2">
          <Eyebrow>{story.categoryLabel}</Eyebrow>
          <h3 className="line-clamp-2 font-serif text-xl leading-[1.2] tracking-tight text-blue-900">
            {story.title}
          </h3>
        </div>
        <p className="line-clamp-2 text-base leading-[1.7] tracking-tight text-gray-700">
          {story.excerpt}
        </p>
        <StoryByline author={story.author} readMinutes={story.readMinutes} />
      </div>
    </article>
  )
}

function HorizontalStoryCard({ story }: { story: Story }) {
  return (
    <article className="flex min-h-[140px] flex-1 gap-4 rounded-3xl border border-gray-200 bg-white p-3 sm:min-h-[160px]">
      <StoryImage
        story={story}
        className="w-[120px] shrink-0 self-stretch sm:w-[140px] lg:w-[160px]"
        sizes="160px"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 p-2">
        <div className="flex flex-col gap-2">
          <Eyebrow>{story.categoryLabel}</Eyebrow>
          <h3 className="line-clamp-2 font-serif text-xl leading-[1.2] tracking-tight text-blue-900">
            {story.title}
          </h3>
        </div>
        <StoryByline author={story.author} readMinutes={story.readMinutes} />
      </div>
    </article>
  )
}
