import { test, expect } from '@playwright/test'

test.describe('Mobile navigation', () => {
  test('opens, navigates to a section, and closes', async ({ page }) => {
    await page.goto('/')

    const toggle = page.getByRole('button', { name: 'Toggle navigation menu' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = page.locator('#mobile-nav')
    await expect(mobileNav).toBeVisible()

    await mobileNav.getByRole('link', { name: 'Contact' }).click()
    await expect(page.locator('#contact')).toBeInViewport()
    await expect(page.locator('#mobile-nav')).toHaveCount(0)
  })

  test('closes on Escape', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByRole('button', { name: 'Toggle navigation menu' })
    await toggle.click()
    await expect(page.locator('#mobile-nav')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(page.locator('#mobile-nav')).toHaveCount(0)
  })
})
