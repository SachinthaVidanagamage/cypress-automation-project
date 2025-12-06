//describe what you want to test
describe('My frist test', () => {


  it('visit  to google ', () => {
    cy.visit('https://www.google.com')
    cy.contains('Google')
  })
})

