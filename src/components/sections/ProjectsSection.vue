<script setup lang="ts">
import { projects } from '@/data/projects'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="scroll-mt-18 bg-teal-light px-6 py-20">
    <div class="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Featured Projects" title="Selected work" tone="light" />
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>
