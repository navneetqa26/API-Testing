describe('AutomationExercise - Product Count Test', () => {
  it('Check number of products on the All Products page', () => {
   
           cy.visit('https://automationexercise.com/');
      
  
      cy.title().then((title) => {
        expect(title).to.include('Automation Exercise');
     });

     cy.get('a[href="/products"]').click();
     cy.get('.features_items .product-image-wrapper').then($products => {
        const productlength = $products.length
      expect(productlength).to.be.greaterThan(0);
     });

     cy.get('.features_items .product-image-wrapper').then(($products) => {

      const productCount = $products.length;
      cy.log(`Number of products displayed: ${productCount}`);

      expect(productCount).to.be.greaterThan(0);
     });    
    });
   
    it.only ('Searches for Tshirt and asserts product names contain tshirt', () => {
    cy.visit('https://automationexercise.com/');

    cy.get('a[href="/products"]').click();

    cy.get('#search_product').type('Tshirt{enter}');

     cy.get('.features_items .productinfo p').each(($el) => {
      const productName = $el.text().toLowerCase();
      expect(productName, `Expected "${productName}" to include "tshirt"`).to.include('tshirt');
    });
  });
});


