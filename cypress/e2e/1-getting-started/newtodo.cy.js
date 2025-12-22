// nav navbar-nav pull-right
describe('New Todo', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })  
    it('adds a new todo item ', () => {   
   
        cy.get('.nav.navbar-nav.pull-right li')
          .should('have.length',1) 

  })       
  }) 