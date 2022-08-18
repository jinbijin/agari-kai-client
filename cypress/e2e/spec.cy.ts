// If this breaks, it's time for the first major version...
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('agari-kai is still being developed here...');
  });
});
