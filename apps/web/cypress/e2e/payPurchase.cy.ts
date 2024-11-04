describe('Pay Purchase', () => {
  before(() => {
    cy.intercept('GET', '**/products/getAll').as('getProducts');
  });
  it('should add product to cart and navigate for payment page', () => {
    cy.visit('/')
    cy.get('app-item-product button').first().click();
    cy.get('app-cart-icon div').click();
    cy.url().should('include', '/cart');
    cy.get('app-cart-total a').first().click();
    cy.url().should('include', '/cart/payment');
  })
});
