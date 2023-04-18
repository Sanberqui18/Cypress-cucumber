@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Pre-Conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with an unsuccessful contact us submission message



    Scenario: Valid Contact Us Form Submission - Usong spcific data
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I enter a specific email address "sara_woods101@gmail.com"
        And I type a specific comment "Hello123" and number 6788 within the comment imput field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message



    @smoke
    Scenario Outline: Validate Contact Us Page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress          | comment                 | message                      |
            | Jhon      | Blogs    | jhon_jones@gmail.com  | Hello how are you?     | Thank You for your Message!  |
            | Mia       | Carter   | mira_carter@gmail.com | Test123 Test123         | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson          | Do you create websites? | Error: Invalid email address |
