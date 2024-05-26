package Pages;


import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;

public class BasePage {
    private final Page page;
    private static final String userToolbar = "//*[@data-module=\"Toolbar\"]";
    private static final String exitButton = "Log out";
    private static final String confirmationExit = "//*[@id=\"hook_FormButton_logoff.confirm_not_decorate\"]";

    public BasePage(Page page) {
        this.page = page;
    }
    public void signOut(){
        page.locator(userToolbar).click();
        page.getByText(exitButton).click();
        page.locator(confirmationExit).click();
    }
}
