import { test } from '@playwright/test';

let inputData = [];

test('Add Input data', async ({page}) => {
    await test.step('Get data from VnExpress page', async () => {
        await page.goto('https://vnexpress.net/khoa-hoc-cong-nghe'), { timeout: 100000 };

        let i = 15;
        while (inputData.length <= 10) {
            inputData.push({title: await page.locator(`//h4/a[@data-medium='Item-${i + 1}']`).getAttribute('title'),
            content:  await page.locator(`//h4/a[@data-medium='Item-${i + 1}']//following::p/a[@data-medium='Item-${i + 1}']`).innerText()});
            i++;    
        }
        console.log(inputData);
    })

    await test.step('Navigate to Personal Notes page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[text()='Bài học 4: Personal notes']");
    });

    await test.step('Add Personal Notes', async () => {
        console.log(inputData);
        for (let i = 0; i < inputData.length; i++) {
            await page.locator("//input[@id='note-title']").fill(inputData[i].title);
            await page.locator("//textarea[@id='note-content']").fill(inputData[i].content);
            await page.click("//button[@id='add-note']");
        };
    });

    await test.step('Search notes', async () => {
        await page.locator("//input[@id='search']").fill(inputData[5].title)
    });
})
