"use client"

import { useEffect, useRef, useState } from "react"
import { geoPath, geoAlbersUsa } from "d3-geo"
import { feature } from "topojson-client"
import type { Topology, GeometryCollection } from "topojson-specification"
import type { Feature, Geometry } from "geojson"

import { FIPS_TO_POSTAL } from "@/lib/us-fips"

export type StateDatum = {
  postal: string
  name: string
  bucket: number
  value: number
}

type Props = {
  data: StateDatum[]
  bucketColors: string[]
}

type Tip = { x: number; y: number; postal: string; name: string; value: number } | null

const WIDTH = 975
const HEIGHT = 610

export function USMap({ data, bucketColors }: Props) {
  const [features, setFeatures] = useState<Feature<Geometry, { name: string }>[]>([])
  const [tip, setTip] = useState<Tip>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    fetch("/data/us-states-10m.json")
      .then((r) => r.json() as Promise<Topology>)
      .then((topo) => {
        if (cancelled) return
        const collection = topo.objects.states as GeometryCollection<{ name: string }>
        const fc = feature(topo, collection)
        setFeatures(fc.features)
      })
      .catch(() => {
        /* topojson fetch failed; map stays empty */
      })
    return () => {
      cancelled = true
    }
  }, [])

  const projection = geoAlbersUsa().scale(1300).translate([WIDTH / 2, HEIGHT / 2])
  const path = geoPath(projection)
  const byPostal = new Map(data.map((d) => [d.postal, d]))

  return (
    <div ref={containerRef} className="relative">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="United States map shaded by lifetime mortgage overpayment per homebuyer"
        className="block h-auto w-full"
      >
        {features.map((f) => {
          const fips = String(f.id ?? "").padStart(2, "0")
          const postal = FIPS_TO_POSTAL[fips]
          const datum = postal ? byPostal.get(postal) : undefined
          const fill = datum ? bucketColors[datum.bucket] : "#e5e2db"
          const d = path(f) ?? ""
          return (
            <path
              key={fips}
              d={d}
              fill={fill}
              stroke="#ffffff"
              strokeWidth={1}
              strokeLinejoin="round"
              tabIndex={datum ? 0 : -1}
              aria-label={datum ? `${datum.name}: $${datum.value.toFixed(1)}k average overpayment` : undefined}
              className="cursor-pointer outline-none transition-[filter] duration-150 hover:brightness-110 focus-visible:brightness-110 focus-visible:[stroke:#0061fe] focus-visible:[stroke-width:2]"
              onMouseMove={(e) => {
                if (!datum || !containerRef.current) return
                const rect = containerRef.current.getBoundingClientRect()
                setTip({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                  postal: datum.postal,
                  name: datum.name,
                  value: datum.value,
                })
              }}
              onMouseLeave={() => setTip(null)}
              onFocus={(e) => {
                if (!datum || !containerRef.current) return
                const rect = containerRef.current.getBoundingClientRect()
                const bbox = (e.currentTarget as SVGPathElement).getBoundingClientRect()
                setTip({
                  x: bbox.left + bbox.width / 2 - rect.left,
                  y: bbox.top + bbox.height / 2 - rect.top,
                  postal: datum.postal,
                  name: datum.name,
                  value: datum.value,
                })
              }}
              onBlur={() => setTip(null)}
            />
          )
        })}
      </svg>

      {tip && (
        <div
          role="tooltip"
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+10px)] whitespace-nowrap rounded-lg bg-[#13223b] px-3 py-2 text-xs text-white shadow-lg"
          style={{ left: tip.x, top: tip.y }}
        >
          <div className="font-semibold">{tip.name}</div>
          <div className="text-white/70">${tip.value.toFixed(1)}k avg overpayment</div>
          <span className="absolute left-1/2 top-full size-2 -translate-x-1/2 -translate-y-1 rotate-45 bg-[#13223b]" />
        </div>
      )}

      {features.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
          Loading map…
        </div>
      )}
    </div>
  )
}
