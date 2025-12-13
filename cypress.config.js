const { defineConfig } = require("cypress");
const clipboard = require('clipboardy');
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.WP_BASE_URL || "http://localhost/wordpress",
    supportFile: "cypress/support/e2e.js",

    env: {
      WP_USERNAME: process.env.WP_USERNAME,
      WP_PASSWORD: process.env.WP_PASSWORD,
      SHEET_URL: process.env.SHEET_URL,

      WP_PHONE: process.env.WP_PHONE || "",
      WP_EMAIL: process.env.WP_EMAIL || "",
      WP_DISTRICT: process.env.WP_DISTRICT || "",
      WP_COUNTRY: process.env.WP_COUNTRY || "",
      WP_CITY: process.env.WP_CITY || "",
      WP_FIRST_NAME: process.env.WP_FIRST_NAME || "",
      WP_LAST_NAME: process.env.WP_LAST_NAME || "",
      WP_ADDRESS: process.env.WP_ADDRESS || "",
      WP_POSTCODE: process.env.WP_POSTCODE || "",
    },

    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      on('task', {
        readClipboard() {
          return clipboard.readSync(); // works in v2
        },
        writeClipboard(text) {
          return clipboard.writeSync(text);
        }
      });

      return config;
    }
  },
});
