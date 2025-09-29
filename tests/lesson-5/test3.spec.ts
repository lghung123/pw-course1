import { test } from '@playwright/test';

function writeTodoContent(numberOfItems: number) {
    return `Todo ${numberOfItems + 1}`;
};

test('Add To-Do List', async ({page}) => {
    await test.step('Navigate to To-Do page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[text()='Bài học 3: Todo page']");
    });

    await test.step('Add To-Do items', async () => {
        for (let i = 0; i < 100; i++) {
            await page.locator("//input[@id='new-task']").fill(writeTodoContent(i));
            await page.locator("//button[@id='add-task']").click();
        }

        page.on('dialog', dialog => dialog.accept());
        for (let i = 1; i <= 100; i++) {
                if (i % 2 !== 0) {
                    await page.click(`//span[contains(text(), '${i}')]/parent::li//button[text()='Delete']`);
                };
        }
    });
})