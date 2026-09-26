import { test, expect,  } from '@playwright/test';

test('Open Website', async ({ page }) => {
  await page.goto('https://kalingaanimalwelfare.vercel.app/index.html');

  // // Expect a title "to contain" a substring.
  await expect(page.getByRole('link', { name: 'Home', exact: true})).toBeVisible();
  await expect(page.getByLabel('Main navigation').getByRole('link', { name: 'Adopt' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Stories'})).toBeVisible();
  await expect(page.getByRole('link', { name: 'About Us'})).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get Involved'})).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Us'})).toBeVisible();
  await expect(page.getByLabel('Main navigation').getByRole('link', { name: 'Donate' })).toBeVisible();
  await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");

  await page.getByLabel('Main navigation').getByRole('link', { name: 'Adopt' }).click();
  await expect(page.getByRole('heading', { name: 'Coming Soon...' })).toBeVisible();
  await expect(page).toHaveTitle('Kalinga Animal Welfare - Adopt');

  await page.getByRole('link', { name: 'Stories'}).click();
  await expect(page.getByRole('heading', { name: 'Coming Soon...' })).toBeVisible();
  await expect(page).toHaveTitle('Kalinga Animal Welfare - Stories');

  await page.getByRole('link', { name: 'About Us'}).click();
  await expect(page.getByRole('heading', { name: 'Coming Soon...' })).toBeVisible();
  await expect(page).toHaveTitle('Kalinga Animal Welfare - About Us');

  await page.getByRole('link', { name: 'Get Involved'}).click();
  await expect(page.getByRole('heading', { name: 'Coming Soon...' })).toBeVisible();
  await expect(page).toHaveTitle('Kalinga Animal Welfare - Get Involved');

  await page.getByRole('link', { name: 'Contact Us'}).click();
  await expect(page.getByRole('heading', { name: 'Coming Soon...' })).toBeVisible();
  await expect(page).toHaveTitle('Kalinga Animal Welfare - Contact Us');

  await page.getByLabel('Main navigation').getByRole('link', { name: 'Donate' }).click();
  await expect(page.getByRole('heading', { name: 'Coming Soon...' })).toBeVisible();
  await expect(page).toHaveTitle('Kalinga Animal Welfare - Donate');

});
