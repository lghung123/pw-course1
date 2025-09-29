import { test } from '@playwright/test';

test('Register account successfully', async ({page}) => {
    await test.step('Navigate to Register page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[text()='Bài học 1: Register Page (có đủ các element)']");
    });

    await test.step('Fill all the register information', async () => {
        await page.locator("//input[@id ='username']").fill('Hung Le');
        await page.locator("//input[@id ='email']").fill('lghung123@gmail.com');
        await page.locator("//input[@id ='male']").check();
        await page.locator("//input[@id ='reading']").check();
        await page.locator("//select[@id ='interests']").selectOption('science');
        await page.locator("//select[@id ='country']").selectOption('usa');
        await page.locator("//input[@id ='dob']").pressSequentially('20071998');
        await page.locator("//input[@id ='profile']").setInputFiles("pw-course/tests/lesson-5/data.txt");
        await page.locator("//textarea[@id ='bio']").fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        await page.locator("//input[@id ='rating']").fill('7');
        await page.locator("//input[@id='favcolor']").fill('#123da1');
        await page.locator("//div[contains(text(), 'Hover over me')]").hover();
        await page.locator("//input[@id='newsletter']").check();
        await page.locator("//input[@id='customDate']").pressSequentially('29092025');
    });

    await test.step('Click on Register button', async () => {
        await page.click("//button[text()='Register']");
    });
})