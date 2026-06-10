"use client"

import { useEffect, useMemo, useState } from "react"
import { contentWellClass, SectionTitle } from "@/components/home/shared"
import { SectionMaskBackground, maskedSectionOverlap } from "@/components/dispatch/section-mask-bg"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { HorizontalStoryCard } from "@/components/dispatch/story-card"
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
  storiesForStoriesSection,
  type DispatchContentTypeId,
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

  const stories = useMemo(() => storiesForStoriesSection(contentType), [contentType])
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
    <section
      id="stories"
      className={cn(
        "relative z-10 overflow-x-clip pb-12 md:pb-16 lg:pb-16",
        maskedSectionOverlap.sectionTrailingSpace,
        maskedSectionOverlap.sectionPullUp,
        maskedSectionOverlap.sectionPaddingTop
      )}
    >
      <SectionMaskBackground maskPosition="top center" />
      <div className={cn("relative z-10", contentWellClass)}>
      <div className="flex flex-col items-center gap-8">
        <SectionTitle className="text-center">
          What banks don&rsquo;t want you to read
        </SectionTitle>

        <ContentTypeSwitcher value={contentType} onChange={handleContentTypeChange} />

        {pageStories.length > 0 ? (
          <>
            <div className="grid w-full gap-4 md:grid-cols-2">
              {pageStories.map((story) => (
                <HorizontalStoryCard key={story.id} story={story} />
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
      </div>
    </section>
  )
}
