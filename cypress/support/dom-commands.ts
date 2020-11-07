export function prevUrl(): void {
  cy.url().then(tempvar => tempvar).as("url")
}

const switchToIframe = (iframeSelector: any, ...elSelector: any) => {
  
  return cy.get(iframeSelector, { timeout: 10000 })
    
    .then( ($iframe)=> {
      return $iframe.contents().find('body');
      
    })
}

Cypress.Commands.add("prevUrl", prevUrl);
Cypress.Commands.add('switchToiframe', switchToIframe);
// Cypress.Commands.add('iframe', iframe);

declare global {
  namespace Cypress {
    interface Chainable {
      prevUrl: typeof prevUrl,
      switchToiframe: typeof switchToIframe;
    }
  }
}

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
