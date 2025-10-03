import { test } from '@playwright/test';

test('Add To-Do List', async ({ page }) => {
    await test.step('Navigate to To-Do page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[text()='Bài học 3: Todo page']");
    });

    await test.step('Add To-Do items', async () => {
        for (let i = 0; i < 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i + 1}`);
            await page.locator("//button[@id='add-task']").click();
        }

        page.on('dialog', dialog => dialog.accept());
        for (let i = 0 ; i < 100; i += 2) {
            await page.click(`//button[@id='todo-${i + 1}-delete']`);
        }
    });
})