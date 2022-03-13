/// <reference types="cypress" />

describe('Cliente', () => {

    before(() => {
        cy.visit('https://hml.deskwork.com.br/client/auth');
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Login', () => {
        cy.fixture('userInfo').as('usuario').then(function () {
            cy.get('[type=text]').type(this.usuario.login.username);
            cy.get('[type=password]').type(this.usuario.login.password);
            cy.get('[type=submit]').click();
        });
    });

    it('Dashboard - Abertos - Nova Solicitação', () => {
        cy.get('.ghKkXT').click();
        cy.get('.sc-iwjdpV').click();
        cy.get('.sc-jeraig > :nth-child(1) > :nth-child(1) > select').select('Financeiro');
        cy.get('.sc-jeraig > :nth-child(1) > :nth-child(2) > select').select('Urgente');
        cy.get('.sc-jeraig > :nth-child(1) > :nth-child(3) > input').type('Teste Automatizado');
        cy.get(':nth-child(2) > :nth-child(1) > select').select('Contas a Receber');
        cy.get(':nth-child(2) > :nth-child(2) > select').select('Financiamento');
        cy.get(':nth-child(3) > select').select('Serviços Gerais');
        cy.get('.ql-editor').type('Teste Automatizado');
        cy.get('[type=submit]').click();
        cy.get('[style="margin-top: 1.7rem;"] > button').click();
        cy.get('[style="margin-top: 1.7rem;"] > button').click();
    });

});