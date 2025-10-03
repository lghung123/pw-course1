import { test } from '@playwright/test';

test('Add product successfully', async ({ page }) => {
    await test.step('Navigate to Add product page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[text()='Bài học 2: Product page']");
    });

    await test.step('Add product to cart', async () => {
        await page.click("//button[@data-product-id='1']", { clickCount : 2 });
        await page.click("//button[@data-product-id='2']", { clickCount : 3 });
        await page.click("//button[@data-product-id='3']", { clickCount : 1 });
    });
});