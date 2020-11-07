import { Given, When} from "cypress-cucumber-preprocessor/steps";
import {Constants} from "../constants/constants";

Given(/^I am on home page "([^"]*)"/, async (uri) => {
  cy.visit(uri);
});

When(/^I select the product "([^"]*)"$/, async (product) => {
  cy.contains(product)
    .click()
    .location()
    .should((loc) => {
      expect(loc.pathname).to.eq(Constants.DRY_MARTINI_URI);
    });
});
