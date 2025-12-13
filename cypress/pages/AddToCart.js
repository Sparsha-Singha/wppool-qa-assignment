class AddToCart {

  addToCart() {
    cy.get('#wp--skip-link--target button[data-product_id="69"] span').click(); cy.wait(2000);
    cy.get('#wp--skip-link--target button[data-product_id="107"] span').click(); cy.wait(3000);
  }

}

module.exports = new AddToCart();
