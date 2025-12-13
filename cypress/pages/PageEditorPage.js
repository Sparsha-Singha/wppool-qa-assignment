class PageEditorPage {

  openPagesMenu() {
    cy.get('#menu-pages div.wp-menu-name').click();
  }
  shortcodeCopy() {
    cy.get('button.copy-shortcode').click({ force: true });
    cy.get('.copy-shortcode').click({ force: true }); cy.wait(5000);
    cy.task('readClipboard').then((shortcode) => {
      cy.writeFile('cypress/fixtures/shortcode.json', { code: shortcode });
    });
  }
  
  shortcodePaste() {
    cy.readFile('cypress/fixtures/shortcode.json').then((data) => {
    cy.get('#blocks-shortcode-input-0').clear().type(data.code);
    });
    cy.get('#editor button.editor-post-publish-button').click();
    cy.get('#editor a.edit-post-fullscreen-mode-close').click();
    cy.contains('tr', 'FlexTable Automation Test').find('.row-actions .view a').click({ force: true });
  }

  openEditPage(pageName) {
    cy.contains('tr', 'FlexTable Automation Test')
      .find('.row-actions .edit a')
      .click({ force: true });
  }

  pasteShortcode(code) {
    cy.get('#blocks-shortcode-input-0').clear().type(code);
  }

  publishPage() {
    cy.get('#editor button.editor-post-publish-button').click();
    cy.get('#editor a.edit-post-fullscreen-mode-close').click();
  }

  // viewPage(pageName) {
  //   cy.contains('tr', pageName)
  //     .find('.row-actions .view a')
  //     .click({ force: true });
  // }

}

module.exports = new PageEditorPage();
