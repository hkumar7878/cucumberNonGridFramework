$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("carsearch.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of Car search page",
  "description": "\r\nIn order to validate car search as a buyer I navigate https://www.carsguide.com.au/",
  "id": "validation-of-car-search-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 9378749714,
  "status": "passed"
});
formatter.before({
  "duration": 444791,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "# @test"
    },
    {
      "line": 7,
      "value": "# Scenario: Searching for new car"
    },
    {
      "line": 8,
      "value": "#  Given I am on the home page of https://www.carsguide.com.au/ of car website"
    },
    {
      "line": 9,
      "value": "# When I move to car on buy and sale menu"
    },
    {
      "line": 10,
      "value": "# Then I Click on Search Cars"
    },
    {
      "line": 11,
      "value": "#And I select Make as \"BMW\""
    },
    {
      "line": 12,
      "value": "#And I select Model as \"1Series\""
    },
    {
      "line": 13,
      "value": "#And I select Location as \"Australia\""
    },
    {
      "line": 14,
      "value": "#And I select price as \"$10000\""
    },
    {
      "line": 15,
      "value": "#And I click on Find My Next Car button"
    },
    {
      "line": 16,
      "value": "#Then I should see list of searched cars and page title should be \"Bmw 1 Series Under 10000 for Sale\""
    }
  ],
  "line": 25,
  "name": "Verifyinng new car search on cardekho.com",
  "description": "",
  "id": "validation-of-car-search-page;verifyinng-new-car-search-on-cardekho.com",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Search-New-Car-Positive"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user is on car dekho web site \"https://www.cardekho.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user move to the menu",
  "rows": [
    {
      "cells": [
        "New Car"
      ],
      "line": 28
    },
    {
      "cells": [
        "Used Car"
      ],
      "line": 29
    },
    {
      "cells": [
        "Sell Car"
      ],
      "line": 30
    },
    {
      "cells": [
        "Compare Cars"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user click on Search new car option",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user verify search new car page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "user Select budget",
  "rows": [
    {
      "cells": [
        "1 Lakh - 5 Lakh"
      ],
      "line": 35
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user Select vehical type",
  "rows": [
    {
      "cells": [
        "Hatchback"
      ],
      "line": 37
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user clicked on search button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "use see a list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user verify the title is \"New Hatchback Cars in India Between Rs 1 Lakh to Rs 5 Lakh123 | CarDekho.com\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.cardekho.com/",
      "offset": 31
    }
  ],
  "location": "CarDekho_NewCarSearch.user_is_on_car_dekho_web_site(String)"
});
formatter.result({
  "duration": 4235055042,
  "status": "passed"
});
formatter.match({
  "location": "CarDekho_NewCarSearch.user_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 4855609067,
  "status": "passed"
});
formatter.match({
  "location": "CarDekho_NewCarSearch.user_click_on_Search_new_car_option()"
});
formatter.result({
  "duration": 4321834970,
  "status": "passed"
});
formatter.match({
  "location": "CarDekho_NewCarSearch.user_verify_search_new_car_page_is_displayed()"
});
formatter.result({
  "duration": 19209080,
  "status": "passed"
});
formatter.match({
  "location": "CarDekho_NewCarSearch.user_Select_budget_as(String\u003e)"
});
formatter.result({
  "duration": 866867414,
  "status": "passed"
});
formatter.match({
  "location": "CarDekho_NewCarSearch.user_Select_vehical_type_as(String\u003e)"
});
formatter.result({
  "duration": 162816909,
  "status": "passed"
});
formatter.match({
  "location": "CarDekho_NewCarSearch.user_clicked_on_search_button()"
});
formatter.result({
  "duration": 4394303051,
  "status": "passed"
});
formatter.match({
  "location": "CarDekho_NewCarSearch.use_see_a_list_of_searched_cars()"
});
formatter.result({
  "duration": 41156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Hatchback Cars in India Between Rs 1 Lakh to Rs 5 Lakh123 | CarDekho.com",
      "offset": 26
    }
  ],
  "location": "CarDekho_NewCarSearch.user_verify_the_title_is(String)"
});
formatter.result({
  "duration": 175436060,
  "error_message": "java.lang.AssertionError: expected [New Hatchback Cars in India Between Rs 1 Lakh to Rs 5 Lakh123 | CarDekho.com] but found [New Cars in India | CarDekho.com]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat steps1.CarDekho_NewCarSearch.user_verify_the_title_is(CarDekho_NewCarSearch.java:108)\r\n\tat ✽.Then user verify the title is \"New Hatchback Cars in India Between Rs 1 Lakh to Rs 5 Lakh123 | CarDekho.com\"(carsearch.feature:40)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3653016215,
  "status": "passed"
});
});