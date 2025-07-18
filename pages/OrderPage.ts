import {Page, Locator, expect} from '@playwright/test';

export class OrderPage {
    private page: Page;

    openMenuButton: Locator;
    mensLink: Locator;
    itemsLink: Locator;
    productLink: Locator;
    addToCartButton: Locator;
    closePopup: Locator;
  readonly  viewCartButton: Locator;
  readonly  continueButton: Locator;
    registerButton: Locator;
    continButton: Locator;
    allSizes: Locator;
  static viewCartButton: any;
  static continueButton: any;
  static registerButton: any;
  static continButton: any;
  

    constructor(page: Page) {
        this.page = page;
        this.openMenuButton = page.locator('//*[@data-qa-id="layout-header-toggle-menu"]');
        this.mensLink = page.locator('//span[text()="ЧОЛОВІКИ"]');
        this.itemsLink = page.locator('//span[text()="ДЖИНСИ"]');
        this.productLink = page.locator('//div[contains(@class, "zds-carousel-container")]//div[contains(@class, "zds-carousel-item")][1]//a[contains(@class, "product-link")]');
        this.addToCartButton = page.locator('//button[normalize-space(.)="Додати"]');
        this.allSizes = page.locator('#main .size-selector-sizes-size__label', { hasText: '' });
        this.closePopup = page.locator('//*[@id="theme-app"]/div/div');
        this.viewCartButton = page.locator('//*[@data-qa-id="layout-header-go-to-cart"]').filter({ hasText: 'КОШИК' });  
        this.continueButton = page.getByRole('button', { name: 'ПРОДОВЖИТИ' }).filter({ hasText: 'ПРОДОВЖИТИ' });
        this.registerButton = page.locator('//*[@data-qa-id="logon-view-alternate-button"]').filter({ hasText: 'Зареєструйтеся' });
        this.continButton = page.locator('//*[@id="address-form"]/div[2]/button');
        this.allSizes = page.locator('#main .size-selector-sizes-size__label');
    }
}

