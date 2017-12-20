package com.cucumber.selenium;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cucumber.StepDefinitions.Hooks;

public class SeleniumFunctions {

public WebDriver driver;
public WebDriverWait waitVar;
    
    public SeleniumFunctions()
    {
    	driver = Hooks.driver;
    	waitVar = Hooks.waitVar;
    	
    }
//	public static WebDriver driver = null;
//  public static WebDriverWait waitVar = null;    

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

//		System.setProperty("webdriver.gecko.driver", "/home/baskaran/drivers/geckodriver");
//		driver = new FirefoxDriver();
//
//		driver.manage().window().maximize();
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
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.linkText("CucumberSelenium")));
	}
	
	public void logout() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//img[contains(@alt,'baskaran7709')]")));
		WebElement ImageFile = driver.findElement(By.xpath("//img[contains(@alt,'baskaran7709')]"));
		Boolean ImagePresent = (Boolean) ((JavascriptExecutor)driver).executeScript("return arguments[0].complete && typeof arguments[0].naturalWidth != \"undefined\" && arguments[0].naturalWidth > 0", ImageFile);
        if (!ImagePresent)
        {
             System.out.println("Image not displayed.");
        }
        else
        {
            System.out.println("Image displayed.");
        }
        
        ImageFile.click();
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.xpath(".//button[contains(text(),'Sign out')]")));
		driver.findElement(By.xpath(".//button[contains(text(),'Sign out')]")).click();
		driver.findElement(By.linkText("Sign in")).isDisplayed();
	}
}