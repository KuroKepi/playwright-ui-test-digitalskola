const { test, expect } = require('@playwright/test');
const LoginPage = require('./page-objects/loginPage');
const DashboardPage = require('./page-objects/dashboardPage');
const CartPage = require('./page-objects/cartPage');

test.describe('SauceDemo E-commerce Flow using Page Object Model', () => {
  
  test('User success login, add item to cart and validate', async ({ page }) => {
    // Instantiate page objects
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

    // Test steps
    await loginPage.navigate();
    await loginPage.validateVisualLoginPage();
    await loginPage.login();
    
    await dashboardPage.validateDashboard();
    await dashboardPage.validateVisualDashboardPage();
    await dashboardPage.addItemToCart();
    
    await dashboardPage.navigateToCart();
    await cartPage.validateItemInCart();
    await cartPage.validateVisualCartPage();
  });
});
