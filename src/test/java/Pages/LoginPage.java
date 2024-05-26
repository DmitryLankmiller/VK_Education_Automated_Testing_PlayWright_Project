package Pages;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;


public class LoginPage {
    private final Page page;
    private static final String loginInput = "//*[@id=\"field_email\"]";
    private static final String passwordInput = "//*[@id=\"field_password\"]";
    private static final String loginButton = "Log in to OK";


    public LoginPage(Page page) {
        this.page = page;
        checkLoginPage();
    }

    public void signIn(String login, String password){
        page.locator(loginInput).fill(login);
        page.locator(passwordInput).fill(password);
        page.getByText(loginButton).click();

    }
    public void checkLoginPage(){
        page.locator(loginInput).isVisible();
        page.locator(passwordInput).isVisible();
        page.locator(loginButton).isVisible();
    }


}
