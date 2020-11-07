import { When, Then } from "cypress-cucumber-preprocessor/steps";
import {Selectors} from "../selectors/selectors";
import {Constants} from "../constants/constants";

Then(/^I am on the payment method$/, async () => {
    cy.url().should('contain', Constants.PAYMENT_METHOD_URI);
});

When(/^I click next step from the payment method$/, async () => {
    cy.get(Selectors.PAYMENT_METOHOD_NEXT_STEP).click({timeout: 10000});
  });

