import { artworks } from '@/data/artworks'
import type { Artwork } from '@/types'

/** The four galleries of the site. "illustrations" = color + ink. */
export type Section = 'illustrations' | 'color' | 'ink' | 'game-ui'

export const sectionTitles: Record<Section, string> = {
  illustrations: 'Illustrations',
  color: 'Color illustrations',
  ink: 'Ink illustrations',
  'game-ui': 'Game UI design',
}

const matchers: Record<Section, (a: Artwork) => boolean> = {
  illustrations: (a) => a.category === 'color' || a.category === 'ink',
  color: (a) => a.category === 'color',
  ink: (a) => a.category === 'ink',
  'game-ui': (a) => a.category === 'game-ui',
}

export function artworksForSection(section: Section): Artwork[] {
  return artworks.filter(matchers[section])
}

export function findArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug)
}

/** Which top-level section a piece belongs to (used for the active menu item). */
export function sectionOf(artwork: Artwork): Section {
  return artwork.category === 'game-ui' ? 'game-ui' : 'illustrations'
}

/** Previous and next piece inside the same section, wrapping around. */
export function neighboursOf(artwork: Artwork): { previous?: Artwork; next?: Artwork } {
  const group = artworksForSection(sectionOf(artwork))
  if (group.length < 2) return {}
  const i = group.findIndex((a) => a.slug === artwork.slug)
  return {
    previous: group[(i - 1 + group.length) % group.length],
    next: group[(i + 1) % group.length],
  }
}
