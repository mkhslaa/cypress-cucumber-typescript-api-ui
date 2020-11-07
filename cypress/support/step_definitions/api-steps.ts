import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const currencies = [
  "AUD",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "PLN",
  "RON",
  "RUB",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "USD",
  "ZAR"
];

const specficDateCurrencies = [
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "EEK",
    "EUR",
    "GBP",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "INR",
    "JPY",
    "KRW",
    "LTL",
    "LVL",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "RUB",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "USD",
    "ZAR"
];

Given(/^I check service is up running "([^"]*)"$/, async (uri) => {
  cy.apiGet(uri);
  cy.get("@apiGet").then((object) => {
    cy.log("object to check newly created account details", object["status"]);
    expect(object["status"]).equal(200);
  });
});

When(
  /^I submit the GET request for the exchange rate "([^"]*)"$/,
  async (uri) => {
    cy.apiGet(uri);
    cy.get("@apiGet").then((object) => {
      cy.log("object to check newly created account details", object["status"]);
      expect(object["status"]).equal(200);
    });
  }
);

Then(
  /^I validate status code "([^"]*)" for the latest exchange rate$/,
  async (status) => {
    cy.get("@apiGet").then((object) => {
      cy.log("object to check newly created account details", object);
      cy.log("object to check newly created account details", object["status"]);
      expect(object["status"]).equal(200);
    });
  }
);

Then(
  /^I validate response content for the latest exchange rate base "([^"]*)"$/,
  async (base) => {
    cy.get("@apiGet").then((object) => {
      cy.log(
        "object to check newly created account details",
        object["body"].rates.AUD
      );
      expect(object["body"].rates).to.have.all.keys(currencies);
    });
  }
);

Then(
  /^I validate response content for the latest exchange rate symbol$/,
  async () => {
    cy.get("@apiGet").then((object) => {
      cy.log("object to check newly created account details", object["body"]);
      expect(object["body"].rates).to.have.all.keys(["GBP", "USD"]);

      expect(object["body"].rates.GBP).to.match(/^\d*\.?\d*$/);
      expect(object["body"].rates.USD).to.match(/^\d*\.?\d*$/);
    });
  }
);

Then(
  /^I validate response content for the latest exchange rate base "([^"]*)" and symbol "([^"]*)"$/,
  async (base, symbol) => {
    cy.get("@apiGet").then((object) => {
      cy.log("object to check newly created account details", object["body"]);
      expect(object["body"].base).to.equal(base);
      expect(object["body"].rates).to.have.all.keys([symbol]);
    });
  }
);

Then(
  /^I validate response content for the specific date "([^"]*)" with symbol "([^"]*)"$/,
  async (date, symbol) => {
    cy.get("@apiGet").then((object) => {
      expect(object["body"].date).to.equal(date);
      expect(object["body"].rates).to.have.all.keys(["USD", "GBP"]);
      expect(object["body"].rates.GBP).to.match(/^\d*\.?\d*$/);
      expect(object["body"].rates.USD).to.match(/^\d*\.?\d*$/);
    });
  }
);

Then(
  /^I validate response content for the specific date "([^"]*)" with base "([^"]*)"$/,
  async (date, base) => {
    cy.get("@apiGet").then((object) => {
      expect(object["body"].date).to.equal(date);

      const ordered = {};
      Object.keys(object["body"].rates)
        .sort()
        .forEach(function (key) {
          ordered[key] = object["body"].rates[key];
        });
        cy.log(JSON.stringify(ordered));
        expect(ordered).to.have.all.keys(specficDateCurrencies);
    
      expect(object["body"].base).to.equal(base);
    });
  }
);

Then(/^I validate response content for the specific date "([^"]*)" base symbol "([^"]*)" and base "([^"]*)"$/, async(date, symbol, base)=> {
    cy.get("@apiGet").then((object) => {
        cy.log("object to check newly created account details", object["body"]);
        expect(object["body"].date).to.equal(date);
        expect(object["body"].base).to.equal(base);
        expect(object["body"].rates).to.have.all.keys([symbol]);
      });
});
