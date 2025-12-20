describe('Testes de Checkout no SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Adiciona um produto ao carrinho
    cy.get('.inventory_item').first().contains('Add to cart').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
  })

  it('Preencher formulário de checkout e finalizar compra', () => {
    cy.get('[data-test="firstName"]').type('Sérgio')
    cy.get('[data-test="lastName"]').type('Jesus')
    cy.get('[data-test="postalCode"]').type('2410-999')
    cy.get('[data-test="continue"]').click()

    // Página de overview
    cy.get('.summary_total_label').should('contain', '$32.39') // valor depende do produto
    cy.get('#finish').click()

    // Página de sucesso
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
    cy.get('.complete-text').should('contain', 'Your order has been dispatched')
  })

  it('Erro ao deixar campos obrigatórios vazios', () => {
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'First Name is required')

    cy.get('[data-test="firstName"]').type('Sérgio')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'Last Name is required')
  })
})