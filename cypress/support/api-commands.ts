declare namespace Cypress {
  interface Chainable<Subject> {
    apiGet: typeof apiGet
  }
}

const apiGet = (endpoint: string): Cypress.Chainable<Cypress.Response> => {
  return cy.request({
    method: 'GET',
    url: endpoint
  }).as('apiGet');
};

Cypress.Commands.add('apiGet', apiGet);
