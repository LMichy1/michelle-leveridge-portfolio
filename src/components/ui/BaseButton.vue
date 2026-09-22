<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    href?: string
    variant?: 'solid' | 'outline'
    tone?: 'light' | 'dark'
    external?: boolean
  }>(),
  {
    href: undefined,
    variant: 'solid',
    tone: 'light',
    external: false,
  },
)

const tag = computed(() => (props.href ? 'a' : 'button'))

const linkAttrs = computed(() => {
  if (!props.href || !props.external) return {}
  return { target: '_blank', rel: 'noopener noreferrer' }
})

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2'

  if (props.variant === 'solid') {
    return props.tone === 'light'
      ? `${base} bg-paper text-teal-deep hover:bg-teal-light`
      : `${base} bg-teal-primary text-paper hover:bg-teal-secondary`
  }

  // outline
  return props.tone === 'light'
    ? `${base} border border-paper text-paper hover:bg-paper/10`
    : `${base} border border-teal-deep text-teal-deep hover:bg-teal-deep/10`
})
</script>

<template>
  <component :is="tag" :href="href" v-bind="linkAttrs" :class="classes">
    <slot />
  </component>
</template>
