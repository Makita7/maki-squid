<script setup lang="ts">
import ClientList from '@/components/about/ClientList.vue'
import ToolsList from '@/components/about/ToolsList.vue'
import ContactButton from '@/components/ui/ContactButton.vue'
import { usePageTitle } from '@/composables/usePageTitle'
import { profile } from '@/data/profile'
import { brandImage } from '@/utils/assets'

usePageTitle('About')
</script>

<template>
  <section class="mx-auto flex max-w-[40rem] flex-col items-center px-8 pb-20 pt-10 lg:pt-12">
    <img
      :src="brandImage(profile.portrait)"
      :alt="`Illustrated self-portrait of ${profile.name} holding two orange flowers`"
      class="h-auto w-64 lg:w-72"
    />

    <h1 class="mt-3 text-center font-display text-5xl uppercase tracking-wide text-crimson lg:text-6xl">
      {{ profile.name }}
    </h1>
    <p class="mt-2 text-center text-xl font-medium tracking-wide text-crimson">{{ profile.tagline }}</p>

    <div class="mt-8 flex w-full flex-col gap-4 text-lg leading-relaxed">
      <p v-for="(paragraph, i) in profile.bio" :key="i">{{ paragraph }}</p>
    </div>

    <section v-if="profile.tools.length" class="mt-12 w-full text-center" aria-labelledby="tools-heading">
      <h2 id="tools-heading" class="mb-5 text-2xl font-medium">Tools</h2>
      <ToolsList :tools="profile.tools" />
    </section>

    <section v-if="profile.clients.length" class="mt-12 w-full text-center" aria-labelledby="clients-heading">
      <h2 id="clients-heading" class="mb-4 text-2xl font-medium">Past clients</h2>
      <ClientList :clients="profile.clients" />
    </section>

    <div class="mt-12">
      <ContactButton />
    </div>
  </section>
</template>
