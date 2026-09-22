<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    eyebrow?: string
    tone?: 'light' | 'dark'
  }>(),
  { eyebrow: undefined, tone: 'dark' },
)
</script>

<template>
  <div class="mb-10 sm:mb-12">
    <p
      v-if="eyebrow"
      class="mb-2 text-sm font-semibold tracking-wide uppercase"
      :class="tone === 'dark' ? 'text-teal-light' : 'text-teal-secondary'"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="text-3xl font-bold tracking-tight sm:text-4xl"
      :class="tone === 'dark' ? 'text-paper' : 'text-ink'"
    >
      {{ title }}
    </h2>
  </div>
</template>
