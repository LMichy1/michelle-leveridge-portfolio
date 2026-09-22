import { test, expect } from '@playwright/test'

test.describe('Portfolio homepage', () => {
  test('loads with the expected title and hero heading', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Michelle Leveridge/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('MICHELLE LEVERIDGE')
  })

  test('desktop navigation scrolls to each section', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto('/')

    const nav = page.getByRole('navigation', { name: 'Primary' })
    await nav.getByRole('link', { name: 'Projects' }).click()
    await expect(page.locator('#projects')).toBeInViewport()

    await nav.getByRole('link', { name: 'Contact' }).click()
    await expect(page.locator('#contact')).toBeInViewport()
  })

  test('social links point to the verified GitHub and LinkedIn destinations', async ({ page }) => {
    await page.goto('/')
    const github = page.locator('a[href="https://github.com/LMichy1"]').first()
    const linkedin = page
      .locator('a[href="https://www.linkedin.com/in/michelle-leveridge1/"]')
      .first()

    await expect(github).toHaveAttribute('target', '_blank')
    await expect(github).toHaveAttribute('rel', /noopener/)
    await expect(linkedin).toHaveAttribute('target', '_blank')
    await expect(linkedin).toHaveAttribute('rel', /noopener/)
  })

  test('no fabricated project repository or live-demo links are rendered', async ({ page }) => {
    await page.goto('/')
    const projectLinks = await page.locator('#projects a').all()
    for (const link of projectLinks) {
      const href = await link.getAttribute('href')
      expect(href).toBe('https://github.com/LMichy1/michelle-leveridge-portfolio')
    }
  })

  test('page has no horizontal overflow at common viewport widths', async ({ page }) => {
    for (const width of [375, 768, 1280, 1920]) {
      await page.setViewportSize({ width, height: 900 })
      await page.goto('/')
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      )
      expect(hasOverflow, `unexpected horizontal overflow at ${width}px`).toBe(false)
    }
  })
})
