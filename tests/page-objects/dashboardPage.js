const { expect } = require('@playwright/test');
class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pageTitle = '.title';
        this.firstProductAddButton = 'text=Add to cart';
        this.cartIcon = '.shopping_cart_link';
    }

    async validateDashboard() {
        console.log('Pausing for 1 second to simulate user wait after login');
        await this.page.waitForTimeout(1000);

        console.log('Validating URL is correct');
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');

        console.log('Validating dashboard page title is "Products"');
        await expect(this.page.locator(this.pageTitle)).toHaveText('Products');

        console.log('Dashboard validation complete.');
    }

    async addItemToCart() {
        console.log('Pausing for 1 second to simulate user wait after login');
        await this.page.waitForTimeout(1000);

        console.log('Clicking "Add to cart" for the first item');
        await this.page.click(this.firstProductAddButton);

        console.log('Pausing for 500ms before navigating to cart');
        await this.page.waitForTimeout(500);
    }

    async navigateToCart() {
        console.log('Navigating to cart page');
        await this.page.click(this.cartIcon);

        console.log('Pausing for 1 second to simulate page load');
        await this.page.waitForTimeout(1000);

    }
}

module.exports = DashboardPage;
