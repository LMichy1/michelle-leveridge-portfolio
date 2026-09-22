<script setup lang="ts">
import { skillGroups } from '@/data/skills'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
</script>

<template>
  <section id="skills" class="scroll-mt-18 bg-teal-primary px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Technical Skills" title="What I work with" tone="dark" />
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="group in skillGroups" :key="group.title">
          <h3 class="mb-3 text-sm font-semibold tracking-wide text-teal-light uppercase">
            {{ group.title }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <BaseBadge v-for="skill in group.skills" :key="skill" tone="dark">
              {{ skill }}
            </BaseBadge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
