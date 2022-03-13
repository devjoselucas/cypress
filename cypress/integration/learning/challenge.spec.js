/// <reference types="cypress" />

describe('Cypress basics', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });

    it('Load Name', () => {
        cy.get('#formNome')
          .type('José');

        cy.get('#formCadastrar').click();

        cy.on('window:alert', (msg) => {
            console.log(msg);
            expect(msg).to.be.equal('Sobrenome eh obrigatorio');
        });
    });

    it('Load Surname', () => {
        cy.get('[data-cy=dataSobrenome]')
          .type('Lucas');

        cy.get('#formCadastrar').click();

        cy.on('window:alert', (msg) => {
            console.log(msg);
            expect(msg).to.be.equal('Sexo eh obrigatorio');
        });
    });

    it('Check User Sex', () => {
        cy.get('#formSexoMasc').click();

        cy.get('#formCadastrar').click();
    });

    it('User Informations', () => {
        cy.get('#descNome > span').should('have.text', 'José');
        cy.get('#descSobrenome > span').should('have.text', 'Lucas');
        cy.get('#descSexo > span').should('have.text', 'Masculino');
    });
});