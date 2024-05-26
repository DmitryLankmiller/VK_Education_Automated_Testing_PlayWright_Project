package Tests;

import Pages.BasePage;
import Pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.*;
import com.microsoft.playwright.*;
import org.testng.asserts.Assertion;

public class BaseTest {
    private Browser browser;
    protected Page page;
    private BrowserContext context;
    private Boolean isTraceEnabled = true;
    public final String login = "technopol62";
    public final String password = "technopolisPassword";
    public final String URL = "https://ok.ru/";
    @BeforeClass
    public void setUp() {
    browser = Playwright
            .create()
            .chromium()
            .launch(new BrowserType
                    .LaunchOptions()
                    .setHeadless(false)
                    .setChannel("chrome"));
        context = browser.newContext();

        if(isTraceEnabled){
            context.tracing().start(new Tracing.StartOptions()
                    .setScreenshots(true)
                    .setSnapshots(true)
                    .setSources(false));
        }

        page = context.newPage();
        page.navigate(URL);
    }


    @AfterClass
    public void tearDown() {
        if (browser != null) {
            browser.close();
            browser = null;
        }
    }
    public void authorise(){
        LoginPage loginPage = new LoginPage(page);
        loginPage.signIn(login, password);
    }
    public void exit(){
        BasePage basePage = new  BasePage(page);
        basePage.signOut();
    }

}