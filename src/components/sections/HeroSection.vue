<script setup lang="ts">
import { profile } from '@/data/profile'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGithub from '@/components/ui/IconGithub.vue'
import IconLinkedin from '@/components/ui/IconLinkedin.vue'
import { scrollToSection } from '@/composables/useScrollSpy'

function handleProjectsClick(event: MouseEvent) {
  event.preventDefault()
  scrollToSection('#projects')
}
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-[90vh] scroll-mt-18 items-center bg-teal-deep px-6 py-24"
  >
    <div class="mx-auto w-full max-w-6xl">
      <p class="mb-4 text-sm font-semibold tracking-widest text-teal-light uppercase">
        {{ profile.location }}
      </p>
      <h1
        class="text-4xl leading-tight font-bold tracking-tight text-paper sm:text-5xl md:text-6xl"
      >
        {{ profile.name.toUpperCase() }}
      </h1>
      <p class="mt-4 max-w-2xl text-lg font-medium text-teal-light sm:text-xl">
        {{ profile.headline }}
      </p>

      <div class="mt-8 max-w-2xl space-y-3">
        <p v-for="line in profile.intro" :key="line" class="text-base text-paper/85 sm:text-lg">
          {{ line }}
        </p>
      </div>

      <div class="mt-10 flex flex-wrap items-center gap-4">
        <BaseButton href="#projects" tone="light" variant="solid" @click="handleProjectsClick">
          View Projects
        </BaseButton>
        <BaseButton
          v-if="profile.resumeUrl"
          :href="profile.resumeUrl"
          tone="light"
          variant="outline"
          external
        >
          View Resume
        </BaseButton>
        <BaseButton :href="profile.socialLinks[0]?.href" tone="light" variant="outline" external>
          <IconGithub class="h-4 w-4" /> GitHub
        </BaseButton>
        <BaseButton :href="profile.socialLinks[1]?.href" tone="light" variant="outline" external>
          <IconLinkedin class="h-4 w-4" /> LinkedIn
        </BaseButton>
      </div>
    </div>
  </section>
</template>
