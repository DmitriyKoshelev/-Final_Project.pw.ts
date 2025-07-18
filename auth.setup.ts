import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Перейти на сайт Zara,увійти або прийняти cookies
  await page.goto('https://www.zara.com/ua');

  console.log('Увійти або прийми cookies..');
  await new Promise(resolve => process.stdin.once('data', resolve));

  await context.storageState({ path: './data/storageState.json' });
  await browser.close();
})();
