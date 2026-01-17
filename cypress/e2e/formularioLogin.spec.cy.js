import { use } from 'react';
import { dadosNovoUsuario } from '../factories/dadosNovoUsuario'

describe('Formulário de Login', () => {
    const user = dadosNovoUsuario()
    beforeEach(() => {
        cy.visit('/')
        cy.get('h2').should('contain', 'Vantagens do nosso banco:')
    });
    it('Não deve permitir um email inválido', () => {
        
        cy.loginViaUi('aa@1mm', user.senha)

        cy.getByData('mensagem-erro')
            .should('be.visible')
            .and('contain', 'O email digitado é inválido')
    });

    it('Não deve permitir o campo email em branco', () => {
    
        cy.loginViaUiSemDigitarEmail(user.senha)

        cy.getByData('mensagem-erro')
            .should('be.visible')
            .and('contain', 'O campo email é obrigatório')
    });

    it('Não deve permitir o campo senha em branco', () => {
      
        cy.loginViaUiSemDigitarSenha(user.email)

        cy.getByData('mensagem-erro')
            .should('be.visible')
            .and('contain', 'O campo de senha é obrigatório')
    });

    it('Efetuando login com sucesso', () => {
        cy.submeterFormularioCadastro(user.nome, user.email, user.senha)
        cy.loginViaUi(user.email, user.senha)
       
        cy.getByData('app-home').should('contain', 'Bem vindo de volta')
        cy.get('h2.Extrato_titulo__WLA14').should('be.visible').and('have.text', 'Extrato')
    });
});