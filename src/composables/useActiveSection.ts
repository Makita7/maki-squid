import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { findArtwork, sectionOf } from './useArtworks'

/** The menu item that should look "active" for the current page. */
export function useActiveSection() {
  const route = useRoute()

  return computed(() => {
    if (route.name === 'project') {
      const piece = findArtwork(String(route.params.slug))
      return piece ? sectionOf(piece) : ''
    }
    return typeof route.meta.section === 'string' ? route.meta.section : ''
  })
}
