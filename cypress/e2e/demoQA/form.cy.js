Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Testing DemoQA Forms', () => {

  // Runs BEFORE each test
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  }) 
  it('fills out and submits the form', () => {
    //type first name and last name
    // cy.get('input[id="firstName"]').type('Sachintha')
    // cy.get('input[id="lastName"]').type('Vidanagamage')

     cy.get('#firstName').type('Sachintha')
    cy.get('#lastName').type('Vidanagamage')
    //type email
    cy.get('#userEmail').type('sachinthavida@gmail.com')

    

  })    
})   