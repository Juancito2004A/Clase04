const { test, expect } = require('@playwright/test');

test('login page is reachable', async ({ page }) => {
  await page.goto('/login');
  await expect(page.locator('h1')).toBeVisible();
});
