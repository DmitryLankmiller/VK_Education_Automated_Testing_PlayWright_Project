package Pages;

import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;

public class MusicPage {
    private static final String playMusic = "//*[@class=\"play __active\"]";
    private static final String muteButton= "//*[@class=\"wm-player_action-volume\"]";
    private static final String timeLine = "//*[@data-l=\"t,progress\"]";

    private static final String myMusicLabel = "//*[@data-tsid=\"library_page_header\"]";
    private static Page page;

    public MusicPage(Page page) {
        MusicPage.page = page;
        checkMusicPage();
    }

    public void setPlayMusic() {
        page.locator(playMusic).click();
        page.waitForTimeout(3000);
    }

    public void offVolumeMusic() {
        page.locator(muteButton).click();
    }

    public boolean noVolume(){
        return page.getByTitle("Turn on sound").isVisible();
    }
    public static Locator getMusicTime(){
        return page.locator(timeLine);
    }

    public void openMyMusic(){
        page.getByText("My music").click();
    }
    public boolean myMusicOpen(){
        return  page.locator(myMusicLabel).isVisible();

    }
    public void checkMusicPage(){
        page.locator(timeLine).isVisible();
        page.locator(muteButton).isVisible();
        page.locator(playMusic).isVisible();
    }
}
