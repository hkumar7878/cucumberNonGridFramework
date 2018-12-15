package pages.actions;


import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.LocatorsCarDekho_HomePage;
import utils.SeleniumDriver;

public class Action_CarDekhoHomePage {
	
	LocatorsCarDekho_HomePage obj_locatorsCarDekho_HomePage=new LocatorsCarDekho_HomePage();
	
	public Action_CarDekhoHomePage()
	{
		this.obj_locatorsCarDekho_HomePage= new LocatorsCarDekho_HomePage();
		PageFactory.initElements(SeleniumDriver.getDriver(), obj_locatorsCarDekho_HomePage);
	}
	
	
	public void moveToNewCarMenu()
	{
		try{
		System.out.println(SeleniumDriver.getDriver());
		Actions action = new Actions(SeleniumDriver.getDriver());
		action.moveToElement(obj_locatorsCarDekho_HomePage.newCarMenu).perform();
		try {
			Thread.sleep(4000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Inside move to new car menu");
		}
		
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}
	
	public void clickSearchNewCarLink()
	{
		try {
			Thread.sleep(4000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		obj_locatorsCarDekho_HomePage.searchNewCarLink.click();
	}

}
