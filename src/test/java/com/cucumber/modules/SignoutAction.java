package com.cucumber.modules;

import com.cucumber.helpers.Log;

import org.openqa.selenium.WebDriver;
import org.testng.Reporter;

import com.cucumber.pageobjects.AutomationHomePage;



public class SignoutAction {

	public static void Execute(WebDriver driver) throws Exception{
		
		AutomationHomePage.sign_out.click();
		Log.info("Sign out is performed");

		Reporter.log("Sign out is performed");

	}
}