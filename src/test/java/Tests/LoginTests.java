package Tests;


import Pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.*;

public class LoginTests extends BaseTest{


    @Test
    public void EnterSuccess(){
        authorise();
        Assert.assertTrue(page.getByText("Home").isVisible());
        exit();

    }
    @Test
    public void EnterDenied(){
        LoginPage loginPage = new LoginPage(page);
        loginPage.signIn("wrongLogin", "wrongPasword");
        Assert.assertTrue(page.getByText("Incorrect username and/or password").isVisible());
    }


}
