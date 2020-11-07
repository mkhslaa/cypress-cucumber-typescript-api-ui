import { Then } from "cypress-cucumber-preprocessor/steps";
import {Selectors} from '../selectors/selectors';
import {Constants} from '../constants/constants';

Then(/^I verify shipping method$/, async () => {
  cy.get(Selectors.SHIPPING_FROM_COUNTRY)
  .should('have.text', Constants.SHIPPING_FROM_USA)
  .get(Selectors.SHIPPING_FROM_USA_CHARGE)
  .should('contain', Constants.SHIPPING_FROM_USA_CHARGE);
  });

