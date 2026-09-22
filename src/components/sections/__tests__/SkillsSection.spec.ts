import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillsSection from '../SkillsSection.vue'
import { skillGroups } from '@/data/skills'

describe('SkillsSection', () => {
  it('renders every skill group heading and every individual skill', () => {
    const wrapper = mount(SkillsSection)
    const text = wrapper.text()

    for (const group of skillGroups) {
      expect(text).toContain(group.title)
      for (const skill of group.skills) {
        expect(text).toContain(skill)
      }
    }
  })

  it('does not claim unsupported ML frameworks', () => {
    const wrapper = mount(SkillsSection)
    const text = wrapper.text()
    expect(text).not.toMatch(/TensorFlow|PyTorch/i)
  })
})
