"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { SectionShell, SectionTitle, Eyebrow } from "@/components/home/shared"

type Category = "all" | "watchdog" | "data" | "community" | "mortgage"

type Story = {
  id: string
  category: Exclude<Category, "all">
  categoryLabel: string
  title: string
  excerpt: string
  date: string
  readMinutes: number
  accent: string
}

const STORIES: Story[] = [
  {
    id: "1",
    category: "watchdog",
    categoryLabel: "Watchdog Reporting",
    title: "How a single closing-cost line item became a $2,400 payday for the lender",
    excerpt:
      "An undercover review of 1,400 loan estimates exposes a fee that even mortgage brokers can't explain.",
    date: "May 21, 2026",
    readMinutes: 12,
    accent: "linear-gradient(135deg, #13223b 0%, #14387a 60%, #0061fe 100%)",
  },
  {
    id: "2",
    category: "data",
    categoryLabel: "Data Report",
    title: "The Hunker-Down Economy",
    excerpt:
      "Refinance volume just hit a 27-year low. We mapped which metros are paying the price.",
    date: "May 14, 2026",
    readMinutes: 8,
    accent: "linear-gradient(135deg, #104bb5 0%, #13223b 100%)",
  },
  {
    id: "3",
    category: "community",
    categoryLabel: "Community",
    title: "The Housing Divide",
    excerpt:
      "Two zip codes, identical credit scores, $84,000 difference in lifetime mortgage cost.",
    date: "Apr 30, 2026",
    readMinutes: 14,
    accent: "linear-gradient(135deg, #14387a 0%, #0061fe 100%)",
  },
  {
    id: "4",
    category: "mortgage",
    categoryLabel: "Mortgage Insights",
    title: "Sun Belt Slowdown",
    excerpt:
      "Once the country's hottest markets, Phoenix and Austin now lead the nation in price corrections.",
    date: "Apr 22, 2026",
    readMinutes: 6,
    accent: "linear-gradient(135deg, #13223b 0%, #104bb5 100%)",
  },
]

const TABS: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "watchdog", label: "Watchdog" },
  { value: "data", label: "Data Reports" },
  { value: "community", label: "Community" },
  { value: "mortgage", label: "Mortgage Insights" },
]

function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md">
      <div
        className="relative aspect-[4/3] w-full"
        style={{ background: story.accent }}
        aria-hidden
      >
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/40 to-transparent" />
        <Badge
          variant="secondary"
          className="absolute left-4 top-4 bg-white/95 text-blue-800"
        >
          {story.categoryLabel}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-serif text-lg leading-snug text-gray-900 group-hover:text-blue-800">
          {story.title}
        </h3>
        <p className="text-sm text-gray-700">{story.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-xs uppercase tracking-wider text-gray-500">
          <span>{story.date}</span>
          <span>{story.readMinutes} min read</span>
        </div>
      </div>
    </article>
  )
}

export function Stories() {
  return (
    <SectionShell id="stories" className="py-16 lg:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <Eyebrow>FEATURED INVESTIGATIONS</Eyebrow>
        <SectionTitle className="max-w-3xl text-left">
          Stories the rest of personal finance won&rsquo;t run.
        </SectionTitle>
      </div>

      <Tabs defaultValue="all" className="gap-8">
        <TabsList variant="line" className="w-fit border-b border-gray-200">
          {TABS.map((t) => (
            <TabsTrigger key={t.value} value={t.value}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map((tab) => {
          const visible = tab.value === "all" ? STORIES : STORIES.filter((s) => s.category === tab.value)
          return (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {visible.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </SectionShell>
  )
}
