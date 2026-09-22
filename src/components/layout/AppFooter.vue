<script setup lang="ts">
import { profile } from '@/data/profile'
import IconGithub from '@/components/ui/IconGithub.vue'
import IconLinkedin from '@/components/ui/IconLinkedin.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-teal-deep">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-paper/70 sm:flex-row sm:justify-between"
    >
      <p>© {{ year }} {{ profile.name }}. Built with Vue 3, TypeScript &amp; Tailwind CSS.</p>
      <div class="flex items-center gap-5">
        <a
          :href="profile.socialLinks[0]?.href"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          class="hover:text-paper"
        >
          <IconGithub />
        </a>
        <a
          :href="profile.socialLinks[1]?.href"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="hover:text-paper"
        >
          <IconLinkedin />
        </a>
      </div>
    </div>
  </footer>
</template>
