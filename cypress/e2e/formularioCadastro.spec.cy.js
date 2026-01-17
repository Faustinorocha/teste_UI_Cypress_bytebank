
import { dadosNovoUsuario } from '../factories/dadosNovoUsuario'

describe('Formulário Cadastro', () => {
    const user = dadosNovoUsuario()
    beforeEach(() => {
        cy.visit('/')
        cy.viewport(390, 844)
        
    });
    it('Usuário deve conseguir se cadastra e efetuar login com sucesso', () => {
           
        cy.submeterFormularioCadastro(user.nome, user.email, user.senha)

        cy.getByData('mensagem-sucesso')
            .should('be.visible')
            .and('contain', 'Usuário cadastrado com sucesso')

        cy.loginViaUi(user.email, user.senha)

        cy.getByData('app-home')
            .should('contain', 'Extrato')
            .and('contain', 'Bem vindo de volta')

            
    });

  
});