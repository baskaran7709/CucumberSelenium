package com.cucumber.selenium;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SeleniumFunctions {

	public static WebDriver driver = null;
	public static WebDriverWait waitVar = null;

	public static String baseURL = "https://github.com/";

	/*
	 * System.setProperty("webdriver.chrome.driver", "/usr/local/bin/chromedriver");
	 * ChromeDriverService service = new ChromeDriverService.Builder()
	 * .usingDriverExecutable(new
	 * File("/usr/local/bin/chromedriver")).usingAnyFreePort().build(); try {
	 * service.start(); } catch (IOException e) { e.printStackTrace(); } return new
	 * RemoteWebDriver(service.getUrl(), DesiredCapabilities.chrome());
	 */

	public void createDriver() throws MalformedURLException, InterruptedException {

		System.setProperty("webdriver.gecko.driver", "/home/baskaran/drivers/geckodriver");
		driver = new FirefoxDriver();

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		driver.get(baseURL);

		waitVar = new WebDriverWait(driver, 15);
	}

	public void teardown() {
		driver.quit();
	}

	public void ishomepageDisplayed() {
		// waitVar.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Sign
		// in")));

		driver.findElement(By.linkText("Sign in")).isDisplayed();
		// driver.findElement(By.className("marketing-section-signup")).isDisplayed();
	}

	public void clickSigninLink() {
		driver.findElement(By.linkText("Sign in")).click();
	}

	public void isloginsectionDisplayed() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.className("auth-form-body")));
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.name("commit")));
	}

	public void enterlogindetails() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.id("login_field")));
		driver.findElement(By.id("login_field")).sendKeys("baskaran7709@hotmail.com");
		driver.findElement(By.id("password")).sendKeys("pavani@123!$%");
		driver.findElement(By.name("commit")).click();
	}

	public void enterlogindetailsusingexcel() {
		String userName = null;
		String passWord = null;
		try {
			String completeone = DataFromExcel.read_data();
			userName = StringUtils.substringBefore(completeone, "|||");
			passWord = StringUtils.substringBetween(completeone, "|||", "|||");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println(userName + ',' + passWord);
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.id("login_field")));
		driver.findElement(By.id("login_field")).sendKeys(userName);
		driver.findElement(By.id("password")).sendKeys(passWord);
		driver.findElement(By.name("commit")).click();
	}

	public void isloginsucess() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Start a project")));
	}

}