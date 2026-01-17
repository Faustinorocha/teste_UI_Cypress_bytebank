import { dadosNovoUsuario } from '../factories/dadosNovoUsuario'

describe('Dispositivo MacBook', () => {
    const user = dadosNovoUsuario()
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('/')
        cy.submeterFormularioCadastro(user.nome, user.email, user.senha)
       
        
    });
    it('Efetua login e vai até investiementos', () => {
        
        cy.loginViaUi(user.email, user.senha)
        
        cy.getByData('menu-burguer').should('not.be.visible')
        cy.getByData('app-home').find('a').eq(3).click()
        cy.getByData('app-home').should('contain', 'Investimentos')
        cy.getByData('app-home').should('contain', 'Renda Fixa')
        cy.location('pathname').should('eq', '/home/investimentos')
    
    });
    
});