const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o48gfr",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
        env: {
      hideCommandLog: true
    }
  },
});
