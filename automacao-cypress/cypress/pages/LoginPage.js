class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  getUsernameInput() {
    return cy.get('[data-test="username"]')
  }

  getPasswordInput() {
    return cy.get('[data-test="password"]')
  }

  getLoginButton() {
    return cy.get('[data-test="login-button"]')
  }

  login(username = 'standard_user', password = 'secret_sauce') {
    this.getUsernameInput().type(username)
    this.getPasswordInput().type(password)
    this.getLoginButton().click()
  }

  verifyLoginSuccess() {
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  }
}

export default new LoginPage()