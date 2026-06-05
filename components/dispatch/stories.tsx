"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Eyebrow, SectionShell, SectionTitle } from "@/components/home/shared"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  DISPATCH_STORIES_PAGE_SIZE,
  storiesForContentType,
  type DispatchContentTypeId,
  type DispatchStory,
} from "@/lib/dispatch-content"
import { ContentTypeSwitcher } from "@/components/dispatch/content-type-switcher"

function getVisiblePages(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "ellipsis", totalPages] as const
  }

  if (currentPage >= totalPages - 2) {
    return [1, "ellipsis", totalPages - 3, totalPages - 2, totalPages - 1, totalPages] as const
  }

  return [1, "ellipsis", currentPage - 1, currentPage, currentPage + 1, "ellipsis", totalPages] as const
}

export function Stories() {
  const [contentType, setContentType] = useState<DispatchContentTypeId>("all")
  const [page, setPage] = useState(1)

  const stories = useMemo(() => storiesForContentType(contentType), [contentType])
  const totalPages = Math.max(1, Math.ceil(stories.length / DISPATCH_STORIES_PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageStories = useMemo(() => {
    const start = (currentPage - 1) * DISPATCH_STORIES_PAGE_SIZE
    return stories.slice(start, start + DISPATCH_STORIES_PAGE_SIZE)
  }, [stories, currentPage])

  useEffect(() => {
    setPage(1)
  }, [contentType])

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages)
    }
  }, [page, totalPages])

  function handleContentTypeChange(nextType: DispatchContentTypeId) {
    setContentType(nextType)
    setPage(1)
  }

  return (
    <SectionShell id="stories" className="py-12 md:py-16 lg:py-16">
      <div className="flex flex-col items-center gap-8">
        <SectionTitle className="text-center tracking-normal">
          Stories the rest of personal finance won&rsquo;t run.
        </SectionTitle>

        <ContentTypeSwitcher value={contentType} onChange={handleContentTypeChange} />

        {pageStories.length > 0 ? (
          <>
            <div className="grid w-full gap-4 md:grid-cols-2">
              {pageStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>

            {totalPages > 1 ? (
              <Pagination className="w-full">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#stories"
                      className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
                      onClick={(event) => {
                        event.preventDefault()
                        setPage((current) => Math.max(1, current - 1))
                      }}
                    />
                  </PaginationItem>

                  {getVisiblePages(currentPage, totalPages).map((item, index) =>
                    item === "ellipsis" ? (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={item}>
                        <PaginationLink
                          href="#stories"
                          isActive={item === currentPage}
                          onClick={(event) => {
                            event.preventDefault()
                            setPage(item)
                          }}
                        >
                          {item}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#stories"
                      className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
                      onClick={(event) => {
                        event.preventDefault()
                        setPage((current) => Math.min(totalPages, current + 1))
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            ) : null}
          </>
        ) : (
          <p className="py-12 text-center text-base text-gray-700">
            No stories in this category yet. Try another filter.
          </p>
        )}

        <Button
          variant="ghost"
          size="lg"
          arrow
          className="h-12 px-6 text-sm font-semibold text-blue-600 lg:text-base"
        >
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

function StoryCard({ story }: { story: DispatchStory }) {
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
