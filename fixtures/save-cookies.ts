import {chromium} from '@playwright/test';
import fs from 'fs';

  (async () => {
    const browser = await chromium.launch({ headless: false});
    const contest = await browser.newContext();
    const page = await contest.newPage();

await page.goto('https://www.zara.com');
await page.waitForTimeout(1500);

const cookies = await contest.cookies();
fs.writeFileSync('zara-cookies.json', JSON.stringify(cookies,null,2));
  
await browser.close();
});
