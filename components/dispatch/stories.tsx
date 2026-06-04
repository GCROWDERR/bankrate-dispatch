import Image from "next/image"
import { Eyebrow, SectionShell, SectionTitle } from "@/components/home/shared"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DISPATCH_STORIES, type DispatchStory } from "@/lib/dispatch-content"

const [FEATURED_STORY, ...MORE_STORIES] = DISPATCH_STORIES

export function Stories() {
  return (
    <SectionShell id="stories" className="py-12 md:py-16 lg:py-16">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle className="text-center text-[36px] tracking-normal">
          Stories the rest of personal finance won&rsquo;t run.
        </SectionTitle>

        <div className="flex w-full flex-col gap-6 lg:min-h-[480px] lg:flex-row lg:gap-6">
          <FeaturedStoryCard story={FEATURED_STORY} className="lg:flex-1" />

          <div className="flex flex-1 flex-col gap-4">
            {MORE_STORIES.map((story) => (
              <HorizontalStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        <Button variant="ghost" size="lg" arrow className="h-12 px-6 text-sm text-blue-600 font-semibold lg:text-base">
              See all our reporting
        </Button>
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
  story: DispatchStory
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

function FeaturedStoryCard({ story, className }: { story: DispatchStory; className?: string }) {
  return (
    <a
      href={story.href}
      className={cn(
        "flex h-full min-h-0 flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-3 transition-colors hover:border-gray-300",
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
    </a>
  )
}

function HorizontalStoryCard({ story }: { story: DispatchStory }) {
  return (
    <a
      href={story.href}
      className="flex min-h-[140px] flex-1 gap-4 rounded-3xl border border-gray-200 bg-white p-3 transition-colors hover:border-gray-300 sm:min-h-[160px]"
    >
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
    </a>
  )
}
