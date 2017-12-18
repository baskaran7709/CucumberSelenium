package com.cucumber.StepDefinitions;

import java.net.MalformedURLException;

import com.cucumber.selenium.SeleniumFunctions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GithubLoginSD {

	SeleniumFunctions sf = new SeleniumFunctions();

	@Given("^user is on github homepage$")
	public void user_is_on_github_homepage() throws MalformedURLException, InterruptedException {
		sf.createDriver();
		sf.ishomepageDisplayed();
	}

	@When("^user clicks on Sign in button$")
	public void user_clicks_on_Sign_in_button() {
		sf.clickSigninLink();
	}

	@Then("^user is displayed login screen$")
	public void user_is_displayed_login_screen() {
		sf.isloginsectionDisplayed();
		sf.teardown();
	}

	@Then("^user is displayed login screen1$")
	public void user_is_displayed_login_screen1() {
		sf.isloginsectionDisplayed();
	}

	@When("^user entered logon credentials$")
	public void user_entered_logon_credentials() {
		sf.isloginsectionDisplayed();
		sf.enterlogindetails();
	}

	@When("^user entered logon credentials using excel$")
	public void user_entered_logon_credentials_using_excel() {
		sf.isloginsectionDisplayed();
		sf.enterlogindetailsusingexcel();
	}

	@Then("^user is displayed home screen$")
	public void user_is_displayed_home_screen() {
		sf.isloginsucess();
		sf.logout();
		sf.teardown();

	}

}
