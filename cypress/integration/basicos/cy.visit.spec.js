/// <reference types="cypress" />

describe('Primeiro Teste', () => {

    it('Acessar o site', () => {
        cy.visit('http://google.com')

        cy.get('.gLFyf', {timeOut: 5000} ).type('cypress{enter}')

        cy.get('[href="https://www.cypress.io/"] > .LC20lb').click()
    })


})