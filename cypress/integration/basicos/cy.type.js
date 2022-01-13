/// <reference types="cypress" />
// https://docs.cypress.io/api/commands/type#Syntax
describe('Type', () => {
    // é aconselhado utilizar um comando GET antes para que ele não pesquise no DOM inteiro
    it('Type', () => {
      let vestido = "dress"
      let cor = "blue"

        cy.visit('')
          .get('#search_query_top')
          .type(`${vestido} ${cor} teste`)
          .clear()

          .type(vestido).type(' ').type(cor)
          .type("{enter}")
    })
})