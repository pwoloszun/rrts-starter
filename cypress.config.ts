import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // "$schema": "https://on.cypress.io/cypress.schema.json",
    chromeWebSecurity: false,
    baseUrl: "http://localhost:3000",
    video: false,
    // excludeSpecPattern: "**/integration/examples/*.ts",
    // specPattern: "**/*.spec.ts",
    defaultCommandTimeout: 3000,
    responseTimeout: 3800
  },
});
