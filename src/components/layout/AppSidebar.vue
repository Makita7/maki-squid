<script setup lang="ts">
import NavList from './NavList.vue'
import SiteLogo from './SiteLogo.vue'
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <aside class="fixed inset-y-0 left-0 z-10 hidden w-[18.75rem] flex-col bg-white px-12 pb-10 pt-9 lg:flex">
    <SiteLogo class="mx-auto w-[7.25rem]" />
    <div class="mt-10 pl-2">
      <NavList />
    </div>
    <SocialLinks class="mt-auto" />
  </aside>
</template>
