describe('Teste', () => {
    
    before(() => {
        cy.visit('https://www.dev.redeopme.com.br/');
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });
      
    afterEach(() => {
        cy.saveLocalStorage();
    });


    it('Login', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });
        cy.get('#form-login > :nth-child(1) > .form-control').type('analistapostal');
        cy.get(':nth-child(2) > .form-control').type('Dev123!@#');
        cy.wait(3000);
        cy.get('.g-recaptcha', {timeout: 15000}).click();
    });

    it('Menu - Buymed', () => {
        //cy.pause();
        //cy.reload();
        //cy.wait(15000);
        
        cy.get('#esconde_esconde').click('bottom');
        cy.get(':nth-child(9) > a').click();
    });

    it('Cotação', () => {
        
    });

});