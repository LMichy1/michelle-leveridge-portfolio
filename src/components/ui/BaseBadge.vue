<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'light' | 'dark' }>(), { tone: 'dark' })
</script>

<template>
  <span
    class="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium"
    :class="tone === 'dark' ? 'bg-paper/10 text-paper' : 'bg-teal-primary/10 text-teal-deep'"
  >
    <slot />
  </span>
</template>
