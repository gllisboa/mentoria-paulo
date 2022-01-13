/// <reference types="cypress" />



describe('Primeiro Teste', () => {
    it('Select', () => {
        cy.visit('?id_category=5&controller=category')
          .get('#selectProductSort')
          .select('price:asc')
          .wait(3000)
          .select('Product Name: Z to A')
          .wait(3000)

    })

})