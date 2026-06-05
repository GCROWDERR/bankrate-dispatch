import { Eyebrow, SectionShell, SectionTitle } from "@/components/home/shared"
import { StoryCard } from "@/components/dispatch/story-card"
import {
  FEATURED_INVESTIGATION_SERIES,
  supportingStoriesForSeries,
} from "@/lib/dispatch-content"

export function InvestigationSupportingStories() {
  const stories = supportingStoriesForSeries(FEATURED_INVESTIGATION_SERIES)

  if (stories.length === 0) return null

  return (
    <SectionShell className="py-10 md:py-12 lg:py-14">
      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="flex max-w-3xl flex-col gap-2">
          <Eyebrow>Part of the investigation</Eyebrow>
          <SectionTitle className="text-[length:var(--text-h3)] tracking-tight lg:text-[32px]">
            More from {FEATURED_INVESTIGATION_SERIES.tentpoleTitle}
          </SectionTitle>
          <p className="text-base leading-[1.7] text-gray-700">
            Peel stories that extend and support the{" "}
            <a
              href={FEATURED_INVESTIGATION_SERIES.tentpoleHref}
              className="font-semibold text-blue-600 hover:underline"
            >
              {FEATURED_INVESTIGATION_SERIES.tentpoleTitle}
            </a>{" "}
            narrative.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
