/// <reference types="cypress" />

describe('Cypress basics', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });

    it('Xpath Test',() => {
        cy.xpath('//input');
    });

});