import { Stat } from "@/components/ui/stat"
import { cn } from "@/lib/utils"

type InvestigationStat = {
  value: string
  label: string
}

const statCardClassName = "border border-gray-200 p-[11px] lg:min-h-0"

export function InvestigationStatCards({
  stats,
  className,
}: {
  stats: InvestigationStat[]
  className?: string
}) {
  return (
    <div className={cn(className)} aria-label="Investigation highlights">
      {stats.map((stat) => (
        <Stat
          key={stat.label}
          value={stat.value}
          label={stat.label}
          valueSize="lg"
          className={statCardClassName}
        />
      ))}
    </div>
  )
}
