describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('passes', () => {

    cy.loginViaUi('ass@a.com', '123456')

    cy.getByData('lista-transacoes').should('be.visible')
  })
})