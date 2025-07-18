
import { chromium } from '@playwright/test';
import fs from 'fs';

async function globalSetup () {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Перейти на сайт
  await page.goto('https://www.zara.com/ua');

  //Автоматично прийняти cookies, якщо банер з’явився
  const acceptCookiesSelector = 'button:has-text("Усі прийняти")';

  if (await page.locator(acceptCookiesSelector).isVisible({ timeout: 5000 }).catch(() => false)) {
    await page.click(acceptCookiesSelector);
    console.log('Cookies прийняті автоматично.');
  }

  //Зберігаємо сесію
  await context.storageState({ path: './data/storageState.json' });
  await browser.close();
};
export default globalSetup;