import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '../ContactSection.vue'
import { profile } from '@/data/profile'

describe('ContactSection', () => {
  it('renders a mailto link matching the verified email address', () => {
    expect(profile.email).toBe('michelleleveridge79@gmail.com')

    const wrapper = mount(ContactSection)
    const mailLinks = wrapper.findAll(`a[href="mailto:${profile.email}"]`)

    expect(mailLinks.length).toBeGreaterThan(0)
    expect(wrapper.text()).toContain(profile.email)
  })

  it('still renders the verified GitHub and LinkedIn links', () => {
    const wrapper = mount(ContactSection)
    const hrefs = wrapper.findAll('a').map((a) => a.attributes('href'))
    expect(hrefs).toContain('https://github.com/LMichy1')
    expect(hrefs).toContain('https://www.linkedin.com/in/michelle-leveridge1/')
  })
})
