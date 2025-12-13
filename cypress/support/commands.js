// custom commands used across tests
Cypress.Commands.add('wpLogin', () => {
  cy.visit('/wp-login.php');
  cy.get('#user_login').clear().type(Cypress.env('wp_user'));
  cy.get('#user_pass').clear().type(Cypress.env('wp_pass'), { log: false });
  cy.get('#wp-submit').click();
  cy.url().should('include', '/wp-admin');
});

Cypress.Commands.add('openFlexTableDashboard', () => {
  cy.visit('/wp-admin/admin.php?page=flextable');
  cy.contains('FlexTable').should('exist');
});

Cypress.Commands.add('createPageWithShortcode', (title, shortcode) => {
  cy.visit('/wp-admin/post-new.php?post_type=page');
  // Block editor: use the title field and add shortcode block
  cy.get('[aria-label="Add title"]').type(title);
  cy.get('button[aria-label="Add block"]').click();
  cy.contains('Shortcode').click();
  cy.get('textarea.wp-block-shortcode').type(shortcode);
  cy.contains('Publish').click();
  cy.contains('Publish').click();
  // view page
  cy.contains('View Page').click();
});

Cypress.Commands.add('visitFrontendPageByPath', (path) => {
  cy.visit(path);
});
