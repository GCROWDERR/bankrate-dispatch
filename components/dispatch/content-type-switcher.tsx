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
    <div
      role="tablist"
      aria-label="Filter stories by content type"
      className={cn(
        "inline-flex max-w-full flex-wrap items-center gap-1 rounded-full bg-gray-100 p-1.5",
        className
      )}
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
              "rounded-full px-5 py-2.5 text-sm font-bold transition-colors lg:px-6 lg:text-base",
              isActive
                ? "bg-primary text-white"
                : "text-gray-900 hover:text-blue-900"
            )}
          >
            {type.label}
          </button>
        )
      })}
    </div>
  )
}
