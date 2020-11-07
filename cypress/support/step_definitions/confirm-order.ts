import { Then } from "cypress-cucumber-preprocessor/steps";
import {Selectors} from "../selectors/selectors";
import {Constants} from "../constants/constants";

Then(/^I am on the confirm order$/, async () => {
  cy.url()
    .should("contain", Constants.CONFIRM_ORDER_URI)
    .get(Selectors.CONFIRM_ORDER_SUB_TITLES_TEXTS)
    .should((items) => {
      expect(items).to.have.length(Constants.CONFIRM_ORDER_SUB_TITLES_COUNT);
      expect(items[0]).to.contain.text(Selectors.CONFIRM_ORDER_BILLING_ADDRESS_SUB_TITLE_TEXT);
      expect(items[1]).to.contain.text(Selectors.CONFIRM_ORDER_SHIPPING_ADDRESS_SUB_TITLE_TEXT);
      expect(items[2]).to.contain.text(Selectors.CONFIRM_ORDER_PAYMENT_INFORMATION_SUB_TITLE_TEXT);
    })
    .get(Selectors.CONFIRM_ORDER_PAYABLE_NOW)
    .should("have.text", Constants.CONFIRM_ORDER_PAYABLE_NOW_TEXT);
});
