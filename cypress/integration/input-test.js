describe('Check different things on the input field', () => {
  it('Has a form which take input and gives the same value back', () => {
    let message = 'Hello world!';
    cy.visit('/');
    cy.get('main > input').type(message);
    cy.get('main > input').should('have.value', message)
  });
});
