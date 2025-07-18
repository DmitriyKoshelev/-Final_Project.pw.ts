
import { chromium } from '@playwright/test';
import fs from 'fs';

async function globalSetup () {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.zara.com/ua');

  const cookieButton = page.getByRole('button', { name: 'Дозволити всі файли cookie' });

if (await cookieButton.isVisible().catch(() => false)) {
  await cookieButton.click();
  console.log('Cookies прийняті.');
} else {
  console.log('Кнопка cookies не з’явилась.');
}

  //Зберігаємо сесію
  await context.storageState({ path: './data/storageState.json' });
  await browser.close();
};
export default globalSetup;