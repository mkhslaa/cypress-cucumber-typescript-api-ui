import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { Selectors } from "../selectors/selectors";
import {Constants} from "../constants/constants";

Then(/^I verify the checkout as guest$/, async () => {
  cy.get(Selectors.CHECKOUT_HEADER)
    .should("have.text", Constants.CHECKOUT_SUBTOTAL_LABEL)
    .get(Selectors.CHECKOUT_AMOUNT)
    .should("contain", Constants.CHECKOUT_AMOUNT_VALUE)
    .get(Selectors.CHECKOUT_GUEST_TITLE)
    .should("have.text", Constants.CHECKOUT_GUEST_TITLE_TEXT)
    .get(Selectors.CHECKOUT_LOGIN_FORM_TITLE)
    .should("have.text", Constants.CHECKOUT_LOGIN_FORM_TITLE_TEXT)
    .get(Selectors.CHECKOUT_NEW_ACCOUNT_FORM_TITLE)
    .should("have.text", Constants.CHECKOUT_NEW_ACCOUNT_FORM_TITLE_TEXT)
    .get(Selectors.CHECKOUT_GUEST_CONTAINER)
    .find("a")
    .should("have.css", "color")
    .and("eq", Constants.CHECKOUT_REMOVE_PRODUCT_RED_COLOR)
    .url()
    .should("contain", Constants.CHECKOUT_LOGIN_URI);
});

When(/^I click checkout$/, async () => {
  cy.get(Selectors.CHECKOUT_BTN)
  .should("have.css", "background-color")
  .and("eq", Constants.RGB_YELLOW_COLOR)
  .get(Selectors.CHECKOUT_BTN).click();
});
