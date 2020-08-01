Feature: Actitime Login

Scenario: Verify Login Page
    Given I launch chrome browser
    When I open Actitime login page
    Then I verify the login page
    And Close the browser