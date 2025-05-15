describe('Sauce Demo E-commerce Test', () => {
  it('Log in and Validate product price using .then and expect', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');

    cy.get('.inventory_item_name').first().then(($name) => {
      const productName = $name.text();
      expect(productName).to.equal('Sauce Labs Backpack');
    });

    cy.get('.inventory_item_price').first().then(($price) => {
      const priceText = $price.text(); 
      const price = parseFloat(priceText.replace('$', ''));

      expect(price).to.be.a('number');
      expect(price).to.equal(29.99);
    });
  });
});
