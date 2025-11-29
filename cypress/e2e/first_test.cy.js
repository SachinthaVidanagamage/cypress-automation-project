// //describe what you want to test
// describe('My frist test', () => {


//   it('visit  to google ', () => {
//     cy.visit('https://www.google.com')
//     cy.contains('Google')
//   })
// })


//---------------------------------------------

describe('Testing Login Page',()=> {
// This runs BEFORE each test
beforeEach(()=> {
cy.visit('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp')
// cy.visit('https://www.kapruka.com/shops/customerAccounts/accountNew.jsp?origination=regular')
})

//test 1
it('create account', ()=> {
cy.contains('Create Account').click()
cy.get('input[name="firstName"]').type('Sachintha ')
cy.get('input[name="lastName"]').type('Vidanagamage')
cy.get('input[name="email"]').type('sachinthavida@gmail.com')
cy.get('input[name="password"]').type('Sachintha@123')
cy.get('input[name="passwordReConfirm"]',{timeout:20000}).type('Sachintha@123')
// cy.get('button[fdprocessedid="v928dd"]').click()
cy.get('.btn.btn-primary.acc_btn_class',{timeout:10000}).click()
 

})


// // Test 2
// it('should show login form', ()=> {
// cy.get('#exampleInputEmail1').should('be.visible')
// cy.get('#exampleInputPassword1').should('be.visible')
// })

// // Test 2
// it('should login successfully', ()=> {
// cy.get('#exampleInputEmail1').type('user@example.com')
// cy.get('#exampleInputPassword1').type('password123')
// cy.get('input[type="submit"]').click()
// // cy.url().should('include', '/dashboard')

})
// })
