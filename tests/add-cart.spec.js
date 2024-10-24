
const { test, expect } = require('@playwright/test');

test.describe('SauceDemo E-commerce Flow', () => {

  async function login(page, username, password) {
    console.log('Navigating to SauceDemo login page');
    await page.goto('https://www.saucedemo.com/');
    
    console.log(`Typing username: ${username}`);
    await page.type('#user-name', username, { delay: 100 });
    
    console.log('Typing password');
    await page.type('#password', password, { delay: 100 });
    
    console.log('Pausing for 500ms before logging in');
    await page.waitForTimeout(500);

    console.log('Clicking login button');
    await page.click('#login-button');
  }

  test('User success login and validate dashboard', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');

    console.log('Pausing for 1 second to simulate user wait after login');
    await page.waitForTimeout(1000);

    console.log('Validating URL is correct');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    console.log('Validating dashboard page title is "Products"');
    await expect(page.locator('.title')).toHaveText('Products');
    
    console.log('Dashboard validation complete.');
  });

  test('Add item to cart and validate', async ({ page }) => {
    await login(page, 'standard_user', 'secret_sauce');
    
    console.log('Pausing for 1 second to simulate user wait after login');
    await page.waitForTimeout(1000);

    console.log('Clicking "Add to cart" for the first item');
    await page.click('text=Add to cart');

    console.log('Pausing for 500ms before navigating to cart');
    await page.waitForTimeout(500);

    console.log('Navigating to cart page');
    await page.click('.shopping_cart_link');

    console.log('Pausing for 1 second to simulate page load');
    await page.waitForTimeout(1000);

    console.log('Validating item is present in the cart');
    const cartItem = await page.locator('.cart_item');
    await expect(cartItem).toBeVisible();
    
    console.log('Cart validation complete.');
  });
});
