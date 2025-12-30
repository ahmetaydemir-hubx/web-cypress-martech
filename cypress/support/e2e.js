// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

Cypress.on('test:after:run', () => {
  // Run after the UI updates (important)
  setTimeout(() => {
    const details = document.querySelectorAll('[data-cy="error-details"]')

    details.forEach((el) => {
      // The error dropdown is a <details> element. Closing it collapses the UI.
      if (el.open) {
        el.open = false
      }
    })
  }, 100)
})