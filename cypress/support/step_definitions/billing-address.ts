import { When, Then } from "cypress-cucumber-preprocessor/steps";
import {Selectors} from "../selectors/selectors";
import {Constants} from "../constants/constants";

Then(/^I fill in billing address$/, async () => {
  cy.fixture("billing-address").then((address) => {
    cy.get(Selectors.ADDRESS_NAME)
      .type(address.name)
      .get(Selectors.ADDRESS_COMPANY)
      .type(address.company)
      .get(Selectors.ADDRESS_LINE1)
      .type(address.address1)
      .get(Selectors.ADDRESS_LINE2)
      .type(address.address2)
      .get(Selectors.ADDRESS_CITY)
      .type(address.city)
      .get(Selectors.ADDRESS_COUNTRY)
      .select(Constants.ADDRESS_COUNTRY_UK)
      .invoke("val")
      .should("eq", Constants.ADDRESS_COUNTRY_GB, { timeout: 10000 })
      .get(Selectors.ADDRESS_PROVINCE)
      .type(address.state)
      .get(Selectors.ADDRESS_POSTALCODE)
      .type(address.postcode)
      .get(Selectors.ADDRESS_PHONE)
      .type(address.phone)
      .get(Selectors.ADDRESS_EMAIL)
      .type(address.email);
  });
});

When(/^I click next step from the cart$/, async () => {
  cy.get(Selectors.BILLING_ADDRESS_NEXT).click();
});
