class DashboardPage {

  openDashboard() {
    cy.get('#toplevel_page_gswpts-dashboard div.wp-menu-name').click();
  }

  openCreateTable() {
    cy.get('#swptls-app-root button.btn').click();
  }

}

module.exports = new DashboardPage();
