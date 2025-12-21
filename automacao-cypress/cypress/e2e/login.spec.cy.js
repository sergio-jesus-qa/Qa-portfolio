import LoginPage from '../pages/LoginPage'

describe('Testes de Login no SauceDemo com POM', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('Login válido', () => {
    LoginPage.login()
    LoginPage.verifyLoginSuccess()
  })

  it('Login inválido', () => {
    LoginPage.login('errado', 'errado')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})