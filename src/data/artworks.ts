import type { Artwork } from '@/types'

/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR PORTFOLIO PIECES
 * ─────────────────────────────────────────────────────────────
 *  To add a piece:
 *   1. Put the image in  public/images/work/
 *   2. Copy one of the objects below and change the values.
 *
 *  Only these are required: slug, title, year, category, image, alt.
 *  Everything else is optional: leave it out and it won't show up.
 *
 *  The gallery follows this order (first piece = top left).
 *
 *  size:  'small' | 'normal' | 'tall' | 'wide' | 'feature'   (see src/types)
 *  fit:   'cover' (fills the tile) | 'contain' (shows the whole piece)
 *  focus: 'center' | 'top' | 'bottom' | 'left' | 'right'
 *
 *  NOTE: these are placeholder pieces cropped from the design mockups.
 *  Replace them with your own work.
 * ─────────────────────────────────────────────────────────────
 */
export const artworks: Artwork[] = [
  {
    slug: 'rubberhose-supercut',
    title: 'Rubberhose supercut',
    year: 2025,
    category: 'color',
    image: 'rubberhose-supercut.jpg',
    alt: 'Nine famous characters redrawn in a 1930s rubber hose cartoon style.',
    size: 'tall',
    description: [
      'A study of how far the rubber hose style can stretch. Nine characters, one set of rules: round pupils, noodle limbs, and white gloves.',
    ],
    medium: 'Digital',
    tools: ['Procreate'],
    project: 'Personal work',
  },
  {
    slug: 'jungle-ride',
    title: 'Jungle ride',
    year: 2025,
    category: 'color',
    image: 'jungle-ride.jpg',
    alt: 'A small explorer riding a donkey through a dark green jungle.',
    size: 'small',
  },
  {
    slug: 'relative-sizes',
    title: 'Relative sizes',
    year: 2024,
    category: 'ink',
    image: 'relative-sizes.jpg',
    alt: 'A vintage model sheet comparing the heights of three cartoon characters.',
    size: 'small',
    fit: 'contain',
    tileColor: '#f4e9c8',
  },
  {
    slug: 'rock-star',
    title: 'Rock star',
    year: 2024,
    category: 'color',
    image: 'rock-star.jpg',
    alt: 'A mustached singer in a white top striking a pose with a microphone.',
    size: 'tall',
  },
  {
    slug: 'ghost-and-wednesday',
    title: 'Ghost and Wednesday',
    year: 2024,
    category: 'ink',
    image: 'ghost-and-wednesday.jpg',
    alt: 'A girl with braids and a hooded ghost holding a knife, in black and white.',
    size: 'tall',
  },
  {
    slug: 'betty-boop',
    title: 'Betty Boop',
    year: 2023,
    category: 'ink',
    image: 'betty-boop.jpg',
    alt: 'Ink drawing of a cartoon woman with curly hair, posing with a hand under her chin.',
    size: 'tall',
    fit: 'contain',
    tileColor: '#cacaca',
  },
  {
    slug: 'chef-and-cups',
    title: 'Chef and cups',
    year: 2023,
    category: 'color',
    image: 'chef-and-cups.jpg',
    alt: 'Two cup-headed brothers in a red car, with a chef carrying a tray behind them.',
    size: 'tall',
  },
  {
    slug: 'carnival-boss',
    title: 'Carnival boss',
    year: 2023,
    category: 'color',
    image: 'carnival-boss.jpg',
    alt: 'A grinning red and blue clown boss at a carnival, facing a small cup-headed hero.',
    size: 'wide',
  },
  {
    slug: 'cups-walking',
    title: 'Cups walking',
    year: 2023,
    category: 'color',
    image: 'cups-walking.jpg',
    alt: 'Two cup-headed brothers walking arm in arm down a country road.',
    size: 'wide',
    description: [
      'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standard dummy text ever since the 1500s.',
      'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    ],
    medium: 'Digital',
    tools: ['Photoshop', 'Procreate'],
    project: 'Fan art',
    process: [
      { image: 'cups-walking.jpg', caption: 'Sketch' },
      { image: 'cups-walking.jpg', caption: 'Lines' },
      { image: 'cups-walking.jpg', caption: 'Color' },
      { image: 'cups-walking.jpg', caption: 'Final' },
    ],
  },
]
