@functional
Feature: Login Page Verification
  
  In order to verify the Login page

  Scenario: To verify with valid login credentails
    Given user opens web site
    When user navigates to home page
    Then user clicks on login link
    And login page is displayed
