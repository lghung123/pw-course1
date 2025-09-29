import { test } from '@playwright/test';

function addProduct(productName: string, quantity: number) {
    const xpath = `//div[text()='${productName}']/following-sibling::button[1]`; // lấy xpath theo tên sp
    return {xpath, quantity};
};

test('Add product successfully', async ({page}) => {
    await test.step('Navigate to Add product page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[text()='Bài học 2: Product page']");
    });

    await test.step('Add product to cart', async () => {
        const productData = [{name: 'Product 1', quantity: 3}, {name: 'Product 2' , quantity: 2}, {name: 'Product 3', quantity: 1}];
        
        for (let i = 0; i < productData.length; i++) {
            const productParam = addProduct(productData[i].name, productData[i].quantity); // gán xpath và số lượng vào 1 biến
            await page.click(productParam.xpath, {clickCount: productParam.quantity});
        };
    });
})