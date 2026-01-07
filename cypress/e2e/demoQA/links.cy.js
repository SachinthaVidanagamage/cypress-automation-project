Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('testing demoQA  links', () => {
    // Runs BEFORE each test
    beforeEach(() => {
      cy.visit('https://demoqa.com/links')
    })      

    it('test simple link', () => {
    cy.get('#simpleLink')
      .invoke('removeAttr', 'target')
      .click()

    cy.url().should('eq', 'https://demoqa.com/')
  })

  it('test dynamic link', () => {    
    cy.get('#dynamicLink')
      .invoke('removeAttr', 'target')
      .click()

    cy.url().should('eq', 'https://demoqa.com/')
  })



})

   