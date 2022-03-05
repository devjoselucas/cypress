/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title',() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.fixture('data').as('usuario').then(function() {
            cy.get('#formNome').type(this.usuario.nome);
            cy.get('[data-cy=dataSobrenome]').type(this.usuario.sobrenome);
            cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click();
        });
    });
});