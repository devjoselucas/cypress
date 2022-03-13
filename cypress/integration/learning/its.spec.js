/// <reference types="cypress" />

describe('Learning Cypress', () => {
    it('Its', () => {
        const obj = {nome: 'User', idade: 20};
        cy.wrap(obj).its('nome').should('be.equal', 'User');
    });
});