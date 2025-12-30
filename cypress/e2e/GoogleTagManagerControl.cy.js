describe('Chatbot.App', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.chatbot.app/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://chatbot.app')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('ChatbotApp.Ai', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.ss.chatbotapp.ai/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://chat.chatbotapp.ai/register')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('HomeworkAi', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.homeworkai.app/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://homeworkai.app')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('PhotoApp', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.photoapp.org/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://app.photoapp.org/')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('MomoAi - Funnel', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.momoai.co/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://start.momoai.co/')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('DavinciAi', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.davinci.ai/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://davinci.ai/app')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('TattooAi', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.tattoo.ai/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://tattoo.ai')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('Wiser - Funnel', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.wiserapp.co/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://start.wiserapp.co/onboarding')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('DeepsearchAi', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://deepsearchai.co/collect/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://deepsearchai.co')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('DramaTv', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.drama.tv/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://drama.tv/')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('DetectorAi', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.detectorai.org/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://app.detectorai.org/')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})
//
describe('PDFGenius', () => {
  it('GTM Custom Loader', () => {
    cy.intercept('GET', 'https://load.sst.pdfgenius.com/5vggakcxvi.js*').as('gtmCustomLoader')
    cy.visit('https://pdfgenius.com/app')
    cy.wait('@gtmCustomLoader', { timeout: 1000 })
      .its('response.statusCode')
      .should('eq', 200)
  })
})