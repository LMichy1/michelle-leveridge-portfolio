<script setup lang="ts">
import { experience } from '@/data/experience'
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>

<template>
  <section id="experience" class="scroll-mt-18 bg-teal-deep px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <SectionHeading eyebrow="Experience" title="Professional history" tone="dark" />
      <ol class="space-y-10 border-l border-paper/20 pl-6">
        <li v-for="role in experience" :key="role.role + role.organization">
          <div class="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 class="text-lg font-bold text-paper">{{ role.role }}</h3>
            <span class="text-sm font-medium text-teal-light">{{ role.period }}</span>
          </div>
          <p class="mb-3 text-sm font-medium text-paper/70">
            {{ role.organization }} — {{ role.location }}
          </p>
          <ul class="list-disc space-y-1.5 pl-5 text-sm text-paper/85">
            <li v-for="highlight in role.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
