/// <reference types="cypress" />

const LoginPage = require("../../pages/LoginPage");
const PluginPage = require("../../pages/PluginPage");
const DashboardPage = require("../../pages/DshbrdPage");
const CreateTablePage = require("../../pages/CreateTablePage");
const PageEditorPage = require("../../pages/PageEditorPage");
const SettingsPage = require("../../pages/SettingsPage");
const DeletePage = require("../../pages/DeletePage");
const OpenPage = require("../../pages/OpenPage");

describe("Flextable Automation", () => {

  const pluginSlug = "sheets-to-wp-table-live-sync";

  beforeEach(() => {
  LoginPage.login(
    Cypress.env("WP_USERNAME"),
    Cypress.env("WP_PASSWORD")
  );
});

  it("Verify FlexTable Plugin Activation Status", () => {
    PluginPage.openPluginMenu();
    PluginPage.installOrActivate(pluginSlug);
  });
  it("Navigate to FlexTable Dashboard", () => {
    DashboardPage.openDashboard();
  });

  it("Create a New Table Using Google Sheet Input", () => {
    DashboardPage.openDashboard();
    DashboardPage.openCreateTable();
    CreateTablePage.importSheet(Cypress.env("SHEET_URL"));
    CreateTablePage.enterDetails("FlexTable Assignment-Test Data", "Test data for automation testing");
    CreateTablePage.saveTable();
    DashboardPage.openDashboard();
    CreateTablePage.verifyTable("FlexTable Assignment-Test Data");
  });

  it("Verify Table Display Using Shortcode", () => {
    DashboardPage.openDashboard();
    PageEditorPage.shortcodeCopy();
    PageEditorPage.openPagesMenu();
    PageEditorPage.openEditPage();
    PageEditorPage.shortcodePaste();
  });

  it("Enable 'Show Table Title' and 'Show Table Description Below Table", () => {
    DashboardPage.openDashboard();
    SettingsPage.openSettings();
    SettingsPage.enableTitleAndDescription();
    OpenPage.openPage();
    OpenPage.titleDescriptionCheck();
  });
  
  it("Enable Entry Info & Pagination", () => {
    DashboardPage.openDashboard();
    SettingsPage.openSettings();
    SettingsPage.enableEntryInfoPagination();
    OpenPage.openPage();
    OpenPage.tableClassAttributeCheck();
  });
  
  it("Update 'Rows Per Page & Table Height'", () => {
    DashboardPage.openDashboard();
    SettingsPage.openSettings();
    SettingsPage.selectTableRowHeight();
    OpenPage.openPage();
  });

  it("Delete the Table and Verify Frontend Removal", () => {
    DashboardPage.openDashboard();
    DeletePage.deleteTable();
  });

  afterEach(() => {
    cy.wait(4000);
  });

});
