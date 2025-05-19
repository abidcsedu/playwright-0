import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://nsdev6.na-dev-qa.com/accounts/login/');
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('abid_admin_new');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('QAZwsx@321');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('abid_admin_new').click();
  await page.getByRole('link', { name: 'Logout' }).click();
});