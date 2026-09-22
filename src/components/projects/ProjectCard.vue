<script setup lang="ts">
import type { Project } from '@/data/projects'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import IconGithub from '@/components/ui/IconGithub.vue'

defineProps<{ project: Project }>()
</script>

<template>
  <article
    class="flex h-full flex-col rounded-xl border border-teal-primary/15 bg-paper p-6 shadow-sm transition-shadow duration-150 hover:shadow-md"
  >
    <div class="mb-3 flex items-start justify-between gap-3">
      <h3 class="text-xl font-bold text-ink">{{ project.title }}</h3>
      <span
        v-if="project.sourceType === 'resume'"
        class="shrink-0 rounded-md bg-teal-primary/10 px-2 py-1 text-xs font-medium text-teal-deep"
      >
        Described in resume
      </span>
    </div>

    <p class="mb-4 text-sm leading-relaxed text-ink/80">{{ project.description }}</p>

    <p class="mb-4 text-sm text-ink/70">
      <span class="font-semibold text-ink">Problem: </span>{{ project.problem }}
    </p>

    <ul class="mb-5 list-disc space-y-1.5 pl-5 text-sm text-ink/80">
      <li v-for="item in project.functionality" :key="item">{{ item }}</li>
    </ul>

    <div class="mt-auto">
      <div class="mb-4 flex flex-wrap gap-2">
        <BaseBadge v-for="tech in project.technologies" :key="tech" tone="light">
          {{ tech }}
        </BaseBadge>
      </div>

      <a
        v-if="project.repoUrl"
        :href="project.repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 text-sm font-semibold text-teal-secondary hover:text-teal-deep"
      >
        <IconGithub class="h-4 w-4" />
        View repository
      </a>
    </div>
  </article>
</template>
