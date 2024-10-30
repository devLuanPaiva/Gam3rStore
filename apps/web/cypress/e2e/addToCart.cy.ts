describe('Add product to cart', () => {
  before(() => {
    cy.intercept('GET', '**/products/getAll').as('getProducts');
  });

  it('should verify quantity of cart items and add product', () => {
    cy.visit('/');
    cy.get('app-list-product').should('be.visible');
  });
});
