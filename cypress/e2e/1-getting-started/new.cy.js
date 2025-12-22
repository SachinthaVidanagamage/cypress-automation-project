describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })
it('can check off an item as completed', () => {
  

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
})
})
