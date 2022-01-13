/// <reference types="cypress" />
//https://docs.cypress.io/api/commands/contains#Syntax
//https://docs.cypress.io/api/commands/find#Syntax
//https://docs.cypress.io/api/commands/get#Syntax


describe('Primeiro Teste', () => {
    // é aconselhado utilizar um comando GET antes para que ele não pesquise no DOM inteiro
    it('Contains', () => {
        cy.visit('?id_category=5&controller=category')
          .get('#ul_layered_id_attribute_group_3')
          .contains('Orange')
          .click()

    })

    // Navegar pelas listagens
    it.only('Acessar o Catalogo de Camisetas Marketplace', () => {
        // Pega o primeiro item da captura anterior e depois navega entre eles
        cy.visit('?id_category=5&controller=category')
          .get('#ul_layered_id_attribute_group_3 > li')
          .first()
          .next()
          .prev()

        // Pega o último item da captura anterior e depois navega entre eles
          .get('#ul_layered_id_attribute_group_1')
          .find('li')
          .last()
          .prev()
          .next()

        // No proprio find ja utiliza a funcao first  
          .get('#ul_layered_id_attribute_group_3')
          .find('li:first')

    })
})