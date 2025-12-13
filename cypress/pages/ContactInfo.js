    
class ContactInfo {
    

    contactGmail() {
    cy.get('#contact label').click();
    cy.get('#email').type(WP_EMAIL);
  }

  shippingAddress() {
    cy.get('#shipping-country')
      .should('be.visible')
      .invoke('val', WP_COUNTRY)
      .trigger('change');
    cy.get('#shipping-state option')
      .should('have.length.greaterThan', 1);
    cy.get('#shipping-state')
      .should('be.visible')
      .select(WP_DISTRICT);
    cy.get('#shipping-first_name').type(WP_FIRST_NAME);
    cy.get('#shipping-last_name').type(WP_LAST_NAME);
    cy.get('#shipping-address_1').type(WP_ADDRESS);
    cy.get('#shipping-city').type(WP_CITY);
    cy.get('#shipping-postcode')
    .type(WP_POSTCODE, { force: true });
    cy.get('#shipping-phone')
    .type(WP_PHONE, { force: true });
  }

  billingAddress() {
    cy.get('#checkbox-control-0').uncheck();
    cy.get('#checkbox-control-0').check();
  }

  placeOrder() {
    cy.get('#radio-control-wc-payment-method-options-cod', { timeout: 20000 })
    .should('exist')
    .should('be.enabled')
    .check({ force: true });
    cy.get('#radio-control-wc-payment-method-options-cod').check();
    cy.get('#wp--skip-link--target div.wc-block-components-checkout-place-order-button__text').click();
  }

  
  



}

module.exports = new ContactInfo();
