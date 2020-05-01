describe('Check that data is fetched correctly', () => {
  it('Has a button, when clicking on it gives back posts', () => {
    cy.visit('/');
    cy.get('button').click();
    cy.contains('Title');
    cy.contains('Author');
  });
});
