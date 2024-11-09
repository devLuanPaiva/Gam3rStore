describe('View product specification', () => {
    before(() => {
        cy.intercept('GET', '**/products/getAll').as('getProducts');
      });
    
      it('should list products and navigate to the product page', () => {
        cy.visit('/');
        cy.get('app-list-product').should('be.visible');

        cy.get('app-item-product a').first().click()
        cy.intercept('GET', '**/products/getById/1*').as('getProductById');
        cy.get('app-product').should('be.visible');
        cy.get('app-product-title').should('be.visible');
      });
})