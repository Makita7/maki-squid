<script setup lang="ts">
import { IconBrandFigma, IconBrush } from '@tabler/icons-vue'
import type { Tool } from '@/types'

defineProps<{ tools: Tool[] }>()

const icons = { figma: IconBrandFigma, brush: IconBrush }
</script>

<template>
  <ul class="flex flex-wrap justify-center gap-x-6 gap-y-5">
    <li v-for="tool in tools" :key="tool.name" class="flex w-20 flex-col items-center gap-2 text-center">
      <span
        class="flex size-9 items-center justify-center rounded-md border-2 border-ink text-sm font-semibold leading-none"
        aria-hidden="true"
      >
        <component :is="icons[tool.icon]" v-if="tool.icon" :size="20" :stroke-width="1.75" />
        <template v-else>{{ tool.badge }}</template>
      </span>
      <span class="text-sm">{{ tool.name }}</span>
    </li>
  </ul>
</template>
