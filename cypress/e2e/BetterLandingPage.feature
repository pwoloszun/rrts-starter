Feature: Landing Page

  Scenario: Landing Page renders proper title
    When I visit Home page
    Then I should see 'rrts-starter' title within page header
