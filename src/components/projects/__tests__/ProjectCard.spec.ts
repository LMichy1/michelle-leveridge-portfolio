import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectCard from '../ProjectCard.vue'
import type { Project } from '@/data/projects'

const resumeProject: Project = {
  title: 'Resume-Described Project',
  description: 'desc',
  problem: 'problem',
  functionality: ['does a thing'],
  technologies: ['Python'],
  sourceType: 'resume',
  repoUrl: null,
  liveUrl: null,
}

const repoProject: Project = {
  ...resumeProject,
  title: 'Repo-Backed Project',
  sourceType: 'repository',
  repoUrl: 'https://github.com/LMichy1/michelle-leveridge-portfolio',
}

describe('ProjectCard', () => {
  it('does not render a repository link when repoUrl is null', () => {
    const wrapper = mount(ProjectCard, { props: { project: resumeProject } })
    expect(wrapper.find('a').exists()).toBe(false)
    expect(wrapper.text()).toContain('Described in resume')
  })

  it('renders a repository link when repoUrl is present, without the resume badge', () => {
    const wrapper = mount(ProjectCard, { props: { project: repoProject } })
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.attributes('href')).toBe(repoProject.repoUrl)
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
    expect(wrapper.text()).not.toContain('Described in resume')
  })
})
