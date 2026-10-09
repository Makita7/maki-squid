<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import MobileHeader from '@/components/layout/MobileHeader.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'

const route = useRoute()
const menuOpen = ref(false)

// Close the phone menu whenever the page changes.
watch(() => route.fullPath, () => (menuOpen.value = false))

const mainBackground = computed(() => (route.meta.background === 'blush' ? 'bg-blush' : 'bg-white'))
</script>

<template>
  <a
    href="#main"
    class="sr-only z-50 rounded bg-white px-4 py-2 text-crimson focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
  >
    Skip to content
  </a>

  <AppSidebar />

  <div class="flex min-h-dvh flex-col lg:pl-[18.75rem]">
    <MobileHeader @open="menuOpen = true" />
    <main id="main" tabindex="-1" class="flex-1 outline-none" :class="mainBackground">
      <RouterView />
    </main>
  </div>

  <MobileMenu :open="menuOpen" @close="menuOpen = false" />
</template>
