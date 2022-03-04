/// <reference types="cypress" />

describe('Working with elements', () => {
    it('Text', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');
    });

    it('links', () => {
        cy.get('[href="#"]').click();
    });

});