describe('Testes de Carrinho no SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    // Login válido antes de cada teste
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Adicionar produto ao carrinho', () => {
    cy.get('.inventory_item').first().contains('Add to cart').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('Adicionar múltiplos produtos e remover um', () => {
    // Adiciona os 2 primeiros produtos
    cy.get('.inventory_item').eq(0).contains('Add to cart').click()
    cy.get('.inventory_item').eq(1).contains('Add to cart').click()
    cy.get('.shopping_cart_badge').should('contain', '2')

    // Remove o primeiro
    cy.get('.inventory_item').eq(0).contains('Remove').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('Acessar o carrinho', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('have.length', 0) // carrinho vazio inicialmente
  })
})