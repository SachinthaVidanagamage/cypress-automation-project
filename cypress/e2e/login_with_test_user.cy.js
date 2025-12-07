describe('Login with test user from fixture', () => {

  // Runs BEFORE each test
  beforeEach(() => {
    cy.visit('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp')
  })  
  
  it('shows login form and logs in with fixture user', () => {

    // Load user data from fixture
    cy.fixture('users').then((users) => {
      cy.get('input[type="email"]').type(users.validUser.email).screenshot('email-typed') // take screenshot after typing email
      cy.get('input[type="password"]').type(users.validUser.password).screenshot('password-typed') // take screenshot after typing password

      cy.get('input[type="submit"]').click()

      cy.screenshot()// take screenshot after login
      
    }) 

   
   
   })


   it('fails to login with invalid fixture user', () => {

    // Load user data from fixture
    cy.fixture('users').then((users) => {
      cy.get('input[type="email"]').type(users.invalidUser.username)
      cy.get('input[type="password"]').type(users.invalidUser.password)
      cy.get('input[type="submit"]').click()
    })  

    })
})