import { dadosNovoUsuario } from '../factories/dadosNovoUsuario'

describe('Jornada Usuário cadastro', () => {

    const user = dadosNovoUsuario();

    it('Deve permitir que usuária acesse a aplicação, realize cadastro e efetue login', () => {

        cy.visit('/');
        cy.submeterFormularioCadastro(user.nome, user.email, user.senha);
        cy.getByData('mensagem-sucesso')
            .should('be.visible')
            .and('contain', 'Usuário cadastrado com sucesso')
        cy.loginViaUi(user.email, user.senha)
    });
});