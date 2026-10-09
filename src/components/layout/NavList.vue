<script setup lang="ts">
import { navItems } from '@/data/navigation'
import { useActiveSection } from '@/composables/useActiveSection'
import NavLink from './NavLink.vue'
import type { NavItem } from '@/types'

withDefaults(defineProps<{ tone?: 'dark' | 'light' }>(), { tone: 'dark' })
defineEmits<{ navigate: [] }>()

const active = useActiveSection()

function stateOf(item: NavItem): 'idle' | 'parent' | 'current' {
  if (active.value === item.id) return 'current'
  if (item.children?.some((c) => c.id === active.value)) return 'parent'
  return 'idle'
}
</script>

<template>
  <nav aria-label="Main">
    <ul class="flex flex-col gap-6">
      <li v-for="item in navItems" :key="item.id">
        <NavLink :item="item" :state="stateOf(item)" :tone="tone" @click="$emit('navigate')" />

        <ul v-if="item.children" class="mt-4 flex flex-col gap-4 pl-8">
          <li v-for="child in item.children" :key="child.id">
            <NavLink
              :item="child"
              child
              :state="active === child.id ? 'current' : 'idle'"
              :tone="tone"
              @click="$emit('navigate')"
            />
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
