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
}

module.exports = CartPage;
