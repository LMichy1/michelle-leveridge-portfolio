import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[]) {
  const activeId = ref<string | null>(null)
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          activeId.value = visible[0].target.id
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeId }
}

export function scrollToSection(hash: string, headerOffsetPx = 72) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - headerOffsetPx
  window.scrollTo({ top, behavior: 'smooth' })
}
