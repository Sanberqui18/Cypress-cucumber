@login @regression
Feature: Test WebdriverUni Login Portal Page

    Background: Pre-Conditions
        #Given I navigate to the webdriveruniversity homepage
        #When I wait for 0 seconds
        Given I navigate to the webdriveruniversity login page
        #When I click on the login portal button

    Scenario Outline: Validate Login Portal page
        And I type a username <username>
        And I type a password <password>
        And I click on the Login button
        Then I should be presented with the '<message>' message

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver    | validation failed    |
            | joe       | pas123       | validation failed    |