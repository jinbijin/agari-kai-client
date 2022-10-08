describe('Tournaments landing', () => {
  it('navigates via sidebar to landing', () => {
    cy.visit('/');
    cy.get('[data-test-id="navigation-link-tournaments"]').click();
    cy.url().should((url) => {
      const expectedUrl = `${Cypress.config().baseUrl}tournaments`;
      expect(url).to.equal(expectedUrl);
    });
  });

  it('adds a tournament, then modifies its name', () => {
    cy.visit('/tournaments');
    cy.get('[data-test-id="create-tournament"]').click();
    cy.get('[data-test-id="input-tournament-name"]').type('Tournament 1');
    cy.get('[data-test-id="navigate-back"]').click();
    cy.get('[data-test-id="tournament-name"]').should('have.length', 1).should('contain.text', 'Tournament 1');

    cy.get('[data-test-id="tournament-name"]').click();
    cy.get('[data-test-id="input-tournament-name"]').type('A');
    cy.get('[data-test-id="navigate-back"]').click();
    cy.get('[data-test-id="tournament-name"]').should('have.length', 1).should('contain.text', 'Tournament 1A');
  });
});
