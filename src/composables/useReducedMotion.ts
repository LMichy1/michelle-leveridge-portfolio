import { ref, onMounted, onUnmounted } from 'vue'

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)

  let mediaQuery: MediaQueryList | undefined
  const handleChange = (event: MediaQueryListEvent) => {
    prefersReducedMotion.value = event.matches
  }

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mediaQuery.matches
    mediaQuery.addEventListener('change', handleChange)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', handleChange)
  })

  return { prefersReducedMotion }
}
