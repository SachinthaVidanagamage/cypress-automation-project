describe('W3Schools JavaScript section links', () => {

  beforeEach(() => {
    // Visit W3Schools homepage
    cy.visit('https://www.w3schools.com/');
  });

  it('should have AngularJS tutorial link with correct URL and title', () => {
    cy.get('a[title="AngularJS Tutorial"]')
      .should('be.visible')
      .and('have.attr', 'href', '/angularjs/default.asp')
      .and('contain.text', 'AngularJS');
  });

  it('should have JSON tutorial link with correct URL and title', () => {
    cy.get('a[title="JSON Tutorial"]')
      .should('be.visible')
      .and('have.attr', 'href', '/js/js_json_intro.asp')
      .and('contain.text', 'JSON');
  });

  it('should have AJAX tutorial link with correct URL and title', () => {
    cy.get('a[title="AJAX Tutorial"]')
      .should('be.visible')
      .and('have.attr', 'href', '/js/js_ajax_intro.asp')
      .and('contain.text', 'AJAX');
  });

  it('should have Web Building section visible', () => {
    cy.contains('h3', 'Web Building').should('be.visible');
  });
});
