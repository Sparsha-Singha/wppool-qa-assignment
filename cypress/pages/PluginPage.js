class PluginPage {

  openPluginMenu() {
    cy.get("#menu-plugins div.wp-menu-name").click();
    cy.url().should("include", "/plugins.php");
  }

  installOrActivate(pluginSlug) {
    const pluginRow = `tr[data-slug="${pluginSlug}"]`;
    const activateBtn = `#activate-${pluginSlug}`;

    cy.get("body").then(($body) => {
      if ($body.find(pluginRow).length > 0) {
        cy.log("Flextable found in Installed Plugins.");
        cy.get(pluginRow).then(($row) => {
          if ($row.hasClass("inactive")) {
            cy.log("Flextable is INACTIVE → Activating...");
            cy.wrap($row).find(activateBtn).click();
            cy.get('#menu-plugins div.wp-menu-name').click();
            cy.get(pluginRow).should("have.class", "active");
            cy.log("Flextable ACTIVATED successfully.");
          } else {
            cy.log("Flextable is already ACTIVE.");
          }
        });
      } else {
        cy.log("Flextable NOT FOUND → Installing...");
        cy.get('#wpbody-content a.page-title-action').click();
        cy.get('[name="s"]').type("Flextable{enter}"); cy.wait(6000);
        cy.get(`#the-list a[data-slug="${pluginSlug}"]`).first().click();
        cy.log("⬇Installing Flextable...");
        cy.get("a.install-now").first().click(); cy.wait(10000);
        cy.get("a.activate-now",{ timeout: 15000 }).first().should("be.visible").click();
        cy.log("Flextable INSTALLED & ACTIVATED successfully.");
      }
    });
  }
}

module.exports = new PluginPage();
