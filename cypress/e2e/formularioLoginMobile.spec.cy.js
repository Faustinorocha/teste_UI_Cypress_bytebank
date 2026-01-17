import { dadosNovoUsuario } from '../factories/dadosNovoUsuario'

describe('Dispositivo movel iphone XR', () => {
    const user = dadosNovoUsuario()
    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('/')
        cy.submeterFormularioCadastro(user.nome, user.email, user.senha)

        
    });
    it('Efetua login e vai até investiementos', () => {

        cy.loginViaUi(user.email, user.senha)
        
        cy.getByData('menu-burguer').should('be.visible').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()
        cy.getByData('app-home').should('contain', 'Investimentos')
        cy.getByData('app-home').should('contain', 'Renda Fixa')
    });
    
});