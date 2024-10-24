class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = '#user-name';
      this.passwordInput = '#password';
      this.loginButton = '#login-button';
    }
  
    async navigate() {
      console.log('Navigating to login page');
      await this.page.goto('https://www.saucedemo.com/');
      await this.page.waitForTimeout(500);
    }
  
    async login(username, password) {
      console.log(`Typing username: ${username}`);
      await this.page.type(this.usernameInput, username, {delay: 100});
      
      console.log('Typing password');
      await this.page.type(this.passwordInput, password, {delay: 100});
      
      console.log('Pausing for 500ms before logging in');
      await this.page.waitForTimeout(500);

      console.log('Clicking login button');
      await this.page.click(this.loginButton);

      console.log('Pausing for 500ms after login');
      await this.page.waitForTimeout(500);
    }
  }
  
  module.exports = LoginPage;
  