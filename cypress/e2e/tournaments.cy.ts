describe('Tournaments landing', () => {
  it('navigates via sidebar to landing', () => {
    cy.visit('/');
    cy.get('[data-test-id="navigation-link-tournaments"]').click();
    cy.url().should('equal', `${Cypress.config().baseUrl}tournaments`);
  });
});
