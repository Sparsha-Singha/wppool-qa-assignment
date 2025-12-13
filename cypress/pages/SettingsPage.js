class SettingsPage {

  openSettings() {
    cy.get('#swptls-app-root svg[viewBox="0 0 16 15"]').click();
    cy.get('#swptls-app-root li:nth-child(3) span.icon').click();
  }

  enableTitleAndDescription() {
    cy.get('[name="show_title"]').check();
    cy.get('[name="show_description"]').check();
    cy.get('[name="description_position"]').select('below');
    cy.get('#swptls-app-root button.table-action__save').click();
  }
  
  enableEntryInfoPagination() {
    cy.get('[name="hide_entry_info"]').check();
    cy.get('[name="hide_pagination"]').check();
    cy.get('#swptls-app-root button.table-action__save').click();
  }
 
  selectTableRowHeight() {
    cy.get('#swptls-app-root button:nth-child(3)').click(); cy.wait(10000);
    cy.get('#rows-per-page').then($select => {
      const opts = [...$select[0].options].map(o => o.value);
      const random = opts[Math.floor(Math.random() * opts.length)];
      cy.wrap($select).select(random);
    });
    cy.get('#table_height').then($select => {
      const options = [...$select[0].options].map(o => o.value); 
      const randomValue = options[Math.floor(Math.random() * options.length)];

      cy.log("Selected height: " + randomValue);

      cy.wrap($select).select(randomValue);
    });
    cy.get('#swptls-app-root button.table-action__save').click();
  }

}

module.exports = new SettingsPage();
