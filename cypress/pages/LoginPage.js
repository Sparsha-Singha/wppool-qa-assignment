class LoginPage {

  login(username, password) {
    // If username or password are not passed, fallback to Cypress.env
    const user = username || Cypress.env("WP_USERNAME");
    const pass = password || Cypress.env("WP_PASSWORD");

    if (!user || !pass) {
      throw new Error(
        "WP_USERNAME or WP_PASSWORD is missing. Check your .env file and restart Cypress."
      );
    }

    cy.visit('/wp-login.php');
    cy.wait(1000);
    cy.get('#user_login').type(user);
    cy.get('#user_pass').type(pass, { log: false });
    cy.get('#wp-submit').click();
    cy.url().should('contain', 'wp-admin');
  }

  // Optional: WooCommerce login (if needed)
  loginAccount() {
    const gmail = Cypress.env("WP_USERNAME");
    const pass = Cypress.env("WP_PASSWORD");

    cy.get('[name="username"]').type(gmail);
    cy.get('[name="password"]').type(pass, { log: false });
    cy.get('#wp--skip-link--target [name="login"]').click();
  }

}

module.exports = new LoginPage();
