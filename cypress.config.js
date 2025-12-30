const { defineConfig } = require("cypress");
// CYPRESS_RECORD_KEY = 0da4acf4-e61d-4694-80c2-fb486dd6c03c
// npx cypress run --record --key 0da4acf4-e61d-4694-80c2-fb486dd6c03c
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
