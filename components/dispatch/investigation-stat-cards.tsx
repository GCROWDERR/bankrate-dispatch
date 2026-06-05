type InvestigationStat = {
  value: string
  label: string
}

export function InvestigationStatCards({
  stats,
  className,
}: {
  stats: InvestigationStat[]
  className?: string
}) {
  return (
    <div className={className} aria-label="Investigation highlights">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-2 rounded-[24px] bg-white p-5 shadow-[0_4px_12px_rgba(15,27,47,0.05)]"
        >
          <p className="font-serif text-[40px] font-semibold leading-none tracking-[-2.36px] text-[#13223b]">
            {stat.value}
          </p>
          <p className="text-sm font-bold leading-[1.4] text-[#13223b] lg:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
