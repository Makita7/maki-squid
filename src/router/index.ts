import { createRouter, createWebHistory } from 'vue-router'
import GalleryView from '@/views/GalleryView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    /** Which menu item is active on this page. */
    section?: string
    /** Page background behind the content. */
    background?: 'blush'
  }
}

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GalleryView,
      props: { section: 'illustrations' },
      meta: { section: 'illustrations' },
    },
    {
      path: '/color',
      name: 'color',
      component: GalleryView,
      props: { section: 'color' },
      meta: { section: 'color' },
    },
    {
      path: '/ink',
      name: 'ink',
      component: GalleryView,
      props: { section: 'ink' },
      meta: { section: 'ink' },
    },
    {
      path: '/game-ui',
      name: 'game-ui',
      component: GalleryView,
      props: { section: 'game-ui' },
      meta: { section: 'game-ui' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { section: 'about', background: 'blush' },
    },
    {
      path: '/work/:slug',
      name: 'project',
      component: () => import('@/views/ProjectView.vue'),
      props: (route) => ({ slug: String(route.params.slug) }),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
  scrollBehavior: (_to, _from, saved) => saved ?? { top: 0 },
})
