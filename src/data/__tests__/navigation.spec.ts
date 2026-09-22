import { describe, expect, it } from 'vitest'
import { navLinks } from '../navigation'

describe('navigation config', () => {
  it('every link is a same-page hash anchor', () => {
    for (const link of navLinks) {
      expect(link.href.startsWith('#')).toBe(true)
    }
  })

  it('includes exactly the required sections in order', () => {
    expect(navLinks.map((link) => link.label)).toEqual([
      'Home',
      'About',
      'Skills',
      'Projects',
      'Experience',
      'Contact',
    ])
  })

  it('has no duplicate hrefs', () => {
    const hrefs = navLinks.map((link) => link.href)
    expect(new Set(hrefs).size).toBe(hrefs.length)
  })
})
