import type { Profile } from '@/types'

/** Everything on the About page, plus the social icons in the sidebar. */
export const profile: Profile = {
  name: 'Sofia Makita',
  tagline: 'Illustrator and UI designer',
  bio: [
    'I’m a designer based in Argentina. I’ve always loved animation and videogames, and that has definitely inspired my art style. I studied multimedia design and have worked 5+ years in UX/UI design for multiple industries.',
  ],
  email: 'sophiamakita@gmail.com',
  portrait: 'portrait.png', // file inside public/images/brand/

  // badge = text shown in the square. icon = 'figma' | 'brush' instead of text.
  tools: [
    { name: 'Photoshop', badge: 'Ps' },
    { name: 'Illustrator', badge: 'Ai' },
    { name: 'After Effects', badge: 'Ae' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Procreate', icon: 'brush' },
  ],

  // Leave the list empty ([]) to hide the "Past clients" section.
  clients: ['Client name', 'Client name', 'Client name'],

  social: [
    { kind: 'email', label: 'Email', url: 'mailto:sophiamakita@gmail.com' },
    { kind: 'instagram', label: 'Instagram', url: 'https://instagram.com/' },
    { kind: 'x', label: 'X', url: 'https://x.com/' },
  ],
}
