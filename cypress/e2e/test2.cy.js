describe('W3Schools JavaScript section links', () => {

  beforeEach(() => {
    // Visit W3Schools homepage
    cy.visit('https://www.w3schools.com/');
  });

//   it('should have AngularJS tutorial link with correct URL and title', () => {
//     cy.get('a[title="AngularJS Tutorial"]')
//       .should('be.visible')
//       .and('have.attr', 'href', '/angularjs/default.asp')
//       .and('contain.text', 'AngularJS');
//   }); 


it('should display search suggestions when typing', () => {
    // Step 1: Type something into the search bar
    cy.get('#search2')
      .should('be.visible')
      .type('HTML', { delay: 100 }); // simulates real typing

    // Step 2: Check if the suggestion box or dropdown appears
    cy.get('#listofsearchresults', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'HTML');
  });
  });