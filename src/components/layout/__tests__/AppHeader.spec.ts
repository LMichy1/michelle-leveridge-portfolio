import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import AppHeader from '../AppHeader.vue'
import MobileNav from '../MobileNav.vue'
import { profile } from '@/data/profile'

describe('AppHeader', () => {
  it('starts with the mobile menu closed', () => {
    const wrapper = mount(AppHeader)
    const toggle = wrapper.get('button[aria-label="Toggle navigation menu"]')
    expect(toggle.attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('#mobile-nav').exists()).toBe(false)
  })

  it('opens the mobile menu and updates aria-expanded when the toggle is clicked', async () => {
    const wrapper = mount(AppHeader)
    const toggle = wrapper.get('button[aria-label="Toggle navigation menu"]')

    await toggle.trigger('click')

    expect(toggle.attributes('aria-expanded')).toBe('true')
    expect(wrapper.find('#mobile-nav').exists()).toBe(true)
  })

  it('closes the mobile menu when MobileNav emits close', async () => {
    const wrapper = mount(AppHeader)
    const toggle = wrapper.get('button[aria-label="Toggle navigation menu"]')

    await toggle.trigger('click')
    expect(wrapper.find('#mobile-nav').exists()).toBe(true)

    const mobileNav = wrapper.findComponent(MobileNav)
    await mobileNav.vm.$emit('close')

    expect(wrapper.find('#mobile-nav').exists()).toBe(false)
  })

  it('does not render a resume link while no resume asset is configured', () => {
    expect(profile.resumeUrl).toBeNull()
    const wrapper = mount(AppHeader)
    expect(wrapper.find('a[href$=".pdf"]').exists()).toBe(false)
  })

  it('renders verified GitHub and LinkedIn links only', () => {
    const wrapper = mount(AppHeader)
    const hrefs = wrapper.findAll('a').map((a) => a.attributes('href'))
    expect(hrefs).toContain('https://github.com/LMichy1')
    expect(hrefs).toContain('https://www.linkedin.com/in/michelle-leveridge1/')
  })
})
