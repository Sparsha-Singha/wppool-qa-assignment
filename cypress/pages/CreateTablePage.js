class CreateTablePage {

  importSheet(url) {
    cy.get('#sheet-url').type(`${url}{enter}`);
    cy.get('#swptls-app-root button.btn').click();  cy.wait(6000);
  }

  enterDetails(name, description) {
    cy.get('[name="table_name"]').clear().type(name);
    cy.get('[name="table_description"]').type(description);
  }

  saveTable() {
    cy.get('#swptls-app-root button.table-action__save').click();
  }

  verifyTable(name) {
    cy.get('#swptls-app-root a.table-edit h4.swptls-title')
      .should('have.text', name);
  }

}

module.exports = new CreateTablePage();
