import {test} from '@playwright/test';
import fs from 'fs';


test('Вхід на Zara з cookies', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();


  const rawCookies = JSON.parse(fs.readFileSync('./data/zara-cookies.json', 'utf-8'));


  const cookies = rawCookies.map((cookie: any) => { 
    // Додаємо URL,тільки якщо немає domain/path
    if (!cookie.url && (!cookie.domain || !cookie.path)) {
      return {
        ...cookie,
        
        url: 'https://www.zara.com/ua',
      };
    }
    return cookie;
  });
  console.log('Cookie: added URL to cookies', cookies);
  // Переходимо на сайт
  await page.goto('https://www.zara.com');
  await page.waitForTimeout(5000); // Затримка для перегляду результатів
  console.log('Cookies: see in browser');
});
