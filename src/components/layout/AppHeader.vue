<script setup lang="ts">
import { ref, watch } from 'vue'
import { navLinks } from '@/data/navigation'
import { profile } from '@/data/profile'
import { scrollToSection, useScrollSpy } from '@/composables/useScrollSpy'
import MobileNav from './MobileNav.vue'
import IconGithub from '@/components/ui/IconGithub.vue'
import IconLinkedin from '@/components/ui/IconLinkedin.vue'

const isMenuOpen = ref(false)
const { activeId } = useScrollSpy(navLinks.map((link) => link.href.replace('#', '')))

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleNavClick(href: string, event: MouseEvent) {
  event.preventDefault()
  scrollToSection(href)
  closeMenu()
}

function handleMobileNavigate(href: string) {
  scrollToSection(href)
  closeMenu()
}

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-paper/10 bg-teal-deep">
    <div class="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
      <a
        href="#home"
        class="text-lg font-bold tracking-tight text-paper"
        @click="handleNavClick('#home', $event)"
      >
        Michelle Leveridge
      </a>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium transition-colors"
          :class="
            activeId === link.href.replace('#', '')
              ? 'text-paper'
              : 'text-paper/70 hover:text-paper'
          "
          @click="handleNavClick(link.href, $event)"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-4 md:flex">
        <a
          :href="profile.socialLinks[0]?.href"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          class="text-paper/80 hover:text-paper"
        >
          <IconGithub />
        </a>
        <a
          :href="profile.socialLinks[1]?.href"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="text-paper/80 hover:text-paper"
        >
          <IconLinkedin />
        </a>
        <a
          v-if="profile.resumeUrl"
          :href="profile.resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg bg-paper px-4 py-2 text-sm font-semibold text-teal-deep hover:bg-teal-light"
        >
          Resume
        </a>
      </div>

      <button
        type="button"
        class="rounded-md p-2 text-paper md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <svg
          v-if="!isMenuOpen"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <MobileNav
      v-if="isMenuOpen"
      :links="navLinks"
      :resume-url="profile.resumeUrl"
      @close="closeMenu"
      @navigate="handleMobileNavigate"
    />
  </header>
</template>
