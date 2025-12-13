class DeletePage {

  deleteTable() {
    cy.get('#swptls-app-root button.table-delete svg').click();
    cy.get('#swptls-app-portal button.confirm-button').click();
  }

}

module.exports = new DeletePage();
