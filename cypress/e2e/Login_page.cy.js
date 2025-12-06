describe('Testing Login Page', () => {

  // Runs BEFORE each test
  beforeEach(() => {
    cy.visit('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp')
  })

  // Test 1
  it('should show login form', () => {  

    // Type email
    cy.get('input[type="email"]').type('sachinthavida@gmail.com')

    // Type password
    cy.get('input[type="password"]').type('Sachintha@123')

    // Click login button
    cy.get('input[type="submit"]').click()

// search for a product after login
    cy.get('input[id="search-input"]').type('Laptop').type('{enter}')

    // Clear the search input
    cy.get('input[id="search-input"]').clear()  

    // //dropdown selection
    // cy.get('div[class="line"]').eq(1).click()
    // // cy.get('div.line').eq(1).click()   same as above line

    // // Click on the  product chocolate image 
    // cy.get('img[alt="Chocolates"]').click()


  // same as above dropdown selection
    // Click dropdown
cy.get('div[class="line"]').eq(1).click()

// Select "Chocolates"
cy.contains('Chocolates').click()


  })

})
