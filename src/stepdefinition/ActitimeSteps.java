package stepdefinition;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.*;

public class ActitimeSteps
{
	WebDriver driver;
	@Given("I launch chrome browser")
	public void i_launch_chrome_browser()
	{
	    System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
	    driver=new ChromeDriver();
	}

	@When("I open Actitime login page")
	public void i_open_actitime_login_page()
	{
	   driver.get("https://demo.actitime.com/login.do");
	}

	@Then("I verify the login page")
	public void i_verify_the_login_page()
	{
		boolean status = driver.findElement(By.xpath("//div[text()='Login ']")).isDisplayed();
		Assert.assertTrue(status);
	}

	@And("Close the browser")
	public void close_the_browser()
	{
		driver.quit();
	}

}
