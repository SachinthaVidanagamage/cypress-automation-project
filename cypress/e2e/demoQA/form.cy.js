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
    //select gender
    cy.get  ('input[value="Male"]').check({force:true})
    //type mobile number        
    cy.get('#userNumber').type('0702964365')
   // Open date picker
cy.get('#dateOfBirthInput').click()

// Select year
cy.get('.react-datepicker__year-select').select('1998')

// Select month
cy.get('.react-datepicker__month-select').select('August')

// Select day 9 (safe way)
cy.get('.react-datepicker__day--009')
  .not('.react-datepicker__day--outside-month')
  .click()
//type subject   
cy.get('#subjectsInput').type('Computer Science{enter}')
//select hobbies
cy.get('input[type="checkbox"][value="1"]').check({force:true}) 
cy.get('input[type="checkbox"][value="2"]').check({force:true})     
    

  })    
})   