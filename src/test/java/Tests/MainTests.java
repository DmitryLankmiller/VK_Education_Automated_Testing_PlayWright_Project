package Tests;

import Pages.MainPage;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class MainTests extends BaseTest {
    MainPage mainPage;
    @BeforeMethod
    public void enter(){
        authorise();
    }
    @Test
    public void NameIsVisible(){
        mainPage = new MainPage(page);
        Assert.assertTrue(mainPage.isOpened());
    }
    @AfterMethod
    public void logOut() {
        exit();
    }
}
