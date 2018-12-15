@Search-Cars
Feature: Validation of Car search page
  
  In order to validate car search as a buyer I navigate https://www.carsguide.com.au/

  # @test
  # Scenario: Searching for new car
  #  Given I am on the home page of https://www.carsguide.com.au/ of car website
  # When I move to car on buy and sale menu
  # Then I Click on Search Cars
  #And I select Make as "BMW"
  #And I select Model as "1Series"
  #And I select Location as "Australia"
  #And I select price as "$10000"
  #And I click on Find My Next Car button
  #Then I should see list of searched cars and page title should be "Bmw 1 Series Under 10000 for Sale"
  
  
  
  
  
  
  
  @Search-New-Car-Positive
  Scenario: Verifyinng new car search on cardekho.com
    Given user is on car dekho web site "https://www.cardekho.com/"
    When user move to the menu
      | New Car      |
      | Used Car     |
      | Sell Car     |
      | Compare Cars |
    When user click on Search new car option
    Then user verify search new car page is displayed
    Then user Select budget
      | 1 Lakh - 5 Lakh |
    Then user Select vehical type
      | Hatchback |
    And user clicked on search button
    Then use see a list of searched cars
    Then user verify the title is "New Hatchback Cars in India Between Rs 1 Lakh to Rs 5 Lakh123 | CarDekho.com"
