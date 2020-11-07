import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { Selectors} from '../selectors/selectors';
import {Constants} from "../constants/constants";

Then(/^I see unit price "([^"]*)" displayed$/, async (unitPrice) => {
  cy.get(Selectors.MY_CART_TITLE, { timeout: 10000 })
    .should("be.visible")
    .get(Selectors.MY_CART_TITLE)
    .should("have.text", Constants.MY_CART_TITLE_TEXT)
    .get(Selectors.MY_CART_ITEMS_TABLE, { timeout: 10000 })
    .should("be.visible")
    .get(Selectors.MY_CART_ITEMS_TABLE_UNIT_PRICE, { timeout: 10000 })
    .should("be.visible")
    .get(Selectors.MY_CART_ITEMS_TABLE_UNIT_PRICE)
    .contains(unitPrice, { timeout: 10000 });
});

Then(/^I see total price "([^"]*)" and remove button red color$/, async (totalPrice) => {
  cy.get(Selectors.MY_CART_ITEMS_TABLE_TOTAL_PRICE)
    .contains(totalPrice, { timeout: 10000 })
    .get(Selectors.MY_CART_ITEMS_TABLE_REMOVE)
    .find("a")
    .should("have.css", "background-color")
    .and("eq", Selectors.MY_CART_ITEMS_TABLE_REMOVE_BACKGROUND_COLOR)
    .get(Selectors.MY_CART_ITEMS_TABLE_REMOVE)
    .find("a")
    .should("have.css", "color")
    .and("eq", Selectors.MY_CART_ITEMS_TABLE_REMOVE_COLOR);
});

When(/^I increase quantity by one$/, async () => {
  cy.get(Selectors.MY_CART_ITEMS_TABLE_INCREASE_QTY_BTN)
    .trigger("mouseover")
    .trigger("mousedown", { which: 1 })
    .trigger("mousemove", { clientX: 505, clientY: 357 })
    .trigger("mousedown", { timeout: 10000 })
    .click();
});

Then(/^I see quantity is "([^"]*)"$/, async (qty) => {
  cy.get(Selectors.MY_CART_ITEMS_TABLE_QTY_TEXT)
  .should("have.text", qty);
});

When(/^I click next step$/, async () => {
  cy.get(Selectors.MY_CART_NEXT_STEP).click({ timeout: 10000 });
});
