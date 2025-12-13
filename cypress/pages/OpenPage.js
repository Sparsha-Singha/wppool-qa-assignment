class OpenPage {

  openPage() {
    cy.get('#menu-pages div.wp-menu-name').click();
    cy.contains('tr', 'FlexTable Automation Test').find('.row-actions .view a').click({ force: true });
    cy.wait(1000);
  }

  pageShop() {
    cy.visit('/index.php/shop/'); cy.wait(1000);
  }

  openCart() {
    cy.get('#modal-1-content a[href="http://localhost/wordpress/index.php/cart/"] span.wp-block-navigation-item__label').click();
  }

  pageMyAccount() {
    cy.get('#modal-1-content a[href="http://localhost/wordpress/index.php/my-account/"] span.wp-block-navigation-item__label').click();
  }
  
  checkout() {
    cy.get('#wp--skip-link--target div.wc-block-components-button__text').click();
  }
  
  pageOrders() {
    cy.get('#wp--skip-link--target li.woocommerce-MyAccount-navigation-link--orders a').click();
    cy.get('#wp--skip-link--target h1.has-text-align-center').should('have.text', 'Orders');
  }

  titleDescriptionCheck() {
    cy.get('#swptls-table-title').should('have.text', 'FlexTable Assignment-Test Data');
    cy.get('#swptls-table-description').should('have.text', 'Test data for automation testing');
  }
  
  tableClassAttributeCheck() {
    cy.get('#create_tables_info').should('have.class', 'dataTables_info');
    cy.get('#create_tables_info').should('have.attr', 'style', 'margin-left: 0px; margin-right: auto;');
    cy.get('#create_tables_paginate').should('have.class', 'dataTables_paginate');
    cy.get('#create_tables_paginate').should('have.attr', 'style', 'margin-left: auto; margin-right: 0px;');
  }
}

module.exports = new OpenPage();