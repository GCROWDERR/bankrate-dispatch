"use client"

import { cn } from "@/lib/utils"
import {
  DISPATCH_CONTENT_TYPES,
  type DispatchContentTypeId,
} from "@/lib/dispatch-content"

type ContentTypeSwitcherProps = {
  value: DispatchContentTypeId
  onChange: (value: DispatchContentTypeId) => void
  className?: string
}

/** Pill switcher — Figma Homepage v3 node 1052:10001. */
export function ContentTypeSwitcher({ value, onChange, className }: ContentTypeSwitcherProps) {
  return (
    <div className={cn("w-full max-w-full overflow-x-auto overscroll-x-contain", className)}>
      <div className="flex w-max min-w-full justify-center">
        <div
          role="tablist"
          aria-label="Filter stories by content type"
          className="inline-flex flex-nowrap items-center rounded-full bg-gray-100 p-1"
        >
          {DISPATCH_CONTENT_TYPES.map((type) => {
            const isActive = type.id === value

            return (
              <button
                key={type.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onChange(type.id)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 sm:py-2.5 sm:text-base lg:px-6",
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-gray-900 hover:bg-transparent"
                )}
              >
                {type.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
