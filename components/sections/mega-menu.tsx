"use client"

import Image from "next/image"

export type MegaMenuFeature = {
  title: string
  subtitle: string
  image?: string
  href?: string
}

export type MegaMenuData = {
  rail?: { label: string; href?: string }[]
  primary: {
    title: string
    columns: { label: string; href?: string }[][]
  }
  secondary?: {
    title: string
    links: { label: string; href?: string }[]
  }
  features?: MegaMenuFeature[]
}

type Props = {
  data: MegaMenuData
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function MegaMenu({ data, onMouseEnter, onMouseLeave }: Props) {
  const hasRail = (data.rail?.length ?? 0) > 0
  const hasRightPane =
    !!data.secondary || (data.features?.length ?? 0) > 0

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-stretch overflow-hidden rounded-3xl shadow-xl"
    >
      {hasRail && (
        <div className="flex w-[228px] flex-col bg-gray-50 pb-14 pt-12">
          <ul role="list" className="flex flex-col">
            {data.rail!.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href ?? "#"}
                  className="block bg-white px-6 py-4 text-base tracking-tight text-gray-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-3 border-r border-gray-300 bg-white px-12 pb-16 pt-12">
        <p className="px-2 text-base font-bold tracking-tight text-blue-900">
          {data.primary.title}
        </p>
        <div className="flex gap-12">
          {data.primary.columns.map((col, i) => (
            <ul key={i} role="list" className="flex flex-col">
              {col.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href ?? "#"}
                    className="block w-[190px] p-2 text-lg tracking-tight text-gray-800 hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {hasRightPane && (
        <div className="flex gap-12 bg-white p-12">
          {data.secondary && (
            <div className="flex flex-col gap-4">
              <p className="px-2 text-base font-bold tracking-tight text-blue-900">
                {data.secondary.title}
              </p>
              <ul role="list" className="flex flex-col gap-1">
                {data.secondary.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href ?? "#"}
                      className="block w-[190px] px-2 py-1 text-base tracking-tight text-gray-700 hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.features && data.features.length > 0 && (
            <ul role="list" className="flex flex-col pt-8">
              {data.features.map((feat) => (
                <li key={feat.title}>
                  <a
                    href={feat.href ?? "#"}
                    className="flex items-center gap-4 rounded-md px-2 py-3 hover:bg-gray-50"
                  >
                    <div className="relative size-[50px] shrink-0 overflow-hidden rounded-lg bg-gray-200">
                      {feat.image && (
                        <Image
                          src={feat.image}
                          alt=""
                          fill
                          sizes="50px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="w-[240px] text-base font-bold tracking-tight text-gray-900">
                        {feat.title}
                      </p>
                      <p className="whitespace-nowrap text-xs text-gray-600">
                        {feat.subtitle}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
