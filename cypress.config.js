const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;

      // implement node event listeners here
    },
    video: true,
    screenshotOnRunFailure: true,
     env: {
    allure: true,
  },
  },
});
