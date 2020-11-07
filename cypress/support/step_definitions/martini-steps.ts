import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { Selectors } from "../selectors/selectors";
import {Constants} from "../constants/constants";

Then(/^I see the drop down options for size/, async () => {
  cy.get("select option").then((options) => {
    const actual = [...options].map((o) => o.innerText);
    expect(actual).to.deep.eq([
      Constants.DRY_MARTINI_CLASSIC_SIZE,
      Constants.DRY_MARTINI_LARGE_SIZE,
      Constants.DRY_MARTINI_GATSBY_SIZE
    ]);
  });
});

Then(/^I see the "([^"]*)" button is visible$/, async (buttonName) => {
  cy.contains(buttonName)
  .should("be.visible");
});

Then(/^I see the "([^"]*)" button color is black$/, async (buttonName) => {
  cy.get(Selectors.DRY_MARTINI_BUY_BUTTON)
  .should("have.css", "background-color")
  .and("eq", Constants.RGB_BLACK_COLOR)
});

When(/^I buy "([^"]*)" of "([^"]*)" size$/, async (product, size) => {
  cy.contains(product)
    .click()
    .location()
    .should((loc) => {
      expect(loc.pathname).to.eq(Constants.DRY_MARTINI_URI);
    })
    .get(Selectors.DRY_MARTINI_BUY_BUTTON)
    .scrollIntoView()
    .get(Selectors.DRY_MARTINI_SIZE)
    .select(Constants.DRY_MARTINI_LARGE_SIZE)
    .invoke("val")
    .should("eq", size, { timeout: 10000 })
    .get(Selectors.DRY_MARTINI_BUY_BUTTON)
    .trigger("mouseover")
    .trigger("mousedown", { which: 1, timeout: 10000 })
    .wait(1000)
    .trigger("mousemove", { clientX: 505, clientY: 357 })
    .trigger("mousedown", { timeout: 10000 })
    .click()
    .wait(4000);
});
