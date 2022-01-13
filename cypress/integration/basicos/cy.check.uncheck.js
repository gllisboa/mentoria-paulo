/// <reference types="cypress" />



describe('Primeiro Teste', () => {
    it('Check', () => {
        cy.visit('?id_category=5&controller=category')
          .get('#ul_layered_id_attribute_group_1')
          .find('[type=checkbox]')
          .check()
          .first()
          .uncheck()
    })

})