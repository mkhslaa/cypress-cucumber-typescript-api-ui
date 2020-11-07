Feature: Exchange Rate REST API
  As a customer I want to see exchange rate latest as well as by a specific date
  Scenario: Latest Foreign Exchange rates with symbols
    Given I check service is up running "https://api.ratesapi.io/"
    When I submit the GET request for the exchange rate "https://api.ratesapi.io/api/latest?symbols=USD,GBP"
    Then I validate status code "200" for the latest exchange rate
    And I validate response content for the latest exchange rate symbol

  Scenario: Latest Foreign Exchange rates with base
    Given I check service is up running "https://api.ratesapi.io/"
    When I submit the GET request for the exchange rate "https://api.ratesapi.io/api/latest?base=USD"
    Then I validate status code "200" for the latest exchange rate
    And I validate response content for the latest exchange rate base "USD"

  Scenario: Latest Foreign Exchange rates with symbols and base
    Given I check service is up running "https://api.ratesapi.io/"
    When I submit the GET request for the exchange rate "https://api.ratesapi.io/api/latest?base=USD&symbols=GBP"
    Then I validate status code "200" for the latest exchange rate
    And I validate response content for the latest exchange rate base "USD" and symbol "GBP"

  Scenario: Specific date Foreign Exchange rates with symbols
    Given I check service is up running "https://api.ratesapi.io/"
    When I submit the GET request for the exchange rate "https://api.ratesapi.io/api/2010-01-12?symbols=USD,GBP"
    Then I validate status code "200" for the latest exchange rate
    And I validate response content for the specific date "2010-01-12" with symbol "USD,GBP"

  Scenario: Specific date Foreign Exchange rates with base
    Given I check service is up running "https://api.ratesapi.io/"
    When I submit the GET request for the exchange rate "https://api.ratesapi.io/api/2010-01-12?base=USD"
    Then I validate status code "200" for the latest exchange rate
    And I validate response content for the specific date "2010-01-12" with base "USD"

  Scenario: Specific date Foreign Exchange rates with symbols and base
    Given I check service is up running "https://api.ratesapi.io/"
    When I submit the GET request for the exchange rate "https://api.ratesapi.io/api/2010-01-12?base=USD&symbols=GBP"
    Then I validate status code "200" for the latest exchange rate
    And I validate response content for the specific date "2010-01-12" base symbol "GBP" and base "USD"
