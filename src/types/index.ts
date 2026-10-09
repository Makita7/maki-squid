/** Where a piece lives in the site. "Illustrations" shows color + ink together. */
export type Category = 'color' | 'ink' | 'game-ui'

/**
 * How big a piece appears in the gallery grid (tablet and desktop).
 * On phones every piece is shown full width at its natural shape.
 *
 *   small   → 1 column  × short   (landscape strip)
 *   normal  → 1 column  × square
 *   tall    → 1 column  × portrait
 *   wide    → 2 columns × landscape (4:3)
 *   feature → 2 columns × big square
 *
 * Tip: two "small" pieces stacked are exactly as tall as one "tall" piece.
 */
export type TileSize = 'small' | 'normal' | 'tall' | 'wide' | 'feature'

/** Which part of the image stays visible when a tile crops it. */
export type Focus = 'center' | 'top' | 'bottom' | 'left' | 'right'

export interface ProcessStep {
  image: string
  caption: string
  alt?: string
}

export interface Artwork {
  /** Used in the URL: /work/<slug>. Lowercase, no spaces. */
  slug: string
  title: string
  year: number
  category: Category
  /** File name inside public/images/work/ */
  image: string
  /** Describes the image for screen readers and search engines. */
  alt: string

  /* ---- Gallery look (all optional) ---- */
  size?: TileSize
  /** 'cover' fills the tile (crops). 'contain' shows the whole piece. */
  fit?: 'cover' | 'contain'
  focus?: Focus
  /** Tile background, only visible when fit is 'contain'. Any CSS color. */
  tileColor?: string

  /* ---- Project page (all optional) ---- */
  /** One string per paragraph. */
  description?: string[]
  /** For example "Digital" or "Ink on paper". */
  medium?: string
  /** For example ["Procreate", "Photoshop"]. */
  tools?: string[]
  /** Client, fan art, personal work... */
  project?: string
  /** Sketch → lines → color → final. File names inside public/images/work/ */
  process?: ProcessStep[]
}

export interface SocialLink {
  label: string
  url: string
  kind: 'email' | 'instagram' | 'x'
}

export interface Tool {
  name: string
  /** Short text shown inside the badge, e.g. "Ps". */
  badge?: string
  /** Use an icon instead of text. */
  icon?: 'figma' | 'brush'
}

export interface Profile {
  name: string
  tagline: string
  /** One string per paragraph. */
  bio: string[]
  email: string
  /** File name inside public/images/brand/ */
  portrait: string
  tools: Tool[]
  clients: string[]
  social: SocialLink[]
}

export type NavIcon = 'pen' | 'gamepad' | 'about'

export interface NavItem {
  /** Matches the "section" of the current page. */
  id: string
  label: string
  to: string
  icon?: NavIcon
  children?: NavItem[]
}
