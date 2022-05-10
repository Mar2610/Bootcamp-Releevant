
Feature: Test de login

Scenario: Correct login

Given I navigate main page
When I click Form Auntentication
And I enter username
And I enter password
And I click login button
Then Message appears

Scenario: Incorrect login

Given I navigate main page
When I click Form Auntentication
And I enter username
And I enter incorrect password
And I click login button
Then Message error appears