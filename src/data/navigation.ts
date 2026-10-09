import type { NavItem } from '@/types'

/** The sidebar and mobile menu. `id` must match the route's `section`. */
export const navItems: NavItem[] = [
  {
    id: 'illustrations',
    label: 'Illustrations',
    to: '/',
    icon: 'pen',
    children: [
      { id: 'color', label: 'Color', to: '/color' },
      { id: 'ink', label: 'Ink', to: '/ink' },
    ],
  },
  { id: 'game-ui', label: 'Game UI Design', to: '/game-ui', icon: 'gamepad' },
  { id: 'about', label: 'About', to: '/about', icon: 'about' },
]
