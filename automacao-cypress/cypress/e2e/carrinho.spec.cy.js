import LoginPage from '../pages/LoginPage'
import CarrinhoPage from '../pages/CarrinhoPage'

describe('Testes de Carrinho com POM', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login()
  })

  it('Adicionar produto ao carrinho', () => {
    CarrinhoPage.addFirstProductToCart()
    CarrinhoPage.verifyCartBadge('1')
  })
})