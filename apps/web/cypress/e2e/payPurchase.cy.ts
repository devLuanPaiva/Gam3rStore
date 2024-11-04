describe('Pay Purchase', () => {
  before(() => {
    cy.intercept('GET', '**/products/getAll').as('getProducts');
    cy.intercept('POST', '**/orders/create').as('createOrder');
  });
  it('should pay purchase', () => {
    cy.visit('/');
    //should add product to cart:
    cy.get('app-item-product button').first().click();
    cy.get('app-cart-icon div').click();
    cy.url().should('include', '/cart');
    // navigate for payment page:
    cy.get('app-cart-total a').first().click();
    cy.url().should('include', '/cart/payment');

    //should fill the form delivery:
    cy.get('app-form-delivery input[name="name"]').type('João da Silva');
    cy.get('app-form-delivery input[name="email"]').type(
      'joao.silva@example.com',
    );
    cy.get('app-form-delivery input[name="cpf"]').type('12345678901');
    cy.get('app-form-delivery input[name="street"]').type('Rua das Flores');
    cy.get('app-form-delivery input[name="complement"]').type('Apt 101');
    cy.get('app-form-delivery input[name="city"]').type('São Paulo');
    cy.get('app-form-delivery input[name="state"]').type('SP');

    //should select method pay:
    cy.get('app-method-payment').within(() => {
      cy.get('button').contains('PIX').click();
    });
  });
});
