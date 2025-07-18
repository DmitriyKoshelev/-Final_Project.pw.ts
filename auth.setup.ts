import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Перейти на сайт Zara,увійти або прийняти cookies
  await page.goto('https://www.zara.com/ua');

  console.log('👉 Увійди або прийми cookies у ручному режимі, потім натисни Enter...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  await context.storageState({ path: './data/storageState.json' });
  await browser.close();
})();
