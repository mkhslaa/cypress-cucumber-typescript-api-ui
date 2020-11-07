Feature: My Cart
  As a customer, I want to add products to a shopping basket
  So that I can see the products and costs of what I want to purchase
  and finally go to checkout
  Scenario: Check out Dry Martini from shopping basket
    Given I am on home page "https://snipcart-react-gatsby.netlify.app/"
    When I buy "Dry Martini" of "Large" size
    Then I see unit price "8.50" displayed
    And I see total price "8.50" and remove button red color
    When I increase quantity by one
    Then I see quantity is "2"
    When I click next step
    Then I verify the checkout as guest
    When I click checkout
    Then I fill in billing address
    When I click next step from the cart
    Then I verify shipping method
    When I click next step from the cart
    Then I am on the payment method
    When I click next step from the payment method
    Then I am on the confirm order
    When I click place order
    Then I see the order is sucessful



