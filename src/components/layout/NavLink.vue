<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { IconCornerDownRight, IconDeviceGamepad2, IconPencil, IconUserSquare } from '@tabler/icons-vue'
import type { NavItem } from '@/types'

const props = withDefaults(
  defineProps<{
    item: NavItem
    /** current = this page. parent = a child of this item is the current page. */
    state?: 'idle' | 'parent' | 'current'
    tone?: 'dark' | 'light'
    child?: boolean
  }>(),
  { state: 'idle', tone: 'dark', child: false },
)

const icons = { pen: IconPencil, gamepad: IconDeviceGamepad2, about: IconUserSquare }
const icon = computed(() => (props.item.icon ? icons[props.item.icon] : undefined))

const colour = computed(() => {
  if (props.tone === 'light') return 'text-white'
  return props.state === 'idle' ? 'text-ink' : 'text-crimson'
})
const weight = computed(() => (props.state === 'current' ? 'font-medium' : 'font-normal'))
</script>

<template>
  <RouterLink
    :to="item.to"
    :aria-current="state === 'current' ? 'page' : undefined"
    class="nav-link relative isolate inline-flex items-center gap-3 transition-colors"
    :class="[colour, weight, child ? 'text-sm' : 'text-base', tone === 'light' ? 'nav-link--light' : '']"
  >
    <IconCornerDownRight
      v-if="child"
      :size="18"
      :stroke-width="1.75"
      aria-hidden="true"
      :class="tone === 'light' ? 'text-white' : 'text-crimson'"
    />
    <component
      :is="icon"
      v-else-if="icon"
      :size="22"
      :stroke-width="1.5"
      aria-hidden="true"
      :class="tone === 'light' ? 'text-white' : 'text-crimson'"
    />
    <span>{{ item.label }}</span>
  </RouterLink>
</template>

<style scoped>
/* The hand-drawn brush stroke that appears behind a link on hover or focus. */
.nav-link::before {
  content: '';
  position: absolute;
  inset: -0.35rem -0.75rem;
  z-index: -1;
  opacity: 0;
  transform: scaleX(0.9);
  transform-origin: left center;
  transition:
    opacity 0.15s ease,
    transform 0.25s ease;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 40' preserveAspectRatio='none'%3E%3Cpath fill='%23ffc3d3' d='M6 9C30 3 52 11 84 7s62 5 92 1c10-1 19 3 17 12-1 9 2 14-6 17-30 4-52-4-84 1S36 38 14 34C2 32 2 24 4 18 5 13 3 10 6 9z'/%3E%3C/svg%3E")
    center / 100% 100% no-repeat;
}
.nav-link--light::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 40' preserveAspectRatio='none'%3E%3Cpath fill='%23ffffff' fill-opacity='.18' d='M6 9C30 3 52 11 84 7s62 5 92 1c10-1 19 3 17 12-1 9 2 14-6 17-30 4-52-4-84 1S36 38 14 34C2 32 2 24 4 18 5 13 3 10 6 9z'/%3E%3C/svg%3E");
}
.nav-link:hover::before,
.nav-link:focus-visible::before {
  opacity: 1;
  transform: none;
}
/* Brush is pink, so hovered text turns crimson on the light menu. */
.nav-link:not(.nav-link--light):hover {
  color: var(--color-crimson);
}
</style>
