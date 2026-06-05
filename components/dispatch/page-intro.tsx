import { DISPATCH_PAGE } from "@/lib/dispatch-content"

export function PageIntro() {
  return (
    <header className="mb-8 flex max-w-3xl flex-col gap-4 lg:mb-10">
      <h1 className="font-serif text-[36px] font-semibold leading-[1.15] tracking-tight text-blue-900 lg:text-[48px]">
        {DISPATCH_PAGE.headline}
      </h1>
      <p className="text-base leading-[1.7] text-gray-700 lg:text-lg">{DISPATCH_PAGE.intro}</p>
    </header>
  )
}
