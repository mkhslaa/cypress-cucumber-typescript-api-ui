import {Endpoint} from '../support/interfaces/endpoint-interface';
const visitAndWait= (appRoute: string, endpoints: Endpoint[])=> {
  // setup cy.server to intercept network requests
  cy.server();

  // iterate over endpoints and alias them
  endpoints.forEach(({ route, alias }) => {
    cy.route(route).as(alias);
  });

  // visit a page in your application
  cy.visit(appRoute);

  // wait for all of the endpoints to respond before beginning tests
  cy.wait(endpoints.map(({ alias }) => `@${alias}`));
}

const trapNetworkCalls= (endpoints: Endpoint[])=> {
  // setup cy.server to intercept network requests
  cy.server();

  // iterate over endpoints and alias them
  endpoints.forEach(({ method, route, alias }) => {
    cy.log('route', route);
    cy.log(' alias', alias);
    cy.route(method,route).as(alias);
  });

}
Cypress.Commands.add("visitAndWait", visitAndWait);
Cypress.Commands.add("trapNetworkCalls", trapNetworkCalls);

declare global {
  namespace Cypress {
    interface Chainable {
      visitAndWait: typeof visitAndWait
      trapNetworkCalls: typeof trapNetworkCalls
    }
  }
}

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

