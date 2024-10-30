describe('Add product to cart', () => {
  before(() => {
    cy.intercept('GET', '**/products/getAll').as('getProducts');
  });

  it('should verify products list are visible', () => {
    cy.visit('/');
    cy.get('app-list-product').should('be.visible');
  });
  it('should verify the number of cart items and add product', () => {
    cy.visit('/');
    // verify the number of cart items
    cy.get('app-cart-icon div')
      .invoke('text')
      .then((initialAmount) => {
        // add on product to cart
        cy.get('app-item-product button').first().click();
        // verify the number of cart items increased
        cy.get('app-cart-icon div')
          .invoke('text')
          .should((updatedAmount) => {
            expect(parseInt(updatedAmount)).to.be.greaterThan(
              parseInt(initialAmount),
            );
          });
      });
    // click to icon
    cy.get('app-cart-icon div').click();
    // verify the cart page is displayed
    cy.url().should('include', '/cart');
    // verify the product is in the cart
    cy.get('app-item-cart').should('contain', 'Notebook Gamer Acer Nitro 5');
  });
});
