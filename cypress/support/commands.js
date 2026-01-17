// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getByData', (seletor) => {
    return cy.get(`[data-test^=${seletor}], [data-testid^=${seletor}]`).first()
})

Cypress.Commands.add('loginViaUi', (email, senha) => {
    
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type(email)
    cy.getByData('senha-input').type(senha)
    cy.getByData('botao-enviar').click()
})
Cypress.Commands.add('loginViaUiSemDigitarEmail', (senha) => {
    
    cy.getByData('botao-login').click()
    
    cy.getByData('senha-input').type(senha)
    cy.getByData('botao-enviar').click()
})
Cypress.Commands.add('loginViaUiSemDigitarSenha', (email) => {
    
    cy.getByData('botao-login').click()
    cy.getByData('email-input').type(email)
    
    cy.getByData('botao-enviar').click()
})
Cypress.Commands.add('submeterFormularioCadastro', (nome, email, senha) => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type(nome)
        cy.getByData('email-input').type(email)
        cy.getByData('senha-input').type(senha)
        cy.getByData('checkbox-input').check()
        cy.getByData('botao-enviar').click()       
})

Cypress.Commands.add('getSaldo1', () => {
  return cy.getByData('saldo')
    .invoke('text')
    .then((text) => {
      const saldoLimpo = text.replace('R$', '').replace(/[^\d,]/g, '').trim();
      const saldoAtual = parseFloat(saldoLimpo.replace(',', '.'));
      return cy.wrap(saldoAtual);  
    });

});

Cypress.Commands.add('getSaldo', () => {
  return cy.getByData('saldo')
    .invoke('text')
    .then((text) => {
      cy.log(`Texto raw: "${text}"`)  // Debug: "R$ 700"
      
      // Limpa TODOS espaços, R$, e converte vírgula
      const saldoLimpo = text
        .trim()                          // Remove espaços laterais
        .replace(/[^\d,.]/g, '')         // Mantém só números, vírgula, ponto
        .replace(',', '.')               // Vírgula → ponto
        .replace(/\./g, '')              // Remove pontos milhar (se houver)
      
      cy.log(`Limpo: "${saldoLimpo}"`)  // "700"
      
      const saldoNumber = parseFloat(saldoLimpo)
      cy.log(`Final: ${saldoNumber}`)   // 700
      
      expect(saldoNumber).to.be.gt(0)   // Assert interno!
      
      return cy.wrap(saldoNumber)
    })
})