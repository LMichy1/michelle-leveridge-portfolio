import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '../BaseButton.vue'

describe('BaseButton', () => {
  it('renders a <button> when no href is provided', () => {
    const wrapper = mount(BaseButton, { slots: { default: 'Click me' } })
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders an <a> when href is provided', () => {
    const wrapper = mount(BaseButton, {
      props: { href: 'https://example.com' },
      slots: { default: 'Go' },
    })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('https://example.com')
  })

  it('adds target and rel attributes only when external is true', () => {
    const internal = mount(BaseButton, {
      props: { href: '#projects' },
      slots: { default: 'Go' },
    })
    expect(internal.attributes('target')).toBeUndefined()

    const external = mount(BaseButton, {
      props: { href: 'https://github.com/LMichy1', external: true },
      slots: { default: 'GitHub' },
    })
    expect(external.attributes('target')).toBe('_blank')
    expect(external.attributes('rel')).toBe('noopener noreferrer')
  })
})
