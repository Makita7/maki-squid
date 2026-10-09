<script setup lang="ts">
import { IconMenu2 } from '@tabler/icons-vue'
import SiteLogo from './SiteLogo.vue'

defineEmits<{ open: [] }>()
</script>

<template>
  <header class="relative bg-white px-8 pb-4 pt-6 lg:hidden">
    <SiteLogo class="mx-auto w-28" />
    <button
      type="button"
      class="absolute bottom-7 left-7 rounded p-1 text-crimson"
      aria-label="Open menu"
      @click="$emit('open')"
    >
      <IconMenu2 :size="40" :stroke-width="1.75" aria-hidden="true" />
    </button>
  </header>
</template>
