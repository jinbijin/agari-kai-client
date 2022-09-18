describe('Tournaments landing', () => {
  it('navigates via sidebar to landing', () => {
    cy.visit('/');
    cy.get('[data-test-id="navigation-link-tournaments"]').click();
    cy.url().should((url) => {
      const expectedUrl = `${Cypress.config().baseUrl}/tournaments`;
      expect(url).to.equal(expectedUrl.replace(/(?<!:)\/\//g, '/'));
    });
  });
});
