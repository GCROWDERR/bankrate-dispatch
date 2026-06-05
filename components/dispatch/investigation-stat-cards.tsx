type InvestigationStat = {
  label: string
  value: string
  detail?: string
}

export function InvestigationStatCards({
  stats,
  className,
}: {
  stats: InvestigationStat[]
  className?: string
}) {
  return (
    <div
      className={className}
      aria-label="Investigation highlights"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={
            index === 0
              ? "rounded-2xl bg-white/95 p-5 shadow-lg"
              : "rounded-2xl bg-blue-700/30 p-5 ring-1 ring-white/15 backdrop-blur"
          }
        >
          <p
            className={
              index === 0
                ? "text-[11px] uppercase tracking-[1.5px] text-gray-600"
                : "text-[11px] uppercase tracking-[1.5px] text-white/70"
            }
          >
            {stat.label}
          </p>
          <p
            className={
              index === 0
                ? "mt-1 font-serif text-[40px] font-semibold leading-none tracking-tight text-blue-700"
                : "mt-1 font-serif text-[28px] font-semibold leading-none text-white"
            }
          >
            {stat.value}
          </p>
          {stat.detail ? (
            <p className="mt-2 text-xs text-gray-700">{stat.detail}</p>
          ) : null}
        </div>
      ))}
    </div>
  )
}
