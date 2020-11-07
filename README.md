# cypress-cucumber-typescript-api-ui-testing
Automate using Cypress Cucumber Typescript 
Automate http://ratesapi.io/documentation/ api tests
Automate https://snipcart-react-gatsby.netlify.app/ e2e tests

Cypress, latest testing Framework has been used along with Cucumber and TypeScript

## Feature Files

There are 3 feature files in the integration folder:
* `exchange-rate-api.feature` - this feature file contains the scenarios for exchange rate api tests
* `my-cart.feature` - this feature file contains the scenarios for snipcart application
* `dry-martini-product-layouts.feature` - this feature file contains the scenarios for dry martini product layouts webpage


In order to execute scripts, simply run on:

* Gitbash
```
npm install
npx cypress open
It opens up a GUI. Click the feature file to execute
You can also run all tests:
npm run pretest (delete old reports)
npm run test
npm run report (produce cucumber report in cypress\test-results\html\index.html)
```

## Tests

Gherkin BDD is being used to describe the test.
We have tried to avoid Page Object Pattern.

## Future
* Develop some custom commands for many helpers
