describe('testing demoQA  links', () => {
    // Runs BEFORE each test
    beforeEach(() => {
      cy.visit('https://demoqa.com/links')
    })      

    it('test home link', () => {
      cy.get('#simpleLink').click()
      cy.url().should('eq','https://demoqa.com/')
      cy.go('back')
    })
     })