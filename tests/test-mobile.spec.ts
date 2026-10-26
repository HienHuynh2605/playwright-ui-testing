import { test, expect } from '@playwright/test';

test('Input field', {tag: ['@smoke', '@fields']}, async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
    await page.locator('sidebar-toggle').click();
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click()
})        