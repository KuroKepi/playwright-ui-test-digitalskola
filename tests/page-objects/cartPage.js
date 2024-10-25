const { expect } = require('@playwright/test');
class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItem = '.cart_item';
    }

    async validateItemInCart() {
        console.log('Validating item is present in the cart');
        await expect(this.page.locator(this.cartItem)).toBeVisible();
        console.log('Cart validation complete.');
    }

    async validateVisualCartPage() {
        console.log('Taking visual snapshot of the cart page');
        await expect(this.page).toHaveScreenshot();
    }
}

module.exports = CartPage;
