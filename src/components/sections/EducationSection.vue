<script setup lang="ts">
import { certifications, education } from '@/data/education'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
</script>

<template>
  <section id="education" class="scroll-mt-18 bg-teal-light px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <SectionHeading eyebrow="Education" title="Education &amp; certifications" tone="light" />

      <div class="mb-10 space-y-6">
        <div v-for="entry in education" :key="entry.degree + entry.period">
          <h3 class="text-lg font-bold text-ink">{{ entry.degree }}</h3>
          <p class="text-sm text-ink/70">{{ entry.institution }} — {{ entry.location }}</p>
          <p class="text-sm font-medium text-teal-deep">{{ entry.period }}</p>
        </div>
      </div>

      <h3 class="mb-3 text-sm font-semibold tracking-wide text-teal-deep uppercase">
        Certifications
      </h3>
      <div class="flex flex-wrap gap-2">
        <BaseBadge v-for="cert in certifications" :key="cert" tone="light">
          {{ cert }}
        </BaseBadge>
      </div>
    </div>
  </section>
</template>
