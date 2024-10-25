require('dotenv').config();
const { expect } = require('@playwright/test');
class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = '#user-name';
      this.passwordInput = '#password';
      this.loginButton = '#login-button';
    }
  
    async navigate() {
      console.log('Navigating to login page');
      await this.page.goto(process.env.BASE_URL);
      await this.page.waitForTimeout(500);
    }
  
    async login(username, password) {
      console.log(`Typing username: ${process.env.USERID}`);
      await this.page.type(this.usernameInput, process.env.USERID, {delay: 100});
      
      console.log('Typing password');
      await this.page.type(this.passwordInput, process.env.PASSWORD, {delay: 100});
      
      console.log('Pausing for 500ms before logging in');
      await this.page.waitForTimeout(500);

      console.log('Clicking login button');
      await this.page.click(this.loginButton);

      console.log('Pausing for 500ms after login');
      await this.page.waitForTimeout(500);
    }

    async validateVisualLoginPage() {
      console.log('Taking visual snapshot of the login page');
      await expect(this.page).toHaveScreenshot();
    }
  }
  
  module.exports = LoginPage;
  