import { Then } from "cypress-cucumber-preprocessor/steps";
import {Selectors} from "../selectors/selectors";
import {Constants} from "../constants/constants";

Then(/^I click place order$/, async () => {
  cy.get(Selectors.PLACE_ORDER_BTN)
    .scrollIntoView()
    .get(Selectors.PLACE_ORDER_BTN)
    .should("be.visible")
    .click({ force: true, timeout: 10000 });
});

Then(/^I see the order is sucessful$/, async () => {
  cy.get(Selectors.ORDER_SUCCESSFUL_TOTAL_PAID_LABEL)
    .should("have.text", "Total paid")
    .get(Selectors.ORDER_SUCCESSFUL_TOTAL_PAID_VALUE)
    .should("contain", Constants.ORDER_SUCCESSFUL_TOTAL_PAID_VALUE)
    .get('#snipcart-title')
    .should("contain", Constants.ORDER_SUCCESSFUL_UNIQUE_REF_PREFIX)
    .should("be.visible");
});
