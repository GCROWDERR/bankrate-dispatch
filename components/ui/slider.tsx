import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  step = 1,
  showInput = false,
  onValueChange,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & {
  showInput?: boolean
}) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = React.useState<number[]>(
    Array.isArray(defaultValue) ? defaultValue : [min]
  )
  const currentValue = isControlled
    ? (Array.isArray(value) ? value : [min])
    : internalValue

  function handleSliderChange(next: number[]) {
    if (!isControlled) setInternalValue(next)
    onValueChange?.(next)
  }

  function handleInputChange(index: number, raw: string) {
    const parsed = Number(raw)
    if (Number.isNaN(parsed)) return
    const clamped = Math.min(max, Math.max(min, parsed))
    const next = currentValue.map((v, i) => (i === index ? clamped : v))
    if (!isControlled) setInternalValue(next)
    onValueChange?.(next)
  }

  const _values = currentValue

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <SliderPrimitive.Root
        data-slot="slider"
        defaultValue={isControlled ? undefined : defaultValue}
        value={isControlled ? value : internalValue}
        min={min}
        max={max}
        step={step}
        onValueChange={handleSliderChange}
        className="relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col"
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className="relative grow overflow-hidden rounded-full bg-(--slider-track) data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className="absolute bg-(--slider-range) data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            // biome-ignore lint/suspicious/noArrayIndexKey: thumb count matches value array, no stable id
            key={index}
            className="block size-5 shrink-0 rounded-full border-2 border-(--slider-thumb-border) bg-(--slider-thumb) ring-ring/10 transition-colors hover:ring-[0.5rem] focus-visible:ring-[0.5rem] disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Root>
      {showInput && _values.map((v, index) => (
        <Input
          // biome-ignore lint/suspicious/noArrayIndexKey: input count matches value array, no stable id
          key={index}
          type="number"
          min={min}
          max={max}
          step={step}
          value={v}
          onChange={(e) => handleInputChange(index, e.target.value)}
          className="w-20 tabular-nums"
        />
      ))}
    </div>
  )
}

export { Slider }
