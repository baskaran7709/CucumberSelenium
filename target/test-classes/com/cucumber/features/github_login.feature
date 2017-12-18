Feature: github login

  Scenario: login without username and password
	Given user is on github homepage
	When user clicks on Sign in button
	Then user is displayed login screen
    
  Scenario: login username and password data through selenium webdriver
	Given user is on github homepage
	When user clicks on Sign in button
	Then user is displayed login screen1
	When user entered logon credentials
	Then user is displayed home screen
    
  Scenario: login username and password data through excel
    Given user is on github homepage
    When user clicks on Sign in button
    Then user is displayed login screen1
    When user entered logon credentials using excel
    Then user is displayed home screen  