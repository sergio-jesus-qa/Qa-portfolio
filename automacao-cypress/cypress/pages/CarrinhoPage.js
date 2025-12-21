class CarrinhoPage {
  addFirstProductToCart() {
    cy.get('.inventory_item').first().contains('Add to cart').click()
  }

  verifyCartBadge(count) {
    cy.get('.shopping_cart_badge').should('contain', count)
  }

  goToCart() {
    cy.get('.shopping_cart_link').click()
  }
}

export default new CarrinhoPage()