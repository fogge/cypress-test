describe('Main page UI-testing', () => {
  it('Has header tag with an image and an h2 in it', () => {
    cy.visit('/');
    cy.get('header');
    cy.get('header > img');
    cy.get('header > h2');
  });

  it('Has main-tag with an input and an h1-tag', () => {
    cy.visit('/');
    cy.get('main');
    cy.get('main > h1');
    cy.get('main > input');
  });

  it('Has footer-tag with two p-tags', () => {
    cy.visit('/');
    cy.get('footer');
    cy.get('footer').children().should('have.length', 2)
  });
});
