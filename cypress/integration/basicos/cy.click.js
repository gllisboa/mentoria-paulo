/// <reference types="cypress" />

//https://docs.cypress.io/api/commands/click#Syntax
//https://docs.cypress.io/api/commands/dblclick#Syntax
//https://docs.cypress.io/api/commands/rightclick#Syntax

describe('Click', () => {
    
    it('Contains', () => {
      // Clica em botao que esteja escondido
        cy.visit('?id_category=5&controller=category')
          .get('#ul_layered_id_attribute_group_3')
          .contains('Orange')
          .click('left',{force:true})

          //Clica segurando o ctrl
          .get('#ul_layered_id_attribute_group_3')
          .contains('Blue')
          .click({ctrlKey:true})

          //Click duplo
          .get('#ul_layered_id_attribute_group_3')
          .contains('Blue')
          .dblclick()

          //Click com o direito
          .get('#ul_layered_id_attribute_group_3')
          .contains('Blue')
          .rightclick()

    })

})