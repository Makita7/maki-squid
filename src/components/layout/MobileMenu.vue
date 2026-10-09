<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { IconX } from '@tabler/icons-vue'
import NavList from './NavList.vue'
import SiteLogo from './SiteLogo.vue'
import SocialLinks from './SocialLinks.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const closeButton = ref<HTMLButtonElement | null>(null)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

// While the menu is open: lock page scroll, listen for Escape, and move focus inside.
watch(
  () => props.open,
  async (isOpen) => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      window.addEventListener('keydown', onKeydown)
      await nextTick()
      closeButton.value?.focus()
    } else {
      window.removeEventListener('keydown', onKeydown)
    }
  },
)

onBeforeUnmount(() => {
  document.documentElement.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-150"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-crimson px-8 pb-10 pt-6 text-white lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <button
        ref="closeButton"
        type="button"
        class="absolute right-6 top-6 rounded p-1"
        aria-label="Close menu"
        @click="emit('close')"
      >
        <IconX :size="36" :stroke-width="1.5" aria-hidden="true" />
      </button>

      <SiteLogo tone="light" class="mx-auto w-28" />

      <div class="mt-10 pl-8">
        <NavList tone="light" @navigate="emit('close')" />
      </div>

      <SocialLinks tone="light" class="mt-auto pt-12" />
    </div>
  </Transition>
</template>
