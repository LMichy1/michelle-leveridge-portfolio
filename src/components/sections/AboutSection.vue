<script setup lang="ts">
import { profile } from '@/data/profile'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="about" class="scroll-mt-18 bg-teal-light px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <SectionHeading eyebrow="About" title="Background" tone="light" />
      <div class="space-y-5 text-base leading-relaxed text-ink/90 sm:text-lg">
        <p v-for="paragraph in profile.about" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
