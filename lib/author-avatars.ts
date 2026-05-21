/** Author headshots in public/images — filename matches person name. */
export const AUTHOR_AVATARS = {
  "Matt Fellowes": "/images/Matt-Fellowes.jpg",
  "Matt Fellowes, CEO": "/images/Matt-Fellowes.jpg",
  "Sarah Foster": "/images/Sarah Foster.jpg",
  "Alex Gailey": "/images/Alex-Gailey.jpg",
  "Greg McBride": "/images/Greg-McBride.jpg",
} as const

export type AuthorName = keyof typeof AUTHOR_AVATARS

export function authorAvatar(name: string): string {
  return AUTHOR_AVATARS[name as AuthorName] ?? "/images/Matt-Fellowes.jpg"
}
