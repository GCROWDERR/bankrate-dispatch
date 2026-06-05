import { Stat } from "@/components/ui/stat"
import { RESEARCH_DATA_POINTS } from "@/lib/dispatch-content"

export function ResearchHighlights() {
  return (
    <section aria-labelledby="research-highlights-heading">
      <h2 id="research-highlights-heading" className="sr-only">
        Key findings from the Hidden Homeownership Tax research
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {RESEARCH_DATA_POINTS.map((point) => (
          <Stat
            key={point.label}
            value={point.value}
            suffix={point.suffix}
            label={point.label}
            valueSize="sm"
          />
        ))}
      </div>
    </section>
  )
}
