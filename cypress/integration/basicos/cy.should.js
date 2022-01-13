/// <reference types="cypress" />



describe('Primeiro Teste', () => {
    it('Should have text', () => {
        cy.visit('?id_category=5&controller=category')
          .get('#selectProductSort')
          .select('price:asc')
          .should('have.text', "\n\t\t\t--\n\t\t\t\t\t\t\tPrice: Lowest first\n\t\t\t\tPrice: Highest first\n\t\t\t\t\t\tProduct Name: A to Z\n\t\t\tProduct Name: Z to A\n\t\t\t\t\t\t\tIn stock\n\t\t\t\t\t\tReference: Lowest first\n\t\t\tReference: Highest first\n\t\t")


    })

    it('Should have value', () => {
        cy.visit('?id_category=5&controller=category')
          .get('#selectProductSort')
          .select('Product Name: A to Z')
          .should('have.value','name:asc')

    })

})