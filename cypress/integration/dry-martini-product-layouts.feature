Feature: Dry Martini Product Layouts
  As a customer I want to buy Dry Martini by different bottle sizes

  Scenario: Verify dry martini product layouts webpage
    Given I am on home page "https://snipcart-react-gatsby.netlify.app/"
    When I select the product "Dry Martini"
    Then I see the drop down options for size
    And I see the "Buy for" button is visible
    And I see the "Buy for" button color is black
