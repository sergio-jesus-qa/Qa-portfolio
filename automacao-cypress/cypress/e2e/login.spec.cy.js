describe('Testes de Login no SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login válido', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('Login inválido', () => {
    cy.get('[data-test="username"]').type('usuario_errado')
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('Usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'locked out')
  })
})