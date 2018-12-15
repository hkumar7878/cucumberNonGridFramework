
@sanity
Feature: Home Page Verification
  
  In order to verify the home page

  Scenario Outline: To verify with valid login credentails
    Given user opens web site
    When user navigates to home page
    Then verify home page is displayed
    And select the gender
      | Gender |
      | Male   |
      | Female |
    And select the age and location
      | Age      | location |
      | Below 18 | India    |
      | Above 20 | USA      |
    And Select the brand and price
      | Brand  | Price |
      | Adidas |  2000 |
      | Nike   |  5000 |
    Then user entered "<username>" user name
    Then user entered "<password>" password

    Examples: 
      | username | password |
      | Hitesh   | Pyrd     |
      | Ghai     | Pyrd123  |
