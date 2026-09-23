<script setup lang="ts">
import { profile } from '@/data/profile'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import IconGithub from '@/components/ui/IconGithub.vue'
import IconLinkedin from '@/components/ui/IconLinkedin.vue'
import IconEmail from '@/components/ui/IconEmail.vue'
</script>

<template>
  <section id="contact" class="scroll-mt-18 bg-teal-deep px-6 py-20">
    <div class="mx-auto max-w-3xl text-center">
      <SectionHeading eyebrow="Contact" title="Let's connect" tone="dark" />
      <p class="mx-auto mb-8 max-w-xl text-base text-paper/85 sm:text-lg">
        Based in {{ profile.location }}, open to full-stack, backend, and AI-evaluation-adjacent
        opportunities. The fastest ways to reach me are below.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <BaseButton
          v-if="profile.email"
          :href="`mailto:${profile.email}`"
          tone="light"
          variant="solid"
        >
          <IconEmail class="h-4 w-4" /> Email
        </BaseButton>
        <BaseButton :href="profile.socialLinks[0]?.href" tone="light" variant="outline" external>
          <IconGithub class="h-4 w-4" /> GitHub
        </BaseButton>
        <BaseButton :href="profile.socialLinks[1]?.href" tone="light" variant="outline" external>
          <IconLinkedin class="h-4 w-4" /> LinkedIn
        </BaseButton>
      </div>
      <p v-if="profile.email" class="mt-6 text-sm text-paper/70">
        Or reach out directly at
        <a :href="`mailto:${profile.email}`" class="font-medium text-paper underline">{{
          profile.email
        }}</a>
      </p>
    </div>
  </section>
</template>
