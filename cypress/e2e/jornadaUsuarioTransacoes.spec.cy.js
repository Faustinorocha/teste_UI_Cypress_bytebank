import { dadosNovoUsuario } from '../factories/dadosNovoUsuario'
const user = dadosNovoUsuario()
describe('Jornada Usuário Transação', () => {
    before(() => {
        cy.visit('/')
        cy.submeterFormularioCadastro(user.nome, user.email, user.senha)
    });

    it.only('Deve acessar aplicação, e efetuar transação de depósito', () => {

        cy.loginViaUi(user.email, user.senha)
        cy.wait(2000)
        cy.getSaldo1()
            .as('saldoInicial')
            .should('be.gt', 0)
        cy.getByData('select-opcoes').select('Depósito')
        cy.getByData('form-input').type(deposito)
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes')
            .should('have.length.greaterThan', 0)
            .last()
            .should('contain', deposito)
        cy.wait(2000)
        cy.getSaldo1()
            .then((saldoFinal) => {
                cy.get('@saldoInicial').then((saldoInicial) => {
                    expect(saldoFinal).to.equal(saldoInicial + deposito)
                })
            })
    })
});

