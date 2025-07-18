import {expect, test, Page} from '@playwright/test';
import {OrderPage} from '../pages/OrderPage';
import fs from 'fs';

test.use({
  storageState: './data/storageState.json',
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
  viewport: { width: 1280, height: 800 },
  locale: 'uk-UA',
});

test('add the products to the cat',{tag: '@addproduct'}, async ({ page }) => { 
    test.slow(); 

    const orderPage = new OrderPage(page);

    await page.goto('https://www.zara.com/ua');

    await orderPage.openMenuButton.click();
    await orderPage.mensLink.first().click();
    await orderPage.itemsLink.first().click();
    await orderPage.productLink.first().click();

 const sizes = ['38', '40', '42', '44'];

  for (const size of sizes) {
    await page.getByRole('button', { name: 'Додати ДЖИНСИ SKINNY FIT ІЗ ПОДЕРТОСТЯМИ' }).click();
    await page.getByRole('button', { name: size, exact: true }).click();

    if (size === '40') {
      // Особливий випадок, коли з'являється кнопка "УСЕ ОДНО ДОДАТИ"
  await page.getByRole('button', { name: 'УСЕ ОДНО ДОДАТИ' }).click();
}
  await page.getByRole('button', { name: 'Закрити' }).press('Escape');
};
    await orderPage.viewCartButton.click();
    await orderPage.continueButton.click();
    await orderPage.registerButton.click();
    await page.locator('label').filter({ hasText: 'Я хочу отримувати персоналізовані повідомлення комерційного характеру від ZARA' }).locator('svg').nth(1).click();
    await page.locator('label').filter({ hasText: 'Я прочитав(-ла) і розумію Політику конфіденційності та використання файлів' }).locator('svg').nth(1).click();
    await orderPage.continButton.click();
    const errors = page.locator('//*[@id="address-form"]/div[1]');
    await expect(errors).toContainText('Це поле є обов’язковим для заповнення.');

  });
