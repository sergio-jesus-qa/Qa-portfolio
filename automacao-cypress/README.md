# Automação de Testes com Cypress

Projeto E2E para o site https://www.saucedemo.com/.

### Testes incluídos
- **login.spec.cy.js**: Login válido, inválido e usuário bloqueado.
- **carrinho.spec.cy.js**: Adicionar/remover produtos e acessar carrinho.
- **checkout.spec.cy.js**: Fluxo completo de compra e validação de campos obrigatórios.

### Estrutura Avançada
- Uso de **Page Object Model (POM)** para organização e reutilização de código (pasta cypress/pages).
- Custom commands, fixtures e relatórios em desenvolvimento.

### Como rodar
1. cd automacao-cypress
2. npm install
3. npx cypress open (modo interativo) ou npx cypress run (headless)

Todos os testes estão passando 100% green! ✅

Última atualização: Dezembro 2025
