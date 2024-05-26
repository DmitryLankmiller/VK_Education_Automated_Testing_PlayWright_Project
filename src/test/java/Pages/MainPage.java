package Pages;


import com.microsoft.playwright.Page;

public class MainPage {

    private static final String navigationToolbar = "//div[@class='topPanel']";
    private static final String navigationBar = "//*[@id='hook_Block_SideNavigation']";
    private static final String openMusic = "//div[@class='toolbar_music-container']";
    private static final String momentsButton = "//button[@data-l='t,to_moments']";
    private static final String hobbyButton = "//button[@data-l='t,to_hobbies']";
    private static final String avatar = "//div[@class='card_wrp']";
    private static final String name = "//*[@id=\"hook_Block_Navigation\"]";

    private static Page page;

    public MainPage(Page page) {
        this.page = page;
        checkMainPage();
    }

    public MusicPage openMusic() {
        page.locator(openMusic).click();
        return new MusicPage(page);
    }
    public boolean isOpened(){
        return page.locator(name).isVisible();
    }

    public void checkMainPage() {
        page.locator(navigationToolbar).isVisible();
        page.locator(momentsButton).isVisible();
        page.locator(navigationBar).isVisible();
        page.locator(hobbyButton).isVisible();
        page.locator(avatar).isVisible();
    }



}
