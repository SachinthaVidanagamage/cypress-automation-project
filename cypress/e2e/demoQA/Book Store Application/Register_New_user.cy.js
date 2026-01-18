Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})


describe('Register New User', () => {
    // Runs BEFORE each test
    beforeEach(() => {
      cy.visit('https://demoqa.com/login')
    })
     
    it('Register a new user', () => {
      //click on new user button
      cy.wait(6000)
      cy.get('#newUser').click()   
        //type first name 
        cy.get('#firstname').type('Sachintha')
        //type last name        
        cy.get('#lastname').type('Vidanagamage')
        //type user name
        cy.get('#userName').type('SachinthaVidanagamage98')
        // type password
cy.get('#password').type('Sachintha@12345')

// wait for UI stability (optional)
cy.wait(8000)

// click on register button
cy.get('#register').click()

// verify captcha warning message
// cy.contains('Please verify reCaptcha to register!')
//   .should('be.visible')
    })
})