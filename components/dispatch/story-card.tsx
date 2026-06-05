import Image from "next/image"
import { Eyebrow } from "@/components/home/shared"
import { cn } from "@/lib/utils"
import type { DispatchStory } from "@/lib/dispatch-content"

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
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20"
          aria-hidden
        />
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

export function StoryCard({ story }: { story: DispatchStory }) {
  return (
    <a
      href={story.href}
      className="flex h-full flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-3 transition-colors hover:border-gray-300"
    >
      <StoryImage
        story={story}
        className="h-[140px] w-full shrink-0 sm:h-[160px]"
        sizes="(max-width: 768px) 100vw, 640px"
      />
      <div className="flex flex-1 flex-col gap-4 p-2">
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

export function HorizontalStoryCard({ story }: { story: DispatchStory }) {
  return (
    <a
      href={story.href}
      className="flex min-h-[140px] w-full gap-4 rounded-3xl border border-gray-200 bg-white p-3 transition-colors hover:border-gray-300 sm:min-h-[160px]"
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
        <p className="line-clamp-2 text-base leading-[1.7] tracking-tight text-gray-700">
          {story.excerpt}
        </p>
        <StoryByline author={story.author} readMinutes={story.readMinutes} />
      </div>
    </a>
  )
}
