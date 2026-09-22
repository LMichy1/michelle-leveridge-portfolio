<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { NavLink } from '@/data/navigation'

const { links, resumeUrl } = defineProps<{
  links: NavLink[]
  resumeUrl: string | null
}>()

const emit = defineEmits<{
  close: []
  navigate: [href: string]
}>()

const panelRef = ref<HTMLElement | null>(null)

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  panelRef.value?.querySelector('a')?.focus()
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    id="mobile-nav"
    ref="panelRef"
    class="border-t border-paper/10 bg-teal-deep md:hidden"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile navigation"
  >
    <nav class="flex flex-col px-6 py-4" aria-label="Mobile">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="rounded-md px-2 py-3 text-base font-medium text-paper hover:bg-paper/10"
        @click.prevent="emit('navigate', link.href)"
      >
        {{ link.label }}
      </a>
      <a
        v-if="resumeUrl"
        :href="resumeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-2 rounded-md bg-paper px-2 py-3 text-center text-base font-semibold text-teal-deep"
        @click="emit('close')"
      >
        Resume
      </a>
    </nav>
  </div>
</template>
